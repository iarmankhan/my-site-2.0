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
    <article className="interior-page article-page">
      <Link href="/projects" className="article-back">
        ← Work
      </Link>
      <header className="article-header">
        <h1 className="page-title">{study.title}</h1>
        <p className="page-intro">{study.summary}</p>
      </header>
      <div className="article-body">
        <section>
          <h2>The problem</h2>
          <p>{study.problem}</p>
        </section>
        <section>
          <h2>What I built</h2>
          <ul>
            {study.contribution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Architecture decisions</h2>
          <ul>
            {study.decisions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Outcome</h2>
          <p>{study.outcome}</p>
          <p className="mt-4 text-sm">{study.limits}</p>
        </section>
      </div>
    </article>
  );
}
