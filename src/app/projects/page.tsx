import type { Metadata } from "next"
import { openSource, projects, type Project } from "@/data/projects"
import Link from "next/link"
import { caseStudies } from "@/data/case-studies"

export const metadata: Metadata = {
  title: "Projects",
  description: "Open source tools, products and engineering work by Arman Khan.",
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    url: "/projects",
    title: "Projects",
    description: "Open source tools, products and engineering work by Arman Khan.",
  },
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group">
      <div className="flex items-start justify-between gap-4">
        <div>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium group-hover:text-(--color-accent) transition-colors"
            >
              {project.name}
              <span className="ml-1 text-(--color-foreground-muted) text-sm">
                ↗
              </span>
            </a>
          ) : (
            <p className="font-medium">{project.name}</p>
          )}
          <p className="text-sm text-(--color-foreground-muted) mt-1">
            {project.description}
          </p>
        </div>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-mono text-(--color-foreground-muted) bg-(--color-background-alt) px-2 py-0.5 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <div className="animate-in">
      <h1 className="font-bold text-3xl tracking-tight">Projects</h1>
      <p className="mt-2 text-(--color-foreground-muted)">Open source tools, products and selected engineering work.</p>

      <h2 className="mt-10 font-bold text-xl tracking-tight">Open source &amp; tools</h2>
      <p className="mt-2 text-(--color-foreground-muted)">
        Developer tools and workflows I build and maintain.
      </p>

      <div className="mt-8 space-y-8">
        {openSource.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      <h2 className="mt-14 text-xl font-bold tracking-tight">Engineering case studies</h2>
      <p className="mt-2 text-(--color-foreground-muted)">
        Two examples from my work at Somethings. My <Link href="/experience" className="underline underline-offset-3 hover:text-(--color-accent)">experience</Link> spans more products and teams.
      </p>
      <div className="mt-5 space-y-7">
        {caseStudies.map((study) => (
          <Link key={study.slug} href={`/work/${study.slug}`} className="group block">
            <p className="text-xs font-medium text-(--color-accent)">{study.eyebrow}</p>
            <h3 className="mt-1 font-medium group-hover:text-(--color-accent)">{study.title} ↗</h3>
            <p className="mt-1 text-sm text-(--color-foreground-muted)">{study.summary}</p>
          </Link>
        ))}
      </div>

      <h2 className="mt-14 text-xl font-bold tracking-tight">Other projects</h2>
      <div className="mt-6 space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

    </div>
  )
}
