'use client';

import { useState } from 'react';

const timeline = [
  {
    period: 'May–Aug 2025',
    title: 'Repsol — Risk & Options Trading',
    desc: 'Built pivot-based frameworks in Python for curve comparison, anomaly detection, and vol spike diagnostics to support risk and trading decisions.',
    color: 'var(--px-amber)',
    tag: 'INTERNSHIP',
    subItems: [],
  },
  {
    period: 'Jul 2025–Present',
    title: 'Building JackSharp',
    desc: 'First App with training modules for GTO, ICM, Blockers, and Blackjack basic strategy.',
    color: 'var(--px-green)',
    tag: 'PROJECT',
    subItems: [],
  },
  {
    period: 'Sep 2024–Present',
    title: 'Sustainability Investment Group',
    desc: 'Conducted fundamental and ESG-focused equity research to inform portfolio decisions on a ~$12K student-managed public fund.',
    color: 'var(--px-green)',
    tag: 'CLUB',
    subItems: [],
  },
  {
    period: 'Aug 2024–Present',
    title: 'University of Texas at Austin',
    desc: 'Pursuing a degree in Finance, studying anything and everything in between along the way.',
    color: 'var(--px-blue)',
    tag: 'EDUCATION',
    subItems: [],
  },
  {
    period: 'Jun 2023–May 2024',
    title: 'FLIN Company — Co-founder',
    desc: 'Co-founded a venture to mitigate the lack of financial literacy. Garnered over $9.6K in 6 months.',
    color: 'var(--px-amber)',
    tag: 'STARTUP',
    subItems: [
      {
        title: 'Rep. Troy E. Nehls Meets with TX-22 Students',
        link: 'https://myemail.constantcontact.com/The-Nehls-Newsflash.html?soid=1135128515757&aid=Jz4Ba4VDuXQ',
        source: 'Rep. Nehls',
      },
      {
        title: 'Teen-led Houston businesses win national JA awards',
        link: 'https://www.bizjournals.com/houston/news/2024/06/17/houston-wins-big-at-junior-achievement-nationals.html',
        source: 'Houston Business Journal',
      },
    ],
  },
  {
    period: 'Early 2023',
    title: 'Americanomics — Self-published',
    desc: 'My first self-published book. An elementary attempt at addressing financial literacy in the community.',
    color: 'var(--px-red)',
    tag: 'BOOK',
    subItems: [
      {
        title: 'Americanomics: The Basics of Our Country\'s Economy',
        link: 'https://www.amazon.com/Americanomics-Basics-Our-Country-Economy/dp/B0CDNFCZSD',
        source: 'Amazon',
      },
    ],
  },
];

const skills = [
  {
    category: 'Finance',
    color: 'var(--px-amber)',
    items: [
      { name: 'DCF Modeling',     pct: 88 },
      { name: 'Options Pricing',  pct: 82 },
      { name: 'LBO Modeling',     pct: 75 },
      { name: 'Market Sizing',    pct: 80 },
      { name: 'Bottom-up Models', pct: 78 },
    ],
  },
  {
    category: 'Technology',
    color: 'var(--px-green)',
    items: [
      { name: 'Python',       pct: 85 },
      { name: 'Swift/SwiftUI',pct: 65 },
      { name: 'React/Next.js',pct: 72 },
      { name: 'Streamlit',    pct: 80 },
      { name: 'Pandas/NumPy', pct: 88 },
    ],
  },
  {
    category: 'Side Quests',
    color: 'var(--px-blue)',
    items: [
      { name: 'DJ (in training)',        pct: 35 },
      { name: 'Keyboard building',       pct: 60 },
      { name: 'Running (5:30 mile, once)',pct: 55 },
    ],
  },
];

