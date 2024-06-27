/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#57995E",
        customGreenHover: "#3D765B",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
