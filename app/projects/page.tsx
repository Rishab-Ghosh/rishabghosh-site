'use client';

import { useState } from 'react';

const VideoEmbed = ({ videoUrl, videoType }: { videoUrl: string; videoType: string }) => {
  const getYouTubeId = (url: string) =>
    url.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/)?.[1];

  if (videoType === 'youtube') {
    const id = getYouTubeId(videoUrl);
    if (!id) return null;
    return (
      <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', marginBottom: '18px' }}>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title="Project Demo"
          style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            border: '2px solid var(--px-border)',
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  return null;
};

const projects = [
  {
    num: '01',
    title: 'Volatility Surface Dashboard',
    desc: 'A comprehensive financial volatility analysis pipeline built with Streamlit — processing, visualizing, and analyzing implied volatility surfaces, time series, and daily vol shocks.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Plotly', 'Streamlit'],
    githubUrl: 'https://github.com/Rishab-Ghosh/VolPipelineApp',
    demoUrl: null,
    videoUrl: 'https://youtu.be/oC5wD2JDVrU',
    videoType: 'youtube',
  },
  {
    num: '02',
    title: 'Personal Website',
    desc: 'A handcrafted pixel-aesthetic portfolio — the very site you\'re looking at right now. Built to showcase my journey from finance to building.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    githubUrl: 'https://github.com/Rishab-Ghosh/rishabghosh-site',
    demoUrl: 'https://www.rishabghosh.org/',
    videoUrl: null,
    videoType: null,
  },
];

const comingSoon = [
  {
    num: '??',
    title: 'JackSharp',
    desc: 'First App with free training modules for GTO, ICM, Blockers, and Blackjack basic strategy.',
    color: 'var(--px-amber)',
    tag: 'IN DEV',
  },
  {
    num: '??',
    title: 'Peaking Options Dashboard',
    desc: 'A tree-based volatility modeling engine blending ML with market intuition — capturing nonlinear pricing across structured products.',
    color: 'var(--px-green)',
    tag: 'PLANNED',
  },
  {
    num: '??',
    title: 'AR Poker Lens',
    desc: 'An old idea I haven\'t had the skills to pursue yet. If you want to build it with me, reach out.',
    color: 'var(--px-blue)',
    tag: 'CONCEPT',
  },
];

export default function Projects() {
  return (
    <div className="pixel-grid-bg" style={{ minHeight: '100vh', marginRight: '80px', padding: '48px 24px 60px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Page header */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '8px',
            color: 'var(--px-border-light)',
            letterSpacing: '3px',
            marginBottom: '14px',
          }}>// LEVEL SELECT</div>
          <h1 style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: 'clamp(16px, 3vw, 26px)',
            color: 'var(--px-white)',
            textShadow: '3px 3px 0px rgba(0,0,0,0.5)',
            lineHeight: 1.7,
          }}>PROJECTS</h1>
        </div>

        {/* Active levels */}
        <SectionLabel label="ACTIVE LEVELS" color="var(--px-green)" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '22px', marginBottom: '52px' }}>
          {projects.map((p) => (
            <ProjectCard key={p.num} project={p} />
          ))}
        </div>

        {/* Coming soon */}
        <SectionLabel label="LOCKED LEVELS" color="var(--px-border-light)" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px', marginBottom: '52px' }}>
          {comingSoon.map((item) => (
            <LockedCard key={item.title} item={item} />
          ))}
        </div>

        {/* Collab CTA */}
        <div style={{
          backgroundColor: 'var(--px-panel)',
          border: '3px solid var(--px-border-light)',
          boxShadow: '5px 5px 0px var(--px-dark)',
          padding: '36px 32px',
          textAlign: 'center',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: '-3px', left: '-3px',
            width: '10px', height: '10px',
            backgroundColor: 'var(--px-amber)',
          }} />
          <h3 style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '12px',
            color: 'var(--px-amber)',
            marginBottom: '16px',
            lineHeight: 1.7,
          }}>WANT TO COLLABORATE?</h3>
          <p style={{
            fontFamily: 'VT323, monospace',
            fontSize: '20px',
            color: 'var(--px-border-light)',
            marginBottom: '24px',
            lineHeight: 1.5,
          }}>
            I&apos;m always open to interesting projects. Whether it&apos;s building the next big thing or just
            experimenting with new tech — let&apos;s talk.
          </p>
          <PixelAnchor href="/contact" color="var(--px-amber)">✉ GET IN TOUCH</PixelAnchor>
        </div>
      </div>
    </div>
  );
}

/* ── Sub-components ───────────────────────────────────────────────────────── */

