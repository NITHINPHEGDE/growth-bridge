/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        navy: { DEFAULT: '#0d1b3e', dark: '#091228', light: '#1a3460' },
        brand: { DEFAULT: '#2d7a3a', light: '#4cba5e', lighter: '#7dd98a' },
      },
    },
  },
  plugins: [],
};