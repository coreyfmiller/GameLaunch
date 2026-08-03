'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  ArrowUp,
  ArrowDown,
  MessageSquare,
  Check,
  Circle,
  Star,
  Clock,
  ThumbsUp,
} from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Progress } from '@/components/ui/progress'
import { StarRating } from '@/components/star-rating'
import { StatusBadge } from '@/components/status-badge'
import {
  type Game,
  type Roadmap,
  type Changelog,
  type Suggestion,
  type Discussion,
  type Review,
} from '@/lib/data'
import { cn } from '@/lib/utils'

const scoreLabels: Record<string, string> = {
  fun: 'Fun',
  graphics: 'Graphics',
  originality: 'Originality',
  replayability: 'Replayability',
}

const suggestionTypeColor: Record<Suggestion['type'], string> = {
  Feature: 'bg-brand-purple/15 text-brand-purple',
  Improvement: 'bg-brand-blue/15 text-brand-blue',
  Bug: 'bg-red-500/15 text-red-400',
  Artwork: 'bg-pink-500/15 text-pink-400',
  Balance: 'bg-brand-gold/15 text-brand-gold',
}

const suggestionStatusColor: Record<Suggestion['status'], string> = {
  Open: 'text-muted-foreground',
  Planned: 'text-brand-blue',
  'In Progress': 'text-brand-gold',
  Shipped: 'text-emerald-400',
}

function initials(name: string) {
  return name.slice(0, 2).toUpperCase()
}

