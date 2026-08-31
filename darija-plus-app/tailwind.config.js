/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C1440E',
        'primary-light': '#E8603A',
        'primary-dark': '#8B2F08',
        accent: '#00897B',
        gold: '#D4A017',
        amazigh: '#6A3FA0',
        dark: '#0D0D0D',
        card: '#161616',
        border: '#2a2a2a',
        gray: '#B3B3B3',
        'gray-dark': '#888',
        light: '#F5F0EB',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease both',
      },
    },
  },
  plugins: [],
}
