import Link from 'next/link'
import Image from 'next/image'
import { ArrowUp, Users, Heart } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { StatusBadge } from '@/components/status-badge'
import { StarRating } from '@/components/star-rating'
import { formatCompact, formatMoney, type Game } from '@/lib/data'

export function GameCard({ game }: { game: Game }) {
  const pct = Math.min(100, Math.round((game.funded / game.goal) * 100))
  return (
    <Link
      href={`/game/${game.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple/50 hover:shadow-2xl hover:shadow-brand-purple/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={game.cover || '/placeholder.svg'}
          alt={`${game.title} cover art`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <div className="absolute left-3 top-3 flex gap-2">
          <StatusBadge status={game.status} />
        </div>
        <Badge className="absolute right-3 top-3 bg-background/80 text-foreground backdrop-blur">
          {game.genre}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-lg font-bold leading-tight text-foreground">
              {game.title}
            </h3>
            <span className="shrink-0 rounded-md bg-secondary px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
              v{game.version}
            </span>
          </div>
          <p className="mt-0.5 text-sm text-muted-foreground">{game.developer}</p>
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{game.tagline}</p>

        <div className="mt-auto space-y-3 pt-1">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <StarRating value={game.rating} showValue />
            <span className="flex items-center gap-1">
              <Users className="size-3.5" /> {formatCompact(game.players)}
            </span>
            <span className="flex items-center gap-1">
              <ArrowUp className="size-3.5 text-brand-purple" /> {formatCompact(game.upvotes)}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="size-3.5 text-brand-gold" /> {formatCompact(game.followers)}
            </span>
          </div>

          <div>
            <div className="mb-1.5 flex items-center justify-between text-xs">
              <span className="font-medium text-brand-gold">{formatMoney(game.funded)}</span>
              <span className="text-muted-foreground">of {formatMoney(game.goal)}</span>
            </div>
            <Progress value={pct} className="h-1.5" />
          </div>
        </div>
      </div>
    </Link>
  )
}
