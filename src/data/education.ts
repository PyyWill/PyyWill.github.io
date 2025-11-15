export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2025—Present",
    institution: "Carnegie Mellon University",
    degree: "M.S. in Robotics",
    advisor: "Prof. Changliu Liu",
  },
  {
    year: "2021—2025",
    institution: "Shanghai Jiao Tong University",
    degree: "B.S. in Automation",
    // thesis: "Algorithmic Approaches to Causal Discovery",
    // Optional links to thesis
    // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  },
];
