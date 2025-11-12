"use client"

import {
  Code2,
  Smartphone,
  Brain,
  Database,
  Cloud,
  Palette,
} from "lucide-react"

const skills = [
  {
    title: "Web Development",
    icon: Code2,
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    technologies: ["React Native", "iOS", "Android", "Cross-platform"],
  },
  {
    title: "AI/ML Development",
    icon: Brain,
    technologies: ["LangChain", "GPT", "Gemini", "LLM", "Python"],
  },
  {
    title: "Backend & Database",
    icon: Database,
    technologies: ["Node.js", "PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
  },
  {
    title: "Design & UI/UX",
    icon: Palette,
    technologies: ["Figma", "UI Design", "Prototyping", "User Research"],
  },
]

export function Skills() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 border-b-4 border-foreground bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-400 brutalist-border mb-4">
            <span className="font-bold text-foreground uppercase text-sm tracking-wide">
              What I Do
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            SKILLS & EXPERTISE
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.title}
                className="group brutalist-border bg-background p-6 hover:bg-muted transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-yellow-400 brutalist-border-thin group-hover:bg-muted transition-all">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-muted-foreground transition-colors">
                    {skill.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-bold bg-background text-foreground brutalist-border-thin group-hover:bg-accent group-hover:text-accent-foreground transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
