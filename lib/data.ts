import type { LucideIcon } from 'lucide-react'
import { Lightbulb, Wrench, Gamepad2, Rocket, Trophy } from 'lucide-react'

export type DevStatus = 'Concept' | 'Prototype' | 'Playable' | 'Growing' | 'Legendary'

export const STATUS_META: Record<
  DevStatus,
  { label: string; icon: LucideIcon; color: string }
> = {
  Concept: { label: 'Concept', icon: Lightbulb, color: 'text-slate-300' },
  Prototype: { label: 'Prototype', icon: Wrench, color: 'text-brand-blue' },
  Playable: { label: 'Playable', icon: Gamepad2, color: 'text-emerald-400' },
  Growing: { label: 'Growing', icon: Rocket, color: 'text-brand-purple' },
  Legendary: { label: 'Legendary', icon: Trophy, color: 'text-brand-gold' },
}

export type Game = {
  slug: string
  title: string
  developer: string
  developerSlug: string
  genre: string
  status: DevStatus
  version: string
  cover: string
  screenshots: string[]
  tagline: string
  description: string
  players: number
  upvotes: number
  followers: number
  funded: number
  goal: number
  rating: number
  reviews: number
  createdAt: string
  scores: { fun: number; graphics: number; originality: number; replayability: number }
  playUrl: string
  growth: number
}

export const games: Game[] = [
  {
    slug: 'survive-new-brunswick',
    title: 'Survive New Brunswick',
    developer: 'Northwood Studio',
    developerSlug: 'northwood-studio',
    genre: 'Survival',
    status: 'Growing',
    version: '0.3.8',
    cover: '/games/survive-new-brunswick.png',
    screenshots: ['/games/snb-screenshot-1.png', '/games/snb-screenshot-2.png'],
    tagline: 'A brutal winter survival sim set in the Canadian wilderness.',
    description:
      'Stranded in the frozen forests of New Brunswick, you must gather resources, build shelter, and survive relentless winter storms. Every decision matters as temperature, hunger, and wildlife threaten your survival. Built entirely with an AI-assisted pipeline, the game evolves week to week based on player feedback.',
    players: 4282,
    upvotes: 1934,
    followers: 812,
    funded: 3200,
    goal: 5000,
    rating: 4.6,
    reviews: 214,
    createdAt: '2025-04-12',
    scores: { fun: 4.7, graphics: 4.3, originality: 4.8, replayability: 4.5 },
    playUrl: 'https://example.com/play',
    growth: 38,
  },
  {
    slug: 'neon-drift',
    title: 'Neon Drift',
    developer: 'Vaporwave Games',
    developerSlug: 'vaporwave-games',
    genre: 'Racing',
    status: 'Playable',
    version: '0.2.1',
    cover: '/games/neon-drift.png',
    screenshots: ['/games/neon-drift.png'],
    tagline: 'Hover-race through a rain-soaked neon metropolis.',
    description:
      'Neon Drift is a stylish arcade racer where you pilot hovercars through a sprawling cyberpunk city. Master the drift mechanics, chain boosts, and climb the online leaderboards. The soundtrack and track layouts are procedurally tuned by AI to match your driving style.',
    players: 2891,
    upvotes: 1420,
    followers: 604,
    funded: 6100,
    goal: 8000,
    rating: 4.4,
    reviews: 156,
    createdAt: '2025-05-02',
    scores: { fun: 4.6, graphics: 4.7, originality: 4.1, replayability: 4.3 },
    playUrl: 'https://example.com/play',
    growth: 52,
  },
  {
    slug: 'starforge-tactics',
    title: 'Starforge Tactics',
    developer: 'Orbital Collective',
    developerSlug: 'orbital-collective',
    genre: 'Strategy',
    status: 'Growing',
    version: '0.5.0',
    cover: '/games/starforge-tactics.png',
    screenshots: ['/games/starforge-tactics.png'],
    tagline: 'Command vast fleets in turn-based deep-space warfare.',
    description:
      'Starforge Tactics is a deep, turn-based 4X strategy game set across a procedurally generated galaxy. Build your empire, research technologies, and outmaneuver rival factions in tense tactical battles. The AI opponents adapt their strategy to each community-voted balance patch.',
    players: 3517,
    upvotes: 1688,
    followers: 921,
    funded: 12400,
    goal: 15000,
    rating: 4.8,
    reviews: 302,
    createdAt: '2025-02-20',
    scores: { fun: 4.8, graphics: 4.5, originality: 4.9, replayability: 4.9 },
    playUrl: 'https://example.com/play',
    growth: 21,
  },
  {
    slug: 'pixel-dungeon-lords',
    title: 'Pixel Dungeon Lords',
    developer: 'Torchlight Team',
    developerSlug: 'torchlight-team',
    genre: 'Roguelike',
    status: 'Legendary',
    version: '1.1.2',
    cover: '/games/pixel-dungeon-lords.png',
    screenshots: ['/games/pixel-dungeon-lords.png'],
    tagline: 'An endlessly replayable roguelike dungeon crawler.',
    description:
      'Descend into ever-shifting dungeons, collect powerful loot, and battle fearsome bosses in this charming painterly roguelike. Each run is unique, with AI-generated room layouts and enemy encounters. A thriving community submits new items and balance changes every week.',
    players: 8940,
    upvotes: 4102,
    followers: 2210,
    funded: 24000,
    goal: 20000,
    rating: 4.9,
    reviews: 812,
    createdAt: '2024-11-08',
    scores: { fun: 4.9, graphics: 4.6, originality: 4.7, replayability: 5.0 },
    playUrl: 'https://example.com/play',
    growth: 12,
  },
  {
    slug: 'aether-gardens',
    title: 'Aether Gardens',
    developer: 'Softbloom',
    developerSlug: 'softbloom',
    genre: 'Cozy / Sim',
    status: 'Playable',
    version: '0.4.3',
    cover: '/games/aether-gardens.png',
    screenshots: ['/games/aether-gardens.png'],
    tagline: 'Cultivate a serene floating island in the sky.',
    description:
      'Aether Gardens is a relaxing builder where you grow plants, craft cozy structures, and decorate floating islands drifting through a dreamy sky. Trade with wandering merchants and shape a peaceful world at your own pace. AI helps generate endless plant varieties and ambient music.',
    players: 5120,
    upvotes: 2340,
    followers: 1340,
    funded: 4200,
    goal: 10000,
    rating: 4.7,
    reviews: 389,
    createdAt: '2025-03-15',
    scores: { fun: 4.5, graphics: 4.8, originality: 4.4, replayability: 4.2 },
    playUrl: 'https://example.com/play',
    growth: 44,
  },
  {
    slug: 'void-runners',
    title: 'Void Runners',
    developer: 'Zero-G Interactive',
    developerSlug: 'zero-g-interactive',
    genre: 'Shooter',
    status: 'Prototype',
    version: '0.1.5',
    cover: '/games/void-runners.png',
    screenshots: ['/games/void-runners.png'],
    tagline: 'Zero-gravity arena combat at breakneck speed.',
    description:
      'Void Runners is a fast, competitive arena shooter set in zero gravity. Master momentum, wall-jumps, and energy weapons as you battle for dominance across floating combat platforms. Currently in early prototype — help shape the core movement and weapon balance.',
    players: 1204,
    upvotes: 720,
    followers: 388,
    funded: 900,
    goal: 6000,
    rating: 4.2,
    reviews: 64,
    createdAt: '2025-06-01',
    scores: { fun: 4.3, graphics: 4.0, originality: 4.2, replayability: 4.1 },
    playUrl: 'https://example.com/play',
    growth: 67,
  },
]

