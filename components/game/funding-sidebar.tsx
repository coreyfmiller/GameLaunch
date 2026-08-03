'use client'

import { useState } from 'react'
import { Heart, Zap, Check, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { formatMoney, formatCompact, type Game, type Bounty } from '@/lib/data'
import { cn } from '@/lib/utils'

const presets = [5, 15, 50]

export function FundingSidebar({ game, bounties }: { game: Game; bounties: Bounty[] }) {
  const [amount, setAmount] = useState(15)
  const [custom, setCustom] = useState('')
  const [followed, setFollowed] = useState(false)
  const [donated, setDonated] = useState(false)
  const pct = Math.min(100, Math.round((game.funded / game.goal) * 100))

  function donate() {
    setDonated(true)
    setTimeout(() => setDonated(false), 2500)
  }

  return (
    <div className="space-y-5 lg:sticky lg:top-20">
      {/* Funding card */}
      <div className="rounded-2xl border border-border bg-card p-5">
        <div className="flex items-baseline justify-between">
          <span className="font-display text-2xl font-bold text-brand-gold">
            {formatMoney(game.funded)}
          </span>
          <span className="text-sm text-muted-foreground">of {formatMoney(game.goal)} goal</span>
        </div>
        <Progress value={pct} className="mt-3 h-2" />
        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
          <span>{pct}% funded</span>
          <span>{formatCompact(game.followers)} backers</span>
        </div>

        <Separator className="my-5" />

        <p className="mb-3 text-sm font-semibold">Support this game</p>
        <div className="grid grid-cols-3 gap-2">
          {presets.map((p) => (
            <button
              key={p}
              onClick={() => {
                setAmount(p)
                setCustom('')
              }}
              className={cn(
                'rounded-xl border py-2 text-sm font-semibold transition-colors',
                amount === p && custom === ''
                  ? 'border-brand-gold bg-brand-gold/10 text-brand-gold'
                  : 'border-border hover:border-brand-gold/50',
              )}
            >
              ${p}
            </button>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-2 rounded-xl border border-border px-3">
          <span className="text-sm text-muted-foreground">$</span>
          <input
            type="number"
            min={1}
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            placeholder="Custom amount"
            className="w-full bg-transparent py-2 text-sm outline-none"
          />
        </div>

        <Button
          onClick={donate}
          className="mt-4 w-full bg-brand-gold font-semibold text-black hover:bg-brand-gold/90"
        >
          {donated ? (
            <>
              <Check className="size-4" /> Thank you!
            </>
          ) : (
            <>
              <Heart className="size-4" /> Donate ${custom || amount}
            </>
          )}
        </Button>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          100% goes directly to {game.developer}
        </p>
      </div>

      {/* Follow */}
      <div className="rounded-2xl border border-border bg-card p-5">
        <Button
          variant={followed ? 'secondary' : 'outline'}
          onClick={() => setFollowed((v) => !v)}
          className="w-full"
        >
          <Heart className={cn('size-4', followed && 'fill-brand-gold text-brand-gold')} />
          {followed ? 'Following' : 'Follow for updates'}
        </Button>
      </div>

      {/* Bounties */}
      <div className="rounded-2xl border border-border bg-card p-5">
        <div className="mb-4 flex items-center gap-2">
          <Zap className="size-4 text-brand-purple" />
          <h3 className="font-display font-bold">Feature Bounties</h3>
        </div>
        <p className="mb-4 text-sm text-muted-foreground">
          Crowdfund specific features. When a bounty is fully funded, the developer builds it next.
        </p>
        <div className="space-y-4">
          {bounties.map((b) => {
            const bpct = Math.min(100, Math.round((b.funded / b.amount) * 100))
            const complete = b.funded >= b.amount
            return (
              <div key={b.id}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium">{b.title}</span>
                  {complete ? (
                    <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400">
                      <Sparkles className="size-3" /> Funded
                    </span>
                  ) : (
                    <span className="text-xs text-muted-foreground">
                      {formatMoney(b.funded)}/{formatMoney(b.amount)}
                    </span>
                  )}
                </div>
                <Progress value={bpct} className="h-1.5" />
                <div className="mt-1.5 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{b.backers} backers</span>
                  {!complete && (
                    <button className="font-medium text-brand-purple hover:underline">
                      Back this
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
