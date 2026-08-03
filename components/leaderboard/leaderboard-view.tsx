'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Trophy, Users, Star, DollarSign, TrendingUp, Heart, Crown } from 'lucide-react'
import { StatusBadge } from '@/components/status-badge'
import {
  leaderboards,
  formatCompact,
  formatMoney,
  type Game,
} from '@/lib/data'
import { cn } from '@/lib/utils'

const categories = [
  { key: 'mostPlayed', label: 'Most Played', icon: Users, metric: (g: Game) => `${formatCompact(g.players)} players` },
  { key: 'highestRated', label: 'Highest Rated', icon: Star, metric: (g: Game) => `${g.rating.toFixed(1)} ★` },
  { key: 'mostFunded', label: 'Most Funded', icon: DollarSign, metric: (g: Game) => formatMoney(g.funded) },
  { key: 'fastestGrowing', label: 'Fastest Growing', icon: TrendingUp, metric: (g: Game) => `+${g.growth}% this week` },
  { key: 'mostActive', label: 'Most Followed', icon: Heart, metric: (g: Game) => `${formatCompact(g.followers)} followers` },
] as const

type CategoryKey = (typeof categories)[number]['key']

const medalColors = ['text-brand-gold', 'text-slate-300', 'text-amber-600']

export function LeaderboardView() {
  const [active, setActive] = useState<CategoryKey>('mostPlayed')
  const activeCat = categories.find((c) => c.key === active)!
  const list = leaderboards[active]
  const [first, second, third, ...rest] = list

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-gold/15 text-brand-gold">
          <Trophy className="size-7" />
        </div>
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Leaderboards</h1>
        <p className="max-w-lg text-muted-foreground">
          The top AI-built games ranked by the community. Play, vote, and fund to push your favorites up.
        </p>
      </div>

      {/* Category tabs */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => {
          const Icon = cat.icon
          return (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={cn(
                'flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors',
                active === cat.key
                  ? 'bg-brand-purple text-white'
                  : 'bg-secondary text-muted-foreground hover:text-foreground',
              )}
            >
              <Icon className="size-4" />
              {cat.label}
            </button>
          )
        })}
      </div>

      {/* Podium */}
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[second, first, third].map((game, i) => {
          if (!game) return null
          const rank = game === first ? 1 : game === second ? 2 : 3
          const isFirst = rank === 1
          return (
            <Link
              key={game.slug}
              href={`/game/${game.slug}`}
              className={cn(
                'group relative flex flex-col items-center gap-3 rounded-2xl border p-6 text-center transition-all hover:-translate-y-1',
                isFirst
                  ? 'order-first border-brand-gold/40 bg-brand-gold/5 sm:order-none sm:-mt-6 sm:pb-10'
                  : 'border-border bg-card',
              )}
            >
              <div className="absolute -top-3 left-1/2 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-background font-display text-sm font-bold">
                {rank}
              </div>
              {isFirst && (
                <Crown className="absolute -top-8 left-1/2 size-7 -translate-x-1/2 text-brand-gold" />
              )}
              <div className="relative mt-2 aspect-square w-20 overflow-hidden rounded-xl">
                <Image src={game.cover || '/placeholder.svg'} alt={game.title} fill className="object-cover" sizes="80px" />
              </div>
              <div>
                <h3 className="font-display font-bold leading-tight">{game.title}</h3>
                <p className="text-xs text-muted-foreground">{game.developer}</p>
              </div>
              <span className={cn('font-mono text-sm font-semibold', medalColors[rank - 1])}>
                {activeCat.metric(game)}
              </span>
            </Link>
          )
        })}
      </div>

      {/* Ranked list */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-border">
        {rest.map((game, i) => (
          <Link
            key={game.slug}
            href={`/game/${game.slug}`}
            className="flex items-center gap-4 border-b border-border bg-card px-4 py-3 transition-colors last:border-0 hover:bg-secondary"
          >
            <span className="w-6 text-center font-display text-lg font-bold text-muted-foreground">
              {i + 4}
            </span>
            <div className="relative size-12 shrink-0 overflow-hidden rounded-lg">
              <Image src={game.cover || '/placeholder.svg'} alt={game.title} fill className="object-cover" sizes="48px" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="truncate font-semibold">{game.title}</h3>
                <StatusBadge status={game.status} />
              </div>
              <p className="truncate text-sm text-muted-foreground">{game.developer}</p>
            </div>
            <span className="shrink-0 font-mono text-sm font-semibold text-brand-gold">
              {activeCat.metric(game)}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
