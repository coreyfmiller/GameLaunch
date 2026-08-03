'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Maximize2, Minimize2, Play } from 'lucide-react'

interface GameEmbedProps {
  gameUrl: string
  title: string
}

export function GameEmbed({ gameUrl, title }: GameEmbedProps) {
  const [started, setStarted] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)

  function toggleFullscreen() {
    const el = document.getElementById('game-frame-container')
    if (!el) return

    if (!document.fullscreenElement) {
      el.requestFullscreen()
      setFullscreen(true)
    } else {
      document.exitFullscreen()
      setFullscreen(false)
    }
  }

  if (!started) {
    return (
      <div className="relative flex aspect-video w-full items-center justify-center rounded-2xl border border-border bg-card">
        <div className="text-center">
          <Button
            onClick={() => setStarted(true)}
            size="lg"
            className="bg-brand-purple text-white hover:bg-brand-purple/90 glow-purple"
          >
            <Play className="mr-2 size-5" /> Play {title}
          </Button>
          <p className="mt-3 text-xs text-muted-foreground">
            Game loads in an embedded frame
          </p>
        </div>
      </div>
    )
  }

  return (
    <div id="game-frame-container" className="relative w-full rounded-2xl border border-border overflow-hidden">
      <div className="absolute right-2 top-2 z-10">
        <Button
          onClick={toggleFullscreen}
          size="icon"
          variant="secondary"
          className="size-8 opacity-70 hover:opacity-100"
          aria-label={fullscreen ? 'Exit fullscreen' : 'Fullscreen'}
        >
          {fullscreen ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
        </Button>
      </div>
      <iframe
        src={gameUrl}
        title={title}
        className="aspect-video w-full"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        allow="autoplay; fullscreen; gamepad; keyboard-map"
        loading="lazy"
      />
    </div>
  )
}
