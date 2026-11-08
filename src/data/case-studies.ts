export interface CaseStudy {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  problem: string;
  contribution: string[];
  decisions: string[];
  outcome: string;
  limits: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "backend-platform",
    title: "A shared backend foundation during an incremental migration",
    eyebrow: "Somethings · Backend and platform",
    summary:
      "I proposed and built the foundation for a new NestJS backend while existing APIs continued to run.",
    problem:
      "The team needed a maintainable place for new backend work without requiring an all-at-once migration of the existing APIs.",
    contribution: [
      "Proposed the migration and built the new backend foundation after team approval.",
      "Implemented logging, tracing, environment generation, policy checks, audit logging and granular role-based access control.",
      "Built tooling to generate policies so the team could use the new authorization model consistently.",
    ],
    decisions: [
      "Moved new backend development to the new repository while maintaining existing routes.",
      "Migrated APIs incrementally so the team could cut over routes in stages.",
    ],
    outcome:
      "The engineering team now develops new backend features on the new foundation. Existing APIs continue to migrate; the migration is not complete.",
    limits:
      "I am keeping internal code, test results and operational details private.",
  },
  {
    slug: "production-ai",
    title: "AI assistance inside a mental health product",
    eyebrow: "Somethings · Production AI",
    summary:
      "I built AI workflows that help staff query platform data and draft context-aware replies.",
    problem:
      "Staff needed faster ways to find relevant platform information and prepare responses within an existing product workflow.",
    contribution: [
      "Built a staff-facing natural-language data query system using LangGraph, LangChain and Vertex AI.",
      "Developed personalized, tone-matched reply suggestions and a system to collect context for the AI workflows.",
    ],
    decisions: [
      "Integrated the AI work into staff workflows rather than presenting it as a separate demonstration.",
      "Used the existing product context to make suggestions more relevant to each interaction.",
    ],
    outcome:
      "Both workflows reached the product. I am not publishing usage or quality figures.",
    limits:
      "I am keeping prompts, data access, failure handling and evaluation details private.",
  },
];
