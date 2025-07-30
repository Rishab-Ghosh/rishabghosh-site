export interface Bio {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  aboutDescription: string;
  email: string;
  resumeUrl: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Skill {
  category: string;
  icon: string;
  color: string;
  items: string[];
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const bio: Bio = {
  name: "Rishab Ghosh",
  title: "What's up there, I'm Rishab Ghosh",
  subtitle: "Finance | VC | Builder | Poker",
  description: "I'm a McCombs student passionate about finance, poker strategy, and startup ecosystems. I love leveraging data-driven decision making to solve complex problems and build innovative solutions. When I'm not analyzing markets or coding, you can find me at the poker table or exploring new technologies.",
  aboutDescription: "I'm a McCombs student passionate about finance and venture capital, with a love for building startups and analyzing poker strategy. I believe in data-driven decision making and creating innovative solutions that make a difference.",
  email: "rishabghosh@utexas.edu",
  resumeUrl: "/resume.pdf"
};

export const milestones: Milestone[] = [
  {
    year: "2024–present",
    title: "McCombs School of Business",
    description: "Finance + Math + CS Certificate"
  },
  {
    year: " Summer 2025 (May-August)",
    title: "Risk Management and Options Trading: Repsol",
    description: "Volatility analysis and poker training applications"
  },
  {
    year: "Winter 2025",
    title: "Arbor Ventures Internship",
    description: "Venture capital experience and startup evaluation"
  }
];

export const skills: Skill[] = [
  {
    category: "Quantitative Finance",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    color: "blue",
    items: ["Financial Modeling", "Risk Analysis", "Options Pricing", "Portfolio Optimization"]
  },
  {
    category: "Venture Capital",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    color: "green",
    items: ["Due Diligence", "Market Analysis", "Investment Thesis", "Startup Evaluation"]
  },
  {
    category: "Technology",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    color: "purple",
    items: ["Python & JavaScript", "React & Next.js", "Data Analysis", "Machine Learning"]
  }
];

export const features: Feature[] = [
  {
    title: "Quantitative Finance",
    description: "Data-driven analysis and modeling for financial markets and investment strategies",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    color: "blue"
  },
  {
    title: "Venture Capital",
    description: "Evaluating startups and investment opportunities with analytical rigor",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    color: "green"
  },
  {
    title: "Building",
    description: "Creating innovative solutions and products with modern technologies",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    color: "purple"
  }
]; 