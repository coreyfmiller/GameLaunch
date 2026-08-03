'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import {
  Gamepad2, Plus, LogOut, Pencil, Trash2, ExternalLink,
  ArrowUp, MessageSquare, Globe, Sparkles, User,
} from 'lucide-react'

interface Profile {
  id: string
  username: string
  display_name: string | null
  bio: string | null
  avatar_url: string | null
  role: string
  stripe_account_id: string | null
  stripe_onboarded: boolean
}

interface Game {
  id: string
  slug: string
  title: string
  tagline: string
  genre: string
  cover_url: string | null
  game_url: string
  status: string
  ai_tools: string | null
  created_at: string
}

interface DeveloperDashboardProps {
  profile: Profile | null
  games: Game[]
  voteCounts: Record<string, number>
  commentCounts: Record<string, number>
  email: string
}

export function DeveloperDashboard({ profile, games, voteCounts, commentCounts, email }: DeveloperDashboardProps) {
  const [editingProfile, setEditingProfile] = useState(false)
  const [displayName, setDisplayName] = useState(profile?.display_name || '')
  const [bio, setBio] = useState(profile?.bio || '')
  const [saving, setSaving] = useState(false)

  const totalVotes = Object.values(voteCounts).reduce((a, b) => a + b, 0)
  const totalComments = Object.values(commentCounts).reduce((a, b) => a + b, 0)

  async function handleSaveProfile() {
    setSaving(true)
    const supabase = createClient()
    await supabase
      .from('profiles')
      .update({ display_name: displayName || null, bio: bio || null, role: 'developer' })
      .eq('id', profile?.id)
    setSaving(false)
    setEditingProfile(false)
    window.location.reload()
  }

  async function handleDeleteGame(gameId: string, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return
    const supabase = createClient()
    await supabase.from('games').delete().eq('id', gameId)
    window.location.reload()
  }

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="mt-1 text-muted-foreground">
            Manage your games and grow your audience.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/submit">
            <Button className="bg-brand-purple font-semibold text-white hover:bg-brand-purple/90">
              <Plus className="mr-1.5 size-4" /> Publish Game
            </Button>
          </Link>
          <Button onClick={handleSignOut} variant="ghost" size="icon" title="Sign out">
            <LogOut className="size-4" />
          </Button>
        </div>
      </div>

      {/* Stats row */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <StatCard icon={Gamepad2} label="Games" value={games.length} />
        <StatCard icon={ArrowUp} label="Total Votes" value={totalVotes} />
        <StatCard icon={MessageSquare} label="Comments" value={totalComments} />
        <StatCard icon={Globe} label="Status" value={games.filter(g => g.status === 'published').length + ' live'} />
      </div>

      {/* Profile card */}
      <div className="mt-8 rounded-2xl border border-border bg-card p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-brand-purple/10 text-brand-purple">
              <User className="size-5" />
            </div>
            <div>
              <h2 className="font-display font-bold">Developer Profile</h2>
              <p className="text-xs text-muted-foreground">{email}</p>
            </div>
          </div>
          {!editingProfile && (
            <Button onClick={() => setEditingProfile(true)} variant="outline" size="sm">
              <Pencil className="mr-1.5 size-3.5" /> Edit
            </Button>
          )}
        </div>

        {editingProfile ? (
          <div className="mt-5 space-y-4 border-t border-border pt-5">
            <div>
              <Label htmlFor="displayName">Display Name</Label>
              <Input
                id="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Your name or studio name"
                className="mt-1.5"
              />
              <p className="mt-1 text-xs text-muted-foreground">This is shown on your game pages and developer profile.</p>
            </div>
            <div>
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="What do you build? What AI tools do you use? Share your story."
                className="mt-1.5 min-h-[100px]"
                maxLength={500}
              />
              <p className="mt-1 text-xs text-muted-foreground">{bio.length}/500</p>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSaveProfile} disabled={saving} className="bg-brand-purple text-white hover:bg-brand-purple/90">
                {saving ? 'Saving...' : 'Save Profile'}
              </Button>
              <Button onClick={() => setEditingProfile(false)} variant="ghost">
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div className="mt-4 border-t border-border pt-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase text-muted-foreground">Name</p>
                <p className="mt-0.5 font-medium">{profile?.display_name || <span className="text-muted-foreground italic">Not set</span>}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase text-muted-foreground">Username</p>
                <p className="mt-0.5 font-medium">{profile?.username || '—'}</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-xs font-medium uppercase text-muted-foreground">Bio</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{profile?.bio || <span className="italic">No bio yet. Tell players about yourself.</span>}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Games list */}
      <div className="mt-8">
        <h2 className="font-display text-lg font-bold">Your Games</h2>

        {games.length === 0 ? (
          <div className="mt-4 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border py-20 text-center">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-brand-purple/10">
              <Sparkles className="size-8 text-brand-purple" />
            </div>
            <h3 className="mt-5 font-display text-xl font-bold">Publish your first game</h3>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Got an AI-made browser game? Share it with the community.
              You provide a URL, we handle discovery, voting, and feedback.
            </p>
            <Link href="/submit" className="mt-6">
              <Button size="lg" className="bg-brand-purple text-white hover:bg-brand-purple/90">
                <Plus className="mr-2 size-4" /> Publish a Game
              </Button>
            </Link>
            <p className="mt-4 text-xs text-muted-foreground">
              Takes about 2 minutes. Your game stays hosted wherever it is.
            </p>
          </div>
        ) : (
          <div className="mt-4 space-y-3">
            {games.map((game) => (
              <div
                key={game.id}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-border/80"
              >
                <div className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-secondary">
                  {game.cover_url ? (
                    <Image src={game.cover_url} alt={game.title} fill className="object-cover" sizes="64px" />
                  ) : (
                    <div className="flex size-full items-center justify-center">
                      <Gamepad2 className="size-6 text-muted-foreground" />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <Link href={`/game/${game.slug}`} className="font-medium hover:text-brand-purple truncate">
                      {game.title}
                    </Link>
                    <Badge
                      variant="outline"
                      className={game.status === 'published'
                        ? 'border-emerald-400/30 text-emerald-400'
                        : 'text-muted-foreground'
                      }
                    >
                      {game.status}
                    </Badge>
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground truncate">{game.tagline}</p>
                  <div className="mt-1.5 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <ArrowUp className="size-3" /> {voteCounts[game.id] || 0} votes
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="size-3" /> {commentCounts[game.id] || 0} comments
                    </span>
                    <span>{game.genre}</span>
                    {game.ai_tools && <span className="hidden sm:inline">· {game.ai_tools}</span>}
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0 opacity-0 transition-opacity group-hover:opacity-100">
                  <a href={game.game_url} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="size-8" title="Open game URL">
                      <ExternalLink className="size-3.5" />
                    </Button>
                  </a>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-8 text-red-400 hover:text-red-300 hover:bg-red-400/10"
                    title="Delete game"
                    onClick={() => handleDeleteGame(game.id, game.title)}
                  >
                    <Trash2 className="size-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function StatCard({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: number | string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className="flex items-center gap-2 text-muted-foreground">
        <Icon className="size-4" />
        <span className="text-xs font-medium uppercase">{label}</span>
      </div>
      <p className="mt-1.5 font-display text-2xl font-bold">{value}</p>
    </div>
  )
}
