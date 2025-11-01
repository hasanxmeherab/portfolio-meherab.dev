/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        'react-cyan': {
          'DEFAULT': '#61DAFB',
          '50': '#E0F8FF',
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
      }
    },
  },
  plugins: [],
}