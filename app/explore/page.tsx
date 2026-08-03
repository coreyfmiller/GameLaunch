import type { Metadata } from 'next'
import { ExploreView } from '@/components/explore/explore-view'

export const metadata: Metadata = {
  title: 'Explore Games — GameLaunch.ai',
  description: 'Discover AI-built games across every genre and stage of development.',
}

export default function ExplorePage() {
  return <ExploreView />
}
