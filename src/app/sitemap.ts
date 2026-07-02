import type { MetadataRoute } from "next";
import { essays } from "#velite";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const publishedEssays = essays.filter((e) => !e.draft);
  const latestPublishedAt =
    publishedEssays.length > 0
      ? new Date(
          Math.max(...publishedEssays.map((e) => new Date(e.date).getTime())),
        )
      : new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: latestPublishedAt,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/writing"),
      lastModified: latestPublishedAt,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/projects"),
      lastModified: latestPublishedAt,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/experience"),
      lastModified: latestPublishedAt,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const essayRoutes: MetadataRoute.Sitemap = publishedEssays.map((e) => ({
    url: absoluteUrl(`/writing/${e.slug}`),
    lastModified: new Date(e.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...essayRoutes];
}
