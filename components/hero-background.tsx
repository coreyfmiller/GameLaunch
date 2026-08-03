'use client'

import { useEffect, useState } from 'react'

type Particle = {
  left: number
  top: number
  size: number
  delay: number
  duration: number
}

function makeParticles(count: number): Particle[] {
  return Array.from({ length: count }).map(() => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 4,
    duration: Math.random() * 3 + 2,
  }))
}

export function HeroBackground() {
  // Generate random particles only on the client, after mount, to avoid
  // server/client hydration mismatches from Math.random().
  const [stars, setStars] = useState<Particle[]>([])
  const [pixels, setPixels] = useState<Particle[]>([])

  useEffect(() => {
    setStars(makeParticles(70))
    setPixels(makeParticles(18))
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* glow blobs */}
      <div className="absolute -left-32 top-10 size-96 rounded-full bg-brand-purple/20 blur-[120px]" />
      <div className="absolute -right-24 top-40 size-96 rounded-full bg-brand-blue/20 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 size-80 rounded-full bg-brand-gold/10 blur-[120px]" />

      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at 50% 40%, black 40%, transparent 75%)',
        }}
      />

      {/* stars */}
      {stars.map((s, i) => (
        <span
          key={`star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      {/* drifting pixel particles */}
      {pixels.map((p, i) => (
        <span
          key={`px-${i}`}
          className="absolute bg-brand-blue/60"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: 3,
            height: 3,
            animation: `drift ${p.duration + 6}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
