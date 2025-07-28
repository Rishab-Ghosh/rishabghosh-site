'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-accent">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(31,41,55,0.05),transparent_50%)]"></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-primary rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-space font-bold mb-6">
            <span className="text-highlight">ALL IN</span>
            <br />
            <span className="text-gradient">ON THE</span>
            <br />
            <span className="text-highlight">FUTURE</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-inter text-highlight/70 mb-8 max-w-3xl mx-auto">
            Quant • VC • Builder • Blackjack Enjoyer
          </p>
          
          {/* Bio */}
          <p className="text-lg sm:text-xl font-inter text-highlight/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            McCombs student by day, poker strategist by night. Building the future of quantitative finance 
            and venture capital, one data-driven decision at a time.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              href="/projects"
              className="group relative px-8 py-4 bg-primary text-background font-space font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span className="relative z-10">VIEW PROJECTS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <Link
              href="/reviews"
              className="group px-8 py-4 border-2 border-primary/30 text-primary font-space font-semibold rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              MOVIE REVIEWS
            </Link>
          </div>
          
          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <Link
              href="/about"
              className="group p-6 bg-surface rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-primary font-space font-semibold mb-2 group-hover:text-gradient transition-all duration-300">
                ABOUT
              </h3>
              <p className="text-highlight/60 text-sm font-inter">
                The story behind the quant
              </p>
            </Link>
            
            <Link
              href="/creative"
              className="group p-6 bg-surface rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-primary font-space font-semibold mb-2 group-hover:text-gradient transition-all duration-300">
                CREATIVE
              </h3>
              <p className="text-highlight/60 text-sm font-inter">
                Videos, music, and vibes
              </p>
            </Link>
            
            <Link
              href="/contact"
              className="group p-6 bg-surface rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-primary font-space font-semibold mb-2 group-hover:text-gradient transition-all duration-300">
                CONNECT
              </h3>
              <p className="text-highlight/60 text-sm font-inter">
                Let&apos;s build something
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 