export function getGame(slug: string) {
  return games.find((g) => g.slug === slug)
}

export type Developer = {
  slug: string
  name: string
  bio: string
  location: string
  games: number
  followers: number
  totalFunded: number
  joined: string
}

export const developers: Developer[] = [
  {
    slug: 'northwood-studio',
    name: 'Northwood Studio',
    bio: 'A two-person indie studio experimenting with AI-assisted survival games from a cabin in the woods.',
    location: 'Fredericton, CA',
    games: 3,
    followers: 1820,
    totalFunded: 8400,
    joined: '2024-09',
  },
  {
    slug: 'orbital-collective',
    name: 'Orbital Collective',
    bio: 'A distributed collective of strategy nerds building the deepest 4X game they can dream up.',
    location: 'Remote',
    games: 2,
    followers: 3200,
    totalFunded: 19000,
    joined: '2024-06',
  },
  {
    slug: 'torchlight-team',
    name: 'Torchlight Team',
    bio: 'Roguelike lovers crafting endlessly replayable dungeons with a passionate community.',
    location: 'Berlin, DE',
    games: 4,
    followers: 5600,
    totalFunded: 41000,
    joined: '2023-12',
  },
]

export type Roadmap = { phase: string; status: DevStatus; done: boolean; items: string[] }

