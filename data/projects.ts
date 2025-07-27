export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
}

export interface ComingSoonProject {
  title: string;
  description: string;
  emoji: string;
}

export const projects: Project[] = [
  {
    title: "Volatility Surface Dashboard",
    description: "Interactive dashboard for analyzing and visualizing volatility surfaces across different time horizons and strike prices.",
    techStack: ["Python", "Streamlit", "Plotly", "Pandas"],
    githubUrl: "https://github.com/rishabghosh/volatility-dashboard",
    demoUrl: "https://volatility-dashboard.streamlit.app"
  },
  {
    title: "Blackjack Training Engine",
    description: "Advanced blackjack training platform with card counting practice, strategy drills, and performance analytics.",
    techStack: ["SwiftUI", "Firebase", "Core Data", "Card Animations"],
    githubUrl: "https://github.com/rishabghosh/blackjack-trainer",
    demoUrl: "https://apps.apple.com/blackjack-trainer"
  }
];

export const comingSoonProjects: ComingSoonProject[] = [
  {
    title: "Startup Analytics Platform",
    description: "Comprehensive dashboard for startup metrics and growth analysis",
    emoji: "🚀"
  },
  {
    title: "Poker Strategy App",
    description: "Advanced poker training with AI-powered strategy recommendations",
    emoji: "🎯"
  }
]; 