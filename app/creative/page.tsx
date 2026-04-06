'use client';

import { useState } from 'react';

const videos = [
  {
    title: 'Watch me get rejected from a school but make an epic video and profess my love for movies at the same time',
    desc: 'Win in my books. Getting rejected is just an opportunity to create content and geek out about cinema.',
    embedUrl: 'https://www.youtube.com/embed/m_r9tpGWKSI',
  },
  {
    title: 'I always wanted to be a rapper — but my misfortunes led me to make a song about math with some friends',
    desc: 'Yes this is a sub-par interpolation of Lemonade by Gunna, Nav and Don Toliver. Math and rap can coexist.',
    embedUrl: 'https://www.youtube.com/embed/wA_JilabjCw',
  },
  {
    title: 'Chungking Express × White Ferrari — Cinematic Edit',
    desc: 'Watched the movie, was awed, was going through my Frank Ocean phase, immediately had a surge of inspiration.',
    embedUrl: 'https://www.youtube.com/embed/dZjFgnVpBdM',
  },
];

const playlists = [
  {
    title: 'Magic Johnson by ian',
    desc: 'Favorite song right now. Don\'t agree with the hate from Tyler but this has been a super fun listen.',
    embedUrl: 'https://open.spotify.com/embed/track/4oPLjuY1WgGTL0Ja1doDOn',
    type: 'TRACK',
    color: 'var(--px-green)',
  },
  {
    title: 'house — My Electronic Vibes',
    desc: 'WOW, he listens to House, so different and so cool. I wish I was like him.',
    embedUrl: 'https://open.spotify.com/embed/playlist/0mhHaq9bnzU12PztHg1h2G',
    type: 'PLAYLIST',
    color: 'var(--px-blue)',
  },
  {
    title: 'kanye swift — My Taylor Collection',
    desc: 'Yes, I like Taylor Swift. Does this make me performative? You decide.',
    embedUrl: 'https://open.spotify.com/embed/playlist/01DtptwX03GLzAloW5XN3B',
    type: 'PLAYLIST',
    color: 'var(--px-amber)',
  },
  {
    title: 'spins — My Hip-Hop Vibes',
    desc: 'Thank god I listen to hip-hop, otherwise the rest of this page made me seem kinda weird.',
    embedUrl: 'https://open.spotify.com/embed/playlist/7xuDAgJh0IJysrlC1L65E4',
    type: 'PLAYLIST',
    color: 'var(--px-red)',
  },
  {
    title: 'hindi — My Cultural Playlist',
    desc: 'Taking ownership of my ethnicity and background. Give it a listen.',
    embedUrl: 'https://open.spotify.com/embed/playlist/32gdKXiIstREUTWM4r70Fh',
    type: 'PLAYLIST',
    color: 'var(--px-green)',
  },
];

export default function Creative() {
  return (
    <div className="pixel-grid-bg" style={{ minHeight: '100vh', marginRight: '80px', padding: '48px 24px 60px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '8px',
            color: 'var(--px-border-light)',
            letterSpacing: '3px',
            marginBottom: '14px',
          }}>// MEDIA VAULT</div>
          <h1 style={{
            fontFamily: '"Press Start 2P", monospace',
            fontSize: 'clamp(14px, 3vw, 24px)',
            color: 'var(--px-white)',
            textShadow: '3px 3px 0px rgba(0,0,0,0.5)',
            lineHeight: 1.7,
            marginBottom: '12px',
          }}>CREATIVE CORNER</h1>
          <p style={{
            fontFamily: 'VT323, monospace',
            fontSize: '21px',
            color: 'var(--px-border-light)',
          }}>Videos, music, and creative projects. I have hobbies beyond spreadsheets.</p>
        </div>

        {/* ── Video section ── */}
        <SectionLabel label="RECENT VIDEOS" color="var(--px-red)" sub="// YOUTUBE" />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '22px',
          marginBottom: '56px',
        }}>
          {videos.map((v, i) => <VideoCard key={i} video={v} idx={i} />)}
        </div>

        {/* ── Spotify section ── */}
        <SectionLabel label="CURRENTLY LISTENING" color="var(--px-green)" sub="// SPOTIFY" />
        <div style={{
          display: 'flex',
          gap: '18px',
          overflowX: 'auto',
          paddingBottom: '16px',
          scrollbarWidth: 'thin',
        }}>
          {playlists.map((p, i) => <PlaylistCard key={i} playlist={p} />)}
        </div>
        <p style={{
          fontFamily: '"Press Start 2P", monospace',
          fontSize: '7px',
          color: 'var(--px-border)',
          textAlign: 'center',
          marginTop: '12px',
          letterSpacing: '1px',
        }}>← SCROLL TO EXPLORE MORE MUSIC →</p>
      </div>
    </div>
  );
}

