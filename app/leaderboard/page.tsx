import type { Metadata } from 'next'
import { LeaderboardView } from '@/components/leaderboard/leaderboard-view'

export const metadata: Metadata = {
  title: 'Leaderboards — GameLaunch.ai',
  description: 'The top AI-built games ranked by the community.',
}

export default function LeaderboardPage() {
  return <LeaderboardView />
}
