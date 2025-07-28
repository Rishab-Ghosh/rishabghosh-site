'use client';

import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      id: "1",
      title: "Why I Built a Volatility Surface Dashboard",
      excerpt: "A deep dive into the world of options pricing and why visualizing volatility surfaces matters for quantitative finance. Plus, some thoughts on why most traders are doing it wrong.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Quantitative Finance",
      tags: ["Options", "Volatility", "Python", "Finance"],
      featured: true
    },
    {
      id: "2", 
      title: "The Math Behind Card Counting (And Why Casinos Hate It)",
      excerpt: "Exploring the probability theory that makes card counting work, why it's not actually illegal, and how I built a training app to practice. The house doesn't always win if you know the numbers.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Mathematics",
      tags: ["Probability", "Blackjack", "Statistics", "Gaming"],
      featured: false
    },
    {
      id: "3",
      title: "Venture Capital: Where PowerPoint Meets Reality",
      excerpt: "My summer internship at Arbor Ventures taught me that most startups are just fancy presentations until they're not. Here's what I learned about separating hype from substance.",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Venture Capital",
      tags: ["VC", "Startups", "Investing", "Internship"],
      featured: false
    },
    {
      id: "4",
      title: "Building a Portfolio Optimizer: Modern Portfolio Theory in Practice",
      excerpt: "How I implemented Harry Markowitz's Modern Portfolio Theory to create a tool that actually helps with investment decisions. Because diversification is just fancy talk for not putting all your eggs in one basket.",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Portfolio Management",
      tags: ["MPT", "Diversification", "Risk", "Python"],
      featured: false
    },
    {
      id: "5",
      title: "The Psychology of Poker: Why Math Alone Isn't Enough",
      excerpt: "Poker isn't just about calculating pot odds. It's about reading people, managing tilt, and understanding game theory. Here's what I've learned from thousands of hands.",
      date: "2023-12-20",
      readTime: "15 min read",
      category: "Psychology",
      tags: ["Poker", "Psychology", "Game Theory", "Decision Making"],
      featured: false
    },
    {
      id: "6",
      title: "From Math Academy to McCombs: My Journey into Finance",
      excerpt: "How a background in advanced mathematics prepared me for quantitative finance, and why I chose to study business instead of pure math. The story behind the quant.",
      date: "2023-12-15",
      readTime: "7 min read",
      category: "Personal",
      tags: ["Education", "Mathematics", "Finance", "Career"],
      featured: false
    }
  ];

  const categories = ["All", "Quantitative Finance", "Mathematics", "Venture Capital", "Portfolio Management", "Psychology", "Personal"];

  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-space font-bold text-highlight mb-6">
            BLOG
          </h1>
          <p className="text-xl font-inter text-highlight/60 max-w-3xl mx-auto leading-relaxed">
            Thoughts on quantitative finance, venture capital, poker strategy, and building cool stuff. 
            Because apparently I have opinions and I&apos;m not afraid to share them.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <div key={post.id} className="mb-16">
            <div className="bg-surface rounded-lg p-8 border border-border hover:border-primary/40 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-inter font-medium rounded-full">
                  Featured
                </span>
                <span className="text-sm font-inter text-highlight/60">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="text-sm font-inter text-highlight/60">
                  {post.readTime}
                </span>
              </div>
              
              <h2 className="text-3xl font-space font-bold text-primary mb-4">
                {post.title}
              </h2>
              
              <p className="text-highlight/70 font-inter text-lg leading-relaxed mb-6">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-accent text-highlight/70 text-xs font-inter font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center px-6 py-3 bg-primary text-background font-space font-semibold rounded-lg hover:bg-primary/80 transition-all duration-200"
              >
                Read Full Post
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-surface border border-border text-highlight/70 font-inter font-medium rounded-lg hover:border-primary/40 hover:text-primary transition-all duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post) => (
            <article
              key={post.id}
              className="bg-surface rounded-lg p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-inter font-medium rounded-full">
                  {post.category}
                </span>
                <span className="text-sm font-inter text-highlight/60">
                  {post.readTime}
                </span>
              </div>
              
              <h3 className="text-xl font-space font-semibold text-primary mb-3 group-hover:text-gradient transition-all duration-300">
                {post.title}
              </h3>
              
              <p className="text-highlight/70 font-inter text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-accent text-highlight/60 text-xs font-inter font-medium rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-inter text-highlight/60">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
                
                <Link
                  href={`/blog/${post.id}`}
                  className="text-primary font-inter font-medium text-sm hover:text-primary/80 transition-colors duration-200"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 text-center">
          <div className="bg-surface/50 rounded-lg p-8 border border-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-space font-bold text-primary mb-4">
              GET UPDATES
            </h3>
            <p className="text-highlight/70 font-inter mb-6">
              Subscribe to get notified when I publish new posts about quant finance, 
              poker strategy, or whatever else I&apos;m thinking about.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your.email@example.com"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-highlight placeholder-highlight/40 font-inter"
              />
              <button className="px-6 py-3 bg-primary text-background font-space font-semibold rounded-lg hover:bg-primary/80 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 