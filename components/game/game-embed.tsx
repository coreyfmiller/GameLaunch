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

  // Give the iframe focus immediately when game starts so keyboard input goes to the game
  useEffect(() => {
    if (started && iframeRef.current) {
      // Small delay to let iframe load
      const timer = setTimeout(() => {
        iframeRef.current?.focus()
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [started])

  // Prevent spacebar from scrolling the page when game is active
  useEffect(() => {
    if (!started) return

    function handleKeyDown(e: KeyboardEvent) {
      // If the iframe has focus (or the container), prevent spacebar from scrolling
      if (e.code === 'Space' || e.key === ' ') {
        const active = document.activeElement
        if (
          active === iframeRef.current ||
          containerRef.current?.contains(active)
        ) {
          e.preventDefault()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [started])

  // Listen for fullscreen changes (e.g. user presses Escape)
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

  // Click on container gives iframe focus
  function handleContainerClick() {
    iframeRef.current?.focus()
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
            Click to load. Some games take a moment to start.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      onClick={handleContainerClick}
      className="relative w-full rounded-2xl border border-border overflow-hidden"
    >
      <div className="absolute right-2 top-2 z-10 flex gap-1">
        <Button
          onClick={(e) => { e.stopPropagation(); toggleFullscreen() }}
          size="icon"
          variant="secondary"
          className="size-8 opacity-70 hover:opacity-100"
          aria-label={fullscreen ? 'Exit fullscreen' : 'Fullscreen'}
          title="Fullscreen (recommended for keyboard games)"
        >
          {fullscreen ? <Minimize2 className="size-4" /> : <Maximize2 className="size-4" />}
        </Button>
      </div>
      <p className="absolute bottom-2 left-2 z-10 rounded bg-background/80 px-2 py-0.5 text-xs text-muted-foreground backdrop-blur">
        Click game to focus. Use fullscreen for best experience.
      </p>
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
