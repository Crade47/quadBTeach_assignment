/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        "darkMain":"var(--dark-primary-color)",
        "darkFont": "var(--dark-secondary-color)"
      },
      fontFamily:{
        redHat:['"Red Hat Display"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

