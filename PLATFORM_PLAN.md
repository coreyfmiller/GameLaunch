# GameLaunch Platform Plan

## Vision
The home for AI-made browser games. Devs host games, players discover and play them, community votes and comments, players can tip devs directly.

## What GameLaunch Is NOT
- A directory linking to itch.io (that's what it is now, and it's pointless)
- A Kickstarter clone (fake bounties for games that already exist elsewhere)

## What GameLaunch IS
- A platform where devs upload/embed their HTML5 browser games
- Players play games directly on GameLaunch (iframe sandbox or hosted files)
- Real voting, real comments, real donations via Stripe Connect
- Discovery layer specifically for AI-assisted browser games

## Tech Stack
- Next.js 16 + React 19 + TypeScript + Tailwind 4 + shadcn/ui (keep existing)
- Supabase (auth, database, storage for game files)
- Stripe Connect (donations flow directly to dev accounts)
- Vercel (hosting, edge functions)

---

## Phase 1: Foundation (Current Sprint)
Build the real backend. Replace static data with Supabase.

### Auth
- Supabase Auth (email + GitHub + Google)
- Two roles: player, developer (dev can also be player)
- Dev profile: display name, bio, avatar, Stripe Connect ID

### Database (Supabase)
- `profiles` - user info, role, stripe_account_id
- `games` - title, slug, description, genre, cover_url, game_url (iframe src or hosted zip), developer_id, status, created_at
- `votes` - user_id, game_id, created_at (one vote per user per game)
- `comments` - user_id, game_id, body, created_at
- `donations` - user_id, game_id, amount, stripe_payment_id, created_at

### Game Hosting
- Option A: Dev provides a URL (their own hosted game, Vercel, Netlify, etc.) - we iframe it
- Option B: Dev uploads a zip of HTML/JS/CSS - we host on Supabase Storage and serve via iframe
- All games render inside a sandboxed iframe on the game page

### Voting
- One upvote per user per game
- Vote count displayed on cards and game pages
- Leaderboard sorted by real votes

### Comments
- Simple threaded comments per game
- Must be logged in to comment
- No moderation system yet (manual cleanup if needed)

### Donations (Stripe Connect)
- Devs onboard via Stripe Connect Express
- Players click "Tip $5 / $10 / $25" on game page
- Money goes directly to dev's Stripe account (we take 0% initially, maybe 5% later)
- Donation history visible on game page

---

## Phase 2: Polish + Growth
- Game submission flow with review queue
- Dev dashboard (views, votes, donations, comments)
- Player profiles (games played, votes given)
- Collections/favorites
- Weekly email digest of top games
- Embed widget (devs can show their GameLaunch stats on their own site)

## Phase 3: Community
- Game jams hosted on GameLaunch
- Tags and curated collections
- "Staff Picks" featured section
- Dev blog/devlog per game
- Notification system

---

## Game Sourcing Strategy

### Where to find quality AI browser games:
1. **Vibe Jam** (vibej.am) - Pieter Levels' jam, highest production quality
2. **AI Browser Game Jam** (itch.io/jam/ai-browser-game-jam) - Focaccai's series
3. **VibeTopList.com** - Already ranked, community-voted
4. **SomethingBig.ai/games** - Gauntlet Loop games
5. **X/Twitter** - Search "vibe coded game", "AI game", "browser game" 
6. **Reddit** - r/vibecoding, r/gamedev posts about AI-made games
7. **Just Vibe It Jam** (itch.io)

### Outreach approach:
- DM devs on X/itch.io: "Hey, I built GameLaunch - a platform specifically for AI browser games. Want to list yours? You get voting, comments, and direct Stripe tipping from players."
- Post in jam Discord servers
- After Phase 1 ships: post on X, Reddit, Hacker News

### Quality bar:
- Must be playable in browser (HTML5, WebGL, canvas)
- Must be functional (doesn't crash immediately)
- Made with AI assistance (any level, from "used Copilot" to "fully vibe coded")
- Unfinished/prototype is fine, broken is not

---

## Revenue Model (Future)
- 0% platform fee at launch (attract devs)
- 5-10% fee on donations once we have volume
- Featured placement for devs ($)
- GameLaunch Pro for devs (analytics, custom game page themes)
