'use client';

import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: "Volatility Surface Dashboard",
      description: "Interactive dashboard for analyzing and visualizing volatility surfaces. Because staring at numbers all day isn't enough, I need pretty graphs too.",
      techStack: ["Python", "Streamlit", "Plotly", "Pandas"],
      githubUrl: "https://github.com/rishabghosh/volatility-dashboard",
      demoUrl: "https://volatility-dashboard.streamlit.app",
      status: "Active"
    },
    {
      title: "Blackjack Training Engine",
      description: "AI-powered blackjack training app with card counting strategies. Because the house doesn't always win if you know the math.",
      techStack: ["SwiftUI", "Firebase", "Core ML", "GameKit"],
      githubUrl: "https://github.com/rishabghosh/blackjack-trainer",
      demoUrl: null,
      status: "Active"
    },
    {
      title: "Portfolio Optimizer",
      description: "Risk-adjusted portfolio optimization tool using modern portfolio theory. Because diversification is just fancy talk for not putting all your eggs in one basket.",
      techStack: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
      githubUrl: "https://github.com/rishabghosh/portfolio-optimizer",
      demoUrl: null,
      status: "Active"
    }
  ];

  const comingSoon = [
    {
      emoji: "🎯",
      title: "Poker Strategy AI",
      description: "Machine learning model to analyze poker hands and suggest optimal plays. Because sometimes you need a robot to tell you when to fold."
    },
    {
      emoji: "📊",
      title: "Market Sentiment Analyzer",
      description: "Real-time market sentiment analysis using social media data. Because Twitter is basically a crystal ball for stock prices."
    },
    {
      emoji: "🎮",
      title: "Trading Game",
      description: "Educational trading simulation game. Because the best way to learn is to lose fake money first."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-space font-bold text-highlight mb-6">
            PROJECTS
          </h1>
          <p className="text-xl font-inter text-highlight/60 max-w-3xl mx-auto leading-relaxed">
            Here are some of the things I&apos;ve built, combining my passion for quantitative finance, 
            technology, and creating tools that actually work. No PowerPoint presentations here.
          </p>
        </div>

        {/* Active Projects */}
        <div className="mb-20">
          <h2 className="text-3xl font-space font-bold text-primary text-center mb-12">
            ACTIVE PROJECTS
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-surface rounded-lg p-6 border border-border hover:border-primary/60 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg"
              >
                {/* Project Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-space font-semibold text-primary mb-2 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-highlight/70 font-inter text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-inter font-medium rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 text-sm font-inter font-medium text-highlight/70 bg-accent rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-200"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 text-sm font-inter font-medium text-background bg-primary rounded-md hover:bg-primary/80 transition-all duration-200"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Demo
                      </a>
                    )}
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                    <span className="text-xs font-inter text-highlight/60">{project.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div>
          <h2 className="text-3xl font-space font-bold text-primary text-center mb-12">
            COMING SOON
          </h2>
          <p className="text-lg font-inter text-highlight/60 text-center max-w-2xl mx-auto mb-8">
            Currently working on several exciting projects. Because apparently I don&apos;t sleep.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comingSoon.map((project, index) => (
              <div 
                key={index}
                className="bg-surface/50 rounded-lg p-6 border-2 border-dashed border-border hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-lg font-space font-semibold text-primary mb-2">
                  {project.emoji} {project.title}
                </h3>
                <p className="text-highlight/70 font-inter text-sm">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 