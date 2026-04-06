import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 8-bit pixel palette — ~7 colors total
        'px-bg':           '#1a1c2c',
        'px-panel':        '#252741',
        'px-panel-dark':   '#1e2030',
        'px-green':        '#a8cc8c',
        'px-amber':        '#e0ac69',
        'px-blue':         '#6688aa',
        'px-red':          '#c94848',
        'px-white':        '#f0e6d3',
        'px-dark':         '#16161d',
        'px-border':       '#3d4058',
        'px-border-light': '#5a6080',
        'px-yellow':       '#f7d58b',
        // Alias mapping — keeps old class names working across remaining pages
        primary:    '#a8cc8c',
        secondary:  '#e0ac69',
        accent:     '#6688aa',
        background: '#1a1c2c',
        surface:    '#252741',
        highlight:  '#f0e6d3',
        text:       '#f0e6d3',
        border:     '#3d4058',
      },
      fontFamily: {
        pixel:  ['"Press Start 2P"', 'monospace'],
        vt:     ['VT323', 'monospace'],
        // Old names remapped
        space:  ['"Press Start 2P"', 'monospace'],
        inter:  ['VT323', 'monospace'],
      },
      animation: {
        'pixel-blink':  'blink 1s steps(1) infinite',
        'pixel-bounce': 'pixelBounce 0.5s steps(4) infinite',
        'pixel-float':  'pixelFloat 2s steps(8) infinite',
        'pixel-glow':   'pixelGlow 1.5s steps(3) infinite alternate',
        // Legacy aliases
        'fade-in':    'fadeIn 0.2s steps(4) forwards',
        'slide-in':   'slideIn 0.15s steps(5) forwards',
        'slide-up':   'slideUp 0.15s steps(5) forwards',
        'float':      'pixelFloat 2s steps(8) infinite',
        'glow':       'pixelGlow 1.5s steps(3) infinite alternate',
        'pulse-slow': 'pulse 2s steps(4) infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        pixelBounce: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '25%':      { transform: 'translateY(-4px)' },
          '75%':      { transform: 'translateY(-2px)' },
        },
        pixelFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
        pixelGlow: {
          '0%':   { textShadow: '2px 2px 0px rgba(0,0,0,0.5), 0 0 4px rgba(168,204,140,0.3)' },
          '100%': { textShadow: '2px 2px 0px rgba(0,0,0,0.5), 0 0 12px rgba(168,204,140,0.7)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%':   { opacity: '0', transform: 'translateX(16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-mesh':  'linear-gradient(135deg, #1a1c2c 0%, #252741 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
