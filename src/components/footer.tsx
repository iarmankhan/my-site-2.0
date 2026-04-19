const socials = [
  { label: "Email", href: "mailto:arman@somethings.com" },
  { label: "X", href: "https://x.com/ArmansCode" },
  { label: "GitHub", href: "https://github.com/iarmankhan" },
  { label: "LinkedIn", href: "https://linkedin.com/in/iarmankhan" },
]

export function Footer() {
  return (
    <footer className="border-t border-(--color-border) pt-8 pb-20 mt-16">
      <div className="flex gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("mailto") ? undefined : "_blank"}
            rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            className="text-sm text-(--color-foreground-muted) hover:text-(--color-accent) transition-colors"
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
