'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Compass, Rocket } from 'lucide-react'
import { ButtonLink } from '@/components/ui/button-link'
import { HeroBackground } from '@/components/hero-background'
import { formatCompact, games } from '@/lib/data'

const totalPlayers = games.reduce((a, g) => a + g.players, 0)
const totalFunded = games.reduce((a, g) => a + g.funded, 0)

const stats = [
  { label: 'Games launching', value: `${games.length * 34}+` },
  { label: 'Active players', value: formatCompact(totalPlayers * 6) },
  { label: 'Community funded', value: `$${formatCompact(totalFunded * 9)}` },
  { label: 'Developers', value: '1.2K+' },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <HeroBackground />
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 pt-4 pb-12 text-center sm:px-6 md:pt-5 md:pb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Image
            src="/gamelaunch-logo.png"
            alt="GameLaunch.ai"
            width={640}
            height={200}
            priority
            loading="eager"
            className="h-auto w-[400px] drop-shadow-[0_0_40px_rgba(124,58,237,0.32)] sm:w-[520px] md:w-[600px]"
          />
        </motion.div>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="-mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur"
        >
          <span className="size-2 animate-pulse rounded-full bg-brand-gold" />
          Discover it. Play it. Fund it. Launch it.
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-3 max-w-3xl text-balance font-display text-4xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl"
        >
          Every great game{' '}
          <span className="bg-gradient-to-r from-brand-purple via-brand-blue to-brand-gold bg-clip-text text-transparent">
            starts somewhere.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          Discover experimental AI-built games, help shape their future, and support the developers
          building them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 flex flex-col gap-3 sm:flex-row"
        >
          <ButtonLink
            href="/explore"
            size="lg"
            className="bg-brand-purple text-base font-semibold text-white hover:bg-brand-purple/90 glow-purple"
          >
            <Compass className="size-5" />
            Explore Games
          </ButtonLink>
          <ButtonLink
            href="/submit"
            size="lg"
            variant="outline"
            className="border-border bg-background/40 text-base font-semibold backdrop-blur hover:bg-secondary"
          >
            <Rocket className="size-5" />
            Submit a Game
          </ButtonLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-9 grid w-full max-w-3xl grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-border bg-card/50 p-4 backdrop-blur"
            >
              <div className="font-display text-2xl font-bold text-foreground">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
