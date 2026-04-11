/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        'react-cyan': {
          'DEFAULT': '#61DAFB',
          '50':  '#E0F8FF',
          '100': '#CCF5FF',
          '200': '#99EEFF',
          '300': '#66E5FF',
          '400': '#33DEFF',
          '500': '#00D6FF',
          '600': '#00C3E6',
          '700': '#00A4BF',
          '800': '#008499',
          '900': '#006B7A',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}