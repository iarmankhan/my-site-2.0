import type { Metadata } from "next";
import { openSource, projects, type Project } from "@/data/projects";
import Link from "next/link";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Open source tools, products and engineering work by Arman Khan.",
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    url: "/projects",
    title: "Work",
    description:
      "Open source tools, products and engineering work by Arman Khan.",
  },
};

function ProjectRow({ project }: { project: Project }) {
  return (
    <div className="editorial-item">
      <h3 className="editorial-item-title">
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            {project.name} ↗
          </a>
        ) : (
          project.name
        )}
      </h3>
      <p className="editorial-item-desc">{project.description}</p>
      <div className="editorial-tags">
        {project.tech.map((tech) => (
          <span key={tech} className="editorial-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="editorial-page">
      <p className="page-kicker">Selected work</p>
      <h1 className="page-title">Work</h1>
      <p className="page-intro">
        Open source tools, products, and a few closer looks at my engineering
        work.
      </p>

      <section className="editorial-section">
        <h2 className="section-heading">Open source &amp; tools</h2>
        <p className="section-intro">
          Developer tools and workflows I build and maintain.
        </p>
        <div className="editorial-list">
          {openSource.map((project) => (
            <ProjectRow key={project.name} project={project} />
          ))}
        </div>
      </section>

      <section className="editorial-section">
        <h2 className="section-heading">Engineering case studies</h2>
        <p className="section-intro">
          Two examples from a broader career across products and teams.
        </p>
        <div className="editorial-list">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="editorial-item"
            >
              <p className="editorial-item-meta">{study.eyebrow}</p>
              <h3 className="editorial-item-title mt-2">{study.title} ↗</h3>
              <p className="editorial-item-desc">{study.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="editorial-section">
        <h2 className="section-heading">Other projects</h2>
        <div className="editorial-list">
          {projects.map((project) => (
            <ProjectRow key={project.name} project={project} />
          ))}
        </div>
      </section>
      <p className="mt-10 text-sm text-(--color-foreground-muted)">
        <Link href="/experience" className="text-link">
          More about my experience ↗
        </Link>
      </p>
    </div>
  );
}
