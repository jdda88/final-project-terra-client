/** @type {import('tailwindcss').Config} */
export default {
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
  },
  plugins: [],
}

