'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Upload, Gamepad2 } from 'lucide-react'
import Link from 'next/link'

const GENRES = [
  'Action', 'Adventure', 'Arcade', 'Card / Board', 'City Builder',
  'Dungeon Crawler', 'Horror', 'Idle / Incremental', 'Multiplayer',
  'Physics Puzzle', 'Platformer', 'Puzzle', 'Racing', 'Roguelike',
  'RPG', 'RTS / Strategy', 'Shooter', 'Simulation', 'Survival',
  'Tower Defense', 'Visual Novel', 'Other',
]

export default function SubmitPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createClient()

    // Check if user is logged in
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      router.push('/login?next=/submit')
      return
    }

    // Upgrade user to developer role if needed
    await supabase
      .from('profiles')
      .update({ role: 'developer' })
      .eq('id', user.id)

    const form = new FormData(e.currentTarget)
    const title = form.get('title') as string
    const tagline = form.get('tagline') as string
    const description = form.get('description') as string
    const genre = form.get('genre') as string
    const gameUrl = form.get('game_url') as string
    const coverUrl = form.get('cover_url') as string
    const aiTools = form.get('ai_tools') as string

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    const { error: insertError } = await supabase.from('games').insert({
      slug,
      title,
      tagline,
      description,
      genre,
      game_url: gameUrl,
      cover_url: coverUrl || null,
      developer_id: user.id,
      ai_tools: aiTools || null,
      status: 'published',
    })

    if (insertError) {
      if (insertError.code === '23505') {
        setError('A game with that title already exists. Try a different name.')
      } else {
        setError(insertError.message)
      }
      setLoading(false)
      return
    }

    setSuccess(true)
    setTimeout(() => router.push(`/game/${slug}`), 1500)
  }

  if (success) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400">
          <Gamepad2 className="size-8" />
        </div>
        <h2 className="font-display text-2xl font-bold">Your game is live!</h2>
        <p className="text-muted-foreground">Redirecting to your game page...</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold">Submit Your Game</h1>
        <p className="mt-2 text-muted-foreground">
          Share your AI-made browser game with the community. Must be playable in a browser (HTML5, WebGL, canvas).
        </p>
      </div>

      {error && (
        <div className="mb-6 rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="rounded-2xl border border-border bg-card p-6 space-y-5">
          <h2 className="font-display text-lg font-bold">Game Details</h2>

          <div>
            <Label htmlFor="title">Title *</Label>
            <Input id="title" name="title" required placeholder="My Awesome Game" className="mt-1.5" />
          </div>

          <div>
            <Label htmlFor="tagline">Tagline *</Label>
            <Input id="tagline" name="tagline" required placeholder="A one-sentence hook for your game" className="mt-1.5" maxLength={120} />
            <p className="mt-1 text-xs text-muted-foreground">Max 120 characters. This shows on game cards.</p>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Tell players what your game is about, how to play, and what makes it unique."
              className="mt-1.5 min-h-[120px]"
            />
          </div>

          <div>
            <Label htmlFor="genre">Genre *</Label>
            <select
              id="genre"
              name="genre"
              required
              className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">Select a genre</option>
              {GENRES.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 space-y-5">
          <h2 className="font-display text-lg font-bold">Links</h2>

          <div>
            <Label htmlFor="game_url">Game URL * (must be playable in iframe)</Label>
            <Input
              id="game_url"
              name="game_url"
              type="url"
              required
              placeholder="https://your-game.vercel.app"
              className="mt-1.5"
            />
            <p className="mt-1 text-xs text-muted-foreground">
              The URL where your game is hosted. It will be embedded in an iframe on your game page. Works with Vercel, Netlify, GitHub Pages, itch.io embed URLs, etc.
            </p>
          </div>

          <div>
            <Label htmlFor="cover_url">Cover Image URL</Label>
            <Input
              id="cover_url"
              name="cover_url"
              type="url"
              placeholder="https://example.com/cover.png"
              className="mt-1.5"
            />
            <p className="mt-1 text-xs text-muted-foreground">
              1200x630 recommended. PNG or JPG. Leave blank for a default cover.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 space-y-5">
          <h2 className="font-display text-lg font-bold">AI Tools Used</h2>

          <div>
            <Label htmlFor="ai_tools">What AI tools helped build this?</Label>
            <Input
              id="ai_tools"
              name="ai_tools"
              placeholder="Claude, Cursor, GPT-4, Midjourney, Suno, etc."
              className="mt-1.5"
            />
            <p className="mt-1 text-xs text-muted-foreground">
              Comma-separated list. Helps the community understand how AI was used.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button type="submit" size="lg" disabled={loading} className="bg-brand-purple text-white hover:bg-brand-purple/90">
            <Upload className="mr-2 size-4" />
            {loading ? 'Publishing...' : 'Publish Game'}
          </Button>
          <Link href="/explore" className="text-sm text-muted-foreground hover:text-foreground">
            Cancel
          </Link>
        </div>

        <p className="text-xs text-muted-foreground">
          By submitting, you confirm this is your game and it can be embedded on GameLaunch. You can update or remove it anytime.
        </p>
      </form>
    </div>
  )
}
