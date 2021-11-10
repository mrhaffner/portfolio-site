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
        'midnight-blue': rgb(4, 0, 63),
        'bright-sky-blue': rgb(0, 185, 254),
        'hover-sky-blue': rgb(82, 206, 252),
        mint: rgb(0, 185, 254),
        'light-slate-blue': rgb(55, 72, 134),
        'dark-slate-blue': rgb(40, 56, 111),
        'gradient-pink': rgb(235, 56, 166),
        'gradient-light-pink': rgb(245, 89, 185),
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
