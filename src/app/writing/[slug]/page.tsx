import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import { essays } from "#velite";
import { getEssayBySlug, getEssaysBySeries } from "@/lib/content";
import { MDXContent } from "@/components/mdx-content";
import { ArticleProgress } from "@/components/article-progress";
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
    <article className="interior-page article-page">
      <JsonLd data={blogPosting} />
      <ArticleProgress />
      <div>
        <Link href="/writing" className="article-back">
          ← Writing
        </Link>
      </div>

      <header>
        <h1 className="page-title">{essay.title}</h1>
        <div className="article-meta flex items-center gap-2">
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
        <nav className="series-nav" aria-label={`${essay.series} series`}>
          <p>
            {essay.series} · {seriesIndex + 1} of {seriesEssays.length}
          </p>
          {(previousSeriesEssay || nextSeriesEssay) && (
            <div className="series-links">
              {previousSeriesEssay && (
                <Link
                  href={`/writing/${previousSeriesEssay.slug}`}
                  className="text-link"
                >
                  ← {previousSeriesEssay.title}
                </Link>
              )}
              {nextSeriesEssay && (
                <Link
                  href={`/writing/${nextSeriesEssay.slug}`}
                  className="text-link"
                >
                  {nextSeriesEssay.title} →
                </Link>
              )}
            </div>
          )}
        </nav>
      )}

      <div className="prose article-body">
        <MDXContent code={essay.body} />
      </div>
      <footer className="article-endnote">
        <p>Something useful, or something I got wrong?</p>
        <a
          href={`mailto:${siteConfig.author.email}?subject=${encodeURIComponent(`About: ${essay.title}`)}`}
          className="text-link"
        >
          Tell me ↗
        </a>
      </footer>
    </article>
  );
}
