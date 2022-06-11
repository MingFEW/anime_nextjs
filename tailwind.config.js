module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: 'var(--color-black)',
        white: 'var(--color-white)',
        grey: 'var(--color-grey)',
        grey100: 'var(--color-grey-100)',
        grey200: 'var(--color-grey-200)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        syncopate: ['Syncopate', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
