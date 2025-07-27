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
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-space font-bold text-highlight mb-6">
            ABOUT ME
          </h1>
          <p className="text-xl font-inter text-highlight/70 max-w-3xl mx-auto leading-relaxed">
            McCombs student by day, poker strategist by night. I&apos;m passionate about quantitative finance, 
            venture capital, and building things that actually work. Also, I&apos;m pretty good at blackjack.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-space font-bold text-primary neon-glow text-center mb-12">
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
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/20 border border-primary/40 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{item.emoji}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-surface/50 rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-space font-semibold text-primary">
                        {item.title}
                      </h3>
                      <span className="text-sm font-inter text-highlight/60 bg-accent px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-highlight/80 font-inter leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-3xl font-space font-bold text-primary neon-glow text-center mb-12">
            SKILLS & EXPERTISE
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-surface/50 rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300">
                <h3 className="text-xl font-space font-semibold text-primary mb-4">
                  {skill.category}
                </h3>
                <div className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-highlight/80 font-inter text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun fact */}
        <div className="mt-20 text-center">
          <div className="bg-surface/30 rounded-lg p-8 border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-space font-bold text-primary mb-4">
              FUN FACT
            </h3>
            <p className="text-highlight/80 font-inter">
              I once calculated the optimal betting strategy for a casino game using Python. 
              The casino wasn&apos;t happy, but my wallet was. 🎰
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 