import type { Metadata } from 'next'
import { Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Developers — GameLaunch.ai',
  description: 'Meet the independent studios building AI games in public.',
}

export default function DevelopersPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
      <div className="flex size-16 items-center justify-center rounded-2xl bg-brand-purple/15 text-brand-purple">
        <Users className="size-8" />
      </div>
      <h1 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        Developer Profiles
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        Coming soon. Developer profiles and portfolios are being built out.
      </p>
    </div>
  )
}
