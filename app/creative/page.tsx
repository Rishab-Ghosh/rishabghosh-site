'use client';

export default function Creative() {
  const videos = [
    {
      title: "Building a Volatility Dashboard",
      description: "How I built an interactive dashboard for analyzing volatility surfaces using Python and Streamlit.",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      title: "Poker Strategy Deep Dive",
      description: "Breaking down advanced poker strategies and the math behind optimal play.",
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
          <p className="text-xl font-inter text-highlight/70 max-w-3xl mx-auto leading-relaxed">
            Videos, music, and creative projects I&apos;m working on. Because apparently I have hobbies 
            beyond staring at spreadsheets.
          </p>
        </div>

        {/* YouTube Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-space font-bold text-primary neon-glow text-center mb-12">
            🎥 RECENT VIDEOS
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-space font-semibold text-primary">
                  {video.title}
                </h3>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg border border-primary/20"
                    src={video.embedUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-highlight/80 font-inter text-sm">
                  {video.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Spotify Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-space font-bold text-primary neon-glow text-center mb-12">
            🎧 CURRENTLY LISTENING
          </h2>
          <div className="bg-surface/50 rounded-lg p-6 border border-primary/20 max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-xl font-space font-semibold text-primary mb-2">
                Late Night Coding Vibes
              </h3>
              <p className="text-highlight/70 font-inter">
                A mix of lo-fi, jazz, and electronic music for those 3 AM coding sessions
              </p>
            </div>
            <div className="flex justify-center">
              <iframe
                className="rounded-lg border border-primary/20"
                style={{ width: '100%', maxWidth: '400px', height: '380px' }}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DX5Vy6DFOcx00"
                title="Spotify Playlist"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; loading=lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Now Logs */}
        <div>
          <h2 className="text-3xl font-space font-bold text-primary neon-glow text-center mb-12">
            📝 NOW LOGS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {nowLogs.map((log) => (
              <div 
                key={log.id} 
                className="bg-surface/50 rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300"
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
                <p className="text-highlight/80 font-inter text-sm leading-relaxed">
                  {log.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-surface/30 rounded-lg p-8 border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-space font-bold text-primary mb-4">
              WANT TO COLLABORATE?
            </h3>
            <p className="text-highlight/80 font-inter mb-6 max-w-2xl mx-auto">
              I&apos;m always open to creative collaborations, podcast appearances, or just chatting about 
              quant finance, startups, or poker strategy. Hit me up!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-highlight font-space font-semibold rounded-lg hover:bg-primary/80 transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 