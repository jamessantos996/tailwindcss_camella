/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        header: '#fef7ed',
        lightGreen: "#6aa75e",
        middleGreen: "#428d55",
        darkGreen: "#076648",
        superDarkGreen: '#0a3c1e',
        avocado: "#b5cb00"
      },
      screens: {
        'xs': "320px"
      },
      backgroundImage: {
        'banner': "url('./img/banner-3.png')"
      }
    },
  },
  plugins: [],
}
