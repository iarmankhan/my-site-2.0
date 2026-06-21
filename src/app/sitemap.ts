import type { MetadataRoute } from "next"
import { essays } from "#velite"
import { absoluteUrl } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/writing"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/projects"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/experience"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ]

  const essayRoutes: MetadataRoute.Sitemap = essays
    .filter((e) => !e.draft)
    .map((e) => ({
      url: absoluteUrl(`/writing/${e.slug}`),
      lastModified: new Date(e.date),
      changeFrequency: "yearly",
      priority: 0.6,
    }))

  return [...staticRoutes, ...essayRoutes]
}
