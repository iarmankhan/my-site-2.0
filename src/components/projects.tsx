import PROJECTS from "@/data/projects.json"
import { ExternalLink } from "lucide-react"

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden border-b-4 border-black bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-400 brutalist-border mb-4">
            <span className="font-bold text-black uppercase text-sm tracking-wide">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4">
            FEATURED PROJECTS
          </h2>
          <p className="text-lg sm:text-xl text-black/70 max-w-3xl">
            Projects that showcase my technical expertise across web, mobile,
            and AI development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProjectProps {
  title: string
  subtitle: string
  techStack: string[]
  url: string
}

function Project({ title, subtitle, techStack, url }: ProjectProps) {
  return (
    <div className="group relative bg-white card-brutalist overflow-hidden hover:bg-black transition-colors duration-200">
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-black group-hover:text-white transition-colors">
              {title}
            </h2>
            <ExternalLink className="w-5 h-5 text-black group-hover:text-white transition-colors shrink-0" />
          </div>
          <p className="text-black group-hover:text-white mb-4 transition-colors">
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm font-medium badge-brutalist text-black group-hover:border-white group-hover:text-white transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  )
}
