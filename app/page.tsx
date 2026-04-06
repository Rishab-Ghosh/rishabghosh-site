'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const S = {
  btn: (color: string, filled = false) => ({
    backgroundColor: filled ? color : 'transparent',
    border: `3px solid ${color}`,
    boxShadow: '4px 4px 0px var(--px-dark)',
    color: filled ? 'var(--px-dark)' : color,
    fontFamily: '"Press Start 2P", monospace',
    fontSize: '10px',
    padding: '14px 22px',
    cursor: 'pointer',
    letterSpacing: '1px',
    display: 'inline-block',
    textDecoration: 'none',
    transition: 'none',
  } as React.CSSProperties),
};

const quickLinks = [
  { href: '/reviews',  label: '[ FILM REVIEWS ]', sub: 'hot takes on cinema',     color: 'var(--px-red)'  },
  { href: '/projects', label: '[ PROJECTS ]',      sub: 'things i have built',     color: 'var(--px-green)'},
  { href: '/creative', label: '[ CREATIVE ]',      sub: 'music · video · art',     color: 'var(--px-blue)' },
];

export default function Home() {
  const [show, setShow]           = useState(false);
  const [pressStart, setPressStart] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShow(true), 150);
    const t2 = setTimeout(() => setPressStart(true), 900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div
      className="pixel-grid-bg"
      style={{ minHeight: '100vh', padding: '40px 24px 60px', marginRight: '80px' }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* Boot line */}
        <div style={{
          fontFamily: 'VT323, monospace',
          fontSize: '16px',
          color: 'var(--px-border-light)',
          marginBottom: '36px',
          opacity: show ? 1 : 0,
          transition: 'opacity 0.15s steps(3)',
        }}>
          <span style={{ color: 'var(--px-green)' }}>SYS</span>
          {' '}// RISHAB.EXE — BUILD v1.0.4 — BOOT OK
          <span style={{ animation: 'blink 1s steps(1) infinite', color: 'var(--px-green)' }}>█</span>
        </div>

        {/* ── Hero panel ── */}
        <div
          className="pixel-panel"
          style={{
            padding: '44px 40px',
            marginBottom: '32px',
            opacity: show ? 1 : 0,
            transition: 'opacity 0.2s steps(4)',
            position: 'relative',
          }}
        >
          {/* Corner pip */}
          <div style={{
            position: 'absolute', top: '-3px', left: '-3px',
            width: '12px', height: '12px',
            backgroundColor: 'var(--px-green)',
          }} />
          <div style={{
            position: 'absolute', top: '-3px', right: '-3px',
            width: '12px', height: '12px',
            backgroundColor: 'var(--px-amber)',
          }} />

          {/* Player label */}
          <div style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '8px',
            color: 'var(--px-border-light)',
            marginBottom: '16px',
            letterSpacing: '3px',
          }}>// PLAYER ONE</div>

          {/* Name */}
          <h1 style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: 'clamp(18px, 3.5vw, 32px)',
            color: 'var(--px-white)',
            textShadow: '3px 3px 0px rgba(0,0,0,0.5)',
            lineHeight: 1.7,
            marginBottom: '10px',
          }}>
            I&apos;m Rishab
          </h1>

          {/* Tagline */}
          <div style={{
            fontFamily: 'VT323, monospace',
            fontSize: '26px',
            color: 'var(--px-amber)',
            letterSpacing: '2px',
            marginBottom: '28px',
          }}>
            Finance · Builder · Cinephile · Poker
          </div>

          {/* Bio dialog */}
          <div style={{
            backgroundColor: 'var(--px-panel-dark)',
            border: '2px solid var(--px-border)',
            padding: '18px 22px',
            marginBottom: '34px',
          }}>
            <div style={{
              fontFamily: 'VT323, monospace',
              fontSize: '21px',
              color: 'var(--px-white)',
              lineHeight: 1.55,
              opacity: 0.88,
            }}>
              Studying Finance at UT Austin&apos;s McCombs School of Business.{' '}
              Bridging technical modeling with capital market insights.{' '}
              Building things that sometimes work.
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
            <PixelLink href="/projects" color="var(--px-green)" filled>▶ VIEW WORK</PixelLink>
            <PixelLink href="/contact"  color="var(--px-amber)">✉ SAY HI</PixelLink>
          </div>
        </div>

        {/* Social pills */}
        <div style={{
          display: 'flex', gap: '14px', marginBottom: '48px', flexWrap: 'wrap',
          opacity: show ? 1 : 0, transition: 'opacity 0.2s steps(4)',
        }}>
          <SocialPill
            href="https://github.com/Rishab-Ghosh"
            label="GITHUB"
            hoverColor="var(--px-green)"
            iconPath="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 8.199-11.386 0-6.627-5.373-12-12-12z"
          />
          <SocialPill
            href="https://www.linkedin.com/in/rishabghosh"
            label="LINKEDIN"
            hoverColor="var(--px-blue)"
            iconPath="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </div>

        {/* Quick-link cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '18px',
          opacity: show ? 1 : 0,
          transition: 'opacity 0.25s steps(4)',
        }}>
          {quickLinks.map((link) => (
            <HoverCard key={link.href} href={link.href} color={link.color}>
              <div style={{
                fontFamily: '"Press Start 2P", monospace',
                fontSize: '9px',
                color: link.color,
                marginBottom: '10px',
                lineHeight: 1.6,
              }}>
                {link.label}
              </div>
              <div style={{
                fontFamily: 'VT323, monospace',
                fontSize: '19px',
                color: 'var(--px-border-light)',
              }}>
                {link.sub}
              </div>
            </HoverCard>
          ))}
        </div>

        {/* Press start */}
        {pressStart && (
          <div style={{
            textAlign: 'center',
            marginTop: '60px',
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '9px',
            color: 'var(--px-yellow)',
            animation: 'blink 1.2s steps(1) infinite',
            letterSpacing: '2px',
          }}>
            — PRESS ANY KEY TO CONTINUE —
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Sub-components ───────────────────────────────────────────────────────── */

function PixelLink({ href, color, filled = false, children }: {
  href: string; color: string; filled?: boolean; children: React.ReactNode;
}) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        backgroundColor: hov || filled ? color : 'transparent',
        border: `3px solid ${color}`,
        boxShadow: hov ? '2px 2px 0px var(--px-dark)' : '4px 4px 0px var(--px-dark)',
        color: hov || filled ? 'var(--px-dark)' : color,
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '10px',
        padding: '13px 22px',
        cursor: 'pointer',
        letterSpacing: '1px',
        display: 'inline-block',
        textDecoration: 'none',
        transform: hov ? 'translate(2px, 2px)' : 'none',
        transition: 'none',
      }}
    >
      {children}
    </Link>
  );
}

function SocialPill({ href, label, hoverColor, iconPath }: {
  href: string; label: string; hoverColor: string; iconPath: string;
}) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: 'var(--px-panel)',
        border: `2px solid ${hov ? hoverColor : 'var(--px-border)'}`,
        boxShadow: hov ? '2px 2px 0px var(--px-dark)' : '3px 3px 0px var(--px-dark)',
        padding: '10px 16px',
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '8px',
        color: hov ? hoverColor : 'var(--px-border-light)',
        textDecoration: 'none',
        transform: hov ? 'translate(1px, 1px)' : 'none',
        transition: 'none',
      }}
    >
      <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
        <path d={iconPath} />
      </svg>
      {label}
    </a>
  );
}

function HoverCard({ href, color, children }: {
  href: string; color: string; children: React.ReactNode;
}) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'block',
        textDecoration: 'none',
        backgroundColor: 'var(--px-panel)',
        border: `3px solid ${hov ? color : 'var(--px-border)'}`,
        boxShadow: hov ? '6px 6px 0px var(--px-dark)' : '4px 4px 0px var(--px-dark)',
        padding: '24px',
        transform: hov ? 'translate(-2px, -2px)' : 'none',
        transition: 'none',
      }}
    >
      {children}
    </Link>
  );
}
