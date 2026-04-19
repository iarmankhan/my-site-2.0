import { notFound } from "next/navigation"
import Link from "next/link"
import { format } from "date-fns"
import { essays } from "#velite"
import { getEssayBySlug } from "@/lib/content"
import { MDXContent } from "@/components/mdx-content"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const essay = getEssayBySlug(slug)
  if (!essay) return {}
  return {
    title: essay.title,
    description: essay.description,
  }
}

export function generateStaticParams() {
  return essays
    .filter((e) => !e.draft)
    .map((e) => ({ slug: e.slug }))
}

export default async function EssayPage({ params }: Props) {
  const { slug } = await params
  const essay = getEssayBySlug(slug)
  if (!essay) notFound()

  return (
    <article className="animate-in">
      <div className="mb-8">
        <Link
          href="/writing"
          className="text-sm text-(--color-foreground-muted) hover:text-(--color-accent) transition-colors"
        >
          ← Back to writing
        </Link>
      </div>

      <header className="mb-10">
        <h1 className="font-bold text-3xl sm:text-4xl tracking-tight leading-tight">
          {essay.title}
        </h1>
        <div className="mt-3 flex items-center gap-3 text-sm text-(--color-foreground-muted)">
          <time className="font-mono tabular-nums">
            {format(new Date(essay.date), "MMMM d, yyyy")}
          </time>
          {essay.metadata.readingTime && (
            <>
              <span>·</span>
              <span>{Math.ceil(essay.metadata.readingTime)} min read</span>
            </>
          )}
        </div>
      </header>

      <div className="prose">
        <MDXContent code={essay.body} />
      </div>
    </article>
  )
}
