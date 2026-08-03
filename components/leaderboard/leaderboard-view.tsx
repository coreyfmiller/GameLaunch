'use client'

import { Trophy } from 'lucide-react'

export function LeaderboardView() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
      <div className="flex size-16 items-center justify-center rounded-2xl bg-brand-gold/15 text-brand-gold">
        <Trophy className="size-8" />
      </div>
      <h1 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        Leaderboards
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        Coming soon. Community-ranked leaderboards for the top AI-built games.
      </p>
    </div>
  )
}
