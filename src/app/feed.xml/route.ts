import { essays } from "#velite"
import { absoluteUrl, siteConfig } from "@/lib/seo"

/** Escape the five XML predefined entities for safe inclusion in the feed. */
function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

export const dynamic = "force-static"

export function GET(): Response {
  const published = essays
    .filter((e) => !e.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const items = published
    .map((essay) => {
      const url = absoluteUrl(`/writing/${essay.slug}`)
      return `    <item>
      <title>${escapeXml(essay.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(essay.date).toUTCString()}</pubDate>
      ${essay.description ? `<description>${escapeXml(essay.description)}</description>` : ""}
    </item>`
    })
    .join("\n")

  const lastBuild =
    published.length > 0
      ? new Date(published[0].date).toUTCString()
      : new Date(0).toUTCString()

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteConfig.name)} — Writing</title>
    <link>${siteConfig.url}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>en</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${absoluteUrl("/feed.xml")}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
