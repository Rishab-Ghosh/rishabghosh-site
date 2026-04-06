'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const blogPosts = [
  {
    id: 'bayesian-poker',
    title: 'Bayesian Decision Making in Poker',
    excerpt: 'Exploring how Bayesian probability theory can be applied to poker decision-making through computational simulations.',
    date: '2024-01-15',
    readTime: '8 min',
    category: 'POKER STRATEGY',
    tags: ['Poker', 'Bayesian', 'Statistics'],
    featured: true,
    url: 'https://medium.com/@rishabghosh_96234/bayesian-decision-making-in-poker-a-simulation-based-study-b53744288df4',
  },
  {
    id: 'batman-problem',
    title: 'The Batman Problem',
    excerpt: 'An exploration of decision-making frameworks and strategic thinking through the lens of Batman\'s approach to complex problems.',
    date: '2024-02-20',
    readTime: '6 min',
    category: 'STRATEGY',
    tags: ['Strategy', 'Decision Making', 'Analysis'],
    featured: false,
    url: 'https://medium.com/@rishabghosh_96234/the-batman-problem-9b09f5d0efff',
  },
  {
    id: 'ai-saas-tool',
    title: 'Launching My New AI B2B SaaS Tool',
    excerpt: 'A deep dive into building and launching an AI-powered B2B SaaS solution — from ideation to market launch.',
    date: '2024-03-10',
    readTime: '7 min',
    category: 'TECHNOLOGY',
    tags: ['AI', 'SaaS', 'Startup'],
    featured: false,
    url: 'https://medium.com/@rishabghosh_96234/launching-my-new-ai-b2b-saas-tool-6ae1916c26fc',
  },
];