export const roadmap: Roadmap[] = [
  {
    phase: 'Q1 — Foundations',
    status: 'Prototype',
    done: true,
    items: ['Core survival loop', 'Temperature & hunger systems', 'Basic crafting'],
  },
  {
    phase: 'Q2 — Playable Alpha',
    status: 'Playable',
    done: true,
    items: ['Shelter building', 'Wildlife AI', 'Day/night cycle'],
  },
  {
    phase: 'Q3 — Community Growth',
    status: 'Growing',
    done: false,
    items: ['Co-op multiplayer', 'World map expansion', 'Weather storms overhaul'],
  },
  {
    phase: 'Q4 — Full Launch',
    status: 'Legendary',
    done: false,
    items: ['Story campaign', 'Mod support', 'Console ports'],
  },
]

export type Changelog = { version: string; date: string; changes: string[] }

export const changelogs: Changelog[] = [
  {
    version: '0.3.8',
    date: 'Jul 24, 2026',
    changes: [
      'Added frostbite mechanic when exposed too long',
      'New cabin building tier with insulation',
      'Fixed wolves spawning inside shelters',
    ],
  },
  {
    version: '0.3.5',
    date: 'Jul 10, 2026',
    changes: ['Rebalanced hunger drain rate', 'Added 4 new craftable tools', 'Performance improvements on forests'],
  },
  {
    version: '0.3.0',
    date: 'Jun 28, 2026',
    changes: ['Introduced the frozen lake biome', 'New fishing system', 'Overhauled inventory UI'],
  },
]

export type Update = {
  id: string
  gameSlug: string
  game: string
  developer: string
  title: string
  date: string
  excerpt: string
  cover: string
}

export const updates: Update[] = [
  {
    id: 'u1',
    gameSlug: 'survive-new-brunswick',
    game: 'Survive New Brunswick',
    developer: 'Northwood Studio',
    title: 'Frostbite update is live — survival just got harder',
    date: 'Jul 24, 2026',
    excerpt:
      'Version 0.3.8 introduces a brutal new frostbite system, insulated cabins, and a bunch of community-requested fixes. Here is everything that changed.',
    cover: '/games/snb-screenshot-1.png',
  },
  {
    id: 'u2',
    gameSlug: 'starforge-tactics',
    game: 'Starforge Tactics',
    developer: 'Orbital Collective',
    title: 'The great fleet rebalance — patch 0.5.0 notes',
    date: 'Jul 22, 2026',
    excerpt:
      'We reworked ship classes, added two new factions, and tuned the AI to be far more aggressive in the late game. Community voting shaped every change.',
    cover: '/games/starforge-tactics.png',
  },
  {
    id: 'u3',
    gameSlug: 'neon-drift',
    game: 'Neon Drift',
    developer: 'Vaporwave Games',
    title: 'New downtown track + drift scoring overhaul',
    date: 'Jul 19, 2026',
    excerpt:
      'A brand new rain-soaked downtown circuit joins the rotation, along with a completely reworked drift scoring system that rewards style.',
    cover: '/games/neon-drift.png',
  },
  {
    id: 'u4',
    gameSlug: 'aether-gardens',
    game: 'Aether Gardens',
    developer: 'Softbloom',
    title: 'Autumn season, new crops, and ambient rework',
    date: 'Jul 15, 2026',
    excerpt:
      'The islands are turning golden. We added a full autumn season with 12 new crops and a soothing new AI-generated ambient soundtrack.',
    cover: '/games/aether-gardens.png',
  },
]

export type Suggestion = {
  id: string
  type: 'Feature' | 'Improvement' | 'Bug' | 'Artwork' | 'Balance'
  title: string
  body: string
  author: string
  upvotes: number
  downvotes: number
  comments: number
  status: 'Open' | 'Planned' | 'In Progress' | 'Shipped'
}

