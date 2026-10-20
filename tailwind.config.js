/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#111316',
          soft: '#1A1D22',
          muted: '#252930',
          subtle: '#323740',
        },
        bone: {
          DEFAULT: '#F4F0E8',
          light: '#FAF8F5',
          dim: '#E9E3D6',
          muted: '#DCD4C5',
        },
        stone: {
          DEFAULT: '#B8B1A6',
          light: '#D5CFC6',
          dark: '#8C857A',
        },
        bronze: {
          DEFAULT: '#85715A',
          light: '#A18C73',
          dim: '#685744',
          subtle: 'rgba(133, 113, 90, 0.15)',
        },
        forest: {
          DEFAULT: '#1E302B',
          soft: '#263C36',
          deep: '#14211D',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Manrope"', 'sans-serif'],
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
          '50%': { opacity: '0.9' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseSlow: 'pulseSlow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
