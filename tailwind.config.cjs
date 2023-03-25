/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'base': ['Myriad Pro', 'sans-serif'],
        'marist': ['Bodoni Classic']
      },
      textColor: {
        'redfox': '#b81c1c'
      },
      colors: {
        'maristblack': '#0d0b0c',
        'redfox': '#b81c1c'
      }
    },
  },
  plugins: [],
}
