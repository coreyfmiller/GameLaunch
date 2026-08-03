import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { GameEmbed } from '@/components/game/game-embed'
import { VoteButton } from '@/components/game/vote-button'
import { CommentsSection } from '@/components/game/comments-section'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { getGame, games } from '@/lib/data'

export function generateStaticParams() {
  return games.map((g) => ({ slug: g.slug }))
}

export const dynamicParams = true
export const revalidate = 60

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  // Try Supabase first
  const supabase = await createServerSupabaseClient()
  const { data: dbGame } = await supabase
    .from('games')
    .select('title, tagline')
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle() as { data: { title: string; tagline: string } | null }

  if (dbGame) {
    return {
      title: `${dbGame.title} — GameLaunch`,
      description: dbGame.tagline,
    }
  }

  // Fall back to static
  const game = getGame(slug)
  if (!game) return { title: 'Game not found — GameLaunch' }
  return {
    title: `${game.title} — GameLaunch`,
    description: game.tagline,
  }
}

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  // Try Supabase first
  const supabase = await createServerSupabaseClient()

  const { data: dbGame } = await supabase
    .from('games')
    .select(`
      id, slug, title, tagline, description, genre, cover_url, game_url,
      developer_id, status, ai_tools, created_at,
      profiles(username, display_name, avatar_url)
    `)
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle() as { data: {
      id: string; slug: string; title: string; tagline: string;
      description: string | null; genre: string; cover_url: string | null;
      game_url: string; developer_id: string; status: string;
      ai_tools: string | null; created_at: string;
      profiles: { username: string; display_name: string | null; avatar_url: string | null } | null
    } | null }

  // Get vote count for DB game
  let voteCount = 0
  if (dbGame) {
    const { count } = await supabase
      .from('votes')
      .select('*', { count: 'exact', head: true })
      .eq('game_id', dbGame.id)
    voteCount = count ?? 0
  }

  // Fall back to static data if not in DB
  const staticGame = !dbGame ? getGame(slug) : null
  if (!dbGame && !staticGame) notFound()

  // Normalize data
  const game = dbGame
    ? {
        id: dbGame.id,
        slug: dbGame.slug,
        title: dbGame.title,
        tagline: dbGame.tagline,
        description: dbGame.description,
        genre: dbGame.genre,
        cover: dbGame.cover_url,
        gameUrl: dbGame.game_url,
        developer: dbGame.profiles?.display_name || dbGame.profiles?.username || 'Unknown',
        developerSlug: dbGame.profiles?.username || '',
        aiTools: dbGame.ai_tools,
        createdAt: dbGame.created_at,
        isDbGame: true as const,
      }
    : {
        id: staticGame!.slug,
        slug: staticGame!.slug,
        title: staticGame!.title,
        tagline: staticGame!.tagline,
        description: staticGame!.description,
        genre: staticGame!.genre,
        cover: staticGame!.cover,
        gameUrl: staticGame!.playUrl,
        developer: staticGame!.developer,
        developerSlug: staticGame!.developerSlug,
        aiTools: null,
        createdAt: staticGame!.createdAt,
        isDbGame: false as const,
      }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      {/* Game embed */}
      <GameEmbed gameUrl={game.gameUrl} title={game.title} />

      {/* Game info */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          {game.cover && (
            <div className="relative size-16 shrink-0 overflow-hidden rounded-xl border border-border">
              <Image
                src={game.cover}
                alt={game.title}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
          )}
          <div>
            <h1 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              {game.title}
            </h1>
            <p className="mt-0.5 text-sm text-muted-foreground">
              by{' '}
              <span className="font-medium text-foreground">{game.developer}</span>
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Badge className="bg-secondary text-foreground">{game.genre}</Badge>
              {game.aiTools && (
                <Badge variant="outline" className="text-xs">
                  AI: {game.aiTools}
                </Badge>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {game.isDbGame && (
            <VoteButton gameId={game.id} initialCount={voteCount} />
          )}
          <Button size="sm" variant="outline" aria-label="Share">
            <Share2 className="size-4" />
          </Button>
        </div>
      </div>

      {/* Tagline */}
      <p className="mt-4 text-lg text-muted-foreground">{game.tagline}</p>

      {/* Description */}
      {game.description && (
        <div className="mt-6">
          <h2 className="mb-2 font-display text-lg font-bold">About</h2>
          <p className="leading-relaxed text-muted-foreground whitespace-pre-line">
            {game.description}
          </p>
        </div>
      )}

      {/* Meta */}
      <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
        <Calendar className="size-3.5" />
        Added {new Date(game.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      </p>

      {/* Comments (only for DB games) */}
      {game.isDbGame && (
        <div className="mt-10 border-t border-border pt-8">
          <CommentsSection gameId={game.id} />
        </div>
      )}

      {/* For static games, show a link to the external page */}
      {!game.isDbGame && (
        <div className="mt-10 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            This game is hosted externally.{' '}
            <a
              href={game.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-purple hover:underline"
            >
              Play on itch.io
            </a>
          </p>
        </div>
      )}
    </div>
  )
}
