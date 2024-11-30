import Image from "next/image"
import PROJECTS from "@/data/projects.json"
import { Code2, ExternalLink } from "lucide-react"

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-10 sm:py-16 lg:py-24 overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code2 className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>

          <p className="text-lg text-blue-200">
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
  image: string
  url: string
}

function Project({
  title,
  subtitle,
  techStack,
  image,
  url,
}: ProjectProps) {
  return (
    <div className="group relative bg-white/5 backdrop-blur-2xl rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 border border-white/10">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl -z-10" />

      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-4">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
          <Image
            className="w-full h-48 object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105"
            src={image}
            alt={`${title} Project Screenshot`}
            width={500}
            height={300}
          />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {title}
            </h2>
            <ExternalLink className="w-5 h-5 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-gray-200 mb-4">{subtitle}</p>

          <div>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm font-medium rounded-full 
                           bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                           border border-blue-500/20 text-gray-200
                           hover:from-blue-500/20 hover:to-purple-500/20 
                           transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
