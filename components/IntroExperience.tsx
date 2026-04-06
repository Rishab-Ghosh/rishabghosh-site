'use client';

import { useState, useEffect, useCallback } from 'react';

type Scene = 'boot' | 'avatar' | 'golf' | 'ut' | 'movies' | 'final' | 'done';

const DESKTOP_TIMINGS: Record<Scene, number> = {
  boot:   2600,
  avatar: 1800,
  golf:   1400,
  ut:     1400,
  movies: 1400,
  final:  0,    // wait for user input
  done:   0,
};

const MOBILE_SCENES: Scene[] = ['boot', 'avatar', 'final', 'done'];
const DESKTOP_SCENES: Scene[] = ['boot', 'avatar', 'golf', 'ut', 'movies', 'final', 'done'];

interface IntroExperienceProps {
  onComplete: () => void;
}

export default function IntroExperience({ onComplete }: IntroExperienceProps) {
  const [scene, setScene] = useState<Scene>('boot');
  const [isMobile, setIsMobile] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [bootLine, setBootLine] = useState(0);
  const [barWidth, setBarWidth] = useState(0);
  const [showFinalText, setShowFinalText] = useState(false);
  const [showPressStart, setShowPressStart] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const advance = useCallback(() => {
    const scenes = isMobile ? MOBILE_SCENES : DESKTOP_SCENES;
    setScene((cur) => {
      const idx = scenes.indexOf(cur);
      const next = scenes[idx + 1] ?? 'done';
      return next;
    });
  }, [isMobile]);

  const dismiss = useCallback(() => {
    setExiting(true);
    setTimeout(() => {
      localStorage.setItem('hasSeenIntro', '1');
      onComplete();
    }, 500);
  }, [onComplete]);

  // Boot sequence animation
  useEffect(() => {
    if (scene !== 'boot') return;
    const lines = [0, 1, 2, 3];
    const timers: ReturnType<typeof setTimeout>[] = [];
    lines.forEach((i) => {
      timers.push(setTimeout(() => setBootLine(i + 1), i * 500 + 200));
    });
    timers.push(setTimeout(() => {
      let w = 0;
      const iv = setInterval(() => {
        w += 8;
        setBarWidth(w);
        if (w >= 100) {
          clearInterval(iv);
          setTimeout(advance, 300);
        }
      }, isMobile ? 25 : 40);
      timers.push(iv as unknown as ReturnType<typeof setTimeout>);
    }, 2200));
    return () => timers.forEach(clearTimeout);
  }, [scene, advance, isMobile]);

  // Avatar scene — auto advance
  useEffect(() => {
    if (scene !== 'avatar') return;
    const t = setTimeout(advance, isMobile ? 1500 : 1800);
    return () => clearTimeout(t);
  }, [scene, advance, isMobile]);

  // Montage scenes — auto advance
  useEffect(() => {
    if (!['golf', 'ut', 'movies'].includes(scene)) return;
    const t = setTimeout(advance, DESKTOP_TIMINGS[scene]);
    return () => clearTimeout(t);
  }, [scene, advance]);

  // Final scene — reveal text, then press start
  useEffect(() => {
    if (scene !== 'final') return;
    setShowFinalText(false);
    setShowPressStart(false);
    const t1 = setTimeout(() => setShowFinalText(true), 300);
    const t2 = setTimeout(() => setShowPressStart(true), 1400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [scene]);

  // Key/tap to skip on final scene
  useEffect(() => {
    if (scene !== 'final' || !showPressStart) return;
    const handler = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'Enter') dismiss();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [scene, showPressStart, dismiss]);

  if (scene === 'done') return null;

  return (
    <div
      onClick={scene === 'final' && showPressStart ? dismiss : undefined}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'var(--px-bg)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: exiting ? 0 : 1,
        transition: 'opacity 0.5s steps(5)',
        cursor: scene === 'final' && showPressStart ? 'pointer' : 'default',
        overflow: 'hidden',
      }}
    >
      {/* CRT scanline overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Skip button — always visible */}
      <button
        onClick={(e) => { e.stopPropagation(); dismiss(); }}
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          fontFamily: '"Press Start 2P", monospace',
          fontSize: '8px',
          color: 'var(--px-border-light)',
          backgroundColor: 'transparent',
          border: '2px solid var(--px-border)',
          padding: '8px 14px',
          cursor: 'pointer',
          zIndex: 10,
          letterSpacing: '1px',
        }}
      >
        SKIP
      </button>

      {/* Scene content */}
      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 520, padding: '24px' }}>

        {/* BOOT SCENE */}
        {scene === 'boot' && (
          <div>
            <div style={{
              fontFamily: '"Press Start 2P", monospace',
              fontSize: 'clamp(9px, 2vw, 13px)',
              color: 'var(--px-green)',
              marginBottom: '32px',
              letterSpacing: '2px',
            }}>RISHAB.EXE</div>

            <div style={{ fontFamily: 'VT323, monospace', fontSize: '20px', lineHeight: 2 }}>
              {bootLine >= 1 && (
                <div style={{ color: 'var(--px-border-light)' }}>
                  <span style={{ color: 'var(--px-green)' }}>&gt;</span> BOOT SEQUENCE INITIATED...
                </div>
              )}
              {bootLine >= 2 && (
                <div style={{ color: 'var(--px-border-light)' }}>
                  <span style={{ color: 'var(--px-green)' }}>&gt;</span> LOADING PLAYER PROFILE...
                </div>
              )}
              {bootLine >= 3 && (
                <div style={{ color: 'var(--px-border-light)' }}>
                  <span style={{ color: 'var(--px-amber)' }}>&gt;</span> CALIBRATING SKILL TREE...
                </div>
              )}
              {bootLine >= 4 && (
                <div style={{ color: 'var(--px-border-light)' }}>
                  <span style={{ color: 'var(--px-blue)' }}>&gt;</span> CONNECTING TO REALITY...
                </div>
              )}
            </div>

            {bootLine >= 4 && (
              <div style={{ marginTop: '24px' }}>
                <div style={{
                  fontFamily: '"Press Start 2P", monospace',
                  fontSize: '7px',
                  color: 'var(--px-border-light)',
                  marginBottom: '8px',
                  letterSpacing: '1px',
                }}>LOADING [{barWidth < 100 ? ''.padStart(Math.floor(barWidth / 10), '█').padEnd(10, '░') : '██████████'}] {barWidth}%</div>
                <div style={{
                  width: '100%',
                  height: '12px',
                  backgroundColor: 'var(--px-panel-dark)',
                  border: '2px solid var(--px-border)',
                }}>
                  <div style={{
                    width: `${barWidth}%`,
                    height: '100%',
                    backgroundColor: 'var(--px-green)',
                    boxShadow: '0 0 6px var(--px-green)',
                    transition: 'width 0.05s steps(1)',
                  }} />
                </div>
              </div>
            )}
          </div>
        )}

        {/* AVATAR SCENE */}
        {scene === 'avatar' && (
          <div style={{ textAlign: 'center' }}>
            {/* Pixel avatar sprite */}
            <PixelAvatar />
            <div style={{
              fontFamily: '"Press Start 2P", monospace',
              fontSize: 'clamp(11px, 3vw, 16px)',
              color: 'var(--px-white)',
              marginTop: '28px',
              letterSpacing: '3px',
              animation: 'fadeIn 0.3s steps(3) forwards',
            }}>RISHAB GHOSH</div>
            <div style={{
              fontFamily: 'VT323, monospace',
              fontSize: '20px',
              color: 'var(--px-amber)',
              marginTop: '10px',
              letterSpacing: '2px',
            }}>PLAYER ONE — UNLOCKED</div>
            <div style={{
              display: 'inline-block',
              fontFamily: '"Press Start 2P", monospace',
              fontSize: '7px',
              color: 'var(--px-dark)',
              backgroundColor: 'var(--px-green)',
              padding: '5px 12px',
              marginTop: '14px',
              letterSpacing: '1px',
            }}>★ PLAYER LOADED</div>
          </div>
        )}

        {/* GOLF SCENE */}
        {scene === 'golf' && (
          <MontageScene
            icon={<GolfIcon />}
            label="SKILL UNLOCKED"
            value="PRECISION"
            color="var(--px-amber)"
            desc="High-pressure decision making"
          />
        )}

        {/* UT AUSTIN SCENE */}
        {scene === 'ut' && (
          <MontageScene
            icon={<TowerIcon />}
            label="LOCATION SET"
            value="AUSTIN, TX"
            color="var(--px-red)"
            desc="UT McCombs · Finance"
          />
        )}

        {/* MOVIES SCENE */}
        {scene === 'movies' && (
          <MontageScene
            icon={<TVIcon />}
            label="STATUS"
            value="ANALYZING STORIES"
            color="var(--px-blue)"
            desc="Cinephile mode engaged"
          />
        )}

        {/* FINAL SCENE */}
        {scene === 'final' && (
          <div style={{ textAlign: 'center' }}>
            {showFinalText && (
              <>
                <div style={{
                  fontFamily: '"Press Start 2P", monospace',
                  fontSize: 'clamp(10px, 2.5vw, 14px)',
                  color: 'var(--px-border-light)',
                  letterSpacing: '3px',
                  marginBottom: '12px',
                  animation: 'fadeIn 0.2s steps(3) forwards',
                }}>HEY THERE!</div>
                <div style={{
                  fontFamily: '"Press Start 2P", monospace',
                  fontSize: 'clamp(18px, 5vw, 36px)',
                  color: 'var(--px-white)',
                  textShadow: '4px 4px 0px rgba(0,0,0,0.5)',
                  lineHeight: 1.5,
                  marginBottom: '8px',
                  animation: 'fadeIn 0.2s steps(3) 0.3s both',
                }}>I&apos;M RISHAB.</div>
                <div style={{
                  fontFamily: 'VT323, monospace',
                  fontSize: '22px',
                  color: 'var(--px-amber)',
                  letterSpacing: '2px',
                  marginBottom: '40px',
                  animation: 'fadeIn 0.2s steps(3) 0.6s both',
                }}>Finance · Builder · Cinephile</div>
              </>
            )}
            {showPressStart && (
              <div style={{
                fontFamily: '"Press Start 2P", monospace',
                fontSize: 'clamp(8px, 2vw, 11px)',
                color: 'var(--px-yellow)',
                animation: 'blink 1.2s steps(1) infinite',
                letterSpacing: '2px',
              }}>— PRESS START —</div>
            )}
          </div>
        )}
      </div>

      {/* Scene indicator dots */}
      {(
        <div style={{
          position: 'absolute',
          bottom: '24px',
          display: 'flex',
          gap: '8px',
          zIndex: 2,
        }}>
          {(isMobile ? MOBILE_SCENES : DESKTOP_SCENES).filter(s => s !== 'done').map((s) => (
            <div key={s} style={{
              width: '8px',
              height: '8px',
              backgroundColor: s === scene ? 'var(--px-green)' : 'var(--px-border)',
              border: '1px solid var(--px-border-light)',
              boxShadow: s === scene ? '0 0 4px var(--px-green)' : 'none',
            }} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Pixel Art Sub-components ──────────────────────────────────────────────── */

function PixelAvatar() {
  const skin = '#c8936a';
  const hair = '#2a1a0a';
  const hoodie = '#4466bb';
  const phones = '#444444';
  const band = '#666666';

  return (
    <div style={{ position: 'relative', width: 80, height: 100, margin: '0 auto' }}>
      {/* Headphone band */}
      <div style={{ position: 'absolute', top: 2, left: 12, right: 12, height: 6, backgroundColor: band }} />
      {/* Left ear cup */}
      <div style={{ position: 'absolute', top: 6, left: 4, width: 14, height: 18, backgroundColor: phones }} />
      {/* Right ear cup */}
      <div style={{ position: 'absolute', top: 6, right: 4, width: 14, height: 18, backgroundColor: phones }} />
      {/* Hair - top */}
      <div style={{ position: 'absolute', top: 8, left: 16, right: 16, height: 12, backgroundColor: hair }} />
      {/* Hair - sides */}
      <div style={{ position: 'absolute', top: 12, left: 14, width: 6, height: 18, backgroundColor: hair }} />
      <div style={{ position: 'absolute', top: 12, right: 14, width: 6, height: 18, backgroundColor: hair }} />
      {/* Face */}
      <div style={{ position: 'absolute', top: 18, left: 18, right: 18, height: 24, backgroundColor: skin }} />
      {/* Left eye */}
      <div style={{ position: 'absolute', top: 24, left: 22, width: 8, height: 6, backgroundColor: '#1a1a1a' }} />
      {/* Right eye */}
      <div style={{ position: 'absolute', top: 24, right: 22, width: 8, height: 6, backgroundColor: '#1a1a1a' }} />
      {/* Smile */}
      <div style={{ position: 'absolute', top: 34, left: 26, width: 4, height: 3, backgroundColor: '#8b5e3c' }} />
      <div style={{ position: 'absolute', top: 34, right: 26, width: 4, height: 3, backgroundColor: '#8b5e3c' }} />
      <div style={{ position: 'absolute', top: 37, left: 26, right: 26, height: 3, backgroundColor: '#8b5e3c' }} />
      {/* Neck */}
      <div style={{ position: 'absolute', top: 42, left: 30, right: 30, height: 6, backgroundColor: skin }} />
      {/* Hoodie body */}
      <div style={{ position: 'absolute', top: 48, left: 10, right: 10, height: 48, backgroundColor: hoodie }} />
      {/* Hoodie pocket */}
      <div style={{ position: 'absolute', top: 68, left: 24, right: 24, height: 20, backgroundColor: '#3355aa', borderTop: '2px solid #5577cc' }} />
    </div>
  );
}

function MontageScene({
  icon,
  label,
  value,
  color,
  desc,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
  desc: string;
}) {
  return (
    <div style={{
      backgroundColor: 'var(--px-panel)',
      border: `3px solid ${color}`,
      boxShadow: `6px 6px 0px var(--px-dark)`,
      padding: '32px',
      textAlign: 'center',
      animation: 'fadeIn 0.15s steps(3) forwards',
    }}>
      <div style={{ marginBottom: '20px' }}>{icon}</div>
      <div style={{
        fontFamily: '"Press Start 2P", monospace',
        fontSize: '7px',
        color: 'var(--px-border-light)',
        letterSpacing: '2px',
        marginBottom: '10px',
      }}>{label}</div>
      <div style={{
        fontFamily: '"Press Start 2P", monospace',
        fontSize: 'clamp(10px, 2.5vw, 14px)',
        color,
        letterSpacing: '2px',
        textShadow: `2px 2px 0px rgba(0,0,0,0.5)`,
        marginBottom: '14px',
      }}>{value}</div>
      <div style={{
        fontFamily: 'VT323, monospace',
        fontSize: '20px',
        color: 'var(--px-border-light)',
      }}>{desc}</div>
    </div>
  );
}

function GolfIcon() {
  const amber = 'var(--px-amber)';
  return (
    <div style={{ position: 'relative', width: 80, height: 64, margin: '0 auto' }}>
      {/* Ground */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 6, backgroundColor: 'var(--px-green)' }} />
      {/* Flag pole */}
      <div style={{ position: 'absolute', bottom: 6, right: 20, width: 3, height: 40, backgroundColor: 'var(--px-border-light)' }} />
      {/* Flag */}
      <div style={{ position: 'absolute', bottom: 36, right: 10, width: 14, height: 10, backgroundColor: amber }} />
      {/* Stick figure - body */}
      <div style={{ position: 'absolute', bottom: 6, left: 14, width: 4, height: 24, backgroundColor: 'var(--px-white)' }} />
      {/* Head */}
      <div style={{ position: 'absolute', bottom: 30, left: 10, width: 12, height: 12, backgroundColor: skin }} />
      {/* Club */}
      <div style={{ position: 'absolute', bottom: 18, left: 8, width: 14, height: 3, backgroundColor: 'var(--px-border-light)' }} />
      {/* Ball */}
      <div style={{ position: 'absolute', bottom: 8, left: 30, width: 8, height: 8, backgroundColor: 'var(--px-white)' }} />
    </div>
  );
}

const skin = '#c8936a';

function TowerIcon() {
  return (
    <div style={{ position: 'relative', width: 80, height: 72, margin: '0 auto' }}>
      {/* Sky */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: '#1a0a05' }} />
      {/* Tower base */}
      <div style={{ position: 'absolute', bottom: 0, left: 20, right: 20, height: 52, backgroundColor: '#8b4513' }} />
      {/* Tower top spire */}
      <div style={{ position: 'absolute', bottom: 52, left: 32, right: 32, height: 16, backgroundColor: '#a0522d' }} />
      <div style={{ position: 'absolute', bottom: 68, left: 37, right: 37, height: 6, backgroundColor: '#cd853f' }} />
      {/* Windows */}
      <div style={{ position: 'absolute', bottom: 32, left: 28, width: 10, height: 10, backgroundColor: '#ffcc44', boxShadow: '0 0 4px #ffaa00' }} />
      <div style={{ position: 'absolute', bottom: 32, right: 28, width: 10, height: 10, backgroundColor: '#ffcc44', boxShadow: '0 0 4px #ffaa00' }} />
      {/* Burnt orange sky glow */}
      <div style={{ position: 'absolute', bottom: 40, left: 0, right: 0, height: 20, background: 'linear-gradient(transparent, rgba(180,90,20,0.25))' }} />
    </div>
  );
}

function TVIcon() {
  return (
    <div style={{ position: 'relative', width: 88, height: 68, margin: '0 auto' }}>
      {/* TV body */}
      <div style={{ position: 'absolute', top: 0, left: 4, right: 4, bottom: 14, backgroundColor: 'var(--px-panel)', border: '3px solid var(--px-border-light)' }} />
      {/* Screen */}
      <div style={{
        position: 'absolute', top: 6, left: 12, right: 12, bottom: 22,
        backgroundColor: '#0a1a2a',
        boxShadow: '0 0 12px rgba(100,150,255,0.4), inset 0 0 8px rgba(100,150,255,0.2)',
      }}>
        {/* Movie frame lines */}
        <div style={{ position: 'absolute', top: 4, left: 4, right: 4, height: 2, backgroundColor: 'rgba(100,150,255,0.4)' }} />
        <div style={{ position: 'absolute', top: 10, left: 4, right: 4, height: 2, backgroundColor: 'rgba(100,150,255,0.3)' }} />
        <div style={{ position: 'absolute', top: 16, left: 4, right: 4, height: 2, backgroundColor: 'rgba(100,150,255,0.2)' }} />
        {/* Play triangle */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ fontFamily: '"Press Start 2P", monospace', fontSize: '14px', color: 'rgba(100,180,255,0.7)' }}>▶</div>
        </div>
      </div>
      {/* Legs */}
      <div style={{ position: 'absolute', bottom: 0, left: 20, width: 10, height: 14, backgroundColor: 'var(--px-border)' }} />
      <div style={{ position: 'absolute', bottom: 0, right: 20, width: 10, height: 14, backgroundColor: 'var(--px-border)' }} />
      {/* Antenna */}
      <div style={{ position: 'absolute', top: -12, left: 26, width: 3, height: 14, backgroundColor: 'var(--px-border-light)', transform: 'rotate(-10deg)' }} />
      <div style={{ position: 'absolute', top: -12, right: 26, width: 3, height: 14, backgroundColor: 'var(--px-border-light)', transform: 'rotate(10deg)' }} />
    </div>
  );
}
