import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { essays } from "#velite";
import { getEssayBySlug, getEssaysBySeries } from "@/lib/content";
import { MDXContent } from "@/components/mdx-content";
import { JsonLd } from "@/components/json-ld";
import { absoluteUrl, siteConfig } from "@/lib/seo";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) return {};

  const title = essay.seoTitle ?? essay.title;
  const description = essay.seoDescription ?? essay.description;
  const url = `/writing/${essay.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: essay.title,
      description: essay.description,
      url,
      publishedTime: new Date(essay.date).toISOString(),
      authors: [siteConfig.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: essay.title,
      description: essay.description,
    },
  };
}

export function generateStaticParams() {
  return essays.filter((e) => !e.draft).map((e) => ({ slug: e.slug }));
}

export default async function EssayPage({ params }: Props) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) notFound();

  const url = absoluteUrl(`/writing/${essay.slug}`);
  const publishedIso = new Date(essay.date).toISOString();
  const headline = essay.seoTitle ?? essay.title;
  const seriesEssays = essay.series ? getEssaysBySeries(essay.series) : [];
  const seriesIndex = seriesEssays.findIndex(
    (seriesEssay) => seriesEssay.slug === essay.slug,
  );
  const previousSeriesEssay =
    seriesIndex > 0 ? seriesEssays[seriesIndex - 1] : undefined;
  const nextSeriesEssay =
    seriesIndex >= 0 && seriesIndex < seriesEssays.length - 1
      ? seriesEssays[seriesIndex + 1]
      : undefined;
  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    alternativeHeadline: headline === essay.title ? undefined : essay.title,
    description: essay.seoDescription ?? essay.description,
    datePublished: publishedIso,
    dateModified: publishedIso,
    image: absoluteUrl(`/writing/${essay.slug}/opengraph-image`),
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.url,
    },
  };

  return (
    <article className="animate-in">
      <JsonLd data={blogPosting} />
      <div className="mb-8">
        <Link
          href="/writing"
          className="text-sm text-(--color-foreground-muted) hover:text-(--color-accent) transition-colors"
        >
          ← Back to writing
        </Link>
      </div>

      <header className="mb-10">
        <h1 className="font-bold text-3xl sm:text-4xl tracking-tight leading-tight text-balance">
          {essay.title}
        </h1>
        <div className="mt-4 flex items-center gap-2 text-sm text-(--color-foreground-muted)">
          <time className="tabular-nums">
            {format(new Date(essay.date), "MMM d, yyyy")}
          </time>
          {essay.metadata.readingTime && (
            <>
              <span
                aria-hidden
                className="size-1 rounded-full bg-(--color-foreground-muted)/50"
              />
              <span>{Math.ceil(essay.metadata.readingTime)} min read</span>
            </>
          )}
        </div>
      </header>

      {essay.series && seriesEssays.length > 1 && (
        <section className="mb-10 border-l border-(--color-border) pl-4">
          <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-(--color-foreground-muted)">
            Part of {essay.series}
          </h2>
          <p className="mt-1 text-sm text-(--color-foreground-muted)">
            {seriesIndex + 1} of {seriesEssays.length}
          </p>
          {(previousSeriesEssay || nextSeriesEssay) && (
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {previousSeriesEssay && (
                <Link
                  href={`/writing/${previousSeriesEssay.slug}`}
                  className="text-(--color-foreground-muted) hover:text-(--color-accent) transition-colors"
                >
                  ← {previousSeriesEssay.title}
                </Link>
              )}
              {nextSeriesEssay && (
                <Link
                  href={`/writing/${nextSeriesEssay.slug}`}
                  className="text-(--color-foreground-muted) hover:text-(--color-accent) transition-colors"
                >
                  {nextSeriesEssay.title} →
                </Link>
              )}
            </div>
          )}
        </section>
      )}

      <div className="prose">
        <MDXContent code={essay.body} />
      </div>
    </article>
  );
}
