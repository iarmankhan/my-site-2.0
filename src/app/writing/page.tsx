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
    <div className="interior-page">
      <header className="interior-header">
        <h1 className="page-title">Writing</h1>
        <p className="page-intro">
          Notes on building software, the decisions behind it, and ideas still
          in progress.
        </p>
      </header>
      <div className="entry-list writing-list">
        {items.map((item) => (
          <article key={item.data.slug} className="writing-entry">
            <time
              className="writing-date tabular-nums"
              dateTime={item.data.date}
            >
              {format(new Date(item.data.date), "MMM d, yyyy")}
            </time>
            {item.type === "essay" ? (
              <Link
                href={`/writing/${item.data.slug}`}
                className="writing-entry-content"
              >
                <h2 className="entry-title">
                  {item.data.title} <span className="entry-arrow">↗</span>
                </h2>
              </Link>
            ) : (
              <div className="writing-entry-content">
                <h2 className="entry-title">{item.data.title}</h2>
                {"content" in item.data && (
                  <div
                    className="entry-description prose"
                    dangerouslySetInnerHTML={{ __html: item.data.content }}
                  />
                )}
              </div>
            )}
          </article>
        ))}
        {items.length === 0 && (
          <p className="empty-writing">Nothing here yet.</p>
        )}
      </div>
    </div>
  );
}
