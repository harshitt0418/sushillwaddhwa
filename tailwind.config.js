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
          DEFAULT: '#F7F4EE', // Warm Ivory
          light: '#FAF8F5',
          dim: '#EFE9DC',
          muted: '#E2DAC9',
        },
        bronze: {
          DEFAULT: '#C7A24A', // Champagne Bronze
          light: '#E2CC8D',
          champagne: '#E2CC8D',
          dark: '#997A2E',
          hairline: 'rgba(199, 162, 74, 0.22)',
          subtle: 'rgba(199, 162, 74, 0.12)',
        },
        gold: {
          DEFAULT: '#C7A24A', // Mapped to Champagne Bronze
          champagne: '#E2CC8D',
          light: '#EFE1B8',
          dark: '#997A2E',
          hairline: 'rgba(199, 162, 74, 0.22)',
          subtle: 'rgba(199, 162, 74, 0.12)',
        },
        stone: {
          DEFAULT: '#AEB7C2', // Stone Grey
          light: '#CCD3DC',
          dark: '#667484',
          subtle: 'rgba(174, 183, 194, 0.2)',
        },
        warmgrey: {
          DEFAULT: '#AEB7C2', // Stone Grey
          light: '#CCD3DC',
          dark: '#667484',
        },
        ink: {
          DEFAULT: '#0A111C', // Contrast text for light panels
          soft: '#182230',
          muted: '#334155',
        },
        porcelain: {
          DEFAULT: '#F7F4EE',
        },
      },
      fontFamily: {
        // EXACTLY 3 FONT FAMILIES ONLY
        // Headings: DM Serif Display
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        heading: ['"DM Serif Display"', 'Georgia', 'serif'],
        
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
