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

function ProjectRow({ project, number }: { project: Project; number: string }) {
  return (
    <div className="work-entry">
      <span className="entry-number" aria-hidden="true">
        {number}
      </span>
      <div>
        <h3 className="entry-title">
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
        <p className="entry-description">{project.description}</p>
        <p className="entry-detail">{project.tech.join(" · ")}</p>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="interior-page">
      <header className="interior-header">
        <h1 className="page-title">
          Work<span className="title-period">.</span>
        </h1>
        <p className="page-intro">
          A selection of products, developer tools, and systems I have helped
          bring into the world.
        </p>
      </header>

      <section className="featured-work" aria-labelledby="plixy-title">
        <div className="featured-work-copy">
          <h2 id="plixy-title">Plixy.tech</h2>
          <p>
            My own company, where I build software products and developer tools
            alongside my engineering work.
          </p>
          <a
            href="https://plixy.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Visit Plixy.tech ↗
          </a>
        </div>
        <div className="featured-work-art" aria-hidden="true" />
      </section>

      <section className="interior-section">
        <div className="section-head">
          <h2>Open source &amp; tools</h2>
          <p>Things I build and maintain</p>
        </div>
        <div className="entry-list">
          {openSource.map((project, index) => (
            <ProjectRow
              key={project.name}
              project={project}
              number={String(index + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </section>

      <section className="interior-section">
        <div className="section-head">
          <h2>In practice</h2>
          <p>Selected engineering stories</p>
        </div>
        <div className="entry-list">
          {caseStudies.map((study, index) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="work-entry"
            >
              <span className="entry-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="entry-title">
                  {study.title} <span className="entry-arrow">↗</span>
                </h3>
                <p className="entry-description">{study.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="interior-section">
        <div className="section-head">
          <h2>More projects</h2>
          <p>Across different teams and domains</p>
        </div>
        <div className="entry-list">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.name}
              project={project}
              number={String(index + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </section>
      <p className="page-afterword">
        <Link href="/experience" className="text-link">
          More about my experience ↗
        </Link>
      </p>
    </div>
  );
}
