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
      title: "Building a Volatility Dashboard",
      description: "How I built an interactive dashboard for analyzing volatility surfaces. Because staring at numbers all day isn't enough, I need pretty graphs too.",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ];

  const nowLogs = [
    {
      id: "1",
      title: "Working on Portfolio Optimizer",
      date: "2024-01-15",
      note: "Building a risk-adjusted portfolio optimization tool. Because apparently diversification is important."
    },
    {
      id: "2", 
      title: "Watched Oppenheimer",
      date: "2024-01-12",
      note: "Finally got around to watching it. Cillian Murphy's performance is absolutely mesmerizing."
    },
    {
      id: "3",
      title: "Poker Session",
      date: "2024-01-10", 
      note: "Played some live poker downtown. Won a decent pot with pocket aces. The math works sometimes."
    },
    {
      id: "4",
      title: "Started New Project",
      date: "2024-01-08",
      note: "Beginning work on a market sentiment analyzer. Twitter is basically a crystal ball for stock prices."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl font-space font-bold text-highlight mb-6">
            CREATIVE CORNER
          </h1>
          <p className="text-xl font-inter text-highlight/60 max-w-3xl mx-auto leading-relaxed">
            Videos, music, and creative projects I&apos;m working on. Because apparently I have hobbies 
            beyond staring at spreadsheets.
          </p>
        </div>

        {/* YouTube Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-space font-bold text-primary text-center mb-12">
            🎥 RECENT VIDEOS
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-space font-semibold text-primary leading-tight">
                  {video.title}
                </h3>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg border border-border"
                    src={video.embedUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-highlight/70 font-inter text-sm">
                  {video.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Spotify Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-space font-bold text-primary text-center mb-12">
            🎧 CURRENTLY LISTENING
          </h2>
          
          {/* Favorite Song */}
          <div className="bg-surface rounded-lg p-6 border border-border max-w-2xl mx-auto mb-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-space font-semibold text-primary mb-2">
                Magic Johnson by ian
              </h3>
              <p className="text-highlight/70 font-inter">
                This is my favorite song right now, do not agree with the hate he&apos;s been getting from Tyler the Creator but this has been a super fun listen
              </p>
            </div>
            <div className="flex justify-center">
              <iframe
                className="rounded-lg border border-border"
                style={{ width: '100%', maxWidth: '400px', height: '380px' }}
                src="https://open.spotify.com/embed/track/4oPLjuY1WgGTL0Ja1doDOn"
                title="Magic Johnson by ian"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; loading=lazy"
              ></iframe>
            </div>
          </div>

          {/* Playlists Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* House Playlist */}
            <div className="bg-surface rounded-lg p-6 border border-border">
              <div className="text-center mb-6">
                <h3 className="text-lg font-space font-semibold text-primary mb-2">
                  house - My Electronic Vibes
                </h3>
                <p className="text-highlight/70 font-inter text-sm">
                  WOW, he listens to House, he is so different and he is so cool. I wish I was like him, I&apos;ll name my kid after him!
                </p>
              </div>
              <div className="flex justify-center">
                <iframe
                  className="rounded-lg border border-border"
                  style={{ width: '100%', maxWidth: '300px', height: '280px' }}
                  src="https://open.spotify.com/embed/playlist/0mhHaq9bnzU12PztHg1h2G"
                  title="house - My Electronic Vibes"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; loading=lazy"
                ></iframe>
              </div>
            </div>

            {/* Taylor Swift Playlist */}
            <div className="bg-surface rounded-lg p-6 border border-border">
              <div className="text-center mb-6">
                <h3 className="text-lg font-space font-semibold text-primary mb-2">
                  kanye swift - My Taylor Collection
                </h3>
                <p className="text-highlight/70 font-inter text-sm">
                  Yes, I like Taylor Swift, does this make me performative? Idk bro you decide.
                </p>
              </div>
              <div className="flex justify-center">
                <iframe
                  className="rounded-lg border border-border"
                  style={{ width: '100%', maxWidth: '300px', height: '280px' }}
                  src="https://open.spotify.com/embed/playlist/01DtptwX03GLzAloW5XN3B"
                  title="kanye swift - My Taylor Collection"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; loading=lazy"
                ></iframe>
              </div>
            </div>

            {/* Hip-Hop Playlist */}
            <div className="bg-surface rounded-lg p-6 border border-border">
              <div className="text-center mb-6">
                <h3 className="text-lg font-space font-semibold text-primary mb-2">
                  spins - My Hip-Hop Vibes
                </h3>
                <p className="text-highlight/70 font-inter text-sm">
                  Thank god I listen to hip-hop, otherwise the rest of the content made me seem kinda weird.
                </p>
              </div>
              <div className="flex justify-center">
                <iframe
                  className="rounded-lg border border-border"
                  style={{ width: '100%', maxWidth: '300px', height: '280px' }}
                  src="https://open.spotify.com/embed/playlist/7xuDAgJh0IJysrlC1L65E4"
                  title="spins - My Hip-Hop Vibes"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; loading=lazy"
                ></iframe>
              </div>
            </div>

            {/* Hindi Playlist */}
            <div className="bg-surface rounded-lg p-6 border border-border">
              <div className="text-center mb-6">
                <h3 className="text-lg font-space font-semibold text-primary mb-2">
                  hindi - My Cultural Playlist
                </h3>
                <p className="text-highlight/70 font-inter text-sm">
                  This playlist is me taking ownership of my ethnicity and background. If you understand the lyrics it&apos;s a pretty good, if you don&apos;t, well give it a listen anyways.
                </p>
              </div>
              <div className="flex justify-center">
                <iframe
                  className="rounded-lg border border-border"
                  style={{ width: '100%', maxWidth: '300px', height: '280px' }}
                  src="https://open.spotify.com/embed/playlist/32gdKXiIstREUTWM4r70Fh"
                  title="hindi - My Cultural Playlist"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; loading=lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Now Logs */}
        <div>
          <h2 className="text-3xl font-space font-bold text-primary text-center mb-12">
            📝 NOW LOGS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {nowLogs.map((log) => (
              <div 
                key={log.id} 
                className="bg-surface rounded-lg p-6 border border-border hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-space font-semibold text-primary">
                    {log.title}
                  </h3>
                  <span className="text-sm font-inter text-highlight/60 bg-accent px-2 py-1 rounded">
                    {new Date(log.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                <p className="text-highlight/70 font-inter text-sm leading-relaxed">
                  {log.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-surface/50 rounded-lg p-8 border border-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-space font-bold text-primary mb-4">
              WANT TO COLLABORATE?
            </h3>
            <p className="text-highlight/70 font-inter mb-6 max-w-2xl mx-auto">
              I&apos;m always open to creative collaborations, podcast appearances, or just chatting about 
              quant finance, startups, or poker strategy. Hit me up!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-background font-space font-semibold rounded-lg hover:bg-primary/80 transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 