import Link from 'next/link'
import Image from 'next/image'
import { Globe, Gamepad2, MessageCircle } from 'lucide-react'

const columns = [
  {
    title: 'Platform',
    links: [
      { label: 'Explore', href: '/explore' },
      { label: 'Trending', href: '/trending' },
      { label: 'Leaderboard', href: '/leaderboard' },
      { label: 'Updates', href: '/updates' },
    ],
  },
  {
    title: 'Creators',
    links: [
      { label: 'Submit a Game', href: '/submit' },
      { label: 'Developer Dashboard', href: '/dashboard' },
      { label: 'Developers', href: '/developers' },
      { label: 'Funding', href: '/funding' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/' },
      { label: 'Blog', href: '/updates' },
      { label: 'Careers', href: '/' },
      { label: 'Contact', href: '/' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-5">
        <div className="col-span-2">
          <Image
            src="/gamelaunch-logo.png"
            alt="GameLaunch.ai"
            width={180}
            height={52}
            className="h-10 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            The launchpad for AI-built games. Discover it. Play it. Fund it. Launch it.
          </p>
          <div className="mt-5 flex gap-3">
            {[Globe, Gamepad2, MessageCircle].map((Icon, i) => (
              <Link
                key={i}
                href="/"
                className="flex size-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="size-4" />
              </Link>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="font-display text-sm font-semibold text-foreground">{col.title}</h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:px-6">
          <p>© 2026 GameLaunch.ai. All rights reserved.</p>
          <p>Built for developers, powered by players.</p>
        </div>
      </div>
    </footer>
  )
}
