/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "480px",
      md: "630px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
    },
  },
  plugins: [],
};