export const suggestions: Suggestion[] = [
  {
    id: 's1',
    type: 'Feature',
    title: 'Add co-op multiplayer for up to 4 survivors',
    body: 'Surviving with friends would be incredible. Shared shelters, split resource gathering, reviving downed teammates.',
    author: 'frostwalker',
    upvotes: 842,
    downvotes: 14,
    comments: 96,
    status: 'Planned',
  },
  {
    id: 's2',
    type: 'Balance',
    title: 'Wolves are too aggressive at night',
    body: 'Packs of 5+ wolves spawn constantly after day 3. Maybe scale it with player gear level instead.',
    author: 'tundra_kate',
    upvotes: 421,
    downvotes: 38,
    comments: 44,
    status: 'In Progress',
  },
  {
    id: 's3',
    type: 'Bug',
    title: 'Campfire light flickers through walls',
    body: 'Light from the campfire bleeds through cabin walls at night. Minor but breaks immersion.',
    author: 'devlogger',
    upvotes: 210,
    downvotes: 3,
    comments: 12,
    status: 'Shipped',
  },
  {
    id: 's4',
    type: 'Improvement',
    title: 'Let us rebind controls',
    body: 'Please add full keyboard rebinding. The default crouch key conflicts with sprint.',
    author: 'pixelpilot',
    upvotes: 356,
    downvotes: 6,
    comments: 21,
    status: 'Open',
  },
  {
    id: 's5',
    type: 'Artwork',
    title: 'Community fan art for the loading screens',
    body: 'A bunch of us would love to submit fan art to be featured on loading screens. Could we get a submission channel?',
    author: 'auroraborealis',
    upvotes: 189,
    downvotes: 2,
    comments: 33,
    status: 'Open',
  },
]

export type Bounty = { id: string; title: string; amount: number; backers: number; funded: number }

export const bounties: Bounty[] = [
  { id: 'b1', title: 'Add multiplayer mode', amount: 500, backers: 42, funded: 380 },
  { id: 'b2', title: 'Improve combat system', amount: 300, backers: 28, funded: 300 },
  { id: 'b3', title: 'Add new world map', amount: 1000, backers: 61, funded: 640 },
]

export type Discussion = {
  id: string
  author: string
  time: string
  body: string
  likes: number
  replies: number
}

export const discussions: Discussion[] = [
  {
    id: 'd1',
    author: 'frostwalker',
    time: '3h ago',
    body: 'The new frostbite system completely changes how I play. I actually have to plan my routes around warmth now. Love it.',
    likes: 48,
    replies: 12,
  },
  {
    id: 'd2',
    author: 'tundra_kate',
    time: '8h ago',
    body: 'Anyone else find the insulated cabin a huge upgrade? Went from freezing every night to comfortable. Great addition.',
    likes: 31,
    replies: 7,
  },
  {
    id: 'd3',
    author: 'devlogger',
    time: '1d ago',
    body: 'Would love to see a hardcore permadeath mode next. This game is begging for it.',
    likes: 67,
    replies: 19,
  },
]

export type Review = {
  id: string
  author: string
  rating: number
  time: string
  body: string
  hours: number
}

export const reviews: Review[] = [
  {
    id: 'r1',
    author: 'aurora_dev',
    rating: 5,
    time: '2 days ago',
    hours: 47,
    body: 'Genuinely one of the most atmospheric survival games I have played, and it is not even done yet. The winter setting is oppressive in the best way.',
  },
  {
    id: 'r2',
    author: 'pixelpilot',
    rating: 4,
    time: '5 days ago',
    hours: 22,
    body: 'Rock solid core loop. Loses a star for the wolf spawns, but the devs are clearly listening and patching fast.',
  },
  {
    id: 'r3',
    author: 'northstar',
    rating: 5,
    time: '1 week ago',
    hours: 61,
    body: 'The weekly updates keep me coming back. It feels like the game is being built alongside the community. Funding was an easy yes.',
  },
]

export const faqs = [
  {
    q: 'Is the game free to play?',
    a: 'Yes. Survive New Brunswick is free to play during early development. You can support the studio through donations and bounties.',
  },
  {
    q: 'What platforms are supported?',
    a: 'The game runs in the browser and on Windows. Mac and console ports are planned for the full launch.',
  },
  {
    q: 'How is my donation used?',
    a: 'Donations go directly to the developer to fund art, audio, server costs, and new features. Bounties fund specific requested features.',
  },
  {
    q: 'How often is the game updated?',
    a: 'Northwood Studio ships a new build roughly every two weeks, driven by community suggestions and votes.',
  },
]

export const leaderboards = {
  mostPlayed: [...games].sort((a, b) => b.players - a.players),
  highestRated: [...games].sort((a, b) => b.rating - a.rating),
  mostFunded: [...games].sort((a, b) => b.funded - a.funded),
  fastestGrowing: [...games].sort((a, b) => b.growth - a.growth),
  mostActive: [...games].sort((a, b) => b.followers - a.followers),
}

export const genres = [
  'All',
  'Survival',
  'Racing',
  'Strategy',
  'Roguelike',
  'Cozy / Sim',
  'Shooter',
]

export function formatMoney(n: number) {
  return `$${n.toLocaleString()}`
}

export function formatCompact(n: number) {
  return Intl.NumberFormat('en', { notation: 'compact' }).format(n)
}
