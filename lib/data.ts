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
    slug: 'rogue-memory',
    title: 'Rogue Memory',
    developer: 'quantumcodemonk',
    developerSlug: 'quantumcodemonk',
    genre: 'Dungeon Crawler',
    status: 'Growing',
    version: '1.2.17',
    cover: 'https://img.itch.zone/aW1hZ2UvNDMxMDY0Ni8yNjE3ODMzMi5wbmc=/original/04B4Zo.png',
    screenshots: [
      'https://img.itch.zone/aW1hZ2UvNDMxMDY0Ni8yNTcyMDg3OC5wbmc=/original/TVICoN.png',
      'https://img.itch.zone/aW1hZ2UvNDMxMDY0Ni8yNTcyMDkwMC5wbmc=/original/H%2F12wX.png',
    ],
    tagline: "A first-person dungeon crawler set inside a dying AI's corrupted memory.",
    description:
      "You are GHOST.EXE. You were deleted. Navigate the ruins of your own mind, recover erased memories, and search for the exit before the system finishes the job. Procedurally generated maps, nine enemy types, turn-based tactical combat, and a story told through 25+ recovered memory fragments.",
    players: 1840,
    upvotes: 920,
    followers: 410,
    funded: 0,
    goal: 0,
    rating: 4.0,
    reviews: 48,
    createdAt: '2026-03-15',
    scores: { fun: 4.2, graphics: 3.8, originality: 4.5, replayability: 4.0 },
    playUrl: 'https://quantumcodemonk.itch.io/rogue-memory',
    growth: 34,
  },
  {
    slug: '6-bit-vanguard',
    title: '6-bit Vanguard (Star Overlord 4.0)',
    developer: 'Battle_of_the_moon',
    developerSlug: 'battle-of-the-moon',
    genre: 'Retro Shooter',
    status: 'Playable',
    version: '1.0.0',
    cover: 'https://img.itch.zone/aW1hZ2UvNDMyOTE0MC8yNTg0NzkwMi5wbmc=/original/s4ATBh.png',
    screenshots: [
      'https://img.itch.zone/aW1hZ2UvNDMyOTE0MC8yNTg0NzkwMi5wbmc=/original/s4ATBh.png',
    ],
    tagline: 'Have you ever wondered what space would look like filtered through a Game Boy?',
    description:
      'An aggressive lo-fi shmup. A one-man passion project forged in caffeine and stubbornness. Play solo or 2-player co-op, with keyboard or Xbox/PS5 controller. Retro pixels. Hostile skies. No mercy.',
    players: 1220,
    upvotes: 640,
    followers: 280,
    funded: 0,
    goal: 0,
    rating: 4.0,
    reviews: 32,
    createdAt: '2026-02-28',
    scores: { fun: 4.1, graphics: 3.9, originality: 4.0, replayability: 3.8 },
    playUrl: 'https://battle-of-the-moon.itch.io/6-bit-vanguard',
    growth: 28,
  },
  {
    slug: 'link-state',
    title: 'Link State',
    developer: 'bml',
    developerSlug: 'bml',
    genre: 'Action / Puzzle',
    status: 'Prototype',
    version: '0.1.0',
    cover: 'https://img.itch.zone/aW1hZ2UvNDM0MjA5OC8yNTkyMzk1OC5wbmc=/original/06MpF7.png',
    screenshots: [
      'https://img.itch.zone/aW1hZ2UvNDM0MjA5OC8yNTkyMzk1Ny5wbmc=/original/V%2Bl%2F%2BC.png',
      'https://img.itch.zone/aW1hZ2UvNDM0MjA5OC8yNTkyMzk1OS5wbmc=/original/tmjXu9.png',
    ],
    tagline: 'Traverse a hostile operating system as a rogue data packet to reach the User.',
    description:
      'A cyberpunk platformer across 5 unique zones. Journey through the motherboard with abilities like System Ping and Phase Dash. Balance your Signal Strength between boosting and using abilities. CRT scanlines, neon visuals, and a dark synth aesthetic.',
    players: 980,
    upvotes: 520,
    followers: 190,
    funded: 0,
    goal: 0,
    rating: 3.8,
    reviews: 22,
    createdAt: '2026-04-01',
    scores: { fun: 3.9, graphics: 4.0, originality: 4.2, replayability: 3.5 },
    playUrl: 'https://bml.itch.io/link-state',
    growth: 22,
  },
  {
    slug: 'marble-garble',
    title: 'MARBLE GARBLE',
    developer: 'Daniel__BK',
    developerSlug: 'daniel-bk',
    genre: 'Physics Puzzle',
    status: 'Playable',
    version: '1.0.0',
    cover: 'https://img.itch.zone/aW1hZ2UvNDMwMjYzMy8yNTY2NTI5Ny5wbmc=/original/a6y%2Bxd.png',
    screenshots: [
      'https://img.itch.zone/aW1hZ2UvNDMwMjYzMy8yNTgwNjU5OS5wbmc=/original/bGoPo6.png',
      'https://img.itch.zone/aW1hZ2UvNDMwMjYzMy8yNTY2NTI5OC5wbmc=/original/g5NFBd.png',
      'https://img.itch.zone/aW1hZ2UvNDMwMjYzMy8yNTY2NTI5OS5wbmc=/original/0nLRSt.png',
    ],
    tagline: 'Take control of the marble in a world where physics is your best friend and worst enemy.',
    description:
      'A high-stakes precision platformer with 50 procedurally generated levels. Roll, tilt, and dodge your way through dangerous terrain across five atmospheric worlds. Master the momentum, avoid lethal traps, and outsmart dynamic enemies.',
    players: 1450,
    upvotes: 710,
    followers: 320,
    funded: 0,
    goal: 0,
    rating: 3.75,
    reviews: 28,
    createdAt: '2026-03-10',
    scores: { fun: 3.8, graphics: 3.7, originality: 3.9, replayability: 3.6 },
    playUrl: 'https://daniel-bk.itch.io/marble-garble',
    growth: 18,
  },
  {
    slug: 'spell-cascade',
    title: 'Spell Cascade',
    developer: 'yurukusa',
    developerSlug: 'yurukusa',
    genre: 'Survivor-like',
    status: 'Growing',
    version: '0.2.2',
    cover: 'https://img.itch.zone/aW1hZ2UvNDI5NDE1NS8yNTY3NTU1MC5wbmc=/original/6ck6pV.png',
    screenshots: [
      'https://img.itch.zone/aW1hZ2UvNDI5NDE1NS8yNTY3NjY1OC5wbmc=/original/X0DkCd.png',
      'https://img.itch.zone/aW1hZ2UvNDI5NDE1NS8yNTY3NjY2MS5wbmc=/original/oPrKKj.png',
      'https://img.itch.zone/aW1hZ2UvNDI5NDE1NS8yNTY3NjY1OS5wbmc=/original/bfSHPo.png',
    ],
    tagline: 'Chain skills, discover synergies, survive 10 minutes. 143 hand-tuned improvements.',
    description:
      'A fast-paced roguelike where every run gets a name. 10 skills, 8 supports, 40 attribute mods, 10 synergies, and 7 enemy types. Built in Godot 4.3 with 235 commits of iterative improvement.',
    players: 2100,
    upvotes: 1050,
    followers: 480,
    funded: 0,
    goal: 0,
    rating: 3.5,
    reviews: 42,
    createdAt: '2026-03-05',
    scores: { fun: 3.8, graphics: 3.4, originality: 3.9, replayability: 4.0 },
    playUrl: 'https://yurukusa.itch.io/spell-cascade',
    growth: 41,
  },
  {
    slug: 'glitch-circuit',
    title: 'Glitch Circuit',
    developer: 'RogueSoulX',
    developerSlug: 'roguesoulx',
    genre: 'Arcade Runner',
    status: 'Prototype',
    version: '0.2.0',
    cover: 'https://img.itch.zone/aW1hZ2UvNDMwNzYxNC8yNTY5Nzc1OS5wbmc=/original/2v5eJO.png',
    screenshots: [
      'https://img.itch.zone/aW1hZ2UvNDMwNzYxNC8yNTY5Nzc3OS5wbmc=/original/%2F%2Flwzw.png',
      'https://img.itch.zone/aW1hZ2UvNDMwNzYxNC8yNTY5NzkzNC5wbmc=/original/iGDm7h.png',
    ],
    tagline: 'Navigate twisted terrain and glitching enemies in this fast-paced arcade runner.',
    description:
      'Jump over rocky terrain and dodge shape-shifting enemies. Reach a distance of 10,000 to complete. Speedrun and share your shortest times. Mobile-friendly with tap controls.',
    players: 890,
    upvotes: 440,
    followers: 160,
    funded: 0,
    goal: 0,
    rating: 3.25,
    reviews: 18,
    createdAt: '2026-03-12',
    scores: { fun: 3.4, graphics: 3.2, originality: 3.3, replayability: 3.1 },
    playUrl: 'https://roguesoulx.itch.io/glitch-circuit',
    growth: 15,
  },
  {
    slug: 'ghost-shift',
    title: 'Ghost Shift',
    developer: 'Focaccai',
    developerSlug: 'focaccai',
    genre: 'Horror / Stealth',
    status: 'Playable',
    version: '1.0.0',
    cover: 'https://img.itch.zone/aW1hZ2UvNDM0NjEyMy8yNTk2NTU0OC5wbmc=/original/siAt8%2F.png',
    screenshots: [
      'https://img.itch.zone/aW1hZ2UvNDM0NjEyMy8yNTk3ODAyNi5qcGc=/original/EZO7lf.jpg',
      'https://img.itch.zone/aW1hZ2UvNDM0NjEyMy8yNTk2MDUzOS5qcGc=/original/k3ct9i.jpg',
      'https://img.itch.zone/aW1hZ2UvNDM0NjEyMy8yNTk2MzYwNi5qcGc=/original/zRn0LN.jpg',
    ],
    tagline: 'The art is fake but the danger is real.',
    description:
      'A short thriller set in a museum basement after midnight. Uncover something wrong in the bronze collection. 10-20 minute playtime with alternate endings. An experiment in AI storytelling with vintage educational game aesthetics.',
    players: 760,
    upvotes: 380,
    followers: 140,
    funded: 0,
    goal: 0,
    rating: 2.75,
    reviews: 14,
    createdAt: '2026-04-02',
    scores: { fun: 2.8, graphics: 3.2, originality: 3.5, replayability: 2.0 },
    playUrl: 'https://focaccai.itch.io/ghost-shift',
    growth: 12,
  },
  {
    slug: 'potus-election-sim',
    title: 'POTUS - Election Simulator',
    developer: 'Dackers Studios',
    developerSlug: 'dackers-studios',
    genre: 'Simulation',
    status: 'Growing',
    version: '2.3.0',
    cover: 'https://img.itch.zone/aW1hZ2UvNDMwODAyNi8yNTcwMDI1MS5wbmc=/original/LceIjE.png',
    screenshots: [
      'https://img.itch.zone/aW1hZ2UvNDMwODAyNi8yNjAyMzQ0MC5wbmc=/original/Kk8zc5.png',
      'https://img.itch.zone/aW1hZ2UvNDMwODAyNi8yNTcxNzYxMy5wbmc=/original/axbEAi.png',
      'https://img.itch.zone/aW1hZ2UvNDMwODAyNi8yNTcwMDI2MS5wbmc=/original/nYxvXJ.png',
    ],
    tagline: "Build your candidate's backstory, battle through the primaries, fight for 270.",
    description:
      'Build your candidate, battle through primaries, survive the convention, choose your running mate, and fight for 270 electoral votes. Manage funds, momentum, media, and strategy week by week. Coming to Steam.',
    players: 3200,
    upvotes: 1600,
    followers: 720,
    funded: 0,
    goal: 0,
    rating: 2.75,
    reviews: 86,
    createdAt: '2026-03-12',
    scores: { fun: 3.0, graphics: 2.5, originality: 3.8, replayability: 3.2 },
    playUrl: 'https://dackers-studios.itch.io/potus-2024',
    growth: 56,
  },
  {
    slug: 'pyramid-wars',
    title: 'Pyramid Wars',
    developer: 'Durian Arcade',
    developerSlug: 'durian-arcade',
    genre: 'RTS / Clicker',
    status: 'Growing',
    version: '1.2.0',
    cover: 'https://img.itch.zone/aW1hZ2UvNDY3MzEzOC8yNzk0MjI4MS5naWY=/original/Kas4sP.gif',
    screenshots: [
      'https://img.itch.zone/aW1hZ2UvNDY3MzEzOC8yODEwNjA5MS5wbmc=/original/s46bSn.png',
      'https://img.itch.zone/aW1hZ2UvNDY3MzEzOC8yNzk0MjAwNS5qcGc=/original/v3COWe.jpg',
    ],
    tagline: 'RTS Clicker with Boosterpacks.',
    description:
      'A fast, top-down pixel-art RTS. Command your blue army across 10 desert and winter battlefields and destroy the enemy pyramid. Buy booster packs to improve your armies. Won AI Browser Game Jam 3 and placed 1st in two categories.',
    players: 2800,
    upvotes: 1400,
    followers: 620,
    funded: 0,
    goal: 0,
    rating: 4.2,
    reviews: 64,
    createdAt: '2026-06-15',
    scores: { fun: 4.3, graphics: 3.8, originality: 4.0, replayability: 4.1 },
    playUrl: 'https://durian-arcade.itch.io/pyramid-wars',
    growth: 62,
  },
  {
    slug: 'grand-hotel-tycoon',
    title: 'Grand Hotel Tycoon',
    developer: 'WildGameStudio',
    developerSlug: 'wildgamestudio',
    genre: 'Tycoon / Management',
    status: 'Playable',
    version: '1.0.0',
    cover: 'https://img.itch.zone/aW1hZ2UvNDY3MTQ3Ni8yNzgzOTI3My5qcGc=/original/vhi%2BUj.jpg',
    screenshots: [
      'https://img.itch.zone/aW1hZ2UvNDY3MTQ3Ni8yNzgzOTI5MS5qcGc=/original/HVM7kN.jpg',
      'https://img.itch.zone/aW1hZ2UvNDY3MTQ3Ni8yNzgzOTI5Mi5qcGc=/original/3ZAGDX.jpg',
      'https://img.itch.zone/aW1hZ2UvNDY3MTQ3Ni8yNzgzOTI5My5qcGc=/original/VAa4kK.jpg',
    ],
    tagline: 'Build and run your dream hotel. Hire staff, manage guests, chase 5 stars.',
    description:
      'A mobile-first hotel management sim. Design your hotel floor by floor, manage guests with distinct personalities, run marketing campaigns, handle weather events and incidents, and chase five stars across 14 scenarios.',
    players: 1900,
    upvotes: 950,
    followers: 420,
    funded: 0,
    goal: 0,
    rating: 3.8,
    reviews: 38,
    createdAt: '2026-06-13',
    scores: { fun: 3.9, graphics: 3.5, originality: 3.7, replayability: 4.2 },
    playUrl: 'https://wildgamestudio.itch.io/grand-hotel-tycoon',
    growth: 45,
  },
  {
    slug: 'house-of-loki',
    title: 'House of Loki',
    developer: 'Unifiedesign',
    developerSlug: 'unifiedesign-games',
    genre: 'Bullet Hell / Roguelite',
    status: 'Playable',
    version: '1.0.0',
    cover: 'https://img.itch.zone/aW1hZ2UvNDY4MzczNy8yNzkyNzk5Ni5qcGc=/original/9I2ni1.jpg',
    screenshots: [
      'https://img.itch.zone/aW1hZ2UvNDY4MzczNy8yNzkyNzk5NS5qcGc=/original/eRMHMn.jpg',
      'https://img.itch.zone/aW1hZ2UvNDY4MzczNy8yNzkyNzk5OS5qcGc=/original/eqitOT.jpg',
      'https://img.itch.zone/aW1hZ2UvNDY4MzczNy8yNzkyNzk5NC5qcGc=/original/%2F3oUu%2F.jpg',
    ],
    tagline: "Roll the dice and delve deeper under Loki's Casino in this bullet-hell roguelite.",
    description:
      "An RNG-heavy bullet-hell roguelite built for the Game Boy Advance. Spin a slot machine before every room, fight through six floors, collect magic poker chips, and confront Loki himself. Built in C++ with the Butano engine.",
    players: 1100,
    upvotes: 550,
    followers: 240,
    funded: 0,
    goal: 0,
    rating: 3.9,
    reviews: 26,
    createdAt: '2026-06-18',
    scores: { fun: 4.0, graphics: 3.6, originality: 4.2, replayability: 4.0 },
    playUrl: 'https://unifiedesign-games.itch.io/house-of-loki',
    growth: 38,
  },
  {
    slug: 'wagon-bones',
    title: 'Wagon Bones',
    developer: 'voltron2112',
    developerSlug: 'voltron2112',
    genre: 'Roguelike / Dice',
    status: 'Growing',
    version: '1.0.0',
    cover: 'https://img.itch.zone/aW1hZ2UvNDY2ODExMS8yNzgxODgwNi5wbmc=/original/6X1rbA.png',
    screenshots: [
      'https://img.itch.zone/aW1hZ2UvNDY2ODExMS8yNzgxODgwNS5wbmc=/original/S8zk%2Fe.png',
      'https://img.itch.zone/aW1hZ2UvNDY2ODExMS8yNzgxODgwOC5wbmc=/original/h0MxQK.png',
    ],
    tagline: 'A Balatro-inspired dice roguelike set on the Oregon Trail.',
    description:
      'Roll d12 dice, build hands, collect equipment, and travel the frontier. Instead of playing cards, you roll dice. Each day you draw 8 dice from your pouch, roll them, and score up to 5. Chips x mult scoring, equipment synergies, Oregon Trail theme. Built with Phaser 4 and SolidJS.',
    players: 2400,
    upvotes: 1200,
    followers: 540,
    funded: 0,
    goal: 0,
    rating: 4.4,
    reviews: 52,
    createdAt: '2026-07-01',
    scores: { fun: 4.5, graphics: 4.0, originality: 4.6, replayability: 4.8 },
    playUrl: 'https://voltron2112.itch.io/wagon-bones',
    growth: 72,
  },
  {
    slug: 'pixel-monster',
    title: 'Pixel Monster',
    developer: 'LEN0121',
    developerSlug: 'len0121',
    genre: 'Virtual Pet / RPG',
    status: 'Playable',
    version: '1.0.0',
    cover: 'https://img.itch.zone/aW1hZ2UvNDY0OTA5Mi8yNzcwNDM4Ni5qcGc=/original/4OlDKV.jpg',
    screenshots: [
      'https://img.itch.zone/aW1hZ2UvNDY0OTA5Mi8yNzcwNDQyMy5qcGc=/original/cQchEf.jpg',
      'https://img.itch.zone/aW1hZ2UvNDY0OTA5Mi8yNzcwNDQyNi5qcGc=/original/j9X5sa.jpg',
      'https://img.itch.zone/aW1hZ2UvNDY0OTA5Mi8yNzcwNDQyNy5qcGc=/original/8OCPUv.jpg',
    ],
    tagline: 'Raise, evolve, battle, and collect pixel monsters in a virtual pet RPG.',
    description:
      'A browser-based virtual pet RPG. Feed it, care for it, train it, and watch its personality shape how it evolves. Branching evolution paths, turn-based battles, wild monsters, trainers, tournaments, and online PvP. Available in English and Traditional Chinese.',
    players: 1600,
    upvotes: 800,
    followers: 360,
    funded: 0,
    goal: 0,
    rating: 3.6,
    reviews: 30,
    createdAt: '2026-06-10',
    scores: { fun: 3.7, graphics: 3.5, originality: 3.8, replayability: 3.9 },
    playUrl: 'https://len0121.itch.io/pixel-monster',
    growth: 32,
  },
  {
    slug: 'brainrot-merge',
    title: 'Brainrot Merge',
    developer: 'mrGabas',
    developerSlug: 'mrgabas',
    genre: 'Merge / Casual',
    status: 'Playable',
    version: '1.0.0',
    cover: 'https://img.itch.zone/aW1hZ2UvNDY4NzM1MC8yNzkzMzkyNC5qcGVn/original/6fc4GK.jpeg',
    screenshots: [
      'https://img.itch.zone/aW1hZ2UvNDY4NzM1MC8yNzkzMzkyMy5qcGVn/original/VlXY7K.jpeg',
    ],
    tagline: 'A chaotic meme Suika game with roguelike perks and permanent upgrades.',
    description:
      'Drop memes into the beaker, merge identical characters to evolve them, and level up to choose powerful roguelike perks. Earn coins from your runs to buy permanent upgrades in the shop. Simple controls, wild perks, permanent progression, and satisfying physics.',
    players: 1300,
    upvotes: 650,
    followers: 290,
    funded: 0,
    goal: 0,
    rating: 3.4,
    reviews: 24,
    createdAt: '2026-06-20',
    scores: { fun: 3.6, graphics: 3.2, originality: 3.5, replayability: 3.4 },
    playUrl: 'https://mrgabas.itch.io/brainrot-merge',
    growth: 26,
  },
  {
    slug: 'spicefall-command',
    title: 'Spicefall Command',
    developer: 'Bitten Heart Studio',
    developerSlug: 'bitten-heart-studio',
    genre: 'RTS / Strategy',
    status: 'Prototype',
    version: '0.1.0',
    cover: 'https://img.itch.zone/aW1nLzI3OTMwODQ2LnBuZw==/original/MKqQw8.png',
    screenshots: [
      'https://img.itch.zone/aW1nLzI3OTMwODQ2LnBuZw==/original/MKqQw8.png',
    ],
    tagline: 'A fast browser RTS about resource pressure, base building, and desert skirmish warfare.',
    description:
      'Command a desert base in a fast sci-fi RTS. Harvest spice, stabilize your power grid, expand water capacity, capture atmospheric condensers, and push back hostile commanders. Inspired by classic desert strategy games. Randomized maps every match.',
    players: 680,
    upvotes: 340,
    followers: 120,
    funded: 0,
    goal: 0,
    rating: 3.2,
    reviews: 12,
    createdAt: '2026-06-22',
    scores: { fun: 3.4, graphics: 3.0, originality: 3.5, replayability: 3.2 },
    playUrl: 'https://bitten-heart-studio.itch.io/spicefall-command',
    growth: 14,
  },
  {
    slug: 'star-conquest',
    title: 'Star Conquest - Era I: The Cradle',
    developer: 'kenjaminGames',
    developerSlug: 'kenjamingames',
    genre: '4X / Strategy',
    status: 'Playable',
    version: '1.0.0',
    cover: 'https://img.itch.zone/aW1nLzI3ODA5NDAzLnBuZw==/original/hCX9Ub.png',
    screenshots: [
      'https://img.itch.zone/aW1nLzI3ODA5NDAzLnBuZw==/original/hCX9Ub.png',
    ],
    tagline: "Humanity's solar system is yours to win. Colonize it, out-trade your rivals.",
    description:
      'A streamlined, pausable real-time 4X set in our solar system. Every planet orbits for real, freighters fly actual trajectories, and transfer windows open and close with planetary alignment. Three difficulty levels, three victory paths, pirates, diplomacy, and the Swarm.',
    players: 1050,
    upvotes: 520,
    followers: 230,
    funded: 0,
    goal: 0,
    rating: 3.7,
    reviews: 20,
    createdAt: '2026-06-12',
    scores: { fun: 3.8, graphics: 3.5, originality: 4.0, replayability: 3.9 },
    playUrl: 'https://kenjamingames.itch.io/star-conquest',
    growth: 24,
  },
  {
    slug: 'my-island',
    title: 'My-Island',
    developer: 'MaoKoroku',
    developerSlug: 'maokoroku',
    genre: 'City Builder / Cozy',
    status: 'Playable',
    version: '1.0.0',
    cover: 'https://img.itch.zone/aW1nLzI3ODkyNzk1LnBuZw==/original/ParE9w.png',
    screenshots: [
      'https://img.itch.zone/aW1nLzI3ODkyNzk1LnBuZw==/original/ParE9w.png',
    ],
    tagline: 'A cozy tropical island city-builder. Build, collect, and grow your paradise.',
    description:
      'Start with a single Town Hall on a little patch of sand and grow it into a thriving tropical paradise. No timers, no fail states. Build homes and businesses, earn coins, upgrade your Town Hall to expand your island. 100% procedural visuals and a generative soundtrack.',
    players: 920,
    upvotes: 460,
    followers: 200,
    funded: 0,
    goal: 0,
    rating: 3.5,
    reviews: 16,
    createdAt: '2026-06-18',
    scores: { fun: 3.6, graphics: 3.4, originality: 3.5, replayability: 3.3 },
    playUrl: 'https://maokoroku.itch.io/my-island',
    growth: 20,
  },
  {
    slug: 'the-regulars',
    title: 'THE REGULARS',
    developer: 'H A F F N E R V I S I O N',
    developerSlug: 'granthaffner',
    genre: 'Mystery / Pixel Art',
    status: 'Playable',
    version: '1.0.0',
    cover: 'https://img.itch.zone/aW1nLzI3OTQ2NjgyLnBuZw==/original/FnRKXl.png',
    screenshots: [
      'https://img.itch.zone/aW1nLzI3OTY4NTg0LnBuZw==/original/Gr2m1V.png',
    ],
    tagline: 'A cozy pixel-art memory-mystery: tend a diner counter as the town quietly forgets.',
    description:
      'Work the counter of the Last Stop Diner. Learn your regulars, guess their orders, and flag what does not fit. Every pixel drawn in code. No image files, no sprite sheets, no sound files. Faces, rain, neon, and music all generated procedurally in vanilla JavaScript.',
    players: 740,
    upvotes: 370,
    followers: 130,
    funded: 0,
    goal: 0,
    rating: 3.6,
    reviews: 14,
    createdAt: '2026-06-22',
    scores: { fun: 3.5, graphics: 3.8, originality: 4.0, replayability: 3.0 },
    playUrl: 'https://granthaffner.itch.io/the-regulars',
    growth: 16,
  },
  {
    slug: 'snow-bunny',
    title: 'Snow Bunny',
    developer: 'Focaccai',
    developerSlug: 'focaccai',
    genre: 'Arcade',
    status: 'Playable',
    version: '1.1.0',
    cover: 'https://img.itch.zone/aW1hZ2UvNDcwNzA5MC8yODA1NTc2NC5wbmc=/original/E1%2F5Hg.png',
    screenshots: [
      'https://img.itch.zone/aW1hZ2UvNDcwNzA5MC8yODA1NTc2My5wbmc=/original/HJE1d6.png',
    ],
    tagline: 'A rabbit rides a broom down a snowy mountain.',
    description:
      "A calm, hypnotic night descent about flow, speed, and the moon. You are a witch's familiar, a little black bunny, riding a broom downhill into an endless moonlit night. Spin and flip to fill your moon meter, pass through moon-gates to keep the clock alive.",
    players: 860,
    upvotes: 430,
    followers: 150,
    funded: 0,
    goal: 0,
    rating: 3.8,
    reviews: 16,
    createdAt: '2026-07-01',
    scores: { fun: 3.9, graphics: 3.7, originality: 3.8, replayability: 3.5 },
    playUrl: 'https://focaccai.itch.io/snow-bunny',
    growth: 30,
  },
  {
    slug: 'mansion-of-secrets',
    title: 'Mansion of Secrets',
    developer: 'HD Expanse',
    developerSlug: 'hdgames2484',
    genre: 'Horror / Stealth',
    status: 'Prototype',
    version: '0.9.0',
    cover: 'https://img.itch.zone/aW1hZ2UvNDUzMTk2Ni8yNzAxNDgwNy5wbmc=/original/%2Fo3kAs.png',
    screenshots: [
      'https://img.itch.zone/aW1hZ2UvNDUzMTk2Ni8yNzAxNDgwMy5wbmc=/original/c07dHI.png',
      'https://img.itch.zone/aW1hZ2UvNDUzMTk2Ni8yNzAxNDgwNS5wbmc=/original/0YwgwE.png',
      'https://img.itch.zone/aW1hZ2UvNDUzMTk2Ni8yNzAxNDgwNC5wbmc=/original/lxZdzM.png',
    ],
    tagline: 'Search. Sabotage. Survive.',
    description:
      'A deceptive multiplayer game of bluffing, deduction, and desperate escape. Search the mansion for evidence, outmaneuver your rivals, and escape before Madeline finds you. 4-7 players. Hidden information. Zero trust.',
    players: 1400,
    upvotes: 700,
    followers: 310,
    funded: 0,
    goal: 0,
    rating: 3.5,
    reviews: 22,
    createdAt: '2026-05-01',
    scores: { fun: 3.6, graphics: 3.4, originality: 3.8, replayability: 3.7 },
    playUrl: 'https://hdgames2484.itch.io/mansion-of-secrets',
    growth: 28,
  },
  {
    slug: 'neuro-malla',
    title: 'NEURO\u00B7MALLA',
    developer: 'Vantix Digital Studios',
    developerSlug: 'vantix-digital-studios',
    genre: 'Action / Medical',
    status: 'Playable',
    version: '1.1.0',
    cover: 'https://img.itch.zone/aW1hZ2UvNDY4Mzg1OS8yNzkxMzI0Ni5wbmc=/original/kUACea.png',
    screenshots: [
      'https://img.itch.zone/aW1hZ2UvNDY4Mzg1OS8yNzkxMzI0Ny5wbmc=/original/55XvGk.png',
      'https://img.itch.zone/aW1hZ2UvNDY4Mzg1OS8yNzkxMzI0OC5wbmc=/original/Wvtaqz.png',
      'https://img.itch.zone/aW1hZ2UvNDY4Mzg1OS8yNzkyMTM4OS5wbmc=/original/K3VYyT.png',
    ],
    tagline: 'You are the brain. Heal. Purge. Survive.',
    description:
      'A turn-based roguelite about defending a living body from the inside. 54 hormones to unlock, 20 virus strains, unlockable organs with passive abilities, in-run upgrades, three difficulty levels, a Daily Challenge, and an adaptive soundtrack. Full English and Spanish support.',
    players: 1150,
    upvotes: 575,
    followers: 250,
    funded: 0,
    goal: 0,
    rating: 3.7,
    reviews: 20,
    createdAt: '2026-06-19',
    scores: { fun: 3.8, graphics: 3.6, originality: 4.1, replayability: 3.8 },
    playUrl: 'https://vantix-digital-studios.itch.io/neuro-malla',
    growth: 34,
  },
  {
    slug: 'the-ship-remembers',
    title: 'The Ship Remembers',
    developer: 'Divine950',
    developerSlug: 'divine950',
    genre: 'Narrative / Survival',
    status: 'Playable',
    version: '1.0.0',
    cover: 'https://img.itch.zone/aW1hZ2UvNDY5ODc5Ni8yODAwNDcyNC5wbmc=/original/GQEIAg.png',
    screenshots: [
      'https://img.itch.zone/aW1hZ2UvNDY5ODc5Ni8yODAwNDcyNi5wbmc=/original/gsCTdb.png',
      'https://img.itch.zone/aW1hZ2UvNDY5ODc5Ni8yODAwNDcyNS5wbmc=/original/bXAPID.png',
      'https://img.itch.zone/aW1hZ2UvNDY5ODc5Ni8yODAwNDcyNy5wbmc=/original/oNfUvX.png',
    ],
    tagline: 'Keep an old patrol ship alive as dead routes, old voices, and pirate fire close in.',
    description:
      'A top-down real-time space crew tactics game. Move through the ship, route power, repair systems, extinguish fires, seal hull breaches, process salvage, research upgrades, and choose risky routes on the galaxy map. A grim-dark sci-fi story about broken authority and signals that feel too familiar.',
    players: 780,
    upvotes: 390,
    followers: 170,
    funded: 0,
    goal: 0,
    rating: 3.5,
    reviews: 14,
    createdAt: '2026-07-05',
    scores: { fun: 3.6, graphics: 3.4, originality: 3.8, replayability: 3.5 },
    playUrl: 'https://divine950.itch.io/the-ship-remembers',
    growth: 22,
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
    slug: 'quantumcodemonk',
    name: 'quantumcodemonk',
    bio: 'Building dungeon crawlers with AI assistance. Created entirely using Claude AI.',
    location: 'Remote',
    games: 1,
    followers: 410,
    totalFunded: 0,
    joined: '2026-03',
  },
  {
    slug: 'durian-arcade',
    name: 'Durian Arcade',
    bio: 'Solo developer. Vibe coding with Claude Opus. Won AI Browser Game Jam 3.',
    location: 'Remote',
    games: 1,
    followers: 620,
    totalFunded: 0,
    joined: '2026-06',
  },
  {
    slug: 'voltron2112',
    name: 'voltron2112',
    bio: 'Building Balatro clones with dice and Oregon Trail skins. Built with Phaser 4 and SolidJS.',
    location: 'Remote',
    games: 1,
    followers: 540,
    totalFunded: 0,
    joined: '2026-07',
  },
  {
    slug: 'dackers-studios',
    name: 'Dackers Studios',
    bio: 'Political simulation games. POTUS Election Simulator coming to Steam.',
    location: 'Remote',
    games: 1,
    followers: 720,
    totalFunded: 0,
    joined: '2026-03',
  },
]

