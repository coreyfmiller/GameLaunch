import type { Metadata } from 'next'
import { HeartHandshake } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Funding — GameLaunch.ai',
  description: 'Directly fund the AI-built games you love and crowdfund the features you want.',
}

export default function FundingPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
      <div className="flex size-16 items-center justify-center rounded-2xl bg-brand-gold/15 text-brand-gold">
        <HeartHandshake className="size-8" />
      </div>
      <h1 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        Community Funding
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        Coming soon. Support independent developers building AI games with direct donations,
        subscriptions, and feature bounties.
      </p>
    </div>
  )
}
