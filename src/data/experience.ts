export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "2024.06 - 2024.12",
    title: "Research Intern",
    company: "California Institute of Technology",
    description:
      "Focused on integrating convex optimization principles with neural network learning to build task-driven decision-making systems.",
    advisor: "Steven Low",
    companyUrl: "https://caltech.edu",
  },
  {
    date: "2025.03 - 2025.07",
    title: "Research Intern",
    company: "ByteDance Seed",
    description:
      "Focused on building a multimodal long-horizon memory system that enables models to reason over arbitrarily long, streaming inputs.",
    advisor: "Yuan Lin, Hang Li",
    companyUrl: "https://seed.bytedance.com/en/",
  },
];
