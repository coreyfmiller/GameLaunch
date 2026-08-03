import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Flame, TrendingUp, ArrowUp, Users } from 'lucide-react'
import { GameCard } from '@/components/game-card'
import { StatusBadge } from '@/components/status-badge'
import { SectionHeading } from '@/components/section-heading'
import { games, formatCompact } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Trending — GameLaunch.ai',
  description: 'The hottest AI-built games gaining momentum right now.',
}

export default function TrendingPage() {
  const trending = [...games].sort((a, b) => b.growth * b.upvotes - a.growth * a.upvotes)
  const hero = trending[0]
  const fastestGrowing = [...games].sort((a, b) => b.growth - a.growth).slice(0, 5)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="flex flex-col gap-2">
        <span className="flex items-center gap-2 text-sm font-semibold text-brand-gold">
          <Flame className="size-4" /> Trending now
        </span>
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          What the community is playing
        </h1>
        <p className="max-w-lg text-muted-foreground">
          Games gaining the most momentum this week, ranked by player growth and community votes.
        </p>
      </div>

      {/* Featured trending hero */}
      <Link
        href={`/game/${hero.slug}`}
        className="group mt-8 grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-2"
      >
        <div className="relative aspect-video lg:aspect-auto">
          <Image
            src={hero.cover || '/placeholder.svg'}
            alt={hero.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-brand-gold px-3 py-1 text-xs font-bold text-black">
            <Flame className="size-3.5" /> #1 Trending
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 p-6 sm:p-10">
          <StatusBadge status={hero.status} className="w-fit" />
          <h2 className="font-display text-2xl font-bold sm:text-3xl">{hero.title}</h2>
          <p className="text-pretty text-muted-foreground">{hero.description}</p>
          <div className="flex flex-wrap gap-5 text-sm">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <TrendingUp className="size-4" /> +{hero.growth}% growth
            </span>
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <Users className="size-4" /> {formatCompact(hero.players)} players
            </span>
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <ArrowUp className="size-4 text-brand-purple" /> {formatCompact(hero.upvotes)} upvotes
            </span>
          </div>
        </div>
      </Link>

      {/* Fastest growing strip */}
      <div className="mt-12">
        <SectionHeading
          eyebrow="Momentum"
          title="Fastest growing this week"
        />
        <div className="mt-4 space-y-2">
          {fastestGrowing.map((game, i) => (
            <Link
              key={game.slug}
              href={`/game/${game.slug}`}
              className="flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:bg-secondary"
            >
              <span className="w-5 font-display text-lg font-bold text-muted-foreground">{i + 1}</span>
              <div className="relative size-11 shrink-0 overflow-hidden rounded-lg">
                <Image src={game.cover || '/placeholder.svg'} alt={game.title} fill className="object-cover" sizes="44px" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="truncate font-semibold">{game.title}</h3>
                <p className="truncate text-sm text-muted-foreground">{game.genre}</p>
              </div>
              <span className="flex shrink-0 items-center gap-1 font-mono text-sm font-semibold text-emerald-400">
                <TrendingUp className="size-4" /> +{game.growth}%
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* All trending grid */}
      <div className="mt-12">
        <SectionHeading eyebrow="Hot right now" title="Trending games" />
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trending.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </div>
    </div>
  )
}
