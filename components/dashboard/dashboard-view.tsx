'use client'

import { Pencil } from 'lucide-react'

export function DashboardView() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
      <div className="flex size-16 items-center justify-center rounded-2xl bg-brand-purple/15 text-brand-purple">
        <Pencil className="size-8" />
      </div>
      <h1 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        Developer Dashboard
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        Coming soon. Manage your games, view analytics, and interact with the community.
      </p>
    </div>
  )
}
