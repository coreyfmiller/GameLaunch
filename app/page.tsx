import { Compass, Vote, HeartHandshake, Rocket, TrendingUp, Flame } from 'lucide-react'
import { ButtonLink } from '@/components/ui/button-link'
import { GameCard } from '@/components/game-card'
import { SectionHeading } from '@/components/section-heading'
import { HeroSection } from '@/components/home/hero-section'
import { StatusJourney } from '@/components/home/status-journey'
import { games, leaderboards } from '@/lib/data'

const steps = [
  {
    icon: Compass,
    title: 'Discover',
    body: 'Browse experimental AI-built games across every genre and stage of development.',
  },
  {
    icon: Vote,
    title: 'Play & Vote',
    body: 'Jump into playable builds, rate them, and vote on the features you want next.',
  },
  {
    icon: HeartHandshake,
    title: 'Fund',
    body: 'Back developers with one-time donations, subscriptions, or feature bounties.',
  },
  {
    icon: Rocket,
    title: 'Launch',
    body: 'Follow each game from concept to legendary as the community helps it grow.',
  },
]

export default function HomePage() {
  const featured = games.slice(0, 3)
  const trending = leaderboards.fastestGrowing.slice(0, 3)

  return (
    <>
      <HeroSection />

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="From first prototype to full launch"
          description="GameLaunch.ai gives every AI-built game a home, a community, and a path to funding."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand-purple/40"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-brand-purple/15 text-brand-purple">
                <s.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured games */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <SectionHeading
          eyebrow="Featured"
          title="Games worth watching"
          description="Hand-picked builds gaining momentum with players and backers this week."
          href="/explore"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((g) => (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>
      </section>

      {/* Status journey */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Development status"
          title="Watch games evolve, stage by stage"
          description="Every game on GameLaunch.ai carries a status so players know exactly where it stands."
        />
        <StatusJourney />
      </section>

      {/* Trending */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <SectionHeading
          eyebrow="Fastest growing"
          title="Trending right now"
          description="The games climbing the charts the fastest this week."
          href="/trending"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trending.map((g) => (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-brand-purple/20 via-card to-brand-blue/20 p-8 text-center sm:p-14">
          <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-brand-purple/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 size-64 rounded-full bg-brand-blue/20 blur-3xl" />
          <div className="relative">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-brand-gold/20 text-brand-gold">
              <Flame className="size-7" />
            </div>
            <h2 className="mx-auto mt-5 max-w-2xl text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Building an AI game? Launch it to the world.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground">
              Submit your game in minutes, gather feedback, and start receiving funding from a
              community that wants you to succeed.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink
                href="/submit"
                size="lg"
                className="bg-brand-gold font-semibold text-black hover:bg-brand-gold/90"
              >
                <Rocket className="size-5" />
                Submit Your Game
              </ButtonLink>
              <ButtonLink
                href="/leaderboard"
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary"
              >
                <TrendingUp className="size-5" />
                See the Leaderboard
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