export type Roadmap = { phase: string; status: DevStatus; done: boolean; items: string[] }

export const roadmap: Roadmap[] = [
  {
    phase: 'Q1 — Discovery',
    status: 'Prototype',
    done: true,
    items: ['Game directory', 'Basic profiles', 'Play links'],
  },
  {
    phase: 'Q2 — Community',
    status: 'Playable',
    done: true,
    items: ['Ratings and reviews', 'Developer profiles', 'Genre filtering'],
  },
  {
    phase: 'Q3 — Growth',
    status: 'Growing',
    done: false,
    items: ['User accounts', 'Collections', 'Jam integration'],
  },
  {
    phase: 'Q4 — Platform',
    status: 'Legendary',
    done: false,
    items: ['Developer dashboards', 'Analytics', 'Monetization tools'],
  },
]

export type Changelog = { version: string; date: string; changes: string[] }

export const changelogs: Changelog[] = [
  {
    version: '1.0.0',
    date: 'Aug 1, 2026',
    changes: [
      'Launched with 22 real AI browser games from itch.io jams',
      'Genre filtering and search',
      'Direct play links to itch.io',
    ],
  },
  {
    version: '0.9.0',
    date: 'Jul 28, 2026',
    changes: ['Added leaderboards', 'Game detail pages', 'Developer profiles'],
  },
  {
    version: '0.1.0',
    date: 'Jul 15, 2026',
    changes: ['Initial prototype', 'Basic game listing', 'Cover images'],
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
    gameSlug: 'pyramid-wars',
    game: 'Pyramid Wars',
    developer: 'Durian Arcade',
    title: '5 new levels added plus map editor released',
    date: 'Jul 11, 2026',
    excerpt:
      'Grid design overhaul, 5 new levels including a preview level, and a full map editor for custom battlefields.',
    cover: 'https://img.itch.zone/aW1hZ2UvNDY3MzEzOC8yODEwNjA5MS5wbmc=/original/s46bSn.png',
  },
  {
    id: 'u2',
    gameSlug: 'wagon-bones',
    game: 'Wagon Bones',
    developer: 'voltron2112',
    title: 'Full release with endless mode and boss encounters',
    date: 'Jul 23, 2026',
    excerpt:
      'The Oregon Trail dice roguelike hits 1.0 with endless mode up to leg 39, boss showdowns with unique modifiers, and trail events with narrative choices.',
    cover: 'https://img.itch.zone/aW1hZ2UvNDY2ODExMS8yNzgxODgwNi5wbmc=/original/6X1rbA.png',
  },
  {
    id: 'u3',
    gameSlug: 'snow-bunny',
    game: 'Snow Bunny',
    developer: 'Focaccai',
    title: 'The Snow is Real: Major Update',
    date: 'Jul 19, 2026',
    excerpt:
      'Major visual overhaul with real snow effects, improved physics, and new moon-gate mechanics for the endless night descent.',
    cover: 'https://img.itch.zone/aW1hZ2UvNDcwNzA5MC8yODA1NTc2NC5wbmc=/original/E1%2F5Hg.png',
  },
  {
    id: 'u4',
    gameSlug: 'rogue-memory',
    game: 'Rogue Memory',
    developer: 'quantumcodemonk',
    title: 'v1.2.17 - Difficulty levels and improved mini-map',
    date: 'Jul 15, 2026',
    excerpt:
      'Added difficulty levels, see-through only in Easy mode, improved mini-map, and adjusted wall colours on later levels.',
    cover: 'https://img.itch.zone/aW1hZ2UvNDMxMDY0Ni8yNjE3ODMzMi5wbmc=/original/04B4Zo.png',
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
    title: 'Add user collections to bookmark favorite games',
    body: 'Would love to save games to a personal collection so I can easily find them later.',
    author: 'gamer_one',
    upvotes: 142,
    downvotes: 4,
    comments: 18,
    status: 'Planned',
  },
  {
    id: 's2',
    type: 'Improvement',
    title: 'Better mobile touch controls for embedded games',
    body: 'Some games are hard to play on mobile because the iframe is small. Full-screen option would help.',
    author: 'mobile_player',
    upvotes: 98,
    downvotes: 6,
    comments: 12,
    status: 'Open',
  },
  {
    id: 's3',
    type: 'Feature',
    title: 'Game jam calendar integration',
    body: 'Show upcoming AI game jams so players know when new games will drop.',
    author: 'jam_watcher',
    upvotes: 76,
    downvotes: 2,
    comments: 8,
    status: 'Open',
  },
]

