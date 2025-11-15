export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  projectUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
  isRepresentative?: boolean;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "NeurIPS",
    title: "Seeing through Uncertainty: Robust Task-Oriented Optimization in Visual Navigation",
    authors: "Yiyuan Pan, Yunzhe Xu, Zhe Liu, Hesheng Wang",
    paperUrl: "https://arxiv.org/abs/2510.00441",
    codeUrl: "https://github.com/PyyWill/NeuRO",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Develop a conformal uncertainty–aware, task-oriented optimization framework that stabilizes visual navigation by aligning perception reliability with downstream decision quality.",
    imageUrl:
      "/images/seeing_NIPS25.png",
    isRepresentative: true,
    // award: "🏆 Oral Presentation",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2025",
    conference: "NeurIPS",
    title: "Wonder Wins Ways: Curiosity-Driven Exploration through Multi-Agent Contextual Calibration",
    authors: "Yiyuan Pan, Zhe Liu, Hesheng Wang",
    paperUrl: "https://arxiv.org/abs/2509.20648",
    // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Introduce a chance-constrained, context-calibrated curiosity framework that drives stable and efficient multi-agent exploration under uncertainty and partial observability.",
    imageUrl:
      "/images/wonder_NIPS25.png",
    isRepresentative: true,
    // award: "🏆 Oral Presentation",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2025",
    conference: "AAAI",
    title: "Planning from Imagination: Episodic Simulation and Episodic Memory for Vision-and-Language Navigation",
    authors: "Yiyuan Pan, Yunzhe Xu, Zhe Liu, Hesheng Wang",
    paperUrl: "https://ojs.aaai.org/index.php/AAAI/article/view/32679",
    // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Introduce an imagination-driven framework for navigation agents to reason beyond immediate perception, achieving human-like anticipatory generalization.",
    imageUrl:
      "/images/planning_AAAI25.png",
    award: "🏆 Oral Presentation",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2025",
    conference: "AAAI",
    title: "Flame: Learning to Navigate with Multimodal LLM in Urban Environments",
    authors: "Yunzhe Xu, Yiyuan Pan, Zhe Liu, Hesheng Wang",
    paperUrl: "https://ojs.aaai.org/index.php/AAAI/article/view/32974",
    projectUrl: "https://flame-sjtu.github.io/",
    codeUrl: "https://github.com/xyz9911/FLAME",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Introduce a multimodal-LLM–driven urban navigation framework that unifies perceptual grounding and high-level reasoning for decisioning in complex city environments.",
    imageUrl:
      "/images/flame_AAAI25.png",
    award: "🏆 Oral Presentation",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2025",
    conference: "ArXiv Preprint",
    title: "Dream to Recall: Imagination-Guided Experience Retrieval for Memory-Persistent Vision-and-Language Navigation",
    authors: "Yunzhe Xu, Yiyuan Pan, Zhe Liu",
    paperUrl: "https://arxiv.org/abs/2510.08553",
    // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Propose an imagination-guided retrieval mechanism that persistently aligns episodic memory with future goals, enabling VLN agents to perform more reliable long-horizon navigation.",
    imageUrl:
      "/images/dream_arxiv.png",
    // award: "🏆 Oral Presentation",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2025",
    conference: "ArXiv Preprint",
    title: "Seeing, Listening, Remembering, and Reasoning: A Multimodal Agent with Long-Term Memory",
    authors: "Lin Long*, Yichen He*, Wentao Ye, Yiyuan Pan, Yuan Lin, Hang Li, Junbo Zhao, Wei Li",
    paperUrl: "https://arxiv.org/abs/2508.09736",
    // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "Present a long-horizon multimodal agent that unifies perception, memory, and reasoning into a scalable architecture capable of streaming decision-making over extended context.",
    imageUrl:
      "/images/seeing_arxiv.png",
    projectUrl: "https://m3-agent.github.io/",
    codeUrl: "https://github.com/bytedance-seed/m3-agent",
    // award: "🏆 Oral Presentation",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
];
