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
  developerX: string | null
  genre: string
  status: DevStatus
  cover: string
  tagline: string
  description: string
  playUrl: string
  aiTools: string
  source: string
  featured: boolean
  createdAt: string
}

export const games: Game[] = [
  // === VIBE JAM 2026 WINNERS ===
  {
    slug: 'capybara-delivering-food',
    title: 'A Game About Capybaras Delivering Food',
    developer: 'Leo Coout',
    developerSlug: 'leocooout',
    developerX: 'leocooout',
    genre: 'Adventure',
    status: 'Legendary',
    cover: '/games/Capybaradelivery.jpg',
    tagline: 'A cozy open world game about capybaras delivering food on scooters.',
    description: 'Accept orders, deliver as fast as possible, all fruits will stack like a tower. Don\'t let them fall. Single and multiplayer. 100% of the code (27,000 lines, 188 commits) was written by AI.',
    playUrl: 'https://capybara-vibejam26.leocoout.dev/',
    aiTools: 'Claude Code, Tripo3D, Suno, ElevenLabs',
    source: 'Vibe Jam 2026 — 1st Place ($25,000)',
    featured: true,
    createdAt: '2026-04-29',
  },
  {
    slug: 'fantos-mega-mart',
    title: "Fanto's Mega-Mart",
    developer: 'e_c_t_o',
    developerSlug: 'e-c-t-o',
    developerX: 'e_c_t_o',
    genre: 'Action',
    status: 'Legendary',
    cover: '/games/fantosmegamart.jpg',
    tagline: 'Rocket-speed shopping in a haunted grocery store.',
    description: 'Race through a haunted grocery store at breakneck speed. Grab items off the shelves before the ghosts get you.',
    playUrl: 'https://fantos-megamart.vercel.app/',
    aiTools: 'AI-assisted (ThreeJS)',
    source: 'Vibe Jam 2026 — 2nd Place ($10,000)',
    featured: true,
    createdAt: '2026-05-01',
  },
  {
    slug: 'haldane-4',
    title: 'HALDANE-4',
    developer: 'Denis Bondarev',
    developerSlug: 'denisbondare',
    developerX: 'denisbondare',
    genre: 'Horror',
    status: 'Playable',
    cover: '/games/haldane-4.jpg',
    tagline: 'A short horror ASCII story about a solo descent beneath the Antarctic ice shelf.',
    description: 'Descend alone beneath the ice in this atmospheric ASCII horror experience. Built with a custom TypeScript engine in Cursor.',
    playUrl: 'https://haldane4.denisbondare.com/',
    aiTools: 'Cursor',
    source: 'Vibe Jam 2026 — Most Original (Cursor Award)',
    featured: false,
    createdAt: '2026-04-19',
  },

  {
    slug: 'eyrie',
    title: 'Eyrie',
    developer: 'slowchaz',
    developerSlug: 'slowchaz',
    developerX: 'slowchaz',
    genre: 'Action',
    status: 'Growing',
    cover: '/games/eyrie.jpg',
    tagline: 'A drop-in co-op wave-based action roguelike.',
    description: 'Catch spirits, feed the shrine, and fight the obelisk. Drop-in co-op multiplayer with roguelike progression.',
    playUrl: 'https://playeyrie.com/',
    aiTools: 'AI-assisted (ThreeJS)',
    source: 'Vibe Jam 2026 — Most Atmospheric',
    featured: false,
    createdAt: '2026-04-30',
  },
  {
    slug: 'tiny-skies',
    title: 'Tiny Skies',
    developer: 'Danny Limanseta',
    developerSlug: 'dannylimanseta',
    developerX: 'dannylimanseta',
    genre: 'Adventure',
    status: 'Growing',
    cover: '/games/tinyskies.jpg',
    tagline: 'A cosy game where you explore a little world with a looming apocalypse.',
    description: 'Explore a tiny, beautifully crafted world. Something big is coming, but for now, there is peace. 19K plays.',
    playUrl: 'https://tinyskies.vercel.app/',
    aiTools: 'Cursor (ThreeJS)',
    source: 'Vibe Jam 2026 — Most Polished',
    featured: true,
    createdAt: '2026-04-28',
  },
  {
    slug: 'full-send',
    title: 'FULL SEND',
    developer: 'Daniel Vassallo',
    developerSlug: 'dvassallo',
    developerX: 'dvassallo',
    genre: 'Racing',
    status: 'Growing',
    cover: '/games/fullsend.jpg',
    tagline: 'Downhill racing chaos with 17K portal transfers.',
    description: 'A downhill racing game that became the most-portaled game in Vibe Jam history. 45K plays, built with vanilla JS and HTML5 Canvas in Cursor.',
    playUrl: 'https://fullsend.game/',
    aiTools: 'Cursor (Vanilla JS, HTML5 Canvas)',
    source: 'Vibe Jam 2026 — Most Portal Transfers',
    featured: false,
    createdAt: '2026-04-20',
  },
  {
    slug: 'kanso',
    title: 'Kanso',
    developer: 'mrsukeruton',
    developerSlug: 'mrsukeruton',
    developerX: 'mrsukeruton',
    genre: 'Simulation',
    status: 'Playable',
    cover: '/games/kanso.jpg',
    tagline: 'Achieve inner peace through cultivating living digital bonsai trees.',
    description: 'A meditative bonsai growing game. Shape trees, arrange scenes, and find calm.',
    playUrl: 'https://www.kansogame.com/',
    aiTools: 'AI-assisted (ThreeJS)',
    source: 'Vibe Jam 2026 — Most Zen (Glif Award)',
    featured: false,
    createdAt: '2026-04-30',
  },

  // === GAUNTLET LOOP (somethingbig.ai) ===
  {
    slug: 'kart-royale',
    title: 'Kart Royale',
    developer: 'Ryan Campbell',
    developerSlug: 'ryan-campbell',
    developerX: null,
    genre: 'Racing',
    status: 'Playable',
    cover: '/games/kartroyale.jpg',
    tagline: 'Sunset Bay Circuit, drifting, items — a full kart racer in a browser tab.',
    description: 'A complete kart racing game running entirely in the browser. Drifting, items, multiple tracks. Editor\'s pick on somethingbig.ai.',
    playUrl: 'https://racing.ryancampbell.com/',
    aiTools: 'Claude Code (Gauntlet Loop)',
    source: "SomethingBig.ai — Editor's Pick",
    featured: false,
    createdAt: '2026-06-15',
  },
  {
    slug: 'pastel-nuketown',
    title: 'Pastel Nuketown',
    developer: 'Luckey Systems',
    developerSlug: 'luckey-systems',
    developerX: null,
    genre: 'Shooter',
    status: 'Playable',
    cover: '/games/pastelnuketown.jpg',
    tagline: 'A free-for-all arena shooter in pastel. Works on a phone.',
    description: 'Arena FPS with a pastel art style. Plays on mobile if you turn it sideways.',
    playUrl: 'https://nuketown.luckeysystems.com/',
    aiTools: 'Claude Code (Gauntlet Loop)',
    source: 'SomethingBig.ai',
    featured: false,
    createdAt: '2026-06-12',
  },
  {
    slug: 'kindle',
    title: 'KINDLE',
    developer: 'Tony Downey',
    developerSlug: 'tony-downey',
    developerX: null,
    genre: 'Adventure',
    status: 'Playable',
    cover: '/games/kindle.jpg',
    tagline: 'You are the last lamplighter on a world small enough to walk around.',
    description: 'Nine beacons have gone out. Explore a tiny world and relight them. Atmospheric and peaceful.',
    playUrl: 'https://tonydowney.github.io/kindle/',
    aiTools: 'Claude Code (Gauntlet Loop)',
    source: 'SomethingBig.ai',
    featured: false,
    createdAt: '2026-06-08',
  },
  {
    slug: 'everything-must-go',
    title: 'Everything Must Go',
    developer: 'Jeremiah Daws',
    developerSlug: 'jeremiah-daws',
    developerX: null,
    genre: 'Simulation',
    status: 'Playable',
    cover: '/games/everythingmustgo.jpg',
    tagline: "Grandma kept it all for fifty years. She's in the next room, and she can hear you.",
    description: 'A destruction sandbox. Every texture is drawn in code. There isn\'t a single image file in the game.',
    playUrl: 'https://grandmas-house-alpha.vercel.app/',
    aiTools: 'Claude Code (Gauntlet Loop)',
    source: 'SomethingBig.ai',
    featured: false,
    createdAt: '2026-06-14',
  },
  {
    slug: 'starfall',
    title: 'Starfall',
    developer: 'Mike Luan',
    developerSlug: 'mike-luan',
    developerX: null,
    genre: 'Strategy',
    status: 'Playable',
    cover: '/games/starfall.jpg',
    tagline: 'A universe-scale RTS with thirteen ship classes. All procedural. No images.',
    description: 'Homeworld-style RTS at universe scale. Every hull, planet, and effect is procedural. No image files anywhere in the build.',
    playUrl: 'https://e01.ai/starfall/',
    aiTools: 'Claude Code (Gauntlet Loop)',
    source: 'SomethingBig.ai',
    featured: false,
    createdAt: '2026-06-20',
  },
  {
    slug: 'the-long-silence',
    title: 'The Long Silence',
    developer: 'Anshu Chimala',
    developerSlug: 'anshu-chimala',
    developerX: null,
    genre: 'Adventure',
    status: 'Playable',
    cover: '/games/thelongsilence.jpg',
    tagline: 'Wake a deep-survey vessel and set down on procedural planets.',
    description: 'Space exploration built in one 24-hour marathon with zero external assets. Procedural planets, atmospheric landing.',
    playUrl: 'https://longsilence.anshu.dev/',
    aiTools: 'Claude Code (Gauntlet Loop)',
    source: 'SomethingBig.ai',
    featured: false,
    createdAt: '2026-06-05',
  },
  {
    slug: 'wind-waker-game',
    title: 'Wind Waker Game',
    developer: 'martbln_dev',
    developerSlug: 'martbln-dev',
    developerX: 'martbln_dev',
    genre: 'Adventure',
    status: 'Playable',
    cover: '/games/windwaker.jpg',
    tagline: 'Set sail across an open low-poly sea. Chart islands, hunt treasure, mind the wind.',
    description: 'An open-world sailing adventure inspired by Wind Waker. Low-poly art style, island exploration, treasure hunting.',
    playUrl: 'https://windwakergame.vercel.app/',
    aiTools: 'Claude Code (Gauntlet Loop)',
    source: 'SomethingBig.ai',
    featured: false,
    createdAt: '2026-06-18',
  },
  {
    slug: 'claude-for-speed',
    title: 'Claude for Speed',
    developer: 'hey_madni',
    developerSlug: 'hey-madni',
    developerX: 'hey_madni',
    genre: 'Racing',
    status: 'Growing',
    cover: '/games/claudeforspeed.jpg',
    tagline: 'Night city, no rules. Quick races, police pursuits, up to six players online.',
    description: 'Multiplayer street racing at night. Police pursuits, free roam, and 6-player online lobbies.',
    playUrl: 'https://claude-for-speed.vercel.app/',
    aiTools: 'Claude Code (Gauntlet Loop)',
    source: 'SomethingBig.ai',
    featured: false,
    createdAt: '2026-06-16',
  },
  // === OTHER NOTABLE VIBE JAM ENTRIES ===
  {
    slug: 'slingshot',
    title: 'Slingshot: Escape the Solar System',
    developer: 'Romain Simon',
    developerSlug: 'romainsimon',
    developerX: 'romainsimon',
    genre: 'Simulation',
    status: 'Playable',
    cover: '/games/slingshot.jpg',
    tagline: 'Use gravity to slingshot through the solar system. Zero dependencies, zero sprites.',
    description: 'Navigate the solar system using gravitational slingshots. Built with vanilla JavaScript, zero dependencies, zero sprites. 4.1K plays, 15K portal transfers.',
    playUrl: 'https://slingshot.indiega.me/',
    aiTools: 'AI-assisted (Vanilla JS)',
    source: 'Vibe Jam 2026',
    featured: false,
    createdAt: '2026-04-29',
  },
  {
    slug: 'sunset-city',
    title: 'Sunset City - The Dark Tower',
    developer: 'did0f',
    developerSlug: 'did0f',
    developerX: 'did0f',
    genre: 'Platformer',
    status: 'Playable',
    cover: '/games/sunsetcity.jpg',
    tagline: "Make your way to the Black Tower by climbing and avoiding the guards' gaze.",
    description: "A stealth platformer. Climb to the Dark Tower while avoiding detection. There's always a stealthy way. 2.2K plays, 2.8K portal transfers.",
    playUrl: 'https://sunset-city.didof.dev/',
    aiTools: 'AI-assisted (ThreeJS)',
    source: 'Vibe Jam 2026 — #8 Overall',
    featured: false,
    createdAt: '2026-04-28',
  },
  // === AWESOME AI-BUILT GAMES (notable standalone) ===
  {
    slug: 'artbitrator',
    title: 'Artbitrator',
    developer: 'Artbitrator Team',
    developerSlug: 'artbitrator',
    developerX: null,
    genre: 'Multiplayer',
    status: 'Growing',
    cover: '/games/arbitrator.jpg',
    tagline: 'The quickdraw multiplayer game where AI judges your art in real-time.',
    description: 'Draw faster than your friends. AI judges your art in real-time. Compete online in fast-paced drawing battles.',
    playUrl: 'https://artbitrator.com/',
    aiTools: 'AI-assisted',
    source: 'Awesome AI-Built Games',
    featured: false,
    createdAt: '2026-03-01',
  },
  {
    slug: 'type-battles',
    title: 'Type Battles',
    developer: 'Type Battles Team',
    developerSlug: 'type-battles',
    developerX: null,
    genre: 'Arcade',
    status: 'Playable',
    cover: '/games/typebattles.jpg',
    tagline: 'Build combos, earn trophies, conquer 10 levels to face the final boss.',
    description: 'A typing combat game. Sharpen your typing skills, build combos for higher scores, and conquer all 10 levels.',
    playUrl: 'https://www.typebattles.com/',
    aiTools: 'AI-assisted',
    source: 'Awesome AI-Built Games',
    featured: false,
    createdAt: '2026-01-20',
  },
  {
    slug: 'society-fail',
    title: 'Society Fail',
    developer: 'Society Fail Team',
    developerSlug: 'society-fail',
    developerX: null,
    genre: 'Simulation',
    status: 'Playable',
    cover: '/games/placeholder.jpg',
    tagline: 'Can you survive the apocalypse? Scavenge, fight mutants, navigate a fallen world.',
    description: 'A post-apocalyptic incremental game. Scavenge resources, fight off mutants, and survive in a world where civilization has collapsed. Open-source.',
    playUrl: 'https://society.fail/',
    aiTools: 'AI-assisted',
    source: 'Awesome AI-Built Games',
    featured: false,
    createdAt: '2026-02-01',
  },
  {
    slug: 'draw-line-racing',
    title: 'Draw Line Racing',
    developer: 'chyuang',
    developerSlug: 'chyuang',
    developerX: 'chyuang2',
    genre: 'Racing',
    status: 'Playable',
    cover: '/games/drawlineracing.jpg',
    tagline: 'Draw your own racing line. Cars follow it around country-shaped tracks.',
    description: 'A unique racing game where you draw the racing line and cars follow your path. Tracks are shaped like countries.',
    playUrl: 'https://drawlineracing.chyuang.com/',
    aiTools: 'AI-assisted',
    source: 'Awesome AI-Built Games',
    featured: false,
    createdAt: '2026-03-10',
  },
  {
    slug: 'descent-mtb',
    title: 'DESCENT',
    developer: 'sjwebster-bne',
    developerSlug: 'sjwebster-bne',
    developerX: null,
    genre: 'Racing',
    status: 'Playable',
    cover: '/games/descent.jpg',
    tagline: '2.6 km of mountain, eight splits, one clock. Procedural downhill MTB.',
    description: 'A procedural downhill mountain biking game. 2.6 kilometres of mountain, eight splits, one clock.',
    playUrl: 'https://sjwebster-bne.github.io/downhillmtb/',
    aiTools: 'Claude Code (Gauntlet Loop)',
    source: 'SomethingBig.ai',
    featured: false,
    createdAt: '2026-06-09',
  },
  {
    slug: 'dream-logic',
    title: 'Dream Logic',
    developer: 'Voidtalker',
    developerSlug: 'voidtalker',
    developerX: null,
    genre: 'Puzzle',
    status: 'Playable',
    cover: '/games/dreamlogic.jpg',
    tagline: 'Explore a sleeping mind, collect memories, race to extraction before the dream collapses.',
    description: 'Navigate the architecture of a sleeping mind. Collect memory fragments and reach the extraction point before the dream implodes.',
    playUrl: 'https://voidtalker.com/games/dream-logic.html',
    aiTools: 'Claude Code (Gauntlet Loop)',
    source: 'SomethingBig.ai',
    featured: false,
    createdAt: '2026-06-07',
  },
]