export default function Blog() {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowPopup(true), 2000);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) { setSubmitted(true); setShowPopup(false); setEmail(''); }
    } catch { /* silent */ }
    finally { setSubmitting(false); }
  };

  const featured = blogPosts.find((p) => p.featured)!;
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <div className="pixel-grid-bg" style={{ minHeight: '100vh', marginRight: '80px', padding: '48px 24px 60px' }}>

      {/* ── Subscribe popup ── */}
      {showPopup && (
        <div style={{
          position: 'fixed', inset: 0,
          backgroundColor: 'rgba(22,22,29,0.85)',
          zIndex: 200,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '24px',
        }}>
          <div style={{
            backgroundColor: 'var(--px-panel)',
            border: '3px solid var(--px-green)',
            boxShadow: '6px 6px 0px var(--px-dark)',
            padding: '36px 32px',
            maxWidth: '440px', width: '100%',
            position: 'relative',
          }}>
            {/* Close X */}
            <button
              onClick={() => setShowPopup(false)}
              style={{
                position: 'absolute', top: '10px', right: '14px',
                fontFamily: '"Press Start 2P", monospace',
                fontSize: '10px',
                color: 'var(--px-border-light)',
                background: 'none', border: 'none', cursor: 'pointer',
              }}
            >✕</button>

            <div style={{
              fontFamily: '"Press Start 2P", monospace',
              fontSize: '8px',
              color: 'var(--px-green)',
              marginBottom: '8px',
              letterSpacing: '2px',
            }}>// NEW TRANSMISSION</div>
            <h3 style={{
              fontFamily: '"Press Start 2P", monospace',
              fontSize: '12px',
              color: 'var(--px-white)',
              marginBottom: '16px',
              lineHeight: 1.7,
            }}>STAY UPDATED</h3>
            <p style={{
              fontFamily: 'VT323, monospace',
              fontSize: '20px',
              color: 'var(--px-border-light)',
              marginBottom: '24px',
              lineHeight: 1.45,
            }}>
              Sign up to get email updates whenever a new post drops — movies, finance, markets, and probably life updates if that&apos;s what people are into.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                required
                style={{ width: '100%', marginBottom: '12px', boxSizing: 'border-box' }}
              />
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    flex: 1,
                    backgroundColor: 'var(--px-green)',
                    border: '3px solid var(--px-border-light)',
                    boxShadow: '3px 3px 0px var(--px-dark)',
                    color: 'var(--px-dark)',
                    fontFamily: '"Press Start 2P", monospace',
                    fontSize: '9px',
                    padding: '12px',
                    cursor: submitting ? 'wait' : 'pointer',
                    opacity: submitting ? 0.6 : 1,
                  }}
                >{submitting ? 'LOADING...' : 'SUBSCRIBE'}</button>
                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  style={{
                    backgroundColor: 'transparent',
                    border: '3px solid var(--px-border)',
                    color: 'var(--px-border-light)',
                    fontFamily: '"Press Start 2P", monospace',
                    fontSize: '8px',
                    padding: '12px 16px',
                    cursor: 'pointer',
                  }}
                >SKIP</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '44px' }}>
          <div style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '8px',
            color: 'var(--px-border-light)',
            letterSpacing: '3px',
            marginBottom: '14px',
          }}>// DISPATCH TERMINAL</div>
          <h1 style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: 'clamp(16px, 3vw, 24px)',
            color: 'var(--px-white)',
            textShadow: '3px 3px 0px rgba(0,0,0,0.5)',
            lineHeight: 1.7,
            marginBottom: '12px',
          }}>BLOG</h1>
          <p style={{
            fontFamily: 'VT323, monospace',
            fontSize: '21px',
            color: 'var(--px-border-light)',
          }}>I have opinions and I&apos;m not afraid to share them.</p>
        </div>

        {/* Featured post */}
        <FeaturedPost post={featured} />

        {/* Post grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '18px',
          marginBottom: '52px',
        }}>
          {rest.map((post) => <BlogCard key={post.id} post={post} />)}
        </div>

        {/* Newsletter CTA */}
        <div style={{
          backgroundColor: 'var(--px-panel)',
          border: '3px solid var(--px-border-light)',
          boxShadow: '5px 5px 0px var(--px-dark)',
          padding: '32px',
          textAlign: 'center',
        }}>
          <h3 style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '11px',
            color: 'var(--px-green)',
            marginBottom: '12px',
            lineHeight: 1.7,
          }}>GET UPDATES</h3>
          <p style={{
            fontFamily: 'VT323, monospace',
            fontSize: '20px',
            color: 'var(--px-border-light)',
            marginBottom: '22px',
          }}>Subscribe to new posts about finance, poker strategy, or whatever else I&apos;m thinking about.</p>
          <div style={{ display: 'flex', gap: '10px', maxWidth: '440px', margin: '0 auto', flexWrap: 'wrap' }}>
            <input type="email" placeholder="your.email@example.com" style={{ flex: 1, minWidth: '200px' }} />
            <button style={{
              backgroundColor: 'var(--px-green)',
              border: '3px solid var(--px-border-light)',
              boxShadow: '3px 3px 0px var(--px-dark)',
              color: 'var(--px-dark)',
              fontFamily: '"Press Start 2P", monospace',
              fontSize: '9px',
              padding: '12px 18px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}>SUBSCRIBE</button>
          </div>
          {submitted && (
            <p style={{
              fontFamily: '"Press Start 2P", monospace',
              fontSize: '8px',
              color: 'var(--px-green)',
              marginTop: '14px',
              animation: 'blink 1s steps(1) infinite',
            }}>✓ TRANSMISSION RECEIVED</p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Sub-components ───────────────────────────────────────────────────────── */

function FeaturedPost({ post }: { post: typeof blogPosts[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        backgroundColor: 'var(--px-panel)',
        border: `3px solid ${hov ? 'var(--px-amber)' : 'var(--px-border-light)'}`,
        boxShadow: hov ? '6px 6px 0px var(--px-dark)' : '4px 4px 0px var(--px-dark)',
        transform: hov ? 'translate(-2px,-2px)' : 'none',
        padding: '28px 28px 24px',
        marginBottom: '28px',
        position: 'relative',
        transition: 'none',
      }}
    >
      <div style={{
        position: 'absolute', top: '-2px', right: '16px',
        backgroundColor: 'var(--px-amber)',
        padding: '3px 10px',
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '7px',
        color: 'var(--px-dark)',
      }}>★ FEATURED</div>

      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap' }}>
        <span style={{
          fontFamily: '"Press Start 2P", monospace',
          fontSize: '7px',
          backgroundColor: 'rgba(168,204,140,0.1)',
          border: '2px solid var(--px-green)',
          color: 'var(--px-green)',
          padding: '4px 8px',
        }}>{post.category}</span>
        <span style={{ fontFamily: 'VT323, monospace', fontSize: '17px', color: 'var(--px-border-light)' }}>
          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
        </span>
        <span style={{ fontFamily: 'VT323, monospace', fontSize: '17px', color: 'var(--px-border-light)' }}>
          {post.readTime} read
        </span>
      </div>

      <h2 style={{
        fontFamily: '"Press Start 2P", monospace',
        fontSize: 'clamp(10px, 2vw, 14px)',
        color: hov ? 'var(--px-amber)' : 'var(--px-white)',
        lineHeight: 1.8,
        marginBottom: '14px',
      }}>{post.title}</h2>

      <p style={{
        fontFamily: 'VT323, monospace',
        fontSize: '20px',
        color: 'var(--px-border-light)',
        lineHeight: 1.45,
        marginBottom: '20px',
      }}>{post.excerpt}</p>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
        {post.tags.map((tag) => (
          <span key={tag} style={{
            backgroundColor: 'var(--px-panel-dark)',
            border: '2px solid var(--px-border)',
            color: 'var(--px-blue)',
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '6px',
            padding: '3px 7px',
          }}>{tag}</span>
        ))}
      </div>

      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'var(--px-amber)',
          border: '3px solid var(--px-border-light)',
          boxShadow: '3px 3px 0px var(--px-dark)',
          color: 'var(--px-dark)',
          fontFamily: '"Press Start 2P", monospace',
          fontSize: '9px',
          padding: '11px 18px',
          textDecoration: 'none',
        }}
      >READ ON MEDIUM ↗</a>
    </div>
  );
}

function BlogCard({ post }: { post: typeof blogPosts[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        backgroundColor: 'var(--px-panel)',
        border: `3px solid ${hov ? 'var(--px-green)' : 'var(--px-border)'}`,
        boxShadow: hov ? '5px 5px 0px var(--px-dark)' : '3px 3px 0px var(--px-dark)',
        transform: hov ? 'translate(-1px,-1px)' : 'none',
        padding: '22px',
        transition: 'none',
      }}
    >
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap' }}>
        <span style={{
          fontFamily: '"Press Start 2P", monospace',
          fontSize: '6px',
          backgroundColor: 'rgba(102,136,170,0.1)',
          border: '2px solid var(--px-blue)',
          color: 'var(--px-blue)',
          padding: '3px 7px',
        }}>{post.category}</span>
        <span style={{ fontFamily: 'VT323, monospace', fontSize: '16px', color: 'var(--px-border-light)' }}>{post.readTime} read</span>
      </div>

      <h3 style={{
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '9px',
        color: hov ? 'var(--px-green)' : 'var(--px-white)',
        lineHeight: 1.8,
        marginBottom: '12px',
      }}>{post.title}</h3>

      <p style={{
        fontFamily: 'VT323, monospace',
        fontSize: '18px',
        color: 'var(--px-border-light)',
        lineHeight: 1.4,
        marginBottom: '16px',
      }}>{post.excerpt}</p>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'VT323, monospace', fontSize: '16px', color: 'var(--px-border)' }}>
          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '7px',
            color: 'var(--px-green)',
            textDecoration: 'none',
          }}
        >READ ↗</a>
      </div>
    </div>
  );
}
