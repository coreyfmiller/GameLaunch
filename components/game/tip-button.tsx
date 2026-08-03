'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'

interface TipButtonProps {
  gameSlug: string
  gameTitle: string
  developerAccountId: string | null
  developerName: string
}

const TIP_AMOUNTS = [
  { label: '$2', cents: 200 },
  { label: '$5', cents: 500 },
  { label: '$10', cents: 1000 },
]

export function TipButton({ gameSlug, gameTitle, developerAccountId, developerName }: TipButtonProps) {
  const [showAmounts, setShowAmounts] = useState(false)
  const [loading, setLoading] = useState(false)

  if (!developerAccountId) {
    return null // Don't show tip button if dev hasn't connected Stripe
  }

  async function handleTip(cents: number) {
    setLoading(true)
    try {
      const res = await fetch('/api/stripe/tip', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          gameId: gameSlug,
          gameTitle,
          developerAccountId,
          amount: cents,
        }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert(data.error || 'Something went wrong')
      }
    } catch {
      alert('Failed to create tip session')
    }
    setLoading(false)
  }

  if (!showAmounts) {
    return (
      <Button
        onClick={() => setShowAmounts(true)}
        variant="outline"
        className="border-brand-gold/30 text-brand-gold hover:bg-brand-gold/10"
      >
        <Heart className="mr-1.5 size-4" /> Tip {developerName}
      </Button>
    )
  }

  return (
    <div className="flex items-center gap-2">
      {TIP_AMOUNTS.map((tip) => (
        <Button
          key={tip.cents}
          onClick={() => handleTip(tip.cents)}
          disabled={loading}
          size="sm"
          variant="outline"
          className="border-brand-gold/30 text-brand-gold hover:bg-brand-gold/10"
        >
          {tip.label}
        </Button>
      ))}
      <Button
        onClick={() => setShowAmounts(false)}
        size="sm"
        variant="ghost"
        className="text-muted-foreground"
      >
        Cancel
      </Button>
    </div>
  )
}
