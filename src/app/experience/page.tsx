import type { Metadata } from "next";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Where I've worked and what I've been up to.",
  alternates: { canonical: "/experience" },
  openGraph: {
    type: "website",
    url: "/experience",
    title: "Experience",
    description: "Where I've worked and what I've been up to.",
  },
};

export default function ExperiencePage() {
  return (
    <div className="editorial-page">
      <p className="page-kicker">Background</p>
      <h1 className="page-title">Experience</h1>
      <p className="page-intro">
        The teams and products I&apos;ve helped build.
      </p>
      <div className="editorial-list editorial-section">
        {experience.map((exp) => (
          <div key={`${exp.company}-${exp.dates}`} className="editorial-item">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h2 className="editorial-item-title">
                {exp.url ? (
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    {exp.company}
                  </a>
                ) : (
                  exp.company
                )}
              </h2>
              <span className="editorial-item-meta tabular-nums">
                {exp.dates}
              </span>
            </div>
            <p className="editorial-item-meta">{exp.role}</p>
            <p className="editorial-item-desc">{exp.description}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 text-sm text-(--color-foreground-muted)">
        <a
          href="/assets/Amaan_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          Download my resume ↗
        </a>
      </p>
    </div>
  );
}
