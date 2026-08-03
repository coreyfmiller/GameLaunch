import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { StatusBadge } from '@/components/status-badge'
import type { Game } from '@/lib/data'

export function GameCard({ game }: { game: Game }) {
  return (
    <Link
      href={`/game/${game.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple/50 hover:shadow-2xl hover:shadow-brand-purple/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={game.cover}
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
          <h3 className="font-display text-lg font-bold leading-tight text-foreground">
            {game.title}
          </h3>
          <p className="mt-0.5 text-sm text-muted-foreground">{game.developer}</p>
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {game.tagline}
        </p>

        <div className="mt-auto pt-1">
          <StatusBadge status={game.status} />
        </div>
      </div>
    </Link>
  )
}