export function GameTabs({
  game,
  roadmap,
  changelogs,
  suggestions,
  discussions,
  reviews,
  faqs,
}: {
  game: Game
  roadmap: Roadmap[]
  changelogs: Changelog[]
  suggestions: Suggestion[]
  discussions: Discussion[]
  reviews: Review[]
  faqs: { q: string; a: string }[]
}) {
  const [votes, setVotes] = useState<Record<string, number>>({})

  function vote(id: string, dir: 1 | -1) {
    setVotes((prev) => ({ ...prev, [id]: prev[id] === dir ? 0 : dir }))
  }

  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="mb-6 flex h-auto w-full flex-wrap justify-start gap-1 bg-transparent p-0">
        {['overview', 'roadmap', 'changelog', 'suggestions', 'community', 'reviews'].map((t) => (
          <TabsTrigger
            key={t}
            value={t}
            className="h-auto flex-none rounded-full border border-border bg-card px-4 py-2 text-sm capitalize data-[active]:border-brand-purple data-[active]:bg-brand-purple data-[active]:text-white dark:data-[active]:bg-brand-purple dark:data-[active]:text-white"
          >
            {t}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Overview */}
      <TabsContent value="overview" className="space-y-8">
        <div>
          <h2 className="mb-3 font-display text-xl font-bold">About</h2>
          <p className="leading-relaxed text-muted-foreground">{game.description}</p>
        </div>

        {game.screenshots.length > 0 && (
          <div>
            <h2 className="mb-3 font-display text-xl font-bold">Screenshots</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {game.screenshots.map((src, i) => (
                <div key={i} className="relative aspect-video overflow-hidden rounded-xl border border-border">
                  <Image src={src || '/placeholder.svg'} alt={`${game.title} screenshot ${i + 1}`} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <h2 className="mb-3 font-display text-xl font-bold">Community Scores</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {Object.entries(game.scores).map(([key, val]) => (
              <div key={key} className="rounded-xl border border-border bg-card p-4">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium">{scoreLabels[key]}</span>
                  <span className="font-mono font-semibold text-brand-gold">{val.toFixed(1)}</span>
                </div>
                <Progress value={(val / 5) * 100} className="h-1.5" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-3 font-display text-xl font-bold">FAQ</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-xl border border-border bg-card p-4">
                <summary className="cursor-pointer list-none font-medium marker:content-none">
                  <span className="flex items-center justify-between">
                    {f.q}
                    <span className="text-muted-foreground transition-transform group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </TabsContent>

      {/* Roadmap */}
      <TabsContent value="roadmap">
        <div className="relative space-y-6 before:absolute before:left-[15px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border">
          {roadmap.map((phase, i) => (
            <div key={i} className="relative flex gap-4">
              <div
                className={cn(
                  'z-10 flex size-8 shrink-0 items-center justify-center rounded-full border-2',
                  phase.done
                    ? 'border-emerald-400 bg-emerald-400/15 text-emerald-400'
                    : 'border-border bg-card text-muted-foreground',
                )}
              >
                {phase.done ? <Check className="size-4" /> : <Circle className="size-3" />}
              </div>
              <div className="flex-1 rounded-xl border border-border bg-card p-4">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h3 className="font-display font-bold">{phase.phase}</h3>
                  <StatusBadge status={phase.status} />
                  {phase.done && <Badge className="bg-emerald-400/15 text-emerald-400">Complete</Badge>}
                </div>
                <ul className="space-y-1.5">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className={cn('size-1.5 rounded-full', phase.done ? 'bg-emerald-400' : 'bg-brand-purple')} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>

      {/* Changelog */}
      <TabsContent value="changelog">
        <div className="space-y-4">
          {changelogs.map((log) => (
            <div key={log.version} className="rounded-xl border border-border bg-card p-5">
              <div className="mb-3 flex items-center gap-3">
                <Badge className="bg-brand-purple/15 font-mono text-brand-purple">v{log.version}</Badge>
                <span className="text-sm text-muted-foreground">{log.date}</span>
              </div>
              <ul className="space-y-2">
                {log.changes.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </TabsContent>

      {/* Suggestions */}
      <TabsContent value="suggestions" className="space-y-4">
        <div className="rounded-xl border border-dashed border-border bg-card p-4">
          <p className="mb-3 text-sm font-medium">Have an idea? Suggest a feature or report a bug.</p>
          <Textarea placeholder="Describe your suggestion..." className="mb-3 bg-background" />
          <Button className="bg-brand-purple text-white hover:bg-brand-purple/90">Submit suggestion</Button>
        </div>
        {suggestions.map((s) => {
          const v = votes[s.id] ?? 0
          return (
            <div key={s.id} className="flex gap-4 rounded-xl border border-border bg-card p-4">
              <div className="flex flex-col items-center gap-1">
                <button onClick={() => vote(s.id, 1)} className={cn('rounded-md p-1 transition-colors hover:bg-secondary', v === 1 && 'text-brand-purple')}>
                  <ArrowUp className="size-4" />
                </button>
                <span className="font-mono text-sm font-semibold">{s.upvotes + v}</span>
                <button onClick={() => vote(s.id, -1)} className={cn('rounded-md p-1 transition-colors hover:bg-secondary', v === -1 && 'text-red-400')}>
                  <ArrowDown className="size-4" />
                </button>
              </div>
              <div className="flex-1">
                <div className="mb-1.5 flex flex-wrap items-center gap-2">
                  <span className={cn('rounded-full px-2 py-0.5 text-xs font-semibold', suggestionTypeColor[s.type])}>
                    {s.type}
                  </span>
                  <span className={cn('text-xs font-semibold', suggestionStatusColor[s.status])}>
                    {s.status}
                  </span>
                </div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
                <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                  <span>by {s.author}</span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="size-3.5" /> {s.comments}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </TabsContent>

      {/* Community / discussion */}
      <TabsContent value="community" className="space-y-4">
        <div className="rounded-xl border border-dashed border-border bg-card p-4">
          <Textarea placeholder="Start a discussion..." className="mb-3 bg-background" />
          <Button className="bg-brand-purple text-white hover:bg-brand-purple/90">Post</Button>
        </div>
        {discussions.map((d) => (
          <div key={d.id} className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center gap-3">
              <Avatar className="size-9">
                <AvatarFallback className="bg-brand-purple/20 text-xs text-brand-purple">
                  {initials(d.author)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">{d.author}</p>
                <p className="text-xs text-muted-foreground">{d.time}</p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
            <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <ThumbsUp className="size-3.5" /> {d.likes}
              </span>
              <span className="flex items-center gap-1">
                <MessageSquare className="size-3.5" /> {d.replies} replies
              </span>
            </div>
          </div>
        ))}
      </TabsContent>

      {/* Reviews */}
      <TabsContent value="reviews" className="space-y-4">
        <div className="flex flex-wrap items-center gap-6 rounded-xl border border-border bg-card p-5">
          <div className="text-center">
            <div className="font-display text-4xl font-bold text-brand-gold">{game.rating.toFixed(1)}</div>
            <StarRating value={game.rating} />
            <p className="mt-1 text-xs text-muted-foreground">{game.reviews} reviews</p>
          </div>
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">
              Players love the atmosphere and the rapid, community-driven update cadence.
            </p>
          </div>
          <Button className="bg-brand-purple text-white hover:bg-brand-purple/90">
            <Star className="size-4" /> Write a review
          </Button>
        </div>
        {reviews.map((r) => (
          <div key={r.id} className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="size-9">
                  <AvatarFallback className="bg-brand-blue/20 text-xs text-brand-blue">
                    {initials(r.author)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold">{r.author}</p>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="size-3" /> {r.hours}h played
                  </span>
                </div>
              </div>
              <div className="text-right">
                <StarRating value={r.rating} />
                <p className="mt-0.5 text-xs text-muted-foreground">{r.time}</p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  )
}
