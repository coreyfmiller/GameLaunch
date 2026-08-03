'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { MessageSquare, Send } from 'lucide-react'

interface Comment {
  id: string
  body: string
  created_at: string
  profiles: {
    username: string
    display_name: string | null
    avatar_url: string | null
  }
}

interface CommentsSectionProps {
  gameId: string
}

export function CommentsSection({ gameId }: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<{ id: string } | null>(null)

  useEffect(() => {
    async function load() {
      const supabase = createClient()

      // Get current user
      const { data: { user: currentUser } } = await supabase.auth.getUser()
      if (currentUser) setUser(currentUser)

      // Fetch comments
      const { data } = await supabase
        .from('comments')
        .select('id, body, created_at, profiles(username, display_name, avatar_url)')
        .eq('game_id', gameId)
        .order('created_at', { ascending: false })
        .limit(50)

      if (data) setComments(data as unknown as Comment[])
    }
    load()
  }, [gameId])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!newComment.trim()) return

    const supabase = createClient()
    const { data: { user: currentUser } } = await supabase.auth.getUser()

    if (!currentUser) {
      window.location.href = '/login?next=' + window.location.pathname
      return
    }

    setLoading(true)

    const { data, error } = await supabase
      .from('comments')
      .insert({
        user_id: currentUser.id,
        game_id: gameId,
        body: newComment.trim(),
      })
      .select('id, body, created_at, profiles(username, display_name, avatar_url)')
      .single()

    if (!error && data) {
      setComments((prev) => [data as unknown as Comment, ...prev])
      setNewComment('')
    }
    setLoading(false)
  }

  function timeAgo(dateStr: string) {
    const diff = Date.now() - new Date(dateStr).getTime()
    const minutes = Math.floor(diff / 60000)
    if (minutes < 60) return `${minutes}m ago`
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours}h ago`
    const days = Math.floor(hours / 24)
    return `${days}d ago`
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <MessageSquare className="size-5" />
        <h3 className="font-display text-lg font-bold">
          Comments {comments.length > 0 && `(${comments.length})`}
        </h3>
      </div>

      {/* Comment form */}
      <form onSubmit={handleSubmit} className="flex gap-3">
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder={user ? 'Leave a comment for the developer...' : 'Sign in to comment'}
          className="min-h-[80px] flex-1"
          disabled={!user}
        />
        <Button
          type="submit"
          disabled={loading || !newComment.trim() || !user}
          size="icon"
          className="h-auto self-end bg-brand-purple text-white hover:bg-brand-purple/90"
        >
          <Send className="size-4" />
        </Button>
      </form>

      {/* Comments list */}
      {comments.length === 0 ? (
        <p className="text-sm text-muted-foreground">No comments yet. Be the first!</p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                  {comment.profiles?.display_name || comment.profiles?.username || 'Anonymous'}
                </span>
                <span className="text-xs text-muted-foreground">
                  {timeAgo(comment.created_at)}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {comment.body}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
