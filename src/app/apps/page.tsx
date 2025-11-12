import Link from "next/link"
import { Gamepad2, Code2, Wrench } from "lucide-react"

const apps = [
  {
    id: "json-formatter",
    title: "JSON Formatter",
    description: "Format, validate, and minify JSON data.",
    category: "Tools",
    icon: Code2,
    href: "/apps/json-formatter",
  },
  {
    id: "base64",
    title: "Base64 Encoder/Decoder",
    description: "Encode and decode Base64 strings.",
    category: "Tools",
    icon: Wrench,
    href: "/apps/base64",
  },
]

export default function AppsPage() {
  const tools = apps

  return (
    <div className="relative min-h-screen bg-background pt-20">
      <div className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 lg:mb-16">
            <div className="inline-block px-4 py-2 bg-yellow-400 brutalist-border mb-4">
              <span className="font-bold text-foreground uppercase text-sm tracking-wide">
                Utilities
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              DEVELOPER TOOLS
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl">
              Useful tools for developers to format, validate, and convert data.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function AppCard({ app }: { app: (typeof apps)[0] }) {
  const Icon = app.icon

  return (
    <Link
      href={app.href}
      className="group block bg-background card-brutalist p-8 hover:bg-muted transition-colors duration-300"
    >
      <div className="flex items-start gap-6">
        <div className="p-3 bg-yellow-400 brutalist-border-thin group-hover:bg-muted transition-colors duration-300">
          <Icon className="w-7 h-7 text-foreground" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-muted-foreground mb-3 transition-colors duration-300">
            {app.title}
          </h3>
          <p className="text-sm text-muted-foreground group-hover:text-muted-foreground transition-colors duration-300 leading-relaxed">
            {app.description}
          </p>
        </div>
      </div>
    </Link>
  )
}
