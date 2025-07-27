import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#e63946', // neon red
        background: '#121212', // dark background
        surface: '#1e1e1e', // slightly lighter dark
        highlight: '#f1faee', // light highlight
        accent: '#2a2a2a', // medium dark
      },
      fontFamily: {
        'space': ['Space Grotesk', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #e63946, 0 0 10px #e63946, 0 0 15px #e63946' },
          '100%': { boxShadow: '0 0 10px #e63946, 0 0 20px #e63946, 0 0 30px #e63946' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config 