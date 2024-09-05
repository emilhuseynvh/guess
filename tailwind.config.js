/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        base: '1139px',
      },
      backgroundImage: {
        'brown': "url('assets/img/brown.png')",
      },
      colors: {
        grayCustom: '#707070',
        lightGray: '#F6F6F6'
      },
    },
  },
  plugins: [],
}