export interface Experience {
  company: string
  role: string
  dates: string
  description: string
  url?: string
}

export const experience: Experience[] = [
  {
    company: "Somethings",
    role: "Principal Engineer",
    dates: "May 2024 — Present",
    description:
      "Founding principal engineer for teen mental health platform. Built an agentic AI system, scaled from 30 to 3.8K+ active users.",
    url: "https://www.somethings.com/",
  },
  {
    company: "TopLegal",
    role: "Full Stack Engineer & Engineering Lead",
    dates: "May 2023 — May 2024",
    description:
      "Architected distributed contract analysis system with microservices. Built knowledge graph with Neo4j, led team of 6 engineers.",
    url: "https://top.legal/",
  },
  {
    company: "Propelius Technologies",
    role: "Full Stack Engineer → Technical Lead",
    dates: "Dec 2020 — Apr 2023",
    description:
      "Promoted to Technical Lead in Dec 2021. Built a CRM from scratch with Next.js, designed e-commerce dashboards.",
    url: "https://propelius.tech/",
  },
  {
    company: "Zypac Infotech",
    role: "Full Stack Engineer",
    dates: "May 2019 — Nov 2020",
    description:
      "Built full-stack web apps using LAMP and MERN stacks. Created custom WordPress and WooCommerce plugins.",
  },
  {
    company: "Unofox Pvt. Ltd.",
    role: "Backend Engineer",
    dates: "Aug 2018 — Jan 2019",
    description:
      "Built REST APIs for financial apps and frontend for B2B marketplaces.",
  },
]
