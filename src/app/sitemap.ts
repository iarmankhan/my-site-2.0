import type { MetadataRoute } from "next"
import { essays, notes } from "#velite"

export default function sitemap(): MetadataRoute.Sitemap {
  const essayEntries = essays
    .filter((e) => !e.draft)
    .map((e) => ({
      url: `https://armankhan.dev/writing/${e.slug}`,
      lastModified: new Date(e.date),
    }))

  return [
    { url: "https://armankhan.dev", lastModified: new Date() },
    { url: "https://armankhan.dev/writing", lastModified: new Date() },
    { url: "https://armankhan.dev/projects", lastModified: new Date() },
    { url: "https://armankhan.dev/experience", lastModified: new Date() },
    ...essayEntries,
  ]
}
