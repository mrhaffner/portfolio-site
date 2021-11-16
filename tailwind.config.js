const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        midnightBlue: 'rgb(4, 0, 63)',
        brightSkyBlue: 'rgb(0, 185, 254)',
        hoverSkyBlue: 'rgb(82, 206, 252)',
        mint: 'rgb(79, 226, 193)',
        lightMint: 'rgb(178, 237, 224)',
        lightSlateBlue: 'rgb(55, 72, 134)',
        darkSlateBlue: 'rgb(40, 56, 111)',
        gradientPink: 'rgb(235, 56, 166)',
        gradientLightPink: 'rgb(245, 89, 185)',
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        trueGray: colors.trueGray,
      },
      flex: {
        '1/3': '0 0 33.333333%',
      },
      fontFamily: {
        arizonia: 'Arizonia, cursive',
        pontano: 'Pontano Sans, sans-serif',
      },
      width: {
        215: '215px',
        240: '60rem',
        542: '542px',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
