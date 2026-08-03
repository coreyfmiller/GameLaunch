import type { Metadata } from 'next'
import Link from 'next/link'
import { Users, MapPin, Gamepad2, DollarSign } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { developers, formatMoney, formatCompact } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Developers — GameLaunch.ai',
  description: 'Meet the independent studios building AI games in public.',
}

function initials(name: string) {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function DevelopersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-col gap-2">
        <span className="flex items-center gap-2 text-sm font-semibold text-brand-purple">
          <Users className="size-4" /> Creators
        </span>
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Meet the developers</h1>
        <p className="max-w-lg text-muted-foreground">
          Independent studios and solo creators building experimental AI games in public.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {developers.map((dev) => (
          <Link
            key={dev.slug}
            href={`/developers/${dev.slug}`}
            className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand-purple/50"
          >
            <div className="flex items-center gap-3">
              <Avatar className="size-12">
                <AvatarFallback className="bg-brand-purple/20 font-semibold text-brand-purple">
                  {initials(dev.name)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-display font-bold group-hover:text-brand-purple">{dev.name}</h3>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="size-3" /> {dev.location}
                </span>
              </div>
            </div>
            <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{dev.bio}</p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Gamepad2 className="size-3.5" /> {dev.games} games</span>
              <span className="flex items-center gap-1"><Users className="size-3.5" /> {formatCompact(dev.followers)}</span>
              <span className="flex items-center gap-1 text-brand-gold"><DollarSign className="size-3.5" /> {formatMoney(dev.totalFunded)}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
