'use client';

import { useState, useEffect, useRef } from 'react';

export default function Creative() {
  const [visiblePlaylists, setVisiblePlaylists] = useState<number[]>([]);
  const playlistRefs = useRef<(HTMLDivElement | null)[]>([]);

  const videos = [
    {
      title: "Chungking Express x White Ferrari Cinematic Edit",
      embedUrl: "https://www.youtube.com/embed/dZjFgnVpBdM",
      description: "watched the movie and was awed, and was going through my depressive Frank Ocean phase, so immediately had a surge of inspiration."
    }
  ];

  const playlists = [
    {
      title: "White Ferrari",
      type: "Track",
      description: "Frank Ocean's masterpiece. Need I say more?",
      embedUrl: "https://open.spotify.com/embed/track/4oPLjuY1WgGTL0Ja1doDOn",
    },
    {
      title: "Late Night Vibes",
      type: "Playlist",
      description: "For those 3 AM coding sessions when you need something to keep you company.",
      embedUrl: "https://open.spotify.com/embed/playlist/0mhHaq9bnzU12PztHg1h2G",
    },
    {
      title: "Study Focus",
      type: "Playlist",
      description: "Lo-fi beats and ambient sounds for deep work sessions.",
      embedUrl: "https://open.spotify.com/embed/playlist/01DtptwX03GLzAloW5XN3B",
    },
    {
      title: "Weekend Energy",
      type: "Playlist",
      description: "High-energy tracks for when you need to get pumped up.",
      embedUrl: "https://open.spotify.com/embed/playlist/7xuDAgJh0IJysrlC1L65E4",
    },
    {
      title: "Chill Out",
      type: "Playlist",
      description: "Relaxing tunes for unwinding after a long day.",
      embedUrl: "https://open.spotify.com/embed/playlist/32gdKXiIstREUTWM4r70Fh",
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = playlistRefs.current.findIndex(ref => ref === entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisiblePlaylists(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all current refs
    playlistRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [playlists.length]);

  return (
    <div className="min-h-screen bg-gradient-mesh">
      <div className="py-20 px-4 sm:px-6 lg:px-8 mr-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 content-slide-in">
            <h1 className="text-5xl sm:text-6xl font-space font-bold text-highlight mb-6">
              CREATIVE CORNER
            </h1>
            <p className="text-xl font-inter text-text/60 max-w-3xl mx-auto leading-relaxed">
              Videos, music, and creative projects I&apos;m working on. Because apparently I have hobbies 
              beyond staring at spreadsheets.
            </p>
          </div>

          {/* YouTube Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-space font-bold text-gradient text-center mb-12 content-slide-up">
              🎥 RECENT VIDEOS
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <div key={index} className="space-y-4 content-slide-up" style={{animationDelay: `${0.1 * index}s`}}>
                  <h3 className="text-lg font-space font-semibold text-primary leading-tight">
                    {video.title}
                  </h3>
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg border border-border/50"
                      src={video.embedUrl}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="text-text/70 font-inter text-sm">
                    {video.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Spotify Section - Horizontal Ribbon */}
          <div className="mb-20">
            <h2 className="text-3xl font-space font-bold text-gradient text-center mb-12 content-slide-up">
              🎧 CURRENTLY LISTENING
            </h2>

            {/* Playlist Ribbon */}
            <div className="overflow-x-auto pb-4">
              <div className="flex space-x-6 min-w-max">
                {playlists.map((playlist, index) => (
                  <div 
                    key={index} 
                    ref={(el) => { playlistRefs.current[index] = el; }}
                    className="flex-shrink-0 w-80 bg-surface/50 backdrop-blur-md rounded-lg p-6 border border-border/50 hover:border-primary/40 transition-all duration-300 content-slide-up" 
                    style={{animationDelay: `${0.1 * index}s`}}
                  >
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center mb-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-inter font-medium rounded-full">
                          {playlist.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-space font-semibold text-primary mb-2">
                        {playlist.title}
                      </h3>
                      <p className="text-text/70 font-inter text-sm leading-relaxed">
                        {playlist.description}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      {visiblePlaylists.includes(index) ? (
                        <iframe
                          className="rounded-lg border border-border/50"
                          style={{ width: '100%', height: '380px' }}
                          src={playlist.embedUrl}
                          title={playlist.title}
                          frameBorder="0"
                          allowFullScreen
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; loading=lazy"
                        ></iframe>
                      ) : (
                        <div 
                          className="rounded-lg border border-border/50 bg-surface/30 flex items-center justify-center"
                          style={{ width: '100%', height: '380px' }}
                        >
                          <div className="text-center">
                            <div className="text-4xl mb-2">🎵</div>
                            <p className="text-text/60 font-inter text-sm">Loading playlist...</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="text-center mt-4 content-slide-up">
              <p className="text-text/60 font-inter text-sm">
                ← Scroll to explore more music →
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
} 