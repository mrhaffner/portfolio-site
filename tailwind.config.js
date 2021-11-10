const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        '1/3': '0 0 33.333333%',
      },
      width: {
        240: '60rem',
      },
      colors: {
        midnightBlue: 'rgb(4, 0, 63)',
        brightSkyBlue: 'rgb(0, 185, 254)',
        hoverSkyBlue: 'rgb(82, 206, 252)',
        mint: 'rgb(0, 185, 254)',
        lightSlateBlue: 'rgb(55, 72, 134)',
        darkSlateBlue: 'rgb(40, 56, 111)',
        gradientPink: 'rgb(235, 56, 166)',
        gradientLightPink: 'rgb(245, 89, 185)',
        bluegray: colors.blueGray,
        coolgray: colors.coolGray,
        truegray: colors.trueGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
