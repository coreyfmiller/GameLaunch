'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-react'

interface VoteButtonProps {
  gameId: string
  initialCount: number
}

export function VoteButton({ gameId, initialCount }: VoteButtonProps) {
  const [voted, setVoted] = useState(false)
  const [count, setCount] = useState(initialCount)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function checkVote() {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      const { data } = await supabase
        .from('votes')
        .select('id')
        .eq('user_id', user.id)
        .eq('game_id', gameId)
        .maybeSingle()

      if (data) setVoted(true)
    }
    checkVote()
  }, [gameId])

  async function handleVote() {
    setLoading(true)
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      window.location.href = '/login?next=' + window.location.pathname
      return
    }

    if (voted) {
      // Remove vote
      await supabase
        .from('votes')
        .delete()
        .eq('user_id', user.id)
        .eq('game_id', gameId)
      setVoted(false)
      setCount((c) => c - 1)
    } else {
      // Add vote
      await supabase
        .from('votes')
        .insert({ user_id: user.id, game_id: gameId })
      setVoted(true)
      setCount((c) => c + 1)
    }
    setLoading(false)
  }

  return (
    <Button
      onClick={handleVote}
      disabled={loading}
      variant={voted ? 'default' : 'outline'}
      className={voted ? 'bg-brand-purple text-white hover:bg-brand-purple/90' : ''}
    >
      <ArrowUp className="mr-1 size-4" />
      {count}
    </Button>
  )
}
