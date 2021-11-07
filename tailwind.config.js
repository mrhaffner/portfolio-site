module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        '1/3': '0 0 33.333333%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
