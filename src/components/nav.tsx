"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"

const links = [
  {
    href: "/",
    label: "Home",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    href: "/writing",
    label: "Writing",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    href: "/projects",
    label: "Projects",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    href: "/experience",
    label: "Experience",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
]

export function Nav() {
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 rounded-full border border-(--color-border) bg-(--color-background)/80 px-2 py-2 shadow-lg backdrop-blur-xl"
      role="navigation"
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          aria-label={link.label}
          title={link.label}
          className={`relative flex items-center gap-1.5 rounded-full px-3 sm:px-4 py-1.5 text-sm transition-all ${
            isActive(link.href)
              ? "bg-(--color-foreground) text-(--color-background) font-medium"
              : "text-(--color-foreground-muted) hover:text-(--color-foreground)"
          }`}
        >
          <span className="sm:hidden">{link.icon}</span>
          <span className="hidden sm:inline">{link.label}</span>
        </Link>
      ))}
      <div className="mx-1 h-4 w-px bg-(--color-border)" />
      <ThemeToggle />
    </nav>
  )
}
