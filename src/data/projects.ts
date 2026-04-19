export interface Project {
  name: string
  description: string
  tech: string[]
  url?: string
}

export const projects: Project[] = [
  {
    name: "HospiOS",
    description:
      "A comprehensive hospital management system (EPR) with real-time collaborative medical notes and secure document management.",
    tech: ["React", "Next.js", "TypeScript", "Supabase", "PostgreSQL"],
  },
  {
    name: "PowerSales",
    description:
      "An intelligent sales CRM with AI-powered insights and automated lead scoring.",
    tech: ["React", "Next.js", "TypeScript", "Django", "PostgreSQL"],
    url: "https://powersales.live",
  },
  {
    name: "4Site",
    description:
      "Smart building monitoring platform using IoT sensors for energy and occupancy insights.",
    tech: ["React", "TypeScript", "Python", "AWS IoT"],
    url: "https://www.4sitebycort.com/",
  },
  {
    name: "TopLegal",
    description:
      "AI-powered legal contract management with automated workflows and compliance tracking.",
    tech: ["React", "Next.js", "TypeScript", "OpenAI", "PostgreSQL"],
    url: "https://top.legal",
  },
  {
    name: "LivLyt",
    description: "An e-commerce platform with Stripe payments and order management.",
    tech: ["React", "Next.js", "TypeScript", "Node.js", "Stripe"],
    url: "https://livlyt.com",
  },
]