export function getGame(slug: string) {
  return games.find((g) => g.slug === slug)
}

export const genres = [
  'All',
  ...Array.from(new Set(games.map((g) => g.genre))).sort(),
]

export function formatMoney(n: number) {
  return `$${n.toLocaleString()}`
}

export function formatCompact(n: number) {
  return Intl.NumberFormat('en', { notation: 'compact' }).format(n)
}

// === TYPES for game detail tabs ===
export type Roadmap = { phase: string; status: DevStatus; done: boolean; items: string[] }
export type Changelog = { version: string; date: string; changes: string[] }
export type Suggestion = { id: string; type: string; title: string; body: string; author: string; upvotes: number; downvotes: number; comments: number; status: string }
export type Discussion = { id: string; author: string; time: string; body: string; likes: number; replies: number }
export type Review = { id: string; author: string; rating: number; time: string; body: string; hours: number }
export type Bounty = { id: string; title: string; amount: number; backers: number; funded: number }

// === LEGACY STUBS (keeping old pages from breaking until we rebuild them) ===
export const developers: { slug: string; name: string; bio: string; location: string; games: number; followers: number; totalFunded: number; joined: string }[] = []
export const roadmap: Roadmap[] = []
export const changelogs: Changelog[] = []
export const updates: { id: string; gameSlug: string; game: string; developer: string; title: string; date: string; excerpt: string; cover: string }[] = []
export const suggestions: Suggestion[] = []
export const bounties: Bounty[] = []
export const discussions: Discussion[] = []
export const reviews: Review[] = []
export const faqs: { q: string; a: string }[] = []
export const leaderboards = {
  mostPlayed: games,
  highestRated: games,
  mostFunded: games,
  fastestGrowing: games,
  mostActive: games,
}
