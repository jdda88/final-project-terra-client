/** @type {import('tailwindcss').Config} */
module.exports ={
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {colors: {
        customGreen: {
          DEFAULT: '#57995E',
        },
      },},

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
