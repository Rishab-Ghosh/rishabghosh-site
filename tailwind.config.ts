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
        // Bold, artistic color palette
        primary: '#FF4D6D', // vivid red-pink
        secondary: '#00D2FF', // electric cyan
        accent: '#F9DC5C', // pop yellow
        background: '#0B0B0B', // deep black
        surface: '#1A1A1A', // dark charcoal
        highlight: '#EAEAEA', // clean white
        text: '#EAEAEA', // clean white
        border: '#333333', // subtle border
        // Additional artistic colors
        'neon-pink': '#FF4D6D',
        'electric-blue': '#00D2FF',
        'sunny-yellow': '#F9DC5C',
        'deep-purple': '#8B5CF6',
        'emerald': '#10B981',
        'coral': '#F97316',
      },
      fontFamily: {
        // Artistic typography system
        'display': ['DM Serif Display', 'Georgia', 'serif'], // Magazine-style headlines
        'heading': ['Syne', 'Arial', 'sans-serif'], // Modern artistic headings
        'body': ['Satoshi', 'Inter', 'sans-serif'], // Clean body text
        'mono': ['Space Grotesk', 'monospace'], // Technical/mono
        'serif': ['Playfair Display SC', 'Georgia', 'serif'], // Elegant serif
      },
      animation: {
        // Dynamic, artistic animations
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.6, 1)',
        'slide-in': 'slideIn 1s cubic-bezier(0.4, 0, 0.6, 1)',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.4, 0, 0.6, 1)',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.4, 0, 0.6, 1)',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'tilt': 'tilt 0.3s ease-out',
        'blob': 'blob 7s infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'text-glow': 'textGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(1deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-50px) skewX(-5deg)' },
          '100%': { opacity: '1', transform: 'translateX(0) skewX(0deg)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8) rotate(-2deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(255, 77, 109, 0.3), 0 0 40px rgba(0, 210, 255, 0.2)' 
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(255, 77, 109, 0.6), 0 0 80px rgba(0, 210, 255, 0.4)' 
          },
        },
        tilt: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '100%': { transform: 'rotate(2deg) scale(1.02)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        gradientShift: {
          '0%, 100%': { 
            backgroundPosition: '0% 50%',
            filter: 'hue-rotate(0deg)'
          },
          '50%': { 
            backgroundPosition: '100% 50%',
            filter: 'hue-rotate(30deg)'
          },
        },
        textGlow: {
          '0%': { 
            textShadow: '0 0 10px rgba(255, 77, 109, 0.5), 0 0 20px rgba(0, 210, 255, 0.3)' 
          },
          '100%': { 
            textShadow: '0 0 20px rgba(255, 77, 109, 0.8), 0 0 40px rgba(0, 210, 255, 0.5)' 
          },
        },
      },
      backgroundImage: {
        // Artistic gradient backgrounds
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, #0B0B0B 0%, #1A1A1A 25%, #2D1B69 50%, #1A1A1A 75%, #0B0B0B 100%)',
        'gradient-artistic': 'linear-gradient(45deg, #FF4D6D 0%, #00D2FF 25%, #F9DC5C 50%, #8B5CF6 75%, #FF4D6D 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0B0B0B 0%, #1A1A1A 50%, #0B0B0B 100%)',
        'gradient-glow': 'radial-gradient(circle at 50% 50%, rgba(255, 77, 109, 0.1) 0%, rgba(0, 210, 255, 0.05) 50%, transparent 100%)',
      },
      boxShadow: {
        // Custom artistic shadows
        'glow-pink': '0 0 40px rgba(255, 77, 109, 0.3)',
        'glow-cyan': '0 0 40px rgba(0, 210, 255, 0.3)',
        'glow-yellow': '0 0 40px rgba(249, 220, 92, 0.3)',
        'glow-multi': '0 0 40px rgba(255, 77, 109, 0.2), 0 0 80px rgba(0, 210, 255, 0.1)',
        'artistic': '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 60px rgba(255, 77, 109, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
export default config 