/* ── Sub-components ───────────────────────────────────────────────────────── */

function SectionLabel({ label, color, sub }: { label: string; color: string; sub: string }) {
  return (
    <div style={{ marginBottom: '22px' }}>
      <div style={{
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '7px',
        color: 'var(--px-border-light)',
        letterSpacing: '2px',
        marginBottom: '8px',
      }}>{sub}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '10px', height: '10px', backgroundColor: color }} />
        <span style={{
          fontFamily: '"Press Start 2P", monospace',
          fontSize: '10px',
          color,
          letterSpacing: '2px',
        }}>{label}</span>
        <div style={{ flex: 1, height: '2px', backgroundColor: 'var(--px-border)' }} />
      </div>
    </div>
  );
}

function VideoCard({ video, idx }: { video: typeof videos[0]; idx: number }) {
  const [hov, setHov] = useState(false);
  const colors = ['var(--px-red)', 'var(--px-amber)', 'var(--px-blue)'];
  const color = colors[idx % colors.length];
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        backgroundColor: 'var(--px-panel)',
        border: `3px solid ${hov ? color : 'var(--px-border)'}`,
        boxShadow: hov ? '5px 5px 0px var(--px-dark)' : '3px 3px 0px var(--px-dark)',
        transform: hov ? 'translate(-1px,-1px)' : 'none',
        transition: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Embed */}
      <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
        <iframe
          src={video.embedUrl}
          title={video.title}
          style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            border: 'none', borderBottom: '3px solid var(--px-border)',
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div style={{ padding: '18px' }}>
        <h3 style={{
          fontFamily: '"Press Start 2P", monospace',
          fontSize: '7px',
          color: hov ? color : 'var(--px-white)',
          lineHeight: 1.9,
          marginBottom: '10px',
        }}>{video.title}</h3>
        <p style={{
          fontFamily: 'VT323, monospace',
          fontSize: '18px',
          color: 'var(--px-border-light)',
          lineHeight: 1.4,
        }}>{video.desc}</p>
      </div>
    </div>
  );
}

function PlaylistCard({ playlist }: { playlist: typeof playlists[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flexShrink: 0,
        width: '300px',
        backgroundColor: 'var(--px-panel)',
        border: `3px solid ${hov ? playlist.color : 'var(--px-border)'}`,
        boxShadow: hov ? '5px 5px 0px var(--px-dark)' : '3px 3px 0px var(--px-dark)',
        transform: hov ? 'translate(-1px,-1px)' : 'none',
        transition: 'none',
        overflow: 'hidden',
      }}
    >
      <div style={{ padding: '16px 16px 10px' }}>
        <span style={{
          fontFamily: '"Press Start 2P", monospace',
          fontSize: '6px',
          backgroundColor: playlist.color,
          color: 'var(--px-dark)',
          padding: '3px 7px',
          display: 'inline-block',
          marginBottom: '10px',
        }}>{playlist.type}</span>
        <h3 style={{
          fontFamily: '"Press Start 2P", monospace',
          fontSize: '7px',
          color: hov ? playlist.color : 'var(--px-white)',
          lineHeight: 1.9,
          marginBottom: '8px',
        }}>{playlist.title}</h3>
        <p style={{
          fontFamily: 'VT323, monospace',
          fontSize: '17px',
          color: 'var(--px-border-light)',
          lineHeight: 1.35,
          marginBottom: '12px',
        }}>{playlist.desc}</p>
      </div>
      <iframe
        src={playlist.embedUrl}
        title={playlist.title}
        style={{ width: '100%', height: '352px', border: 'none', borderTop: '2px solid var(--px-border)' }}
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}
