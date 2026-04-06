'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/',         label: 'Home',    code: 'HM' },
  { href: '/about',    label: 'About',   code: 'AB' },
  { href: '/projects', label: 'Work',    code: 'WK' },
  { href: '/reviews',  label: 'Film',    code: 'FM' },
  { href: '/blog',     label: 'Blog',    code: 'BG' },
  { href: '/creative', label: 'Art',     code: 'AR' },
  { href: '/contact',  label: 'Mail',    code: 'ML' },
];

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <>
      {/* ── Desktop: right-side panel ── */}
      <nav
        className="desktop-nav"
        style={{
          position: 'fixed',
          right: 0,
          top: 0,
          height: '100%',
          width: '80px',
          backgroundColor: 'var(--px-panel-dark)',
          borderLeft: '3px solid var(--px-border-light)',
          boxShadow: '-4px 0px 0px var(--px-dark)',
          zIndex: 50,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 0',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'block', textDecoration: 'none' }}>
          <div style={{
            width: '44px',
            height: '44px',
            backgroundColor: 'var(--px-green)',
            border: '3px solid var(--px-border-light)',
            boxShadow: '3px 3px 0px var(--px-dark)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{
              fontFamily: '"Press Start 2P", monospace',
              fontSize: '14px',
              color: 'var(--px-dark)',
              lineHeight: 1,
            }}>R</span>
          </div>
        </Link>

        {/* Nav items */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flex: 1, paddingTop: '20px' }}>
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                title={link.label}
                className="group"
                style={{
                  width: '54px',
                  height: '48px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '3px',
                  border: active ? '2px solid var(--px-green)' : '2px solid transparent',
                  backgroundColor: active ? 'rgba(168,204,140,0.08)' : 'transparent',
                  position: 'relative',
                  textDecoration: 'none',
                  transition: 'none',
                }}
              >
                <span style={{
                  fontFamily: '"Press Start 2P", monospace',
                  fontSize: '7px',
                  color: active ? 'var(--px-green)' : 'var(--px-border-light)',
                  lineHeight: 1,
                  textShadow: active ? '0 0 6px rgba(168,204,140,0.5)' : 'none',
                }}>{link.code}</span>

                {active && (
                  <div style={{
                    position: 'absolute',
                    left: '-2px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '3px',
                    height: '22px',
                    backgroundColor: 'var(--px-green)',
                    boxShadow: '0 0 4px var(--px-green)',
                  }} />
                )}

                <div style={{
                  position: 'absolute',
                  right: 'calc(100% + 6px)',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'var(--px-panel)',
                  border: '2px solid var(--px-green)',
                  boxShadow: '3px 3px 0px var(--px-dark)',
                  padding: '4px 8px',
                  fontFamily: '"Press Start 2P", monospace',
                  fontSize: '7px',
                  color: 'var(--px-green)',
                  whiteSpace: 'nowrap',
                  opacity: 0,
                  pointerEvents: 'none',
                  zIndex: 100,
                }} className="group-hover:opacity-100">
                  {link.label}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Social icons */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <SocialIcon
            href="https://github.com/rishabghosh"
            hoverColor="var(--px-green)"
            label="GitHub"
            path="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 8.199-11.386 0-6.627-5.373-12-12-12z"
          />
          <SocialIcon
            href="https://www.linkedin.com/in/rishabghosh"
            hoverColor="var(--px-blue)"
            label="LinkedIn"
            path="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          />
        </div>
      </nav>

      {/* ── Mobile: bottom navigation bar ── */}
      <nav
        className="mobile-nav"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          backgroundColor: 'var(--px-panel-dark)',
          borderTop: '3px solid var(--px-border-light)',
          boxShadow: '0px -3px 0px var(--px-dark)',
          zIndex: 50,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: '0 4px',
        }}
      >
        {navLinks.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '3px',
                flex: 1,
                height: '100%',
                textDecoration: 'none',
                borderTop: active ? '3px solid var(--px-green)' : '3px solid transparent',
                backgroundColor: active ? 'rgba(168,204,140,0.08)' : 'transparent',
                position: 'relative',
              }}
            >
              <span style={{
                fontFamily: '"Press Start 2P", monospace',
                fontSize: '6px',
                color: active ? 'var(--px-green)' : 'var(--px-border-light)',
                lineHeight: 1,
                textShadow: active ? '0 0 6px rgba(168,204,140,0.5)' : 'none',
              }}>{link.code}</span>
              <span style={{
                fontFamily: 'VT323, monospace',
                fontSize: '11px',
                color: active ? 'var(--px-green)' : 'var(--px-border)',
                lineHeight: 1,
              }}>{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}

function SocialIcon({ href, hoverColor, label, path }: {
  href: string; hoverColor: string; label: string; path: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '28px',
        height: '28px',
        color: hovered ? hoverColor : 'var(--px-border-light)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'none',
      }}
    >
      <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
        <path d={path} />
      </svg>
    </a>
  );
}
