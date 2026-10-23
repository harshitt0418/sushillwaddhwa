/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Obsidian Maybach Editorial Official Palette
        obsidian: {
          DEFAULT: '#080D17', // Primary dark background
          deep: '#04070D',
          surface: '#0B1322',
        },
        midnight: {
          DEFAULT: '#0D1B35', // Secondary dark background
          soft: '#112242',
          surface: '#152B52',
        },
        sapphire: {
          DEFAULT: '#14284A', // Subtle surface / background layers
          light: '#1B3562',
          surface: '#1E3C6E',
        },
        gold: {
          DEFAULT: '#B8954F', // Maybach Gold - main accent, links, lines & active states
          champagne: '#D6C08D', // Champagne Gold - soft hover / accent text
          light: '#E6D7B5',
          dark: '#8C6F33',
          hairline: 'rgba(184, 149, 79, 0.25)',
          subtle: 'rgba(184, 149, 79, 0.12)',
        },
        porcelain: {
          DEFAULT: '#F7F5F0', // Primary light background and light text
          pure: '#FFFFFF',
          dim: '#ECE8DF',
          muted: '#DDD7CA',
        },
        warmstone: {
          DEFAULT: '#B7B0A4', // Muted text and subtle borders
          light: '#D3CDC4',
          dark: '#7D776C',
          subtle: 'rgba(183, 176, 164, 0.18)',
        },

        // Backward compatibility mappings for existing utility classes
        ink: {
          DEFAULT: '#080D17', // Obsidian Navy base
          soft: '#0D1B35',    // Midnight Blue
          muted: '#14284A',   // Deep Sapphire
          subtle: '#1C3660',
        },
        bone: {
          DEFAULT: '#080D17', // Obsidian Navy dominant
          light: '#0D1B35',   // Midnight Blue
          dim: '#14284A',     // Deep Sapphire
          muted: '#1A335C',
        },
        stone: {
          DEFAULT: '#B7B0A4', // Warm Stone
          light: '#D3CDC4',
          dark: '#7D776C',
        },
        bronze: {
          DEFAULT: '#B8954F', // Maybach Gold
          light: '#D6C08D',   // Champagne Gold
          dim: '#8C6F33',
          subtle: 'rgba(184, 149, 79, 0.15)',
        },
        forest: {
          DEFAULT: '#0D1B35',
          soft: '#14284A',
          deep: '#080D17',
        },
      },
      fontFamily: {
        serif: ['"Bodoni Moda"', 'Georgia', 'serif'],
        sans: ['"Manrope"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'super-wide': '0.35em',
      },
      lineHeight: {
        'relaxed-luxury': '1.75',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
        lineDraw: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseSlow: 'pulseSlow 4s ease-in-out infinite',
        lineDraw: 'lineDraw 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}
