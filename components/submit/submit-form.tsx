'use client'

import { useState } from 'react'
import { Rocket, Upload, Check, ImageIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { STATUS_META, genres, type DevStatus } from '@/lib/data'
import { cn } from '@/lib/utils'

const statusList = Object.keys(STATUS_META) as DevStatus[]
const selectableGenres = genres.filter((g) => g !== 'All')

export function SubmitForm() {
  const [status, setStatus] = useState<DevStatus>('Prototype')
  const [genre, setGenre] = useState('Survival')
  const [goal, setGoal] = useState(5000)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center gap-4 rounded-3xl border border-border bg-card p-10 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400">
          <Check className="size-8" />
        </div>
        <h2 className="font-display text-2xl font-bold">Your game is submitted!</h2>
        <p className="text-muted-foreground">
          Our team will review your submission and your game will appear on GameLaunch.ai shortly.
          You can start gathering players, feedback, and funding right away.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-2">
          Submit another game
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basics */}
      <section className="rounded-2xl border border-border bg-card p-6">
        <h2 className="mb-5 font-display text-lg font-bold">Game basics</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Game title</Label>
            <Input id="title" required placeholder="e.g. Survive New Brunswick" className="mt-1.5 bg-background" />
          </div>
          <div>
            <Label htmlFor="tagline">Tagline</Label>
            <Input id="tagline" required placeholder="A short, punchy one-liner" className="mt-1.5 bg-background" />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              required
              rows={5}
              placeholder="Tell players what your game is about, what makes it unique, and how you use AI in your pipeline."
              className="mt-1.5 bg-background"
            />
          </div>
        </div>
      </section>

      {/* Category */}
      <section className="rounded-2xl border border-border bg-card p-6">
        <h2 className="mb-5 font-display text-lg font-bold">Category &amp; stage</h2>
        <div className="space-y-5">
          <div>
            <Label>Genre</Label>
            <div className="mt-2 flex flex-wrap gap-2">
              {selectableGenres.map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGenre(g)}
                  className={cn(
                    'rounded-full border px-3 py-1.5 text-sm font-medium transition-colors',
                    genre === g
                      ? 'border-brand-purple bg-brand-purple/10 text-brand-purple'
                      : 'border-border text-muted-foreground hover:text-foreground',
                  )}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
          <div>
            <Label>Development stage</Label>
            <div className="mt-2 flex flex-wrap gap-2">
              {statusList.map((s) => {
                const Icon = STATUS_META[s].icon
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setStatus(s)}
                    className={cn(
                      'flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors',
                      status === s
                        ? 'border-brand-purple bg-brand-purple/10 text-brand-purple'
                        : 'border-border text-muted-foreground hover:text-foreground',
                    )}
                  >
                    <Icon className="size-4" />
                    {STATUS_META[s].label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Media */}
      <section className="rounded-2xl border border-border bg-card p-6">
        <h2 className="mb-5 font-display text-lg font-bold">Media &amp; links</h2>
        <div className="space-y-4">
          <div>
            <Label>Cover image</Label>
            <div className="mt-1.5 flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-background p-8 text-center">
              <ImageIcon className="size-8 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Drag &amp; drop your cover art, or click to browse</p>
              <Button type="button" variant="outline" size="sm" className="mt-1">
                <Upload className="size-4" /> Upload
              </Button>
            </div>
          </div>
          <div>
            <Label htmlFor="playUrl">Play URL</Label>
            <Input id="playUrl" type="url" placeholder="https://yourgame.com/play" className="mt-1.5 bg-background" />
          </div>
          <div>
            <Label htmlFor="version">Current version</Label>
            <Input id="version" placeholder="0.1.0" className="mt-1.5 bg-background" />
          </div>
        </div>
      </section>

      {/* Funding */}
      <section className="rounded-2xl border border-border bg-card p-6">
        <h2 className="mb-5 font-display text-lg font-bold">Funding goal</h2>
        <div>
          <div className="mb-2 flex items-center justify-between">
            <Label htmlFor="goal">Target amount</Label>
            <span className="font-display text-lg font-bold text-brand-gold">
              ${goal.toLocaleString()}
            </span>
          </div>
          <input
            id="goal"
            type="range"
            min={500}
            max={50000}
            step={500}
            value={goal}
            onChange={(e) => setGoal(Number(e.target.value))}
            className="w-full accent-brand-purple"
          />
          <div className="mt-1 flex justify-between text-xs text-muted-foreground">
            <span>$500</span>
            <span>$50,000</span>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center gap-3">
        <Button
          type="submit"
          size="lg"
          className="w-full bg-brand-gold font-semibold text-black hover:bg-brand-gold/90 sm:w-auto"
        >
          <Rocket className="size-5" /> Launch my game
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          By submitting, you agree to our developer guidelines and terms of service.
        </p>
      </div>
    </form>
  )
}
