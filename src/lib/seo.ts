/**
 * Central SEO / site-identity config.
 *
 * Single source of truth for the canonical origin, author identity, and social
 * handles so metadata, sitemap, RSS, and structured data stay in sync.
 */

export const siteConfig = {
  name: "Arman Khan",
  url: "https://arman.wtf",
  title: "Arman Khan | Engineer, founder and open source developer",
  description:
    "Arman builds products and developer tools, runs Plixy.tech and works as a principal and founding engineer at Somethings.",
  locale: "en_US",
  author: {
    name: "Arman Khan",
    email: "work.armankhan@gmail.com",
    twitter: "@codingwitharman",
    github: "https://github.com/iarmankhan",
    linkedin: "https://linkedin.com/in/iarmankhan",
    twitterUrl: "https://x.com/codingwitharman",
  },
} as const;

/** Resolve a site-relative path to an absolute canonical URL. */
export function absoluteUrl(path = ""): string {
  return new URL(path, siteConfig.url).toString();
}
