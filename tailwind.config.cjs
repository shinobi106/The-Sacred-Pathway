/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        red: "#FF0000",
        primary: "white",
        secondary: "#808080",
        tertiary: "#3e3e3e",
        "black-100": "#242323",
        "black-200": "#1f1f1f",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #FFA500",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpg')",
      },
    },
  },
  plugins: [],
};