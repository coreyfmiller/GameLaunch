'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, Search, Rocket, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ButtonLink } from '@/components/ui/button-link'
import { cn } from '@/lib/utils'

const nav = [
  { label: 'Home', href: '/' },
  { label: 'Explore', href: '/explore' },
  { label: 'Trending', href: '/trending' },
  { label: 'Funding', href: '/funding' },
  { label: 'Developers', href: '/developers' },
  { label: 'Leaderboard', href: '/leaderboard' },
  { label: 'Updates', href: '/updates' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/gamelaunch-logo.png"
            alt="GameLaunch.ai"
            width={168}
            height={48}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'bg-secondary text-foreground'
                    : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex" aria-label="Search">
            <Search className="size-5" />
          </Button>
          <ButtonLink
            href="/submit"
            className="hidden bg-brand-gold font-semibold text-black hover:bg-brand-gold/90 sm:inline-flex"
          >
            <Rocket className="size-4" />
            Submit Game
          </ButtonLink>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink
              href="/submit"
              onClick={() => setOpen(false)}
              className="mt-2 bg-brand-gold font-semibold text-black hover:bg-brand-gold/90"
            >
              <Rocket className="size-4" />
              Submit Game
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  )
}
