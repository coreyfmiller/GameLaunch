import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { HeartHandshake, Zap, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { ButtonLink } from '@/components/ui/button-link'
import { SectionHeading } from '@/components/section-heading'
import { games, bounties, formatMoney, formatCompact } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Funding — GameLaunch.ai',
  description: 'Directly fund the AI-built games you love and crowdfund the features you want.',
}

const totalFunded = games.reduce((a, g) => a + g.funded, 0)
const totalBackers = games.reduce((a, g) => a + g.followers, 0)

const steps = [
  {
    icon: HeartHandshake,
    title: 'Donate directly',
    body: 'Give any amount to a developer. 100% goes straight to the creators building the game.',
  },
  {
    icon: Zap,
    title: 'Fund bounties',
    body: 'Crowdfund a specific feature. When the bounty hits its goal, the developer builds it next.',
  },
  {
    icon: TrendingUp,
    title: 'Watch it grow',
    body: 'Follow progress through roadmaps and changelogs as your funding turns into real updates.',
  },
]

export default function FundingPage() {
  const seeking = [...games]
    .filter((g) => g.funded < g.goal)
    .sort((a, b) => b.funded / b.goal - a.funded / a.goal)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
        {/* Decorative glow + logo on the right */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 opacity-90 lg:block"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-brand-purple/25 blur-3xl" />
          <Image
            src="/gamelaunch-logo.png"
            alt=""
            width={560}
            height={175}
            className="w-[420px] rotate-[-6deg] drop-shadow-[0_0_40px_rgba(124,58,237,0.35)]"
          />
        </div>

        <div className="relative flex max-w-2xl flex-col items-start gap-4">
          <span className="flex items-center gap-2 rounded-full bg-brand-gold/15 px-3 py-1 text-sm font-semibold text-brand-gold">
            <HeartHandshake className="size-4" /> Community funding
          </span>
          <h1 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Fund the games you want to exist
          </h1>
          <p className="max-w-xl text-pretty text-muted-foreground">
            Support independent developers building experimental AI games. Donate directly, back
            specific features, and shape what gets built next.
          </p>
          <div className="mt-2 flex flex-wrap gap-8">
            <div>
              <div className="font-display text-2xl font-bold text-brand-gold">{formatMoney(totalFunded)}</div>
              <div className="text-sm text-muted-foreground">Total funded</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold">{formatCompact(totalBackers)}</div>
              <div className="text-sm text-muted-foreground">Backers</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold">{games.length * 34}+</div>
              <div className="text-sm text-muted-foreground">Games funded</div>
            </div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="mt-16">
        <SectionHeading eyebrow="How it works" title="Three ways to support creators" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-brand-purple/15 text-brand-purple">
                  <Icon className="size-5" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Games seeking funding */}
      <div className="mt-16">
        <SectionHeading
          eyebrow="Support now"
          title="Games seeking funding"
          href="/explore"
          linkLabel="Browse all"
        />
        <div className="space-y-4">
          {seeking.map((game) => {
            const pct = Math.min(100, Math.round((game.funded / game.goal) * 100))
            return (
              <div
                key={game.slug}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 sm:flex-row sm:items-center"
              >
                <Link href={`/game/${game.slug}`} className="relative aspect-video w-full shrink-0 overflow-hidden rounded-xl sm:size-24">
                  <Image src={game.cover || '/placeholder.svg'} alt={game.title} fill className="object-cover" sizes="(max-width:640px) 100vw, 96px" />
                </Link>
                <div className="min-w-0 flex-1">
                  <Link href={`/game/${game.slug}`} className="font-display text-lg font-bold hover:text-brand-purple">
                    {game.title}
                  </Link>
                  <p className="text-sm text-muted-foreground">{game.developer}</p>
                  <div className="mt-2">
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="font-medium text-brand-gold">{formatMoney(game.funded)}</span>
                      <span className="text-muted-foreground">{pct}% of {formatMoney(game.goal)}</span>
                    </div>
                    <Progress value={pct} className="h-1.5" />
                  </div>
                </div>
                <ButtonLink
                  href={`/game/${game.slug}`}
                  className="shrink-0 bg-brand-gold font-semibold text-black hover:bg-brand-gold/90"
                >
                  <HeartHandshake className="size-4" /> Support
                </ButtonLink>
              </div>
            )
          })}
        </div>
      </div>

      {/* Trending bounties */}
      <div className="mt-16">
        <SectionHeading eyebrow="Feature bounties" title="Crowdfund the next feature" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {bounties.map((b) => {
            const pct = Math.min(100, Math.round((b.funded / b.amount) * 100))
            return (
              <div key={b.id} className="rounded-2xl border border-border bg-card p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Zap className="size-4 text-brand-purple" />
                  <h3 className="font-semibold">{b.title}</h3>
                </div>
                <Progress value={pct} className="h-1.5" />
                <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-medium text-brand-gold">{formatMoney(b.funded)} / {formatMoney(b.amount)}</span>
                  <span>{b.backers} backers</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Trust */}
      <div className="mt-16 flex flex-col items-center gap-3 rounded-3xl border border-border bg-card p-8 text-center">
        <ShieldCheck className="size-8 text-emerald-400" />
        <h3 className="font-display text-xl font-bold">Transparent and secure</h3>
        <p className="max-w-xl text-muted-foreground">
          Every contribution is tracked publicly on the game&apos;s funding page. Developers post regular
          updates so you always know how your support is being used.
        </p>
        <ButtonLink href="/submit" variant="outline" className="mt-2">
          Are you a developer? Submit a game <ArrowRight className="size-4" />
        </ButtonLink>
      </div>
    </div>
  )
}
