import Link from "next/link";
import { format } from "date-fns";
import { getRecentWriting } from "@/lib/content";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/seo";
import { caseStudies } from "@/data/case-studies";
import { openSource } from "@/data/projects";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.author.name,
  url: siteConfig.url,
  email: siteConfig.author.email,
  jobTitle: "Principal Engineer",
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
  "Building Plixy.tech",
  "Maintaining open source developer tools",
  "Building products and backend systems at Somethings",
];

export default function Home() {
  const recentWriting = getRecentWriting(3);

  return (
    <div className="animate-in space-y-14">
      <JsonLd data={personJsonLd} />
      <JsonLd data={websiteJsonLd} />
      {/* Intro */}
      <section>
        <h1 className="font-bold text-4xl sm:text-5xl tracking-tight leading-[1.1]">
          Hey, I'm <span className="signature-underline">Arman</span>.
        </h1>
        <div className="mt-6 space-y-4 text-(--color-foreground-muted) leading-relaxed">
          <p>
            I build products and developer tools across mobile, backend and AI.
            I run{" "}
            <a href="https://plixy.tech" target="_blank" rel="noopener noreferrer" className="text-(--color-foreground) underline underline-offset-3 decoration-(--color-border) hover:text-(--color-accent)">
              Plixy.tech
            </a>
            {" "}and publish open source software, from Git tooling to AI workflows.
          </p>
          <p>
            At{" "}
            <a
              href="https://somethings.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--color-foreground) hover:text-(--color-accent) transition-colors underline underline-offset-3 decoration-(--color-border) hover:decoration-(--color-accent)"
            >
              Somethings
            </a>
            , I am a principal and founding engineer. I helped build its mobile app,
            backend and staff dashboards from inception, proposed the NestJS
            foundation now used for new backend development, and shipped production
            AI features.
          </p>
        </div>
      </section>

      <section aria-labelledby="open-source">
        <div className="flex items-center justify-between gap-4">
          <h2 id="open-source" className="text-2xl font-bold tracking-tight">Open source</h2>
          <Link href="/projects" className="text-sm text-(--color-foreground-muted) hover:text-(--color-accent)">
            All projects →
          </Link>
        </div>
        <div className="mt-5 space-y-6 border-t border-(--color-border) pt-5">
          {openSource.slice(0, 4).map((project) => (
            <a key={project.name} href={project.url} target="_blank" rel="noopener noreferrer" className="group block">
              <h3 className="font-semibold leading-snug group-hover:text-(--color-accent)">{project.name} ↗</h3>
              <p className="mt-1 text-sm leading-relaxed text-(--color-foreground-muted)">{project.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section aria-labelledby="engineering-work">
        <h2 id="engineering-work" className="text-2xl font-bold tracking-tight">Engineering work</h2>
        <div className="mt-5 space-y-6 border-t border-(--color-border) pt-5">
          {caseStudies.map((study) => (
            <Link key={study.slug} href={`/work/${study.slug}`} className="group block">
              <p className="text-xs font-medium text-(--color-accent)">{study.eyebrow}</p>
              <h3 className="mt-1 font-semibold leading-snug group-hover:text-(--color-accent)">
                {study.title} ↗
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-(--color-foreground-muted)">
                {study.summary}
              </p>
            </Link>
          ))}
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
