'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function AuthCallbackPage() {
  const router = useRouter()

  useEffect(() => {
    const supabase = createClient()

    // Handle the OAuth callback - Supabase client will pick up tokens from the URL hash
    supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        router.push('/dashboard')
      }
    })

    // Also try to get session in case tokens are already processed
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.push('/dashboard')
      }
    })
  }, [router])

  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <p className="text-muted-foreground">Signing you in...</p>
    </div>
  )
}
