/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'aicon-bold':["aicon"],
        'nukshock':['nukshock'],
        'texts':['texts'],
        'pop':['pop'],
      }
    },
  },
  plugins: [],
}