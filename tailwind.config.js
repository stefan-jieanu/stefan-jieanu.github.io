/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-light': '#909090',
        'gray-light-2': '#c4c4c4',
        'gray-dark': '#1d1d1d'
      },
      boxShadow: {
        'low': '10px 10px 10px -5px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}