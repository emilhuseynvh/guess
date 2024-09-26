/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '450px',
        base: '1139px',
      },
      backgroundImage: {
        'brown': "url('assets/img/brown.png')",
      },
      colors: {
        grayCustom: '#707070',
        lightGray: '#F6F6F6',
        dashboardSecondary: '#19191C',
        dashboardPrimary: '#2D2D30',
        dashboardBtn: '#5C67F7',
        dashboardBorder: '#FFFFFF1A'
      },
    },
  },
  plugins: [],
}
