export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface CreativeLog {
  id: number;
  title: string;
  date: string;
  note: string;
}

export interface Video {
  title: string;
  description: string;
  embedUrl: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Rishab-Ghosh",
    icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    ariaLabel: "GitHub"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/rishabghosh",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    ariaLabel: "LinkedIn"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/rishabghosh",
    icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
    ariaLabel: "Twitter"
  }
];

export const creativeLogs: CreativeLog[] = [
  {
    id: 1,
    title: "Uploaded a vlog from SF trip",
    date: "2024-12-15",
    note: "Sharing insights from my recent visit to San Francisco's startup scene"
  },
  {
    id: 2,
    title: "Experimenting with blackjack UI animations",
    date: "2024-12-10",
    note: "Working on smooth card animations and user feedback for the training app"
  },
  {
    id: 3,
    title: "Started volatility surface analysis series",
    date: "2024-12-05",
    note: "Creating educational content on quantitative finance concepts"
  },
  {
    id: 4,
    title: "Recorded podcast episode on VC strategy",
    date: "2024-11-28",
    note: "Discussing startup evaluation frameworks and investment thesis"
  }
];

export const videos: Video[] = [
  {
    title: "Volatility Surface Analysis",
    description: "Deep dive into volatility surface modeling and its applications in options trading",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    title: "Blackjack Strategy Guide",
    description: "Advanced blackjack strategies and card counting techniques",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export const spotifyPlaylist = {
  title: "Quant Finance & Coding Vibes",
  description: "My go-to playlist for deep work sessions and late-night coding",
  embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX5Vy6DFOcx00?utm_source=generator"
}; 