/** @type {import('tailwindcss').Config} */
module.exports ={
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'terra-green': 'rgb(87, 153, 94)',
  },
    fontWeight: {
      'extra-bold': '800',
    },
  extend: {},
  plugins: [],
}
};
