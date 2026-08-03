import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUp, Users, Heart, Play, Share2, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { StatusBadge } from '@/components/status-badge'
import { StarRating } from '@/components/star-rating'
import { GameTabs } from '@/components/game/game-tabs'
import { FundingSidebar } from '@/components/game/funding-sidebar'
import {
  getGame,
  games,
  roadmap,
  changelogs,
  suggestions,
  discussions,
  reviews,
  bounties,
  faqs,
  formatCompact,
} from '@/lib/data'

export function generateStaticParams() {
  return games.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const game = getGame(slug)
  if (!game) return { title: 'Game not found — GameLaunch.ai' }
  return {
    title: `${game.title} — GameLaunch.ai`,
    description: game.tagline,
  }
}

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const game = getGame(slug)
  if (!game) notFound()

  return (
    <div>
      {/* Banner */}
      <div className="relative h-56 w-full overflow-hidden sm:h-72 md:h-80">
        <Image
          src={game.cover || '/placeholder.svg'}
          alt={`${game.title} banner`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        {/* Header row */}
        <div className="-mt-20 flex flex-col gap-6 sm:-mt-24 sm:flex-row sm:items-end">
          <div className="relative aspect-square w-32 shrink-0 overflow-hidden rounded-2xl border border-border shadow-2xl sm:w-40">
            <Image src={game.cover || '/placeholder.svg'} alt={game.title} fill className="object-cover" sizes="160px" />
          </div>
          <div className="flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <StatusBadge status={game.status} />
              <Badge className="bg-secondary text-foreground">{game.genre}</Badge>
              <span className="rounded-md bg-secondary px-2 py-0.5 font-mono text-xs text-muted-foreground">
                v{game.version}
              </span>
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{game.title}</h1>
            <p className="mt-1 text-muted-foreground">
              by{' '}
              <Link href={`/developers/${game.developerSlug}`} className="font-medium text-foreground hover:text-brand-purple">
                {game.developer}
              </Link>
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <StarRating value={game.rating} showValue />
              <span className="flex items-center gap-1.5">
                <Users className="size-4" /> {formatCompact(game.players)} players
              </span>
              <span className="flex items-center gap-1.5">
                <ArrowUp className="size-4 text-brand-purple" /> {formatCompact(game.upvotes)} upvotes
              </span>
              <span className="flex items-center gap-1.5">
                <Heart className="size-4 text-brand-gold" /> {formatCompact(game.followers)} followers
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="lg" className="bg-brand-purple font-semibold text-white hover:bg-brand-purple/90 glow-purple">
              <Play className="size-5" /> Play Now
            </Button>
            <Button size="lg" variant="outline" aria-label="Share">
              <Share2 className="size-5" />
            </Button>
          </div>
        </div>

        <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="size-4" /> Launched {new Date(game.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        {/* Content grid */}
        <div className="mt-8 grid grid-cols-1 gap-8 pb-16 lg:grid-cols-[1fr_340px]">
          <div>
            <GameTabs
              game={game}
              roadmap={roadmap}
              changelogs={changelogs}
              suggestions={suggestions}
              discussions={discussions}
              reviews={reviews}
              faqs={faqs}
            />
          </div>
          <aside>
            <FundingSidebar game={game} bounties={bounties} />
          </aside>
        </div>
      </div>
    </div>
  )
}
