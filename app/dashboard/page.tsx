import type { Metadata } from 'next'
import { DashboardView } from '@/components/dashboard/dashboard-view'

export const metadata: Metadata = {
  title: 'Developer Dashboard — GameLaunch.ai',
  description: 'Manage your games, funding, and community from one place.',
}

export default function DashboardPage() {
  return <DashboardView />
}
