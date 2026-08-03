'use client'

import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { GameCard } from '@/components/game-card'
import {
  games,
  genres,
  STATUS_META,
  type DevStatus,
  type Game,
} from '@/lib/data'
import { cn } from '@/lib/utils'

const sortOptions = [
  { key: 'trending', label: 'Trending' },
  { key: 'newest', label: 'Newest' },
  { key: 'rating', label: 'Top Rated' },
  { key: 'funded', label: 'Most Funded' },
  { key: 'players', label: 'Most Played' },
] as const

type SortKey = (typeof sortOptions)[number]['key']

const statusList = Object.keys(STATUS_META) as DevStatus[]

function sortGames(list: Game[], sort: SortKey) {
  const copy = [...list]
  switch (sort) {
    case 'newest':
      return copy.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))
    case 'rating':
      return copy.sort((a, b) => b.rating - a.rating)
    case 'funded':
      return copy.sort((a, b) => b.funded - a.funded)
    case 'players':
      return copy.sort((a, b) => b.players - a.players)
    default:
      return copy.sort((a, b) => b.growth * b.upvotes - a.growth * a.upvotes)
  }
}

export function ExploreView() {
  const [query, setQuery] = useState('')
  const [genre, setGenre] = useState('All')
  const [status, setStatus] = useState<DevStatus | 'All'>('All')
  const [sort, setSort] = useState<SortKey>('trending')

  const filtered = useMemo(() => {
    let list = games.filter((g) => {
      const matchesGenre = genre === 'All' || g.genre === genre
      const matchesStatus = status === 'All' || g.status === status
      const matchesQuery =
        query.trim() === '' ||
        g.title.toLowerCase().includes(query.toLowerCase()) ||
        g.developer.toLowerCase().includes(query.toLowerCase())
      return matchesGenre && matchesStatus && matchesQuery
    })
    return sortGames(list, sort)
  }, [query, genre, status, sort])

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="flex flex-col gap-2">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Explore Games</h1>
        <p className="text-muted-foreground">
          Discover {games.length * 34}+ AI-built games across every genre and stage of development.
        </p>
      </div>

      {/* Search + sort */}
      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search games or developers..."
            className="h-11 bg-card pl-10"
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <SlidersHorizontal className="size-4 shrink-0 text-muted-foreground" />
          {sortOptions.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setSort(opt.key)}
              className={cn(
                'shrink-0 rounded-full px-3 py-1.5 text-sm font-medium transition-colors',
                sort === opt.key
                  ? 'bg-brand-purple text-white'
                  : 'bg-secondary text-muted-foreground hover:text-foreground',
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Genre filters */}
      <div className="mt-5 flex flex-wrap gap-2">
        {genres.map((g) => (
          <button
            key={g}
            onClick={() => setGenre(g)}
            className={cn(
              'rounded-full border px-3 py-1 text-sm font-medium transition-colors',
              genre === g
                ? 'border-brand-purple bg-brand-purple/10 text-brand-purple'
                : 'border-border text-muted-foreground hover:border-brand-purple/40 hover:text-foreground',
            )}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Status filters */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          onClick={() => setStatus('All')}
          className={cn(
            'rounded-full px-3 py-1 text-xs font-semibold transition-colors',
            status === 'All' ? 'bg-foreground text-background' : 'bg-secondary text-muted-foreground hover:text-foreground',
          )}
        >
          All stages
        </button>
        {statusList.map((s) => {
          const Icon = STATUS_META[s].icon
          return (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={cn(
                'flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold transition-colors',
                status === s ? 'bg-foreground text-background' : 'bg-secondary text-muted-foreground hover:text-foreground',
              )}
            >
              <Icon className="size-3.5" />
              {STATUS_META[s].label}
            </button>
          )
        })}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span>{' '}
          {filtered.length === 1 ? 'game' : 'games'}
        </p>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center justify-center gap-3 text-center">
          <Badge variant="secondary">No results</Badge>
          <p className="max-w-sm text-muted-foreground">
            No games match your filters. Try adjusting your search or clearing filters.
          </p>
        </div>
      )}
    </div>
  )
}
