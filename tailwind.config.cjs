/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: { max: "1700px" },
      lg: { max: "1200px" },
      md: { max: "990px" },
      sm: { max: "768px" },
      ss: { max: "500px" },
      xs: { max: "420px" },
    },
    container: {
      padding: "15px",
      center: true,
    },
    extend: {
      colors: {
        primary: "#202124",
        secondary: "#cf0000",
        lightgray: "#5f6368",
      },
      fontFamily: {
        labrada: ["Labrada", "sans-serif"],
      },
    },
  },
  plugins: [],
};