export type Bounty = { id: string; title: string; amount: number; backers: number; funded: number }

export const bounties: Bounty[] = [
  { id: 'b1', title: 'Add multiplayer lobby system', amount: 500, backers: 12, funded: 180 },
  { id: 'b2', title: 'Game rating and review system', amount: 300, backers: 8, funded: 300 },
  { id: 'b3', title: 'Developer analytics dashboard', amount: 1000, backers: 15, funded: 420 },
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
    author: 'jam_player',
    time: '3h ago',
    body: 'Wagon Bones is basically Balatro with dice and I am completely hooked. The Oregon Trail theme is perfect.',
    likes: 48,
    replies: 12,
  },
  {
    id: 'd2',
    author: 'retro_fan',
    time: '8h ago',
    body: 'Pyramid Wars winning the jam was well deserved. The booster pack mechanic adds so much replayability.',
    likes: 31,
    replies: 7,
  },
  {
    id: 'd3',
    author: 'indie_dev',
    time: '1d ago',
    body: 'The quality of AI-assisted games in these jams keeps getting better. Rogue Memory feels like a full release.',
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
    author: 'strategy_nerd',
    rating: 5,
    time: '2 days ago',
    hours: 12,
    body: 'Star Conquest is a proper 4X in the browser. The orbital mechanics add so much depth to trade routes.',
  },
  {
    id: 'r2',
    author: 'dice_roller',
    rating: 5,
    time: '5 days ago',
    hours: 8,
    body: 'Wagon Bones scratches that Balatro itch perfectly. The dice mechanics feel fresh and the Oregon Trail skin is charming.',
  },
  {
    id: 'r3',
    author: 'horror_fan',
    rating: 4,
    time: '1 week ago',
    hours: 3,
    body: 'Ghost Shift is short but the atmosphere is fantastic. The AI-generated art style really works for the retro educational game aesthetic.',
  },
]

