'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Blog() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setShowPopup(false);
        setEmail('');
        // You could add a success toast here
        console.log('Successfully subscribed:', email);
      } else {
        console.error('Subscription failed:', data.error);
        // You could add an error toast here
      }
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const blogPosts = [
    {
      id: "1",
      title: "Blogs Coming Soon",
      excerpt: "I'm working on some interesting content about quantitative finance, poker strategy, venture capital, and building cool stuff. Stay tuned for deep dives into the topics that fascinate me.",
      date: "Coming Soon",
      readTime: "Various",
      category: "Coming Soon",
      tags: ["Finance", "Poker", "VC", "Projects"],
      featured: true
    },
    {
      id: "2", 
      title: "More Posts Will Show Up Here!",
      excerpt: "Sign up for email updates to stay tuned when I publish new content. I'll be sharing thoughts on markets, projects, and whatever else I'm thinking about.",
      date: "Coming Soon",
      readTime: "Various",
      category: "Coming Soon",
      tags: ["Updates", "Email", "Content"],
      featured: false
    }
  ];

  const categories = ["All", "Coming Soon"];

  return (
    <div className="min-h-screen bg-gradient-mesh">
      {/* Email Signup Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-surface/95 backdrop-blur-md rounded-lg p-8 border border-border/50 max-w-md w-full shadow-xl animate-in slide-in-from-bottom-4 duration-300">
            <div className="text-center">
              <h3 className="text-2xl font-space font-bold text-gradient mb-4">
                Stay Updated!
              </h3>
              <p className="text-text/70 font-inter mb-6 leading-relaxed">
                Hey there! I currently haven&apos;t written anything, and if I have either way you should sign up to get email updates whenever a new blog drops. I&apos;ll take movies, finance, markets, projects and perhaps life updates if that&apos;s what people are into.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text placeholder-text/40 font-inter"
                />
                <div className="flex gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-space font-semibold rounded-lg hover:scale-105 transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Signing up...' : 'Sign Up'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPopup(false)}
                    className="px-6 py-3 bg-surface/50 border border-border/50 text-text/70 font-inter font-medium rounded-lg hover:border-primary/40 hover:text-primary transition-all duration-200"
                  >
                    Maybe Later
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <div className="py-20 px-4 sm:px-6 lg:px-8 mr-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 content-slide-in">
            <h1 className="text-5xl sm:text-6xl font-space font-bold text-highlight mb-6">
              BLOG
            </h1>
            <p className="text-xl font-inter text-text/60 max-w-3xl mx-auto leading-relaxed">
              I have opinions and I&apos;m not afraid to share them.
            </p>
          </div>

          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="mb-16 content-slide-up">
              <div className="bg-surface/50 backdrop-blur-md rounded-lg p-8 border border-border/50 hover:border-primary/40 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-inter font-medium rounded-full">
                    Featured
                  </span>
                  <span className="text-sm font-inter text-text/60">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span className="text-sm font-inter text-text/60">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-3xl font-space font-bold text-primary mb-4">
                  {post.title}
                </h2>

                <p className="text-text/70 font-inter text-lg leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent/20 text-text/70 text-xs font-inter font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-space font-semibold rounded-lg hover:scale-105 transition-all duration-200"
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
          <div className="mb-12 content-slide-up">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-surface/50 backdrop-blur-md border border-border/50 text-text/70 font-inter font-medium rounded-lg hover:border-primary/40 hover:text-primary transition-all duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <article
                key={post.id}
                className="bg-surface/50 backdrop-blur-md rounded-lg p-6 border border-border/50 hover:border-primary/40 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg content-slide-up"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-inter font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm font-inter text-text/60">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-space font-semibold text-primary mb-3 group-hover:text-gradient transition-all duration-300">
                  {post.title}
                </h3>

                <p className="text-text/70 font-inter text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-accent/20 text-text/60 text-xs font-inter font-medium rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-inter text-text/60">
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
            <div className="bg-surface/50 backdrop-blur-md rounded-lg p-8 border border-border/50 max-w-2xl mx-auto content-slide-up">
              <h3 className="text-2xl font-space font-bold text-gradient mb-4">
                GET UPDATES
              </h3>
              <p className="text-text/70 font-inter mb-6">
                Subscribe to get notified when I publish new posts about quant finance,
                poker strategy, or whatever else I&apos;m thinking about.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="flex-1 px-4 py-3 bg-background border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text placeholder-text/40 font-inter"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-space font-semibold rounded-lg hover:scale-105 transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 