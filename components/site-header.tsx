'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Menu, X, Rocket, LayoutDashboard, LogIn } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ButtonLink } from '@/components/ui/button-link'
import { cn } from '@/lib/utils'

const nav = [
  { label: 'Explore', href: '/explore' },
  { label: 'Trending', href: '/trending' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState<{ id: string; email?: string } | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data: { user: u } }) => {
      setUser(u ? { id: u.id, email: u.email ?? undefined } : null)
      setLoaded(true)
    })
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/gamelaunch-logo.png"
            alt="GameLaunch"
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
          {loaded && (
            <>
              {user ? (
                <>
                  <ButtonLink
                    href="/dashboard"
                    variant="ghost"
                    className="hidden sm:inline-flex"
                  >
                    <LayoutDashboard className="size-4" />
                    Dashboard
                  </ButtonLink>
                  <ButtonLink
                    href="/submit"
                    className="hidden bg-brand-purple font-semibold text-white hover:bg-brand-purple/90 sm:inline-flex"
                  >
                    <Rocket className="size-4" />
                    Publish Game
                  </ButtonLink>
                </>
              ) : (
                <>
                  <ButtonLink
                    href="/login"
                    variant="ghost"
                    className="hidden sm:inline-flex"
                  >
                    <LogIn className="size-4" />
                    Sign in
                  </ButtonLink>
                  <ButtonLink
                    href="/login?next=/submit"
                    className="hidden bg-brand-purple font-semibold text-white hover:bg-brand-purple/90 sm:inline-flex"
                  >
                    <Rocket className="size-4" />
                    Publish Game
                  </ButtonLink>
                </>
              )}
            </>
          )}
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
            {user ? (
              <>
                <Link href="/dashboard" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">
                  Dashboard
                </Link>
                <Link href="/submit" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">
                  Publish Game
                </Link>
              </>
            ) : (
              <Link href="/login" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">
                Sign in
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
