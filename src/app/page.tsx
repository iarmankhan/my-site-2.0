import Link from "next/link";
import { format } from "date-fns";
import { getRecentWriting } from "@/lib/content";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/seo";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.author.name,
  url: siteConfig.url,
  email: siteConfig.author.email,
  jobTitle: "Software Engineer",
  sameAs: [
    siteConfig.author.twitterUrl,
    siteConfig.author.github,
    siteConfig.author.linkedin,
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  author: { "@type": "Person", name: siteConfig.author.name },
};

const now = [
  "Building mental health tech at Somethings",
  "Messing around with AI agents and LLMs",
  "Trying to be more active on X (failing)",
  "Reading about system design and distributed systems",
  "Maintaining this site (sometimes)",
];

export default function Home() {
  const recentWriting = getRecentWriting(3);

  return (
    <div className="animate-in space-y-16">
      <JsonLd data={personJsonLd} />
      <JsonLd data={websiteJsonLd} />
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
              className="flex gap-3 text-(--color-foreground-muted)"
            >
              <span className="flex h-[1.7em] shrink-0 items-center">
                <span className="block h-1.5 w-1.5 rounded-full bg-(--color-accent)" />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
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
          <div className="space-y-7">
            {recentWriting.map((item) => (
              <div key={item.data.slug}>
                {item.type === "essay" ? (
                  <Link
                    href={`/writing/${item.data.slug}`}
                    className="group block"
                  >
                    <p className="font-medium leading-snug text-balance transition-colors group-hover:text-(--color-accent)">
                      {item.data.title}
                    </p>
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
                    <p className="font-medium leading-snug text-balance">
                      {item.data.title}
                    </p>
                    <div className="mt-1 text-sm text-(--color-foreground-muted)">
                      <time className="tabular-nums">
                        {format(new Date(item.data.date), "MMM d, yyyy")}
                      </time>
                    </div>
                    {"content" in item.data && (
                      <div
                        className="mt-2 max-w-[60ch] text-sm leading-relaxed text-(--color-foreground-muted)"
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
  );
}
