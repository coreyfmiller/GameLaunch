import { redirect } from 'next/navigation'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { DeveloperDashboard } from '@/components/dashboard/developer-dashboard'

export const metadata = {
  title: 'Developer Dashboard — GameLaunch',
  description: 'Manage your games, track performance, and grow your audience.',
}

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login?next=/dashboard')
  }

  // Get profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  // Get their games with vote and comment counts
  const { data: games } = await supabase
    .from('games')
    .select('*')
    .eq('developer_id', user.id)
    .order('created_at', { ascending: false })

  // Get vote counts for each game
  const gameIds = (games || []).map((g: { id: string }) => g.id)
  let voteCounts: Record<string, number> = {}
  let commentCounts: Record<string, number> = {}

  if (gameIds.length > 0) {
    const { data: votes } = await supabase
      .from('votes')
      .select('game_id')
      .in('game_id', gameIds)

    const { data: comments } = await supabase
      .from('comments')
      .select('game_id')
      .in('game_id', gameIds)

    voteCounts = (votes || []).reduce((acc: Record<string, number>, v: { game_id: string }) => {
      acc[v.game_id] = (acc[v.game_id] || 0) + 1
      return acc
    }, {})

    commentCounts = (comments || []).reduce((acc: Record<string, number>, c: { game_id: string }) => {
      acc[c.game_id] = (acc[c.game_id] || 0) + 1
      return acc
    }, {})
  }

  return (
    <DeveloperDashboard
      profile={profile}
      games={games || []}
      voteCounts={voteCounts}
      commentCounts={commentCounts}
      email={user.email || ''}
    />
  )
}
