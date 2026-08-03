import type { Metadata } from 'next'
import { Newspaper } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Updates — GameLaunch.ai',
  description: 'The latest development updates and patch notes from across the platform.',
}

export default function UpdatesPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
      <div className="flex size-16 items-center justify-center rounded-2xl bg-brand-purple/15 text-brand-purple">
        <Newspaper className="size-8" />
      </div>
      <h1 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        Developer Updates
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        Coming soon. Patch notes, milestones, and behind-the-scenes updates from developers
        building in public.
      </p>
    </div>
  )
}
