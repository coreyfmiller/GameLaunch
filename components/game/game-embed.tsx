'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Maximize2, Minimize2, Play } from 'lucide-react'

interface GameEmbedProps {
  gameUrl: string
  title: string
}

export function GameEmbed({ gameUrl, title }: GameEmbedProps) {
  const [started, setStarted] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Auto-focus iframe when game starts
  useEffect(() => {
    if (started && iframeRef.current) {
      const timer = setTimeout(() => {
        iframeRef.current?.focus()
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [started])

  // Track fullscreen state
  useEffect(() => {
    function onFullscreenChange() {
      setFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [])

  function toggleFullscreen() {
    const el = containerRef.current
    if (!el) return
    if (!document.fullscreenElement) {
      el.requestFullscreen()
    } else {
      document.exitFullscreen()
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
            Click the game after it loads to give it keyboard focus
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-2xl border border-border overflow-hidden"
    >
      <div className="absolute right-2 top-2 z-10">
        <Button
          onClick={toggleFullscreen}
          size="icon"
          variant="secondary"
          className="size-8 opacity-70 hover:opacity-100"
          aria-label={fullscreen ? 'Exit fullscreen' : 'Fullscreen'}
          title="Fullscreen"
        >
          {fullscreen ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
        </Button>
      </div>
      <iframe
        ref={iframeRef}
        src={gameUrl}
        title={title}
        className="aspect-video w-full"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        allow="autoplay; fullscreen; gamepad; keyboard-map"
        tabIndex={0}
      />
    </div>
  )
}
