import Link from "next/link"
import { format } from "date-fns"
import { getRecentWriting } from "@/lib/content"

const now = [
  "Building mental health tech at Somethings",
  "Messing around with AI agents and LLMs",
  "Trying to be more active on X (failing)",
  "Reading about system design and distributed systems",
  "Maintaining this site (sometimes)",
]

const featured = [
  {
    title: "HospiOS",
    description: "A comprehensive hospital management system I'm building from scratch",
    href: "/projects",
    tag: "Project",
  },
  {
    title: "Hello World",
    description: "First post — kicking off the writing habit",
    href: "/writing/hello-world",
    tag: "Post",
  },
]

export default function Home() {
  const recentWriting = getRecentWriting(3)

  return (
    <div className="animate-in space-y-16">
      {/* Intro */}
      <section>
        <h1 className="font-bold text-4xl sm:text-5xl tracking-tight leading-[1.1]">
          Hey, I'm <span className="signature-underline">Arman</span>.
        </h1>
        <div className="mt-6 space-y-4 text-(--color-foreground-muted) leading-relaxed">
          <p>
            I build things for the web and mobile, mess around with AI, and
            occasionally write about it. Currently working on mental health tech
            at{" "}
            <a
              href="https://somethings.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--color-foreground) hover:text-(--color-accent) transition-colors underline underline-offset-3 decoration-(--color-border) hover:decoration-(--color-accent)"
            >
              Somethings
            </a>
            .
          </p>
          <p>
            I like building useful products, learning how things work under the
            hood, and shipping fast. Say hi — I'm usually around.
          </p>
        </div>
      </section>

      {/* Now */}
      <section>
        <h2 className="font-bold text-2xl tracking-tight mb-4">Now</h2>
        <ul className="space-y-2">
          {now.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-(--color-foreground-muted)"
            >
              <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-accent)" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured */}
      <section>
        <h2 className="font-bold text-2xl tracking-tight mb-4">Featured</h2>
        <div className="space-y-4">
          {featured.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group block"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium group-hover:text-(--color-accent) transition-colors">
                    {item.title}
                  </p>
                  <p className="text-sm text-(--color-foreground-muted) mt-0.5">
                    {item.description}
                  </p>
                </div>
                <span className="shrink-0 text-xs font-mono text-(--color-foreground-muted) mt-1">
                  {item.tag}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Writing */}
      {recentWriting.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-2xl tracking-tight">
              Recent Writing
            </h2>
            <Link
              href="/writing"
              className="text-sm text-(--color-foreground-muted) hover:text-(--color-accent) transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="space-y-4">
            {recentWriting.map((item) => (
              <div key={item.data.slug}>
                {item.type === "essay" ? (
                  <Link
                    href={`/writing/${item.data.slug}`}
                    className="group block"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium group-hover:text-(--color-accent) transition-colors">
                          {item.data.title}
                        </p>
                        {"description" in item.data && item.data.description && (
                          <p className="text-sm text-(--color-foreground-muted) mt-0.5">
                            {item.data.description}
                          </p>
                        )}
                      </div>
                      <time className="shrink-0 text-sm font-mono text-(--color-foreground-muted) tabular-nums">
                        {format(new Date(item.data.date), "MMM yyyy")}
                      </time>
                    </div>
                  </Link>
                ) : (
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <p className="font-medium">{item.data.title}</p>
                      <time className="shrink-0 text-sm font-mono text-(--color-foreground-muted) tabular-nums">
                        {format(new Date(item.data.date), "MMM yyyy")}
                      </time>
                    </div>
                    {"content" in item.data && (
                      <div
                        className="text-sm text-(--color-foreground-muted) mt-1 leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: item.data.content,
                        }}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
