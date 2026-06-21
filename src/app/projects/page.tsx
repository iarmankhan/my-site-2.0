import type { Metadata } from "next"
import { projects } from "@/data/projects"

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've built — from hospital management systems to e-commerce platforms.",
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    url: "/projects",
    title: "Projects",
    description: "Things I've built — from hospital management systems to e-commerce platforms.",
  },
}

export default function ProjectsPage() {
  return (
    <div className="animate-in">
      <h1 className="font-bold text-3xl tracking-tight">Projects</h1>
      <p className="mt-2 text-(--color-foreground-muted)">
        A selection of things I've built or am building.
      </p>

      <div className="mt-10 space-y-8">
        {projects.map((project) => (
          <div key={project.name} className="group">
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
        ))}
      </div>
    </div>
  )
}
