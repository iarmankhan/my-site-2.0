import type { Metadata } from "next"
import { experience } from "@/data/experience"

export const metadata: Metadata = {
  title: "Experience",
  description: "Where I've worked and what I've been up to.",
}

export default function ExperiencePage() {
  return (
    <div className="animate-in">
      <h1 className="font-bold text-3xl tracking-tight">Experience</h1>
      <p className="mt-2 text-(--color-foreground-muted)">
        Places I've worked, roughly in reverse chronological order.
      </p>

      <div className="mt-10 space-y-8">
        {experience.map((exp) => (
          <div key={`${exp.company}-${exp.dates}`} className="group">
            <div className="flex items-start justify-between gap-4">
              <div>
                {exp.url ? (
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium group-hover:text-(--color-accent) transition-colors"
                  >
                    {exp.company}
                    <span className="ml-1 text-(--color-foreground-muted) text-sm">
                      ↗
                    </span>
                  </a>
                ) : (
                  <p className="font-medium">{exp.company}</p>
                )}
                <p className="text-sm text-(--color-foreground-muted) mt-0.5">
                  {exp.role}
                </p>
                <p className="text-sm text-(--color-foreground-muted) mt-1">
                  {exp.description}
                </p>
              </div>
              <span className="shrink-0 text-sm font-mono text-(--color-foreground-muted) tabular-nums mt-0.5">
                {exp.dates}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Resume download */}
      <div className="mt-12 pt-8 border-t border-(--color-border)">
        <p className="text-sm text-(--color-foreground-muted)">
          Want the full picture?{" "}
          <a
            href="/assets/Amaan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--color-foreground) hover:text-(--color-accent) transition-colors underline underline-offset-3 decoration-(--color-border) hover:decoration-(--color-accent)"
          >
            Download my resume
          </a>
          .
        </p>
      </div>
    </div>
  )
}
