/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    screens: {
      mobile: { min: "320px", max: "767px" },

      tablet: { min: "768px", max: "1279px" },

      desktop: { min: "1280px" },
      contents: { max: '1280px' }
    },
    extend: {
      fontFamily: { 'suit': ['SUIT Variable'] },
      colors: {
        transparent: 'transparent',
        primary: '#000',
        secondary: '#fff',
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};