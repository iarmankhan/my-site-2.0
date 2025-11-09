import PROJECTS from "@/data/projects.json"
import { Code2, ExternalLink } from "lucide-react"

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-10 sm:py-16 lg:py-24 overflow-hidden border-b-4 border-black bg-white"
    >
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code2 className="w-8 h-8 text-black" />
            <h2 className="text-3xl sm:text-4xl font-bold text-black">
              Featured Projects
            </h2>
          </div>

          <p className="text-lg text-black">
            Here are some of my notable projects that showcase my technical
            expertise
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

function Project({
  title,
  subtitle,
  techStack,
  url,
}: ProjectProps) {
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
