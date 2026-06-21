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

export const openSource: Project[] = [
  {
    name: "git-tidy",
    description:
      "An interactive CLI for cleaning up stale and merged git branches — dry-run by default, with a non-interactive mode for CI and agents.",
    tech: ["TypeScript", "Ink", "Node.js"],
    url: "https://www.npmjs.com/package/git-tidy-cli",
  },
  {
    name: "agentic-debugger",
    description:
      "An MCP server that gives AI coding assistants live code instrumentation and runtime variable capture across JavaScript, TypeScript, and Python.",
    tech: ["TypeScript", "MCP", "Node.js"],
    url: "https://github.com/iarmankhan/agentic-debugger",
  },
  {
    name: "pdf-unlocker",
    description:
      "A tool to remove passwords from PDFs entirely in the browser — nothing ever leaves your device.",
    tech: ["TypeScript", "WebAssembly", "Cloudflare Workers"],
    url: "https://pdf-thingy.work-armankhan.workers.dev/",
  },
]
