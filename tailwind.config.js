/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js,jsx}',],
  theme: {
    screens: {
      'sm': '300px',
      'smx': '680px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    colors: {
      trans: 'transparent',
      black: '#000',
      white: '#fff',
      grey: '#EDEDED'
    },
    extend: {},
  },
  plugins: [],
}

