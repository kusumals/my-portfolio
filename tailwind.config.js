/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F7C82',
        secondary: '#93B1B5',
        light: '#B8E3E9',
        dark: '#0B2E33',
      },
    },
  },
  plugins: [],
}