function SectionLabel({ label, color }: { label: string; color: string }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '20px',
    }}>
      <div style={{ width: '10px', height: '10px', backgroundColor: color }} />
      <span style={{
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '9px',
        color,
        letterSpacing: '2px',
      }}>{label}</span>
      <div style={{ flex: 1, height: '2px', backgroundColor: 'var(--px-border)' }} />
    </div>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        backgroundColor: 'var(--px-panel)',
        border: `3px solid ${hov ? 'var(--px-green)' : 'var(--px-border-light)'}`,
        boxShadow: hov ? '6px 6px 0px var(--px-dark)' : '4px 4px 0px var(--px-dark)',
        transform: hov ? 'translate(-2px, -2px)' : 'none',
        transition: 'none',
        padding: '24px',
        position: 'relative',
      }}
    >
      {/* Level number badge */}
      <div style={{
        position: 'absolute',
        top: '-2px', right: '16px',
        backgroundColor: 'var(--px-green)',
        padding: '4px 10px',
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '8px',
        color: 'var(--px-dark)',
        boxShadow: '2px 2px 0px var(--px-dark)',
      }}>LVL {project.num}</div>

      {/* Video embed */}
      {project.videoUrl && project.videoType && (
        <VideoEmbed videoUrl={project.videoUrl} videoType={project.videoType} />
      )}

      {/* Title */}
      <h3 style={{
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '10px',
        color: hov ? 'var(--px-green)' : 'var(--px-white)',
        lineHeight: 1.7,
        marginBottom: '12px',
      }}>{project.title}</h3>

      {/* Desc */}
      <p style={{
        fontFamily: 'VT323, monospace',
        fontSize: '19px',
        color: 'var(--px-border-light)',
        lineHeight: 1.45,
        marginBottom: '18px',
      }}>{project.desc}</p>

      {/* Tech stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
        {project.techStack.map((tech) => (
          <span key={tech} style={{
            backgroundColor: 'var(--px-panel-dark)',
            border: '2px solid var(--px-border)',
            color: 'var(--px-blue)',
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '6px',
            padding: '4px 8px',
            textTransform: 'uppercase',
          }}>{tech}</span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <PillLink href={project.githubUrl} color="var(--px-border-light)">
          <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          CODE
        </PillLink>
        {project.demoUrl && (
          <PillLink href={project.demoUrl} color="var(--px-amber)">
            ↗ DEMO
          </PillLink>
        )}
      </div>
    </div>
  );
}

function LockedCard({ item }: { item: typeof comingSoon[0] }) {
  return (
    <div style={{
      backgroundColor: 'var(--px-panel-dark)',
      border: '3px solid var(--px-border)',
      boxShadow: '3px 3px 0px var(--px-dark)',
      padding: '22px',
      opacity: 0.55,
      position: 'relative',
    }}>
      {/* Tag */}
      <div style={{
        position: 'absolute', top: '-2px', right: '12px',
        backgroundColor: 'var(--px-border)',
        padding: '3px 8px',
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '6px',
        color: 'var(--px-border-light)',
      }}>{item.tag}</div>

      <div style={{
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '22px',
        color: 'var(--px-border)',
        marginBottom: '12px',
      }}>🔒</div>
      <h3 style={{
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '9px',
        color: item.color,
        lineHeight: 1.7,
        marginBottom: '10px',
      }}>{item.title}</h3>
      <p style={{
        fontFamily: 'VT323, monospace',
        fontSize: '18px',
        color: 'var(--px-border-light)',
        lineHeight: 1.4,
      }}>{item.desc}</p>
    </div>
  );
}

function PillLink({ href, color, children }: { href: string; color: string; children: React.ReactNode }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        backgroundColor: hov ? color : 'var(--px-panel-dark)',
        border: `2px solid ${color}`,
        color: hov ? 'var(--px-dark)' : color,
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '7px',
        padding: '8px 14px',
        textDecoration: 'none',
        transition: 'none',
      }}
    >{children}</a>
  );
}

function PixelAnchor({ href, color, children }: { href: string; color: string; children: React.ReactNode }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-block',
        textDecoration: 'none',
        backgroundColor: hov ? color : 'transparent',
        border: `3px solid ${color}`,
        boxShadow: hov ? '2px 2px 0px var(--px-dark)' : '4px 4px 0px var(--px-dark)',
        color: hov ? 'var(--px-dark)' : color,
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '10px',
        padding: '12px 22px',
        transform: hov ? 'translate(2px,2px)' : 'none',
        transition: 'none',
      }}
    >{children}</a>
  );
}
