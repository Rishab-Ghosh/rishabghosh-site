'use client';

import { useState } from 'react';

const reviews = [
  { title: 'Oppenheimer',                       poster: '/images/oppenheimer.jpg',      rating: 9.0, hotTake: "Nolan finally learned how to write dialogue. Also, Cillian Murphy's eyes should win an Oscar." },
  { title: 'Columbus',                           poster: '/images/columbus.jpg',         rating: 7.5, hotTake: "Excellent movie. Shines in connecting day-to-day insecurities to the romance. Slightly bland with poor pacing." },
  { title: 'Chungking Express',                  poster: '/images/chungking_express.jpg',rating: 8.5, hotTake: "Yes I watched a dubbed version. Sue me. Some of the best cinematography I've ever seen. Wong Kar-Wai's Magnum Opus." },
  { title: 'The Truman Show',                    poster: '/images/truman_show.jpg',      rating: 8.0, hotTake: "The best part isn't the concept — it's the experiential nature. You ARE Truman. Jim Carrey made a movie with everyday expressions. Huge." },
  { title: 'Swades',                             poster: '/images/swades.jpg',           rating: 9.5, hotTake: "Most overlooked SRK film. Khan the artist, not the actor. Hope Bollywood would shift toward works like this, but finances would never support it." },
  { title: 'The Curious Case of Benjamin Button',poster: '/images/benjamin_button.jpg',  rating: 7.0, hotTake: "Hard rating. An inversion of the Forrest Gump arc — struggles to maintain cohesive feel. Brad Pitt at his best. Personal favorite." },
];

const ratingColor = (r: number) => {
  if (r >= 9)  return 'var(--px-green)';
  if (r >= 8)  return 'var(--px-blue)';
  if (r >= 7)  return 'var(--px-amber)';
  return 'var(--px-red)';
};

const ratingLabel = (r: number) => {
  if (r >= 9.5) return 'MASTERPIECE';
  if (r >= 9)   return 'EXCELLENT';
  if (r >= 8)   return 'GREAT';
  if (r >= 7)   return 'GOOD';
  return 'DECENT';
};

export default function Reviews() {
  return (
    <div className="pixel-grid-bg" style={{ minHeight: '100vh', padding: '48px 24px 60px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '8px',
            color: 'var(--px-border-light)',
            letterSpacing: '3px',
            marginBottom: '14px',
          }}>// CINEMATHEQUE</div>
          <h1 style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: 'clamp(14px, 3vw, 24px)',
            color: 'var(--px-white)',
            textShadow: '3px 3px 0px rgba(0,0,0,0.5)',
            lineHeight: 1.7,
            marginBottom: '12px',
          }}>MOVIE REVIEWS</h1>
          <p style={{
            fontFamily: 'VT323, monospace',
            fontSize: '21px',
            color: 'var(--px-border-light)',
          }}>My hot takes. Because watching movies and having opinions qualifies as content now.</p>
        </div>

        {/* Featured review */}
        <div style={{ marginBottom: '44px' }}>
          <SectionLabel label="FEATURED REVIEW" color="var(--px-amber)" />
          <div className="featured-grid" style={{
            display: 'grid',
            gridTemplateColumns: '200px 1fr',
            gap: '0',
            backgroundColor: 'var(--px-panel)',
            border: '3px solid var(--px-amber)',
            boxShadow: '6px 6px 0px var(--px-dark)',
            overflow: 'hidden',
          }}>
            {/* Poster slot */}
            <div style={{
              backgroundColor: 'var(--px-panel-dark)',
              borderRight: '3px solid var(--px-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '220px',
              position: 'relative',
            }}>
              <img
                src="/images/jerry_maguire.jpg"
                alt="Jerry Maguire"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', imageRendering: 'auto' }}
                onError={(e) => {
                  const t = e.currentTarget as HTMLImageElement;
                  t.style.display = 'none';
                }}
              />
              {/* Score badge */}
              <div style={{
                position: 'absolute', top: '10px', right: '10px',
                backgroundColor: 'var(--px-green)',
                border: '2px solid var(--px-border-light)',
                boxShadow: '2px 2px 0px var(--px-dark)',
                padding: '6px 10px',
                fontFamily: '"Press Start 2P", monospace',
                fontSize: '14px',
                color: 'var(--px-dark)',
                lineHeight: 1,
              }}>10</div>
            </div>

            {/* Content */}
            <div style={{ padding: '28px 28px' }}>
              <span style={{
                fontFamily: '"Press Start 2P", monospace',
                fontSize: '7px',
                backgroundColor: 'var(--px-amber)',
                color: 'var(--px-dark)',
                padding: '4px 8px',
                display: 'inline-block',
                marginBottom: '14px',
              }}>★ ALL TIME FAV</span>
              <h3 style={{
                fontFamily: '"Press Start 2P", monospace',
                fontSize: '13px',
                color: 'var(--px-amber)',
                lineHeight: 1.7,
                marginBottom: '14px',
              }}>Jerry Maguire</h3>
              <p style={{
                fontFamily: 'VT323, monospace',
                fontSize: '20px',
                color: 'var(--px-border-light)',
                lineHeight: 1.45,
              }}>Truly the best movie of all time. One cannot convince me otherwise.</p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <SectionLabel label="THE LOG" color="var(--px-blue)" />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '18px',
          marginBottom: '48px',
        }}>
          {reviews.map((r, i) => <ReviewCard key={i} review={r} />)}
        </div>

        {/* Letterboxd CTA */}
        <div style={{
          backgroundColor: 'var(--px-panel)',
          border: '3px solid var(--px-border-light)',
          boxShadow: '5px 5px 0px var(--px-dark)',
          padding: '32px',
          textAlign: 'center',
        }}>
          <h3 style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '10px',
            color: 'var(--px-white)',
            marginBottom: '12px',
            lineHeight: 1.7,
          }}>MORE REVIEWS INCOMING</h3>
          <p style={{
            fontFamily: 'VT323, monospace',
            fontSize: '20px',
            color: 'var(--px-border-light)',
            marginBottom: '22px',
          }}>
            Been told to make a Letterboxd countless times. Finally did it — trying to keep up.
          </p>
          <ExtLink href="https://letterboxd.com/Rishab_Ghoshh/" color="var(--px-blue)">
            ↗ FOLLOW ON LETTERBOXD
          </ExtLink>
        </div>
      </div>
    </div>
  );
}

