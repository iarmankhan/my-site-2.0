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
    <div className="interior-page">
      <header className="interior-header">
        <h1 className="page-title">Experience</h1>
        <p className="page-intro">
          I have spent my career building products from their first version
          through the systems that keep them running.
        </p>
      </header>
      <div className="entry-list experience-list">
        {experience.map((exp) => (
          <section
            key={`${exp.company}-${exp.dates}`}
            className="experience-entry"
          >
            <p className="experience-date">{exp.dates}</p>
            <div>
              <h2 className="entry-title">
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
              <p className="experience-role">{exp.role}</p>
              <p className="entry-description">{exp.description}</p>
            </div>
          </section>
        ))}
      </div>
      <p className="page-afterword">
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
