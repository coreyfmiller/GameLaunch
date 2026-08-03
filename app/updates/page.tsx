import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Newspaper, ArrowRight } from 'lucide-react'
import { updates } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Updates — GameLaunch.ai',
  description: 'The latest development updates and patch notes from across the platform.',
}

export default function UpdatesPage() {
  const [featured, ...rest] = updates

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="flex flex-col gap-2">
        <span className="flex items-center gap-2 text-sm font-semibold text-brand-purple">
          <Newspaper className="size-4" /> Developer updates
        </span>
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Latest from the studios</h1>
        <p className="max-w-lg text-muted-foreground">
          Patch notes, milestones, and behind-the-scenes updates from developers building in public.
        </p>
      </div>

      {/* Featured */}
      <Link
        href={`/game/${featured.gameSlug}`}
        className="group mt-8 grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-2"
      >
        <div className="relative aspect-video md:aspect-auto">
          <Image src={featured.cover || '/placeholder.svg'} alt={featured.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, 50vw" />
        </div>
        <div className="flex flex-col justify-center gap-3 p-6 sm:p-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium text-brand-purple">{featured.game}</span>
            <span>·</span>
            <span>{featured.date}</span>
          </div>
          <h2 className="font-display text-2xl font-bold leading-tight">{featured.title}</h2>
          <p className="text-pretty text-muted-foreground">{featured.excerpt}</p>
          <span className="mt-2 flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-brand-purple">
            Read update <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>

      {/* List */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {rest.map((u) => (
          <Link
            key={u.id}
            href={`/game/${u.gameSlug}`}
            className="group flex gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-brand-purple/50"
          >
            <div className="relative size-20 shrink-0 overflow-hidden rounded-xl">
              <Image src={u.cover || '/placeholder.svg'} alt={u.title} fill className="object-cover" sizes="80px" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="font-medium text-brand-purple">{u.game}</span>
                <span>·</span>
                <span>{u.date}</span>
              </div>
              <h3 className="mt-1 line-clamp-2 font-semibold leading-tight group-hover:text-brand-purple">
                {u.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{u.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
