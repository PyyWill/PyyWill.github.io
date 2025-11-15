export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
  location?: string;
}

export const aboutMe: AboutMe = {
  name: "Yiyuan Pan",
  title: "M.S. in Robotics",
  institution: "Carnegie Mellon University",
  // Note that links work in the description
  description:
    "<p>I am a first-year MSR student at Carnegie Mellon University, advised by <a href=\"https://icontrol.ri.cmu.edu/people/changliu.html\" target=\"_blank\" rel=\"noopener noreferrer\">Prof. Changliu Liu</a>. Previously, I received my B.E. degree in Automation at Shanghai Jiao Tong University, advised by <a href=\"https://irmv.sjtu.edu.cn/liuzhe\" target=\"_blank\" rel=\"noopener noreferrer\">Prof. Zhe Liu</a> and <a href=\"https://irmv.sjtu.edu.cn/wanghesheng\" target=\"_blank\" rel=\"noopener noreferrer\">Prof. Hesheng Wang</a>.</p>" +
    "<p><strong>Research Vision:</strong> My research focuses on <strong><em>Constraint-Grounded Learning</em></strong> for robotics planning, aiming to build a bridge between unstructured perception and verifiable decision-making. My work is structured around two key areas: <em>Constraint Acquisition</em>, the learning of formal, explainable rules from sensory data, and <em>Constraint Realization</em>, the synthesis of these rules into robust and verifiable policies.</p>" +
    "<p><strong>Research Interests:</strong> Multimodal Learning, Task-and-Motion Planning.</p>",
  email: "yiyuanpan@andrew.cmu.edu",
  imageUrl:
    "/images/photo.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=JgRZwOQAAAAJ",
  githubUsername: "PyyWill",
  location: "Pittsburgh, PA",
  // linkedinUsername: "yiyuan-pan-ab919a373", // https://www.linkedin.com/in/yiyuan-pan-ab919a373/
  // twitterUsername: "janesmith",
  // blogUrl: "https://",
  // cvUrl: "https://",
  // institutionUrl: "https://www.cmu.edu",
  // altName: "",
  // secretDescription: "I like dogs.",
};
