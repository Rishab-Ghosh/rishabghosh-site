'use client';

// Video Component
const VideoEmbed = ({ videoUrl, videoType }: { videoUrl: string; videoType: string }) => {
  if (!videoUrl) return null;

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const getVimeoEmbedUrl = (url: string) => {
    const videoId = url.match(/vimeo\.com\/(\d+)/)?.[1];
    return videoId ? `https://player.vimeo.com/video/${videoId}` : null;
  };

  switch (videoType) {
    case 'youtube':
      const youtubeEmbed = getYouTubeEmbedUrl(videoUrl);
      return youtubeEmbed ? (
        <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
          <iframe
            src={youtubeEmbed}
            title="Project Demo"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : null;

    case 'vimeo':
      const vimeoEmbed = getVimeoEmbedUrl(videoUrl);
      return vimeoEmbed ? (
        <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
          <iframe
            src={vimeoEmbed}
            title="Project Demo"
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : null;

    case 'direct':
      return (
        <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
          <video
            controls
            className="w-full h-full object-cover"
            preload="metadata"
          >
            <source src={videoUrl} type="video/mp4" />
            <source src={videoUrl} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      );

        default:
      return null;
  }
};

export default function Projects() {
  const projects = [
    {
      title: "Volatility Surface Dashboard",
      description: "A comprehensive financial volatility analysis pipeline built with Streamlit for processing, visualizing, and analyzing implied volatility surfaces, time series data, and daily volatility shocks.",
      techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Plotly", "Streamlit"],
      githubUrl: "https://github.com/Rishab-Ghosh/VolPipelineApp",
      demoUrl: null,
      videoUrl: "https://youtu.be/oC5wD2JDVrU",
      videoType: "youtube",
      status: "Active"
    },
    {
      title: "Personal Website",
      description: "A modern, animated portfolio website featuring casino-style slot machine animations, interactive timeline, and responsive design. Built to showcase my journey from finance to building.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
      githubUrl: "https://github.com/Rishab-Ghosh/rishabghosh-site",
      demoUrl: "https://www.rishabghosh.org/",
      videoUrl: null,
      videoType: null,
      status: "Active"
    },

  ];

  const comingSoon = [
    {
      emoji: "🃏",
      title: "JackSharp",
      description: "Building the first app with free training modules for GTO, ICM, Blockers, and Blackjack basic strategy"
    },
    {
      emoji: "📈",
      title: "Peaking Options Dashboard",
      description: "Building a tree-based volatility modeling engine that blends machine learning with market intuition — capturing nonlinear pricing behavior across structured products."
    },
    {
      emoji: "🥽",
      title: "AR Poker Lense",
      description: "I've had this idea for a long time, but I just don't have the technical skills or refinement to pursue it. If you want to work on it, please reach out."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-mesh">
      <div className="py-20 px-4 sm:px-6 lg:px-8 mr-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 content-slide-in">
            <h1 className="text-5xl sm:text-6xl font-space font-bold text-highlight mb-6">
              PROJECTS
            </h1>
          </div>

          {/* Active Projects */}
          <div className="mb-20">
            <h2 className="text-3xl font-space font-bold text-gradient text-center mb-12 content-slide-up">
              ACTIVE PROJECTS
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="group bg-surface/50 backdrop-blur-md rounded-lg p-6 border border-border/50 hover:border-primary/60 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg content-slide-up"
                  style={{animationDelay: `${0.1 * index}s`}}
                >
                  {/* Video Demo */}
                  {project.videoUrl && project.videoType && (
                    <VideoEmbed videoUrl={project.videoUrl} videoType={project.videoType} />
                  )}

                  {/* Project Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-space font-semibold text-primary mb-2 group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-text/70 font-inter text-sm leading-relaxed">
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
                        className="inline-flex items-center px-3 py-2 text-sm font-inter font-medium text-text/70 bg-accent/20 rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-200"
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
                          className="inline-flex items-center px-3 py-2 text-sm font-inter font-medium text-text/70 bg-accent/20 rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-200"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Demo
                        </a>
                      )}
                    </div>

                    <span className="text-xs font-inter text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="bg-surface/20 rounded-lg p-8 border border-border/50">
            <h2 className="text-3xl font-space font-bold text-gradient text-center mb-12 content-slide-up">
              COMING SOON
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {comingSoon.map((item, index) => (
                <div 
                  key={index}
                  className="text-center content-slide-up"
                  style={{animationDelay: `${0.2 * index}s`}}
                >
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="text-lg font-space font-semibold text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text/70 font-inter text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-surface/50 backdrop-blur-md rounded-lg p-8 border border-border/50 max-w-2xl mx-auto content-slide-up">
              <h3 className="text-2xl font-space font-bold text-gradient mb-4">
                WANT TO COLLABORATE?
              </h3>
              <p className="text-text/70 font-inter mb-6">
                I&apos;m always open to interesting projects and collaborations. 
                Whether it&apos;s building the next big thing or just experimenting with new tech, let&apos;s talk!
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-space font-semibold rounded-lg hover:scale-105 transition-all duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 