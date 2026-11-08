import Link from "next/link";
import { format } from "date-fns";
import { getAllWriting } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays and notes on building software and other things.",
  alternates: { canonical: "/writing" },
  openGraph: {
    type: "website",
    url: "/writing",
    title: "Writing",
    description: "Essays and notes on building software and other things.",
  },
};

export default function WritingPage() {
  const items = getAllWriting();

  return (
    <div className="editorial-page">
      <p className="page-kicker">Ideas and notes</p>
      <h1 className="page-title">Writing</h1>
      <p className="page-intro">
        Posts on software, the things I build, and whatever else I&apos;m
        thinking through.
      </p>
      <div className="editorial-list editorial-section">
        {items.map((item) => (
          <article key={item.data.slug} className="editorial-item">
            {item.type === "essay" ? (
              <Link href={`/writing/${item.data.slug}`} className="block">
                <h2 className="editorial-item-title">{item.data.title} ↗</h2>
                <p className="editorial-item-meta">
                  <time className="tabular-nums">
                    {format(new Date(item.data.date), "MMM d, yyyy")}
                  </time>
                </p>
                {"description" in item.data && item.data.description && (
                  <p className="editorial-item-desc">{item.data.description}</p>
                )}
              </Link>
            ) : (
              <div>
                <h2 className="editorial-item-title">{item.data.title}</h2>
                <p className="editorial-item-meta">
                  <time className="tabular-nums">
                    {format(new Date(item.data.date), "MMM d, yyyy")}
                  </time>
                </p>
                {"content" in item.data && (
                  <div
                    className="editorial-item-desc prose"
                    dangerouslySetInnerHTML={{ __html: item.data.content }}
                  />
                )}
              </div>
            )}
          </article>
        ))}
        {items.length === 0 && (
          <p className="editorial-item">Nothing here yet.</p>
        )}
      </div>
    </div>
  );
}
