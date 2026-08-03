import type { Metadata } from 'next'
import { Rocket } from 'lucide-react'
import { SubmitForm } from '@/components/submit/submit-form'

export const metadata: Metadata = {
  title: 'Submit a Game — GameLaunch.ai',
  description: 'Launch your AI-built game to the world. Gather players, feedback, and funding.',
}

export default function SubmitPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <div className="mb-8 flex flex-col items-center gap-3 text-center">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-purple/15 text-brand-purple">
          <Rocket className="size-7" />
        </div>
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Launch your game</h1>
        <p className="max-w-lg text-muted-foreground">
          Publish your AI-built game in minutes. Start gathering players, community feedback, and
          direct funding from day one.
        </p>
      </div>
      <SubmitForm />
    </div>
  )
}
