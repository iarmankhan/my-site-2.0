"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/projects", label: "Work" },
  { href: "/writing", label: "Writing" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link href="/" className="site-name" aria-label="Arman Khan, home">
        Arman Khan
      </Link>
      <nav className="site-nav" aria-label="Main navigation">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={pathname.startsWith(link.href) ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://github.com/iarmankhan"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
