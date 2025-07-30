'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-mesh">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 mr-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center content-slide-in">
            {/* Main Heading */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-space font-bold mb-6">
              <span className="text-gradient">Whats Up?, I&apos;M!</span>
              <br />
              <span className="text-highlight">RISHAB GHOSH</span>
            </h1>

            {/* Subheading */}
            <p className="text-2xl sm:text-3xl font-inter text-text/80 mb-8 leading-relaxed">
              Finance • Amateur Builder • Cinephile • Poker
            </p>

            {/* Bio */}
            <p className="text-lg font-inter text-text/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            I&apos;m currently at the University of Texas at Austin McCombs School of Business, studying Finance. I care particularly about sustainability, the start-up scene, and testing how much I can learn through a series of infinite side quests. 
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-space font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25"
              >
                View Resume
              </Link>
              
              <Link
                href="/projects"
                className="px-8 py-4 bg-surface/50 backdrop-blur-md border border-border/50 text-text font-space font-semibold rounded-lg hover:bg-surface/80 hover:border-primary/50 transition-all duration-300"
              >
                See My Work
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Rishab-Ghosh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-surface/50 backdrop-blur-md border border-border/50 rounded-lg flex items-center justify-center text-text/60 hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 8.199-11.386 0-6.627-5.373-12-13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              
              <a
                href="https://www.linkedin.com/in/rishabghosh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-surface/50 backdrop-blur-md border border-border/50 rounded-lg flex items-center justify-center text-text/60 hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 mr-20 bg-surface/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reviews Card */}
            <div className="content-slide-up" style={{animationDelay: '0.1s'}}>
              <Link href="/reviews" className="block">
                <div className="bg-surface/50 backdrop-blur-md border border-border/50 rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
                  <div className="text-4xl mb-4">🎬</div>
                  <h3 className="text-xl font-space font-semibold text-primary mb-3 group-hover:text-gradient transition-all duration-300">
                    Movie Reviews
                  </h3>
                  <p className="text-text/70 font-inter">
                    My hot takes on the latest films. Trust me, I have opinions about everything.
                  </p>
                </div>
              </Link>
            </div>

            {/* Projects Card */}
            <div className="content-slide-up" style={{animationDelay: '0.2s'}}>
              <Link href="/projects" className="block">
                <div className="bg-surface/50 backdrop-blur-md border border-border/50 rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-space font-semibold text-primary mb-3 group-hover:text-gradient transition-all duration-300">
                    Projects
                  </h3>
                  <p className="text-text/70 font-inter">
                    Things I&apos;ve built thus far, still just at the edifice of my learning curve.
                  </p>
                </div>
              </Link>
            </div>

            {/* Creative Card */}
            <div className="content-slide-up" style={{animationDelay: '0.3s'}}>
              <Link href="/creative" className="block">
                <div className="bg-surface/50 backdrop-blur-md border border-border/50 rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 group">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-xl font-space font-semibold text-primary mb-3 group-hover:text-gradient transition-all duration-300">
                    Creative Corner
                  </h3>
                  <p className="text-text/70 font-inter">
                    Videos, music, and creative projects. (I have hobbies beyond spreadsheets and networking.)
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 