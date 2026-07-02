import type { ReactNode } from "react";
import { siteConfig } from "@/lib/seo";

const RssIcon = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M4 11a9 9 0 0 1 9 9" />
    <path d="M4 4a16 16 0 0 1 16 16" />
    <circle cx="5" cy="19" r="1" />
  </svg>
);

const XIcon = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GitHubIcon = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
  </svg>
);

const EmailIcon = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const links: { label: string; href: string; icon: ReactNode }[] = [
  { label: "RSS", href: "/feed.xml", icon: RssIcon },
  { label: "X", href: siteConfig.author.twitterUrl, icon: XIcon },
  { label: "GitHub", href: siteConfig.author.github, icon: GitHubIcon },
  {
    label: "Email",
    href: `mailto:${siteConfig.author.email}`,
    icon: EmailIcon,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 pb-28 text-sm text-foreground-muted">
      <span>
        © {year} {siteConfig.name}
      </span>
      <div className="flex gap-4">
        {links.map((link) => {
          const isMail = link.href.startsWith("mailto");
          const isInternal = link.href.startsWith("/");
          return (
            <a
              key={link.label}
              href={link.href}
              target={isMail || isInternal ? undefined : "_blank"}
              rel={isMail || isInternal ? undefined : "noopener noreferrer"}
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              {link.icon}
              {link.label}
            </a>
          );
        })}
      </div>
    </footer>
  );
}