export default function About() {
  return (
    <div className="pixel-grid-bg" style={{ minHeight: '100vh' }}>

      {/* ── Hero / Bio ──────────────────────────────────────────────── */}
      <section style={{ padding: '48px 24px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          {/* Section label */}
          <div style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '8px',
            color: 'var(--px-border-light)',
            letterSpacing: '3px',
            marginBottom: '24px',
          }}>// CHARACTER SELECT</div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>
            {/* @lg: two columns */}
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.6fr)', gap: '32px', alignItems: 'start' }}>

              {/* Profile photo — pixel frame */}
              <div style={{ position: 'relative' }}>
                <div style={{
                  border: '3px solid var(--px-border-light)',
                  boxShadow: '6px 6px 0px var(--px-dark)',
                  overflow: 'hidden',
                  backgroundColor: 'var(--px-panel)',
                  position: 'relative',
                }}>
                  {/* Corner pips */}
                  {['top:-3px;left:-3px', 'top:-3px;right:-3px', 'bottom:-3px;left:-3px', 'bottom:-3px;right:-3px'].map((pos, i) => {
                    const [v, h] = pos.split(';');
                    const [vk, vv] = v.split(':');
                    const [hk, hv] = h.split(':');
                    return (
                      <div key={i} style={{
                        position: 'absolute',
                        [vk]: vv, [hk]: hv,
                        width: '10px', height: '10px',
                        backgroundColor: i % 2 === 0 ? 'var(--px-green)' : 'var(--px-amber)',
                        zIndex: 2,
                      }} />
                    );
                  })}
                  <img
                    src="/images/rishab-profile.jpg"
                    alt="Rishab Ghosh"
                    style={{ width: '100%', height: 'auto', display: 'block', minHeight: '320px', objectFit: 'cover', imageRendering: 'auto' }}
                    onError={(e) => {
                      const t = e.currentTarget as HTMLImageElement;
                      const fb = t.nextElementSibling as HTMLElement;
                      if (fb) { t.style.display = 'none'; fb.style.display = 'flex'; }
                    }}
                  />
                  <div style={{
                    display: 'none',
                    width: '100%', height: '320px',
                    backgroundColor: 'var(--px-panel)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '12px',
                  }}>
                    <div style={{
                      fontFamily: '"Press Start 2P", monospace',
                      fontSize: '32px',
                      color: 'var(--px-green)',
                    }}>?</div>
                    <div style={{
                      fontFamily: '"Press Start 2P", monospace',
                      fontSize: '8px',
                      color: 'var(--px-border-light)',
                    }}>NO SPRITE FOUND</div>
                  </div>
                </div>

                {/* Stat block under photo */}
                <div style={{
                  marginTop: '14px',
                  backgroundColor: 'var(--px-panel-dark)',
                  border: '2px solid var(--px-border)',
                  padding: '14px',
                }}>
                  {[
                    { label: 'CLASS',  val: 'Finance/CS'  },
                    { label: 'GUILD',  val: 'McCombs \'28' },
                    { label: 'SERVER', val: 'Austin, TX'  },
                  ].map((row) => (
                    <div key={row.label} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontFamily: '"Press Start 2P", monospace',
                      fontSize: '7px',
                      marginBottom: '8px',
                    }}>
                      <span style={{ color: 'var(--px-border-light)' }}>{row.label}</span>
                      <span style={{ color: 'var(--px-green)' }}>{row.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bio dialog boxes */}
              <div>
                <h1 style={{
                  fontFamily: '"Press Start 2P", monospace',
                  fontSize: 'clamp(14px, 2.5vw, 22px)',
                  color: 'var(--px-white)',
                  textShadow: '3px 3px 0px rgba(0,0,0,0.5)',
                  marginBottom: '24px',
                  lineHeight: 1.7,
                }}>ABOUT ME</h1>

                {[
                  `I entered college as a Finance major, and have since begun also studying Mathematics along with a certificate in Computer Science. My interest in finance comes from a love of using analytical thinking and technical skills to tackle real-world questions.`,
                  `Whether those questions lead me toward M&A, Private Equity, or Venture Capital is still up in the air — I'm just focused on broadening my perspective. That same curiosity has also pushed me to build, experiment with ideas, and watch them either come to life — or crash and burn in a blaze of error messages.`,
                  `On campus I'm an analyst on the Public Fund at SIG and work on the Finance Team for the Texas Rocketry and Engineering Lab. Or sometimes, I'm just napping in my room.`,
                ].map((para, i) => (
                  <div key={i} style={{
                    backgroundColor: 'var(--px-panel-dark)',
                    border: '2px solid var(--px-border)',
                    padding: '16px 20px',
                    marginBottom: '12px',
                    position: 'relative',
                  }}>
                    {/* Dialog arrow on first box */}
                    {i === 0 && (
                      <div style={{
                        position: 'absolute',
                        bottom: '-10px',
                        left: '20px',
                        width: 0, height: 0,
                        borderLeft: '8px solid transparent',
                        borderRight: '8px solid transparent',
                        borderTop: '10px solid var(--px-border)',
                      }} />
                    )}
                    <p style={{
                      fontFamily: 'VT323, monospace',
                      fontSize: '20px',
                      color: 'var(--px-white)',
                      lineHeight: 1.5,
                      opacity: 0.88,
                    }}>{para}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline / Progress Map ──────────────────────────────────── */}
      <section style={{
        padding: '48px 24px',
        backgroundColor: 'rgba(30,32,48,0.5)',
        borderTop: '3px solid var(--px-border)',
        borderBottom: '3px solid var(--px-border)',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <SectionHeader label="PROGRESS MAP" sub="// WHAT I'VE BEEN UP TO" />

          <div style={{ position: 'relative', paddingLeft: '8px' }}>
            {timeline.map((item, idx) => (
              <TimelineEntry key={idx} item={item} isLast={idx === timeline.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills / XP Bars ─────────────────────────────────────────── */}
      <section style={{ padding: '48px 24px 60px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <SectionHeader label="SKILLS & XP" sub="// STAT SHEET" />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {skills.map((group) => (
              <SkillCard key={group.category} group={group} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── Sub-components ───────────────────────────────────────────────────────── */

function SectionHeader({ label, sub }: { label: string; sub: string }) {
  return (
    <div style={{ marginBottom: '36px' }}>
      <div style={{
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '8px',
        color: 'var(--px-border-light)',
        letterSpacing: '2px',
        marginBottom: '10px',
      }}>{sub}</div>
      <h2 style={{
        fontFamily: '"Press Start 2P", monospace',
        fontSize: 'clamp(13px, 2vw, 18px)',
        color: 'var(--px-amber)',
        textShadow: '2px 2px 0px rgba(0,0,0,0.5)',
        lineHeight: 1.6,
      }}>{label}</h2>
    </div>
  );
}

function TimelineEntry({ item, isLast }: { item: typeof timeline[0]; isLast: boolean }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{ display: 'flex', gap: '20px', marginBottom: isLast ? 0 : '28px', position: 'relative' }}>
      {/* Line + node */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '16px' }}>
        <div style={{
          width: '14px', height: '14px',
          backgroundColor: item.color,
          border: '2px solid var(--px-border-light)',
          boxShadow: `2px 2px 0px var(--px-dark), 0 0 6px ${item.color}55`,
          flexShrink: 0,
        }} />
        {!isLast && (
          <div style={{
            width: '2px',
            flex: 1,
            minHeight: '32px',
            backgroundColor: 'var(--px-border)',
            marginTop: '4px',
          }} />
        )}
      </div>

      {/* Card */}
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          flex: 1,
          backgroundColor: 'var(--px-panel)',
          border: `2px solid ${hov ? item.color : 'var(--px-border)'}`,
          boxShadow: hov ? `4px 4px 0px var(--px-dark)` : '3px 3px 0px var(--px-dark)',
          padding: '18px 20px',
          transform: hov ? 'translate(-1px, -1px)' : 'none',
          transition: 'none',
        }}
      >
        {/* Header row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '10px', flexWrap: 'wrap' }}>
          <h3 style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '9px',
            color: item.color,
            lineHeight: 1.7,
          }}>{item.title}</h3>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexShrink: 0 }}>
            <span style={{
              fontFamily: '"Press Start 2P", monospace',
              fontSize: '6px',
              color: 'var(--px-dark)',
              backgroundColor: item.color,
              padding: '3px 6px',
            }}>{item.tag}</span>
            <span style={{
              fontFamily: 'VT323, monospace',
              fontSize: '16px',
              color: 'var(--px-border-light)',
            }}>{item.period}</span>
          </div>
        </div>
        <p style={{
          fontFamily: 'VT323, monospace',
          fontSize: '19px',
          color: 'var(--px-white)',
          opacity: 0.82,
          lineHeight: 1.45,
          marginBottom: item.subItems.length ? '14px' : 0,
        }}>{item.desc}</p>

        {/* Sub-items (press clippings etc.) */}
        {item.subItems.map((sub, si) => (
          <a
            key={si}
            href={sub.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'var(--px-panel-dark)',
              border: '2px solid var(--px-border)',
              padding: '10px 14px',
              marginBottom: si < item.subItems.length - 1 ? '8px' : 0,
              textDecoration: 'none',
              transition: 'none',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = item.color)}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--px-border)')}
          >
            <span style={{ fontFamily: 'VT323, monospace', fontSize: '18px', color: 'var(--px-green)' }}>↗</span>
            <div>
              <div style={{ fontFamily: 'VT323, monospace', fontSize: '18px', color: 'var(--px-blue)' }}>{sub.title}</div>
              <div style={{ fontFamily: '"Press Start 2P", monospace', fontSize: '6px', color: 'var(--px-border-light)' }}>{sub.source}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function SkillCard({ group }: { group: typeof skills[0] }) {
  return (
    <div style={{
      backgroundColor: 'var(--px-panel)',
      border: '3px solid var(--px-border-light)',
      boxShadow: '4px 4px 0px var(--px-dark)',
      padding: '22px',
    }}>
      {/* Header stripe */}
      <div style={{
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '9px',
        color: group.color,
        marginBottom: '18px',
        paddingBottom: '10px',
        borderBottom: `2px solid ${group.color}44`,
      }}>{group.category}</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {group.items.map((skill) => (
          <div key={skill.name}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <span style={{ fontFamily: 'VT323, monospace', fontSize: '18px', color: 'var(--px-white)' }}>
                {skill.name}
              </span>
              <span style={{ fontFamily: '"Press Start 2P", monospace', fontSize: '7px', color: group.color }}>
                {skill.pct}
              </span>
            </div>
            {/* XP bar */}
            <div style={{
              height: '8px',
              backgroundColor: 'var(--px-panel-dark)',
              border: '2px solid var(--px-border)',
            }}>
              <div style={{
                height: '100%',
                width: `${skill.pct}%`,
                backgroundColor: group.color,
                boxShadow: `0 0 4px ${group.color}88`,
              }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
