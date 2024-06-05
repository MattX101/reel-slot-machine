/** @type {import('tailwindcss').Config} */
const extensions = require('./tailwindExtensions');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: extensions,
  },
  plugins: [],
}

