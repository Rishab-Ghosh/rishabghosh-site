'use client';

import { useState } from 'react';

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/rishab-ghosh',
    color: 'var(--px-green)',
    desc: 'Check the source code',
    path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 8.199-11.386 0-6.627-5.373-12-12-12z',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rishabghosh',
    color: 'var(--px-blue)',
    desc: 'The professional network',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/rishabghoshh/',
    color: 'var(--px-amber)',
    desc: 'Rare sightings of a life',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="pixel-grid-bg" style={{ minHeight: '100vh', padding: '48px 24px 60px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '8px',
            color: 'var(--px-border-light)',
            letterSpacing: '3px',
            marginBottom: '14px',
          }}>// OPEN CHANNEL</div>
          <h1 style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: 'clamp(14px, 3vw, 24px)',
            color: 'var(--px-white)',
            textShadow: '3px 3px 0px rgba(0,0,0,0.5)',
            lineHeight: 1.7,
            marginBottom: '12px',
          }}>LET&apos;S CONNECT</h1>
          <p style={{
            fontFamily: 'VT323, monospace',
            fontSize: '21px',
            color: 'var(--px-border-light)',
            lineHeight: 1.4,
          }}>
            Always down for a convo — good story, idea, or a hot take you want to challenge me on.
            Hit me up if you want to build something cool together.
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>

          {/* Contact info */}
          <div style={{
            backgroundColor: 'var(--px-panel)',
            border: '3px solid var(--px-border-light)',
            boxShadow: '5px 5px 0px var(--px-dark)',
            padding: '28px',
          }}>
            <div style={{
              fontFamily: '"Press Start 2P", monospace',
              fontSize: '9px',
              color: 'var(--px-amber)',
              marginBottom: '22px',
              paddingBottom: '10px',
              borderBottom: '2px solid var(--px-border)',
            }}>GET IN TOUCH</div>

            {[
              { label: 'EMAIL',    val: 'rishabghosh@utexas.edu', href: 'mailto:rishabghosh@utexas.edu', color: 'var(--px-green)' },
              { label: 'LOCATION', val: 'Austin, TX',             href: null,                            color: 'var(--px-amber)' },
            ].map((row) => (
              <div key={row.label} style={{
                backgroundColor: 'var(--px-panel-dark)',
                border: '2px solid var(--px-border)',
                padding: '14px 16px',
                marginBottom: '12px',
              }}>
                <div style={{
                  fontFamily: '"Press Start 2P", monospace',
                  fontSize: '6px',
                  color: 'var(--px-border-light)',
                  marginBottom: '6px',
                }}>{row.label}</div>
                {row.href ? (
                  <a
                    href={row.href}
                    style={{
                      fontFamily: 'VT323, monospace',
                      fontSize: '20px',
                      color: row.color,
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                    onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                  >{row.val}</a>
                ) : (
                  <span style={{ fontFamily: 'VT323, monospace', fontSize: '20px', color: row.color }}>{row.val}</span>
                )}
              </div>
            ))}
          </div>

          {/* Social links */}
          <div style={{
            backgroundColor: 'var(--px-panel)',
            border: '3px solid var(--px-border-light)',
            boxShadow: '5px 5px 0px var(--px-dark)',
            padding: '28px',
          }}>
            <div style={{
              fontFamily: '"Press Start 2P", monospace',
              fontSize: '9px',
              color: 'var(--px-blue)',
              marginBottom: '22px',
              paddingBottom: '10px',
              borderBottom: '2px solid var(--px-border)',
            }}>SOCIAL LINKS</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {socials.map((s) => <SocialRow key={s.name} social={s} />)}
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div style={{
          backgroundColor: 'var(--px-panel)',
          border: '3px solid var(--px-border-light)',
          boxShadow: '5px 5px 0px var(--px-dark)',
          padding: '32px',
          position: 'relative',
        }}>
          {/* Corner pip */}
          <div style={{
            position: 'absolute', top: '-3px', left: '-3px',
            width: '10px', height: '10px',
            backgroundColor: 'var(--px-green)',
          }} />

          <div style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '10px',
            color: 'var(--px-green)',
            marginBottom: '24px',
            paddingBottom: '12px',
            borderBottom: '2px solid var(--px-border)',
          }}>SEND A MESSAGE</div>

          {status === 'sent' ? (
            <div style={{
              backgroundColor: 'var(--px-panel-dark)',
              border: '3px solid var(--px-green)',
              boxShadow: '3px 3px 0px var(--px-dark)',
              padding: '32px',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: '"Press Start 2P", monospace',
                fontSize: '10px',
                color: 'var(--px-green)',
                marginBottom: '12px',
              }}>✓ TRANSMISSION SENT</div>
              <p style={{ fontFamily: 'VT323, monospace', fontSize: '20px', color: 'var(--px-border-light)' }}>
                Message received. I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                <FormField label="NAME" id="name">
                  <input
                    type="text" id="name" required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{ width: '100%', boxSizing: 'border-box' }}
                  />
                </FormField>
                <FormField label="EMAIL" id="email">
                  <input
                    type="email" id="email" required
                    placeholder="your.email@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={{ width: '100%', boxSizing: 'border-box' }}
                  />
                </FormField>
              </div>
              <FormField label="MESSAGE" id="message">
                <textarea
                  id="message" required rows={5}
                  placeholder="What's on your mind?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ width: '100%', resize: 'none', boxSizing: 'border-box' }}
                />
              </FormField>

              {status === 'error' && (
                <div style={{
                  fontFamily: '"Press Start 2P", monospace',
                  fontSize: '7px',
                  color: 'var(--px-red)',
                  marginBottom: '14px',
                }}>✗ TRANSMISSION FAILED — TRY AGAIN</div>
              )}

              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <SubmitButton disabled={status === 'sending'}>
                  {status === 'sending' ? '... TRANSMITTING ...' : '▶ SEND MESSAGE'}
                </SubmitButton>
              </div>
            </form>
          )}
        </div>

        {/* Easter egg */}
        <div style={{
          marginTop: '40px',
          textAlign: 'center',
          fontFamily: 'VT323, monospace',
          fontSize: '17px',
          color: 'var(--px-border)',
        }}>
          You&apos;ve reached the bottom of my website. That&apos;s commitment. I like that.
          <span style={{ animation: 'blink 1s steps(1) infinite', color: 'var(--px-green)', marginLeft: '6px' }}>█</span>
        </div>
      </div>
    </div>
  );
}

