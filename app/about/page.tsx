'use client';

export default function About() {
  const timeline = [
    {
      year: "May 2025 - August 2025",
      title: "Repsol: Risk Management and Options Trading",
      description: "Built pivot-based frameworks in Python for curve comparison, anomaly detection, and vol spike diagnostics to support risk and trading decisions.",
      emoji: "⚡"
    },
    {
      year: "July 2025- Present",
      title: "Building JackSharp",
      description: "First App with training modules for GTO, ICM, Blockers, and Blackjack basic strategy",
      emoji: "🃏"
    },
    {
      year: "September 2024-Present",
      title: "Sustainability Investment Group (SIG)",
      description: "Conducted fundamental and ESG-focused equity research to inform portfolio decisions on a ~$12K student-managed public fund.",
      emoji: "🌱"
    },
    {
      year: "August 2024 - Present",
      title: "University of Texas at Austin",
      description: "Pursuing a degree in Finance, studying anything and everything in between along the way.",
      emoji: "🎓"
    },
    {
      year: "June 2023-May 2024",
      title: "FLIN Company",
      description: "Co-founded a venture aimed towards mitigating the lack of financial literacy, the Financial Literacy Interactive Notebook (or F.L.I.N), garnering over $9.6K in 6 months",
      emoji: "📚",
      subItems: [
        {
          title: "Rep. Troy E. Nehls Meets with TX-22 Students in Our Nation's Capital",
          link: "https://myemail.constantcontact.com/The-Nehls-Newsflash.html?soid=1135128515757&aid=Jz4Ba4VDuXQ",
          image: "/images/flin-congress.jpg",
          source: "Rep. Nehls"
        },
        {
          title: "Teen-led Houston businesses win national Junior Achievement awards",
          link: "https://www.bizjournals.com/houston/news/2024/06/17/houston-wins-big-at-junior-achievement-nationals.html",
          image: "/images/flin-awards.jpg", 
          source: "Houston Business Journal"
        }
      ]
    },
    {
      year: "Early 2023",
      title: "Americanomics",
      description: "This was my first self-published book. This was an elementary attempt at addressing an issue I found within the community, and have since done better.",
      emoji: "📖",
      subItems: [
        {
          title: "Americanomics: The Basics of Our Country's Economy",
          link: "https://www.amazon.com/Americanomics-Basics-Our-Country-Economy/dp/B0CDNFCZSD",
          image: "/images/americanomics-cover.jpg",
          source: "Amazon"
        }
      ]
    }
  ];

  const skills = [
    {
      category: "Finance",
      items: ["Building DCF models", "Options Pricing", "LBO Modeling", "Building bottoms-up models", "Market Sizing: TAM/SAM/SOM", "Forecasting financials"]
    },
    {
      category: "Technology",
      items: ["Python", "Swift", "SwiftUI", "Streamlit", "React", "Tailwind CSS", "Plotly", "Pandas", "NumPy", "Firebase"]
    },
    {
      category: "Other Skills",
      items: ["DJ (in training)", "Building keyboards", "5:30 mile (at some point in time)"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-mesh">
      {/* Hero Section with Photo */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 mr-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="order-2 lg:order-1 content-slide-in">
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface/50 backdrop-blur-md border border-border/50">
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
                      className="hidden w-full h-[400px] bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center"
                      style={{ display: 'none' }}
                    >
                      <div className="text-center">
                        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <p className="text-primary font-inter text-sm">Add your photo here</p>
                        <p className="text-text/60 font-inter text-xs mt-1">rishab-profile.jpg</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-float"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 content-slide-in" style={{animationDelay: '0.2s'}}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-space font-bold text-highlight mb-6">
                ABOUT ME
              </h1>
              <p className="text-xl font-inter text-text/60 mb-8 leading-relaxed">
                Hey there! I entered college as a Finance major, and have since begun also studying Mathematics along with a certificate in Computer Science. My interest in finance comes from a love of using analytical thinking and technical skills to tackle real-world questions.
              </p>
              <p className="text-xl font-inter text-text/60 mb-8 leading-relaxed">
                Whether those questions lead me toward M&A, Private Equity, or Venture Capital is still up in the air—I&apos;m just focused on broadening my perspective for now. That same curiosity has also pushed me to build, experiment with new ideas and projects, and watch them either come to life—or crash and burn in a blaze of error messages. That&apos;s part of why I&apos;m drawn to the startup space: I love seeing what real innovators are building to reshape the world.
              </p>
              <p className="text-xl font-inter text-text/60 mb-8 leading-relaxed">
                On campus, I&apos;m an analyst on the Public Fund at the Sustainability Investment Group—the only GSLI (Global Sustainability Leadership Institute) affiliated org at UT—where we manage a ~$12k portfolio. I also work on the Finance Team for the Texas Rocketry and Engineering Lab, supporting the launch of the largest collegiate liquid bi-propellant rocket of its kind.
              </p>
              <p className="text-xl font-inter text-text/60 mb-8 leading-relaxed">
                Or sometimes, I&apos;m just napping in my room.
              </p>


            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 mr-20 bg-surface/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-space font-bold text-gradient text-center mb-12 content-slide-up">
            WHAT I HAVE BEEN UP TO
          </h2>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative content-slide-up" style={{animationDelay: `${0.1 * index}s`}}>
                {/* Timeline line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-12 bg-gradient-to-b from-primary to-secondary"></div>
                )}

                <div className="flex items-start space-x-6">
                  {/* Year badge */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{item.emoji}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-surface/50 backdrop-blur-md rounded-lg p-6 border border-border/50 hover:border-primary/40 transition-all duration-300 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-space font-semibold text-primary">
                        {item.title}
                      </h3>
                      <span className="text-sm font-inter text-text/60 bg-accent/20 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-text/70 font-inter leading-relaxed mb-4">
                      {item.description}
                    </p>
                    
                    {/* Sub-items */}
                    {item.subItems && (
                      <div className="space-y-3">
                        {item.subItems.map((subItem, subIndex) => (
                          <div key={subIndex} className="flex items-center space-x-3 p-3 bg-background/30 rounded-lg border border-border/30 hover:border-primary/30 transition-all duration-200">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden">
                              <img 
                                src={subItem.image} 
                                alt={subItem.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const target = e.currentTarget;
                                  const fallback = target.nextElementSibling as HTMLElement;
                                  if (target && fallback) {
                                    target.style.display = 'none';
                                    fallback.style.display = 'flex';
                                  }
                                }}
                              />
                              <div className="hidden w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                <span className="text-primary text-xs">📰</span>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <a 
                                href={subItem.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-sm font-inter text-primary hover:text-primary/80 transition-colors duration-200 truncate"
                              >
                                {subItem.title}
                              </a>
                              <p className="text-xs font-inter text-text/50">
                                {subItem.source}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 mr-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-space font-bold text-gradient text-center mb-12 content-slide-up">
            SKILLS & EXPERTISE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-surface/50 backdrop-blur-md rounded-lg p-6 border border-border/50 hover:border-primary/40 transition-all duration-300 shadow-sm content-slide-up" style={{animationDelay: `${0.1 * index}s`}}>
                <h3 className="text-xl font-space font-semibold text-primary mb-4">
                  {skill.category}
                </h3>
                <div className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                      <span className="text-text/70 font-inter text-sm">
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


    </div>
  );
} 