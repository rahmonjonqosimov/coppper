/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '322px',
      'desktop': '1432px',
    },
    extend: {
      backgroundImage:{
        hero_bg: "url(./src/assets/images/hero bg.png)",
      }
    },
  },
  plugins: [],
}