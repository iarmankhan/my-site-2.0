import Link from "next/link"
import { format } from "date-fns"
import { getAllWriting } from "@/lib/content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays, notes, and thoughts on building software and other things.",
}

export default function WritingPage() {
  const items = getAllWriting()

  return (
    <div className="animate-in">
      <h1 className="font-bold text-3xl tracking-tight">Writing</h1>
      <p className="mt-2 text-(--color-foreground-muted)">
        Posts and notes on building software, ideas, and whatever else comes to
        mind.
      </p>

      <div className="mt-10 space-y-8">
        {items.map((item) => (
          <article key={item.data.slug}>
            {item.type === "essay" ? (
              <Link href={`/writing/${item.data.slug}`} className="group block">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-medium group-hover:text-(--color-accent) transition-colors">
                      {item.data.title}
                    </h2>
                    {"description" in item.data && item.data.description && (
                      <p className="text-sm text-(--color-foreground-muted) mt-1">
                        {item.data.description}
                      </p>
                    )}
                  </div>
                  <time className="shrink-0 text-sm font-mono text-(--color-foreground-muted) tabular-nums mt-0.5">
                    {format(new Date(item.data.date), "MMM d, yyyy")}
                  </time>
                </div>
              </Link>
            ) : (
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h2 className="font-medium">{item.data.title}</h2>
                  <time className="shrink-0 text-sm font-mono text-(--color-foreground-muted) tabular-nums mt-0.5">
                    {format(new Date(item.data.date), "MMM d, yyyy")}
                  </time>
                </div>
                {"content" in item.data && (
                  <div
                    className="text-sm text-(--color-foreground-muted) mt-2 leading-relaxed prose"
                    dangerouslySetInnerHTML={{ __html: item.data.content }}
                  />
                )}
              </div>
            )}
          </article>
        ))}

        {items.length === 0 && (
          <p className="text-(--color-foreground-muted)">
            Nothing here yet. Check back soon.
          </p>
        )}
      </div>
    </div>
  )
}
