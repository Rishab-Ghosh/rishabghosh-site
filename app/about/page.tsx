'use client';

export default function About() {
  const timeline = [
    {
      year: "2018-2021",
      title: "Math & Science Academy",
      description: "Where I learned that calculus is just fancy counting and physics is just applied math. Also discovered my love for solving impossible problems.",
      emoji: "🧮"
    },
    {
      year: "2021-Present",
      title: "McCombs School of Business",
      description: "Currently studying finance and CS because apparently you need a degree to tell people you know what you're doing. Building quantitative skills and trying not to fail my classes.",
      emoji: "🎓"
    },
    {
      year: "2024",
      title: "Arbor Ventures Internship",
      description: "Got to play venture capitalist for a summer. Learned that most startups are just PowerPoint presentations until they're not. Surprisingly fun.",
      emoji: "💰"
    },
    {
      year: "2025",
      title: "Building Cool Stuff",
      description: "Working on volatility analysis tools and poker training apps. Because why not combine my two favorite things: math and gambling?",
      emoji: "🎰"
    }
  ];

  const skills = [
    {
      category: "Quantitative Finance",
      items: ["Financial Modeling", "Risk Analysis", "Options Pricing", "Portfolio Optimization"],
      color: "primary"
    },
    {
      category: "Venture Capital",
      items: ["Due Diligence", "Market Analysis", "Investment Thesis", "Startup Evaluation"],
      color: "primary"
    },
    {
      category: "Technology",
      items: ["Python & JavaScript", "React & Next.js", "Data Analysis", "Machine Learning"],
      color: "primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Photo */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface border border-border">
                    <img 
                      src="/images/rishab-profile.jpg" 
                      alt="Rishab Ghosh" 
                      className="w-full h-auto object-cover min-h-[400px]"
                      onError={(e) => {
                        const target = e.currentTarget;
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (target && fallback) {
                          target.style.display = 'none';
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback placeholder */}
                    <div 
                      className="hidden w-full h-[400px] bg-gradient-to-br from-primary/10 to-accent/20 flex items-center justify-center"
                      style={{ display: 'none' }}
                    >
                      <div className="text-center">
                        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <p className="text-primary font-inter text-sm">Add your photo here</p>
                        <p className="text-highlight/60 font-inter text-xs mt-1">rishab-profile.jpg</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-float"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-space font-bold text-highlight mb-6">
                ABOUT ME
              </h1>
              <p className="text-xl font-inter text-highlight/60 mb-8 leading-relaxed">
                McCombs student by day, poker strategist by night. I&apos;m passionate about quantitative finance, 
                venture capital, and building things that actually work. Also, I&apos;m pretty good at blackjack.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-space font-bold text-primary">3+</div>
                  <div className="text-sm font-inter text-highlight/60">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-space font-bold text-primary">10+</div>
                  <div className="text-sm font-inter text-highlight/60">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-space font-bold text-primary">∞</div>
                  <div className="text-sm font-inter text-highlight/60">Poker Hands</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-space font-bold text-primary text-center mb-12">
            THE TIMELINE
          </h2>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-12 bg-primary/30"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Year badge */}
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{item.emoji}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-background rounded-lg p-6 border border-border hover:border-primary/40 transition-all duration-300 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-space font-semibold text-primary">
                        {item.title}
                      </h3>
                      <span className="text-sm font-inter text-highlight/60 bg-accent px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-highlight/70 font-inter leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-space font-bold text-primary text-center mb-12">
            SKILLS & EXPERTISE
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-surface rounded-lg p-6 border border-border hover:border-primary/40 transition-all duration-300 shadow-sm">
                <h3 className="text-xl font-space font-semibold text-primary mb-4">
                  {skill.category}
                </h3>
                <div className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-highlight/70 font-inter text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun fact */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-background rounded-lg p-8 border border-border max-w-2xl mx-auto shadow-sm">
            <h3 className="text-2xl font-space font-bold text-primary mb-4">
              FUN FACT
            </h3>
            <p className="text-highlight/70 font-inter">
              I once calculated the optimal betting strategy for a casino game using Python. 
              The casino wasn&apos;t happy, but my wallet was. 🎰
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 