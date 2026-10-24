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
        // Obsidian and Gold Maybach Luxury Editorial Palette
        obsidian: {
          DEFAULT: '#08111D', // Primary dark background - obsidian near-black navy
          deep: '#050B14',
          charcoal: '#0D1B2A', // Deep midnight navy secondary dark surface
          surface: '#112236',
          midnight: '#07111F', // Obsidian undertone
        },
        charcoal: {
          DEFAULT: '#0D1B2A', // Deep midnight navy
          soft: '#112236',
          muted: '#182C44',
        },
        ivory: {
          DEFAULT: '#F7F4EE', // Warm ivory / porcelain
          light: '#FAF8F5',
          dim: '#EFE9DC',    // Light champagne ivory
          muted: '#E2DAC9',
          paper: '#F4EFE6',
        },
        ink: {
          DEFAULT: '#0A111C', // Deep ink text for ivory sections
          soft: '#182230',
          muted: '#334155',
          subtle: '#5A6B82',
        },
        gold: {
          DEFAULT: '#C7A24A', // Rich muted gold accent
          antique: '#C7A24A',
          champagne: '#E2CC8D', // Soft champagne gold
          light: '#EFE1B8',
          dark: '#997A2E',
          hairline: 'rgba(199, 162, 74, 0.22)',
          subtle: 'rgba(199, 162, 74, 0.12)',
        },
        warmgrey: {
          DEFAULT: '#AEB7C2', // Muted slate secondary text
          light: '#CCD3DC',
          dark: '#667484',
          subtle: 'rgba(174, 183, 194, 0.2)',
        },
        slate: {
          DEFAULT: '#AEB7C2',
          light: '#CCD3DC',
          dark: '#667484',
        },

        // Backward compatibility mappings
        porcelain: {
          DEFAULT: '#F7F4EE',
          pure: '#FFFFFF',
          dim: '#EFE9DC',
          muted: '#E2DAC9',
        },
        bone: {
          DEFAULT: '#F7F4EE',
          light: '#FAF8F5',
          dim: '#EFE9DC',
          muted: '#E2DAC9',
        },
        stone: {
          DEFAULT: '#AEB7C2',
          light: '#CCD3DC',
          dark: '#667484',
        },
        bronze: {
          DEFAULT: '#C7A24A',
          light: '#E2CC8D',
          dim: '#997A2E',
          subtle: 'rgba(199, 162, 74, 0.15)',
        },
        midnight: {
          DEFAULT: '#0D1B2A',
          soft: '#112236',
          surface: '#07111F',
        },
        sapphire: {
          DEFAULT: '#0D1B2A',
          light: '#112236',
          surface: '#07111F',
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
