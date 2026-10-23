/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'nav': '1240px',
      },
      colors: {
        // Obsidian, Ivory and Antique Gold Luxury Editorial Palette
        obsidian: {
          DEFAULT: '#0A0A0B', // Primary dark background - obsidian black
          deep: '#060607',
          charcoal: '#151517', // Soft charcoal secondary dark surface
          surface: '#18181B',
          midnight: '#101621', // Subtle undertone only
        },
        charcoal: {
          DEFAULT: '#151517',
          soft: '#1C1C1F',
          muted: '#25252A',
        },
        ivory: {
          DEFAULT: '#F4F0E8', // Warm ivory / porcelain
          light: '#FAF7F2',
          dim: '#E6DDCC',    // Light champagne
          muted: '#DDD4C3',
          paper: '#F1EBDD',
        },
        ink: {
          DEFAULT: '#171613', // Dark ink text for ivory sections
          soft: '#2A2824',
          muted: '#4A463F',
          subtle: '#6A645B',
        },
        gold: {
          DEFAULT: '#B8954F', // Antique Gold accent
          antique: '#B8954F',
          champagne: '#D6C08D',
          light: '#E6D7B5',
          dark: '#8C6F33',
          hairline: 'rgba(184, 149, 79, 0.22)',
          subtle: 'rgba(184, 149, 79, 0.12)',
        },
        warmgrey: {
          DEFAULT: '#777168', // Secondary warm grey
          light: '#A39E93',
          dark: '#4D4842',
          subtle: 'rgba(119, 113, 104, 0.2)',
        },

        // Backward compatibility mappings
        porcelain: {
          DEFAULT: '#F4F0E8',
          pure: '#FFFFFF',
          dim: '#E6DDCC',
          muted: '#DDD4C3',
        },
        bone: {
          DEFAULT: '#F4F0E8',
          light: '#FAF7F2',
          dim: '#E6DDCC',
          muted: '#DDD4C3',
        },
        stone: {
          DEFAULT: '#777168',
          light: '#A39E93',
          dark: '#4D4842',
        },
        bronze: {
          DEFAULT: '#B8954F',
          light: '#D6C08D',
          dim: '#8C6F33',
          subtle: 'rgba(184, 149, 79, 0.15)',
        },
        midnight: {
          DEFAULT: '#151517', // soft charcoal instead of blue!
          soft: '#1A1A1E',
          surface: '#101621',
        },
        sapphire: {
          DEFAULT: '#151517', // soft charcoal instead of blue!
          light: '#1C1C1F',
          surface: '#101621',
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
