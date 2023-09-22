/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    container: {
      center: true,
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
        LandingCarouselOne: "url('./src/assets/LandingPage-carousel-one.svg')",
        LandingCarouselTwo: "url('./src/assets/LandingPage-carousel-two.svg')",
        LandingCarouselThree:
          "url('./src/assets/LandingPage-carousel-three.svg')",
        LandingCarouselFour:
          "url('./src/assets/LandingPage-carousel-four.svg')",
        LandingCarouselFive:
          "url('./src/assets/LandingPage-carousel-five.svg')",
        LandingCarouselSix: "url('./src/assets/LandingPage-carousel-six.svg')",
      }),
      keyframes: {
        'fade-animate-in': {
          '0%': {
            transform: 'translateY(30px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'plain-animate': {
          '0%': { transform: 'translate(-30,30)', opacity: '1' },
          '100%': { transform: 'translate(30px, -30px)', opacity: '1' },
        },
        'underline-animate': {
          '0%': { height: '1px', repeat: 'repeat-x' },
          '100%': { height: '6px', repeat: 'repeat-x' },
        },
      },
      animation: {
        'fade-animate': 'fade-animate-in 0.6s ease-out',
        'plain-animate': 'plain-animate 1s 0.2s ease-in-out infinite',
        'underline-animate-transition': {
          from: { height: '1px' },
          to: { height: '6px' },
          transitionProperty: ['height'],
          transitionDuration: ['0.2s'],
        },
      },
    },
  },
  plugins: [],
};
