'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 600);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="pixel-grid-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        marginRight: '80px',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        {/* Big 404 */}
        <div style={{
          fontFamily: '"Press Start 2P", monospace',
          fontSize: 'clamp(48px, 10vw, 96px)',
          color: 'var(--px-red)',
          textShadow: '6px 6px 0px rgba(0,0,0,0.5)',
          lineHeight: 1,
          marginBottom: '24px',
        }}>404</div>

        {/* Panel */}
        <div style={{
          backgroundColor: 'var(--px-panel)',
          border: '3px solid var(--px-red)',
          boxShadow: '6px 6px 0px var(--px-dark)',
          padding: '36px 40px',
          maxWidth: '500px',
          margin: '0 auto 32px',
        }}>
          <h2 style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '12px',
            color: 'var(--px-amber)',
            marginBottom: '16px',
            lineHeight: 1.7,
          }}>LEVEL NOT FOUND</h2>
          <p style={{
            fontFamily: 'VT323, monospace',
            fontSize: '21px',
            color: 'var(--px-border-light)',
            lineHeight: 1.5,
            marginBottom: '24px',
          }}>
            This page doesn&apos;t exist. It might have been moved, deleted,
            or you took a wrong turn somewhere in the dungeon.
          </p>

          {/* Game over text */}
          <div style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '10px',
            color: blink ? 'var(--px-yellow)' : 'transparent',
            marginBottom: '24px',
            letterSpacing: '2px',
          }}>
            GAME OVER
          </div>

          <Link
            href="/"
            style={{
              display: 'inline-block',
              textDecoration: 'none',
              backgroundColor: 'var(--px-green)',
              border: '3px solid var(--px-border-light)',
              boxShadow: '4px 4px 0px var(--px-dark)',
              color: 'var(--px-dark)',
              fontFamily: '"Press Start 2P", monospace',
              fontSize: '10px',
              padding: '14px 24px',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = 'translate(2px,2px)';
              el.style.boxShadow = '2px 2px 0px var(--px-dark)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = '';
              el.style.boxShadow = '4px 4px 0px var(--px-dark)';
            }}
          >
            ▶ RETURN TO HOME
          </Link>
        </div>

        {/* Error code flavor */}
        <div style={{
          fontFamily: 'VT323, monospace',
          fontSize: '16px',
          color: 'var(--px-border)',
        }}>
          ERR_PAGE_NOT_FOUND · CODE 0x404
        </div>
      </div>
    </div>
  );
}
