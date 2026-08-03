import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { createServerSupabaseClient } from '@/lib/supabase/server'

// POST: Create a Stripe Connect account and return the onboarding link
export async function POST() {
  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  // Check if user already has a connected account
  const { data: profile } = await supabase
    .from('profiles')
    .select('stripe_account_id, stripe_onboarded')
    .eq('id', user.id)
    .single()

  let accountId = profile?.stripe_account_id

  // Create a new Connect Express account if they don't have one
  if (!accountId) {
    const account = await stripe.accounts.create({
      type: 'express',
      email: user.email,
      capabilities: {
        transfers: { requested: true },
      },
    })
    accountId = account.id

    // Save account ID to profile
    await supabase
      .from('profiles')
      .update({ stripe_account_id: accountId })
      .eq('id', user.id)
  }

  // Create an onboarding link
  const origin = process.env.NEXT_PUBLIC_SITE_URL || 'https://gamelaunch-nine.vercel.app'
  const accountLink = await stripe.accountLinks.create({
    account: accountId,
    refresh_url: `${origin}/dashboard?stripe=refresh`,
    return_url: `${origin}/dashboard?stripe=complete`,
    type: 'account_onboarding',
  })

  return NextResponse.json({ url: accountLink.url })
}
