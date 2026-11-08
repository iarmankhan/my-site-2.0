import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
    alternates: { canonical: `/work/${slug}` },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();

  return (
    <article className="animate-in space-y-10">
      <div>
        <Link href="/projects" className="text-sm text-(--color-foreground-muted) hover:text-(--color-accent)">
          ← Projects
        </Link>
        <p className="mt-8 text-sm font-medium text-(--color-accent)">{study.eyebrow}</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          {study.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-(--color-foreground-muted)">
          {study.summary}
        </p>
      </div>

      <section>
        <h2 className="text-xl font-bold tracking-tight">The problem</h2>
        <p className="mt-3 leading-relaxed text-(--color-foreground-muted)">{study.problem}</p>
      </section>

      <section>
        <h2 className="text-xl font-bold tracking-tight">What I built</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-(--color-foreground-muted)">
          {study.contribution.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold tracking-tight">Architecture decisions</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-(--color-foreground-muted)">
          {study.decisions.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold tracking-tight">Outcome</h2>
        <p className="mt-3 leading-relaxed text-(--color-foreground-muted)">{study.outcome}</p>
        <p className="mt-4 border-l-2 border-(--color-border) pl-4 text-sm leading-relaxed text-(--color-foreground-muted)">
          {study.limits}
        </p>
      </section>
    </article>
  );
}
