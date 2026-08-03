'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  DollarSign,
  Users,
  Heart,
  MessageSquare,
  TrendingUp,
  Plus,
  ArrowUp,
  Eye,
  Pencil,
} from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { ButtonLink } from '@/components/ui/button-link'
import { StatusBadge } from '@/components/status-badge'
import { games, suggestions, formatMoney, formatCompact, type Game } from '@/lib/data'
import { cn } from '@/lib/utils'

// Pretend the logged-in developer owns these games.
const myGames = games.slice(0, 3)

const stats = [
  {
    label: 'Total funding',
    value: formatMoney(myGames.reduce((a, g) => a + g.funded, 0)),
    change: '+12%',
    icon: DollarSign,
    color: 'text-brand-gold',
  },
  {
    label: 'Total players',
    value: formatCompact(myGames.reduce((a, g) => a + g.players, 0)),
    change: '+8%',
    icon: Users,
    color: 'text-brand-blue',
  },
  {
    label: 'Followers',
    value: formatCompact(myGames.reduce((a, g) => a + g.followers, 0)),
    change: '+15%',
    icon: Heart,
    color: 'text-brand-purple',
  },
  {
    label: 'Open suggestions',
    value: String(suggestions.filter((s) => s.status === 'Open' || s.status === 'Planned').length),
    change: 'new',
    icon: MessageSquare,
    color: 'text-emerald-400',
  },
]

// 8-week funding trend (mock).
const trend = [18, 26, 22, 34, 30, 42, 48, 56]

function FundingChart() {
  const max = Math.max(...trend)
  const chartHeight = 150
  return (
    <div className="flex items-end gap-2" style={{ height: chartHeight + 20 }}>
      {trend.map((v, i) => (
        <div key={i} className="flex flex-1 flex-col items-center justify-end gap-2">
          <div
            className="w-full rounded-t-md bg-gradient-to-t from-brand-purple/40 to-brand-purple transition-all"
            style={{ height: Math.max(6, (v / max) * chartHeight) }}
          />
          <span className="text-[10px] text-muted-foreground">W{i + 1}</span>
        </div>
      ))}
    </div>
  )
}

export function DashboardView() {
  const [tab, setTab] = useState<'games' | 'suggestions'>('games')

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm text-muted-foreground">Welcome back,</p>
          <h1 className="font-display text-3xl font-bold tracking-tight">Northwood Studio</h1>
        </div>
        <ButtonLink href="/submit" className="bg-brand-gold font-semibold text-black hover:bg-brand-gold/90">
          <Plus className="size-4" /> New game
        </ButtonLink>
      </div>

      {/* Stat cards */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => {
          const Icon = s.icon
          return (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center justify-between">
                <span className={cn('flex size-9 items-center justify-center rounded-lg bg-secondary', s.color)}>
                  <Icon className="size-4" />
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400">
                  <ArrowUp className="size-3" /> {s.change}
                </span>
              </div>
              <div className="mt-4 font-display text-2xl font-bold">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          )
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        {/* Left column */}
        <div>
          {/* Tabs */}
          <div className="mb-4 flex gap-2">
            {(['games', 'suggestions'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium capitalize transition-colors',
                  tab === t ? 'bg-brand-purple text-white' : 'bg-secondary text-muted-foreground hover:text-foreground',
                )}
              >
                {t === 'games' ? 'My games' : 'Suggestions'}
              </button>
            ))}
          </div>

          {tab === 'games' ? (
            <div className="space-y-3">
              {myGames.map((game) => (
                <GameRow key={game.slug} game={game} />
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {suggestions.map((s) => (
                <div key={s.id} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
                  <div className="flex flex-col items-center">
                    <ArrowUp className="size-4 text-brand-purple" />
                    <span className="font-mono text-sm font-semibold">{s.upvotes}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-semibold">{s.title}</h3>
                    <p className="text-xs text-muted-foreground">{s.type} · {s.comments} comments</p>
                  </div>
                  <span
                    className={cn(
                      'shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold',
                      s.status === 'Shipped' && 'bg-emerald-400/15 text-emerald-400',
                      s.status === 'In Progress' && 'bg-brand-gold/15 text-brand-gold',
                      s.status === 'Planned' && 'bg-brand-blue/15 text-brand-blue',
                      s.status === 'Open' && 'bg-secondary text-muted-foreground',
                    )}
                  >
                    {s.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right column */}
        <aside className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display font-bold">Funding trend</h3>
              <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400">
                <TrendingUp className="size-3.5" /> +34%
              </span>
            </div>
            <FundingChart />
            <p className="mt-3 text-xs text-muted-foreground">Weekly funding over the last 8 weeks</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="mb-4 font-display font-bold">Quick actions</h3>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Pencil className="size-4" /> Post an update
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Plus className="size-4" /> Add a bounty
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Eye className="size-4" /> View public profile
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

function GameRow({ game }: { game: Game }) {
  const pct = Math.min(100, Math.round((game.funded / game.goal) * 100))
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 sm:flex-row sm:items-center">
      <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-xl sm:size-20">
        <Image src={game.cover || '/placeholder.svg'} alt={game.title} fill className="object-cover" sizes="(max-width:640px) 100vw, 80px" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate font-semibold">{game.title}</h3>
          <StatusBadge status={game.status} />
        </div>
        <div className="mt-1 flex flex-wrap gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Users className="size-3" /> {formatCompact(game.players)}</span>
          <span className="flex items-center gap-1"><Heart className="size-3" /> {formatCompact(game.followers)}</span>
          <span className="flex items-center gap-1 text-brand-gold">{formatMoney(game.funded)}</span>
        </div>
        <Progress value={pct} className="mt-2 h-1.5" />
      </div>
      <div className="flex shrink-0 gap-2">
        <ButtonLink href={`/game/${game.slug}`} variant="outline" size="sm">
          <Eye className="size-4" /> View
        </ButtonLink>
        <Button variant="outline" size="sm" aria-label="Edit game">
          <Pencil className="size-4" />
        </Button>
      </div>
    </div>
  )
}
