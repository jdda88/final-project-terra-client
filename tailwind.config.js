/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: {
          DEFAULT: "#57995E",
        },
      },
    },
    plugins: [],
  },
};
