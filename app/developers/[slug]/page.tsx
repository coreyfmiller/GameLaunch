import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MapPin, Gamepad2, Users, DollarSign, Calendar } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { GameCard } from '@/components/game-card'
import { SectionHeading } from '@/components/section-heading'
import { developers, games, formatMoney, formatCompact } from '@/lib/data'

function initials(name: string) {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function generateStaticParams() {
  return developers.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const dev = developers.find((d) => d.slug === slug)
  if (!dev) return { title: 'Developer not found — GameLaunch.ai' }
  return { title: `${dev.name} — GameLaunch.ai`, description: dev.bio }
}

export default async function DeveloperPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const dev = developers.find((d) => d.slug === slug)
  if (!dev) notFound()

  const devGames = games.filter((g) => g.developerSlug === slug)

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-col gap-6 rounded-3xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:p-8">
        <Avatar className="size-20">
          <AvatarFallback className="bg-brand-purple/20 text-2xl font-bold text-brand-purple">
            {initials(dev.name)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h1 className="font-display text-3xl font-bold tracking-tight">{dev.name}</h1>
          <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="size-4" /> {dev.location}
            <span className="mx-1">·</span>
            <Calendar className="size-4" /> Joined {dev.joined}
          </p>
          <p className="mt-3 max-w-2xl text-muted-foreground">{dev.bio}</p>
        </div>
        <Button className="bg-brand-purple font-semibold text-white hover:bg-brand-purple/90">
          Follow
        </Button>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        {[
          { icon: Gamepad2, label: 'Games', value: String(dev.games) },
          { icon: Users, label: 'Followers', value: formatCompact(dev.followers) },
          { icon: DollarSign, label: 'Total funded', value: formatMoney(dev.totalFunded) },
        ].map((s) => {
          const Icon = s.icon
          return (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-5 text-center">
              <Icon className="mx-auto size-5 text-brand-purple" />
              <div className="mt-2 font-display text-xl font-bold">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          )
        })}
      </div>

      {/* Games */}
      <div className="mt-12">
        <SectionHeading eyebrow="Portfolio" title={`Games by ${dev.name}`} />
        {devGames.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {devGames.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No public games yet.</p>
        )}
      </div>
    </div>
  )
}
