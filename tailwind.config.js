/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    screens: {
      mobile: { min: '320px', max: '767px' },

      tablet: { min: '768px', max: '1279px' },

      desktop: { min: '1280px' },
      contents: { max: '1280px' },
    },
    extend: {
      fontFamily: { suit: ['SUIT Variable'] },
      colors: {
        transparent: 'transparent',
        primary: '#4EC3F9',
        secondary: '#C9ECFF',
        contentsPrimary: '#152644',
        contentsSecondary: '#5A80A9',
        error: '#F97660',
        point: '#50D4E5',
        'gray-1': '#828282',
        'gray-2': '#B2B2B2',
        background: '#FAFAFA',
        'gray-3': '#D7D7D7',
        'custom-color': 'rgba(79,212,230,0.5)',
      },
      backgroundImage: (theme) => ({
        LandingPage: "url('./src/assets/LandingPage-background.svg')",
      }),
    },
  },
  plugins: [],
};
