/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'nav': '1080px',
      },
      colors: {
        // Specific Revised Brief Palette:
        // Midnight Navy, Obsidian Black, Warm Ivory, Champagne Bronze, Stone Grey
        obsidian: {
          DEFAULT: '#08111D', // Obsidian Black / Deep Navy base
          deep: '#050B14',    // Absolute obsidian black
          charcoal: '#0D1B2A',// Midnight navy surface
          surface: '#112236',
          midnight: '#07111F',
        },
        navy: {
          DEFAULT: '#0D1B2A', // Midnight Navy
          deep: '#08111D',
          surface: '#122338',
          soft: '#1B314B',
        },
        ivory: {
          DEFAULT: '#F5F1E8', // Warm Ivory
          warm: '#EDE8DD',
          light: '#FAF7F2',
          muted: '#E2D9CA',
          dim: '#EDE8DD',
        },
        bronze: {
          DEFAULT: '#B98A4A', // Champagne Bronze
          light: '#D4AA6A',
          champagne: '#D4AA6A',
          dark: '#8C6734',
          hairline: 'rgba(185, 138, 74, 0.22)',
          subtle: 'rgba(185, 138, 74, 0.12)',
        },
        gold: {
          DEFAULT: '#B98A4A', // Mapped to Champagne Bronze
          champagne: '#D4AA6A',
          light: '#D4AA6A',
          dark: '#8C6734',
          hairline: 'rgba(185, 138, 74, 0.22)',
          subtle: 'rgba(185, 138, 74, 0.12)',
        },
        stone: {
          DEFAULT: '#8C8A85', // Brighter Stone
          light: '#A8A6A1',
          dark: '#6B6966',
          subtle: 'rgba(140, 138, 133, 0.2)',
        },
        warmgrey: {
          DEFAULT: '#8C8A85',
          light: '#A8A6A1',
          dark: '#6B6966',
        },
        ink: {
          DEFAULT: '#111111', // Contrast text for light panels
          soft: '#222222',
          muted: '#444444',
        },
        porcelain: {
          DEFAULT: '#FAF7F2',
        },
      },
      fontFamily: {
        // EXACTLY 3 FONT FAMILIES ONLY
        // Headings: Cormorant Garamond
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        
        // Descriptive / Body text: Inter
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        
        // Subheadings, labels, navigation, buttons: Manrope
        manrope: ['"Manrope"', 'sans-serif'],
        subheading: ['"Manrope"', 'sans-serif'],
        nav: ['"Manrope"', 'sans-serif'],
        label: ['"Manrope"', 'sans-serif'],
        mono: ['"Manrope"', 'sans-serif'], // Keep strictly 3 families
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'super-wide': '0.35em',
      },
    },
  },
  plugins: [],
}