/* ── Sub-components ───────────────────────────────────────────────────────── */

function SectionLabel({ label, color }: { label: string; color: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
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

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  const [hov, setHov] = useState(false);
  const color = ratingColor(review.rating);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        backgroundColor: 'var(--px-panel)',
        border: `3px solid ${hov ? color : 'var(--px-border)'}`,
        boxShadow: hov ? '5px 5px 0px var(--px-dark)' : '3px 3px 0px var(--px-dark)',
        transform: hov ? 'translate(-1px,-1px)' : 'none',
        overflow: 'hidden',
        transition: 'none',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Poster */}
      <div style={{
        height: '180px',
        backgroundColor: 'var(--px-panel-dark)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <img
          src={review.poster}
          alt={review.title}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover',
            display: 'block',
            imageRendering: 'auto',
            transform: hov ? 'scale(1.04)' : 'scale(1)',
            transition: 'none',
          }}
          onError={(e) => {
            const t = e.currentTarget as HTMLImageElement;
            const fb = t.nextElementSibling as HTMLElement;
            if (fb) { t.style.display = 'none'; fb.style.display = 'flex'; }
          }}
        />
        {/* Poster fallback */}
        <div style={{
          display: 'none', width: '100%', height: '100%',
          alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', gap: '8px',
        }}>
          <div style={{ fontFamily: '"Press Start 2P", monospace', fontSize: '28px', color: 'var(--px-border)' }}>▶</div>
          <div style={{ fontFamily: '"Press Start 2P", monospace', fontSize: '7px', color: 'var(--px-border-light)' }}>NO POSTER</div>
        </div>
        {/* Rating badge */}
        <div style={{
          position: 'absolute', top: '10px', right: '10px',
          backgroundColor: color,
          border: '2px solid var(--px-border-light)',
          boxShadow: '2px 2px 0px var(--px-dark)',
          padding: '5px 9px',
          fontFamily: '"Press Start 2P", monospace',
          fontSize: '10px',
          color: 'var(--px-dark)',
        }}>{review.rating}</div>
        {/* Rating label ribbon */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          backgroundColor: `${color}cc`,
          padding: '4px 10px',
          fontFamily: '"Press Start 2P", monospace',
          fontSize: '6px',
          color: 'var(--px-dark)',
          textAlign: 'center',
        }}>{ratingLabel(review.rating)}</div>
      </div>

      {/* Content */}
      <div style={{ padding: '18px 18px', flex: 1 }}>
        <h3 style={{
          fontFamily: '"Press Start 2P", monospace',
          fontSize: '8px',
          color: hov ? color : 'var(--px-white)',
          lineHeight: 1.8,
          marginBottom: '10px',
        }}>{review.title}</h3>
        <p style={{
          fontFamily: 'VT323, monospace',
          fontSize: '18px',
          color: 'var(--px-border-light)',
          lineHeight: 1.4,
        }}>{review.hotTake}</p>
      </div>
    </div>
  );
}

function ExtLink({ href, color, children }: { href: string; color: string; children: React.ReactNode }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
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
        fontSize: '9px',
        padding: '12px 20px',
        transform: hov ? 'translate(2px,2px)' : 'none',
        transition: 'none',
      }}
    >{children}</a>
  );
}
