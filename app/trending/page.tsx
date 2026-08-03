import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Flame } from 'lucide-react'
import { GameCard } from '@/components/game-card'
import { StatusBadge } from '@/components/status-badge'
import { SectionHeading } from '@/components/section-heading'
import { games } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Trending — GameLaunch.ai',
  description: 'The hottest AI-built games gaining momentum right now.',
}

export default function TrendingPage() {
  // Featured games first, then the rest by date
  const trending = [...games].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return +new Date(b.createdAt) - +new Date(a.createdAt)
  })
  const hero = trending[0]

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
          The newest AI-built games making waves right now.
        </p>
      </div>

      {/* Featured trending hero */}
      {hero && (
        <Link
          href={`/game/${hero.slug}`}
          className="group mt-8 grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-2"
        >
          <div className="relative aspect-video lg:aspect-auto">
            <Image
              src={hero.cover}
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
            <p className="text-pretty text-muted-foreground">{hero.tagline}</p>
            <p className="text-sm text-muted-foreground">
              {hero.developer} · {hero.genre}
            </p>
          </div>
        </Link>
      )}

      {/* All trending grid */}
      <div className="mt-12">
        <SectionHeading eyebrow="Hot right now" title="Trending games" />
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trending.slice(1).map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </div>
    </div>
  )
}
