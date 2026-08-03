-- GameLaunch Platform Schema

-- Enums
create type user_role as enum ('player', 'developer');
create type game_status as enum ('draft', 'published', 'archived');

-- Profiles (extends Supabase auth.users)
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  username text unique not null,
  display_name text,
  avatar_url text,
  bio text,
  role user_role default 'player',
  stripe_account_id text,
  stripe_onboarded boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Games
create table games (
  id uuid default gen_random_uuid() primary key,
  slug text unique not null,
  title text not null,
  tagline text not null,
  description text,
  genre text not null,
  cover_url text,
  game_url text not null,
  developer_id uuid references profiles(id) on delete cascade not null,
  status game_status default 'draft',
  ai_tools text, -- comma-separated list of AI tools used
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Votes (one per user per game)
create table votes (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  game_id uuid references games(id) on delete cascade not null,
  created_at timestamptz default now(),
  unique(user_id, game_id)
);

-- Comments
create table comments (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  game_id uuid references games(id) on delete cascade not null,
  body text not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Donations
create table donations (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  game_id uuid references games(id) on delete cascade not null,
  amount integer not null, -- in cents
  currency text default 'usd',
  stripe_payment_id text not null,
  created_at timestamptz default now()
);

-- Indexes
create index idx_games_developer on games(developer_id);
create index idx_games_status on games(status);
create index idx_games_slug on games(slug);
create index idx_votes_game on votes(game_id);
create index idx_votes_user on votes(user_id);
create index idx_comments_game on comments(game_id);
create index idx_donations_game on donations(game_id);

-- Row Level Security
alter table profiles enable row level security;
alter table games enable row level security;
alter table votes enable row level security;
alter table comments enable row level security;
alter table donations enable row level security;

-- Profiles: anyone can read, users can update their own
create policy "Public profiles are viewable by everyone"
  on profiles for select using (true);

create policy "Users can update their own profile"
  on profiles for update using (auth.uid() = id);

create policy "Users can insert their own profile"
  on profiles for insert with check (auth.uid() = id);

-- Games: published games are public, devs manage their own
create policy "Published games are viewable by everyone"
  on games for select using (status = 'published' or developer_id = auth.uid());

create policy "Developers can insert games"
  on games for insert with check (developer_id = auth.uid());

create policy "Developers can update their own games"
  on games for update using (developer_id = auth.uid());

create policy "Developers can delete their own games"
  on games for delete using (developer_id = auth.uid());

-- Votes: anyone can read, logged-in users can vote
create policy "Votes are viewable by everyone"
  on votes for select using (true);

create policy "Logged-in users can vote"
  on votes for insert with check (auth.uid() = user_id);

create policy "Users can remove their own vote"
  on votes for delete using (auth.uid() = user_id);

-- Comments: anyone can read, logged-in users can comment
create policy "Comments are viewable by everyone"
  on comments for select using (true);

create policy "Logged-in users can comment"
  on comments for insert with check (auth.uid() = user_id);

create policy "Users can update their own comments"
  on comments for update using (auth.uid() = user_id);

create policy "Users can delete their own comments"
  on comments for delete using (auth.uid() = user_id);

-- Donations: users can see their own, devs can see donations to their games
create policy "Users can see their own donations"
  on donations for select using (auth.uid() = user_id);

create policy "Devs can see donations to their games"
  on donations for select using (
    game_id in (select id from games where developer_id = auth.uid())
  );

create policy "System can insert donations"
  on donations for insert with check (auth.uid() = user_id);

-- Function: auto-create profile on signup
create or replace function handle_new_user()
returns trigger as $$
begin
  insert into profiles (id, username, display_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'preferred_username', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name'),
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();

-- View: game with vote count (for leaderboard/listing)
create or replace view games_with_stats as
select
  g.*,
  coalesce(v.vote_count, 0) as vote_count,
  coalesce(c.comment_count, 0) as comment_count,
  coalesce(d.total_donated, 0) as total_donated,
  p.username as developer_username,
  p.display_name as developer_display_name,
  p.avatar_url as developer_avatar_url
from games g
left join (
  select game_id, count(*) as vote_count from votes group by game_id
) v on v.game_id = g.id
left join (
  select game_id, count(*) as comment_count from comments group by game_id
) c on c.game_id = g.id
left join (
  select game_id, sum(amount) as total_donated from donations group by game_id
) d on d.game_id = g.id
left join profiles p on p.id = g.developer_id;
