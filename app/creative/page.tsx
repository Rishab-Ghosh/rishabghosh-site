'use client';

export default function Creative() {
  const videos = [
    {
      title: "Watch me get rejected from a school but make an epic video and profess my love for movies at the same time",
      description: "Win in my books. Because apparently getting rejected is just an opportunity to create content and geek out about cinema.",
      embedUrl: "https://www.youtube.com/embed/m_r9tpGWKSI"
    },
    {
      title: "I always wanted to be a rapper, however I never imagined my misfortunes would lead me to make a song with some of my friends about math",
      description: "Yes this is a sub-par interpolation of Lemonade by Gunna Nav and Don Toliver. Because apparently math and rap can coexist.",
      embedUrl: "https://www.youtube.com/embed/wA_JilabjCw"
    },
    {
      title: "Chungking Express x White Ferrari Cinematic Edit",
      description: "Watched the movie and was awed, and was going through my depressive Frank Ocean phase, so immediately had a surge of inspiration.",
      embedUrl: "https://www.youtube.com/embed/dZjFgnVpBdM"
    }
  ];

  const playlists = [
    {
      title: "Magic Johnson by ian",
      description: "This is my favorite song right now, do not agree with the hate he's been getting from Tyler the Creator but this has been a super fun listen",
      embedUrl: "https://open.spotify.com/embed/track/4oPLjuY1WgGTL0Ja1doDOn",
      type: "Track"
    },
    {
      title: "house - My Electronic Vibes",
      description: "WOW, he listens to House, he is so different and he is so cool. I wish I was like him, I'll name my kid after him!",
      embedUrl: "https://open.spotify.com/embed/playlist/0mhHaq9bnzU12PztHg1h2G",
      type: "Playlist"
    },
    {
      title: "kanye swift - My Taylor Collection",
      description: "Yes, I like Taylor Swift, does this make me performative? Idk bro you decide.",
      embedUrl: "https://open.spotify.com/embed/playlist/01DtptwX03GLzAloW5XN3B",
      type: "Playlist"
    },
    {
      title: "spins - My Hip-Hop Vibes",
      description: "Thank god I listen to hip-hop, otherwise the rest of the content made me seem kinda weird.",
      embedUrl: "https://open.spotify.com/embed/playlist/7xuDAgJh0IJysrlC1L65E4",
      type: "Playlist"
    },
    {
      title: "hindi - My Cultural Playlist",
      description: "This playlist is me taking ownership of my ethnicity and background. If you understand the lyrics it's a pretty good, if you don't, well give it a listen anyways.",
      embedUrl: "https://open.spotify.com/embed/playlist/32gdKXiIstREUTWM4r70Fh",
      type: "Playlist"
    }
  ];

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
                  <div key={index} className="flex-shrink-0 w-80 bg-surface/50 backdrop-blur-md rounded-lg p-6 border border-border/50 hover:border-primary/40 transition-all duration-300 content-slide-up" style={{animationDelay: `${0.1 * index}s`}}>
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
                      <iframe
                        className="rounded-lg border border-border/50"
                        style={{ width: '100%', height: '380px' }}
                        src={playlist.embedUrl}
                        title={playlist.title}
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; loading=lazy"
                      ></iframe>
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