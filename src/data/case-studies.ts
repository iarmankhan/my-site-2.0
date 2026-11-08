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
    title: "Building a shared backend foundation",
    eyebrow: "Somethings · Backend and platform",
    summary:
      "I proposed and built a NestJS foundation for new backend development at Somethings.",
    problem:
      "The team needed a maintainable place for new backend work without requiring an all-at-once migration of the existing APIs.",
    contribution: [
      "Proposed the migration and, after team approval, personally built the new backend foundation.",
      "Implemented logging, tracing, dynamic environment generation, decorator-based policy checks and automatic audit logging.",
      "Built granular role-based access control and CLIs that generate policies for the team.",
    ],
    decisions: [
      "Moved all new backend development to the new repository while maintaining existing routes.",
      "Kept the migration incremental so existing and new APIs could run alongside each other.",
    ],
    outcome:
      "The entire engineering team now works with the new architecture, and all new backend features are built there. Existing APIs continue to migrate in stages.",
    limits:
      "I am keeping internal code, test results and operational details private.",
  },
  {
    slug: "production-ai",
    title: "Production AI inside Somethings' staff workflows",
    eyebrow: "Somethings · Production AI",
    summary:
      "I shipped natural-language data queries and personalized reply suggestions inside a teen mental health product.",
    problem:
      "Staff needed faster ways to find relevant platform information and prepare responses within an existing product workflow.",
    contribution: [
      "Built a staff-facing natural-language query system for platform data using LangGraph, LangChain and Vertex AI.",
      "Developed personalized, tone-matched reply suggestions and the context collection system behind them.",
    ],
    decisions: [
      "Integrated the AI work into staff workflows rather than presenting it as a separate demonstration.",
      "Used the existing product context to make suggestions more relevant to each interaction.",
    ],
    outcome:
      "Both workflows shipped in the product. I am not publishing AI-specific usage or quality figures.",
    limits:
      "I am keeping prompts, data access, failure handling and evaluation details private.",
  },
];