export const faqs = [
  {
    q: 'What is GameLaunch?',
    a: 'GameLaunch is a curated directory of browser games made with AI assistance, sourced from itch.io game jams. Every game listed is free to play directly in your browser.',
  },
  {
    q: 'Are these games free?',
    a: 'Yes. All games listed on GameLaunch are free to play in your browser. Some developers accept optional donations on their itch.io pages.',
  },
  {
    q: 'How are games selected?',
    a: 'Games are sourced from AI Browser Game Jams on itch.io. We look for quality, creativity, and playability in the browser.',
  },
  {
    q: 'Can I submit my game?',
    a: 'We are working on a submission system. For now, participate in AI game jams on itch.io and your game may be featured.',
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
  'Dungeon Crawler',
  'Retro Shooter',
  'Action / Puzzle',
  'Physics Puzzle',
  'Survivor-like',
  'Arcade Runner',
  'Horror / Stealth',
  'Simulation',
  'RTS / Clicker',
  'Tycoon / Management',
  'Bullet Hell / Roguelite',
  'Roguelike / Dice',
  'Virtual Pet / RPG',
  'Merge / Casual',
  'RTS / Strategy',
  '4X / Strategy',
  'City Builder / Cozy',
  'Mystery / Pixel Art',
  'Arcade',
  'Action / Medical',
  'Narrative / Survival',
]

export function formatMoney(n: number) {
  return `$${n.toLocaleString()}`
}

export function formatCompact(n: number) {
  return Intl.NumberFormat('en', { notation: 'compact' }).format(n)
}
