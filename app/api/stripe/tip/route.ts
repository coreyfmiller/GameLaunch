import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { createServerSupabaseClient } from '@/lib/supabase/server'

// POST: Create a checkout session to tip a developer
export async function POST(request: Request) {
  const { gameId, gameTitle, developerAccountId, amount } = await request.json()

  if (!developerAccountId) {
    return NextResponse.json(
      { error: 'This developer has not enabled tips yet.' },
      { status: 400 }
    )
  }

  if (!amount || amount < 100) {
    return NextResponse.json(
      { error: 'Minimum tip is $1.00' },
      { status: 400 }
    )
  }

  const supabase = await createServerSupabaseClient()
  const { data: { user } } = await supabase.auth.getUser()

  const origin = process.env.NEXT_PUBLIC_SITE_URL || 'https://gamelaunch-nine.vercel.app'

  // Create a checkout session with direct charge to the connected account
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: `Tip for ${gameTitle}`,
            description: `Supporting the developer on GameLaunch`,
          },
          unit_amount: amount, // in cents
        },
        quantity: 1,
      },
    ],
    payment_intent_data: {
      // Direct charge: money goes straight to the dev
      // 0% platform fee for now
      transfer_data: {
        destination: developerAccountId,
      },
    },
    success_url: `${origin}/game/${gameId}?tipped=true`,
    cancel_url: `${origin}/game/${gameId}`,
    ...(user?.email && { customer_email: user.email }),
  })

  return NextResponse.json({ url: session.url })
}
