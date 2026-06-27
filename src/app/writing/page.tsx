import Link from "next/link";
import { format } from "date-fns";
import { getAllWriting } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays, notes, and thoughts on building software and other things.",
  alternates: { canonical: "/writing" },
  openGraph: {
    type: "website",
    url: "/writing",
    title: "Writing",
    description:
      "Essays, notes, and thoughts on building software and other things.",
  },
};

export default function WritingPage() {
  const items = getAllWriting();

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
                <h2 className="font-medium leading-snug text-balance transition-colors group-hover:text-(--color-accent)">
                  {item.data.title}
                </h2>
                <div className="mt-1 text-sm text-(--color-foreground-muted)">
                  <time className="tabular-nums">
                    {format(new Date(item.data.date), "MMM d, yyyy")}
                  </time>
                </div>
                {"description" in item.data && item.data.description && (
                  <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-(--color-foreground-muted)">
                    {item.data.description}
                  </p>
                )}
              </Link>
            ) : (
              <div>
                <h2 className="font-medium leading-snug text-balance">
                  {item.data.title}
                </h2>
                <div className="mt-1 text-sm text-(--color-foreground-muted)">
                  <time className="tabular-nums">
                    {format(new Date(item.data.date), "MMM d, yyyy")}
                  </time>
                </div>
                {"content" in item.data && (
                  <div
                    className="prose mt-2 max-w-[60ch] text-sm leading-relaxed text-(--color-foreground-muted)"
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
  );
}
