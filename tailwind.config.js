const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Inter", "serif"]
      }
    },
  },
  variants: {},
  plugins: [],
  // xwind options
  xwind: {
    mode: 'objectstyles',
  },
}