/* ── Sub-components ───────────────────────────────────────────────────────── */

function SocialRow({ social }: { social: typeof socials[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        backgroundColor: hov ? `${social.color}18` : 'var(--px-panel-dark)',
        border: `2px solid ${hov ? social.color : 'var(--px-border)'}`,
        boxShadow: hov ? '3px 3px 0px var(--px-dark)' : '2px 2px 0px var(--px-dark)',
        transform: hov ? 'translate(-1px,-1px)' : 'none',
        padding: '12px 16px',
        textDecoration: 'none',
        transition: 'none',
      }}
    >
      <div style={{
        width: '32px', height: '32px',
        backgroundColor: hov ? `${social.color}22` : 'var(--px-panel)',
        border: `2px solid ${social.color}55`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <svg width="14" height="14" fill={social.color} viewBox="0 0 24 24">
          <path d={social.path} />
        </svg>
      </div>
      <div>
        <div style={{
          fontFamily: '"Press Start 2P", monospace',
          fontSize: '8px',
          color: hov ? social.color : 'var(--px-white)',
          marginBottom: '3px',
        }}>{social.name}</div>
        <div style={{
          fontFamily: 'VT323, monospace',
          fontSize: '16px',
          color: 'var(--px-border-light)',
        }}>{social.desc}</div>
      </div>
    </a>
  );
}

function FormField({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label
        htmlFor={id}
        style={{
          display: 'block',
          fontFamily: '"Press Start 2P", monospace',
          fontSize: '7px',
          color: 'var(--px-border-light)',
          marginBottom: '8px',
          letterSpacing: '1px',
        }}
      >{label}</label>
      {children}
    </div>
  );
}

function SubmitButton({ children, disabled }: { children: React.ReactNode; disabled: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      type="submit"
      disabled={disabled}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        backgroundColor: hov && !disabled ? 'var(--px-green)' : 'transparent',
        border: '3px solid var(--px-green)',
        boxShadow: hov && !disabled ? '2px 2px 0px var(--px-dark)' : '4px 4px 0px var(--px-dark)',
        color: hov && !disabled ? 'var(--px-dark)' : 'var(--px-green)',
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '10px',
        padding: '14px 28px',
        cursor: disabled ? 'wait' : 'pointer',
        transform: hov && !disabled ? 'translate(2px,2px)' : 'none',
        transition: 'none',
        opacity: disabled ? 0.6 : 1,
      }}
    >{children}</button>
  );
}
