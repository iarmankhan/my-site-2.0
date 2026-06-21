const socials = [
  { label: "Email", href: "mailto:work.armankhan@gmail.com" },
  { label: "X", href: "https://x.com/codingwitharman" },
  { label: "GitHub", href: "https://github.com/iarmankhan" },
  { label: "LinkedIn", href: "https://linkedin.com/in/iarmankhan" },
];

export function Footer() {
  return (
    <footer className="border-t border-border pt-8 pb-20 mt-16">
      <div className="flex gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("mailto") ? undefined : "_blank"}
            rel={
              s.href.startsWith("mailto") ? undefined : "noopener noreferrer"
            }
            className="text-sm text-foreground-muted hover:text-accent transition-colors"
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
