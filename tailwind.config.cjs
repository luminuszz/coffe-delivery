/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'purple-dark': '#4B2995',
        'purple': '#8047F8',
        'purple-light': '#EBE5F9',
        'yellow-dark': '#C47F17',
        'yellow': '#DBAC2C',
        'yellow-light': '#F1E9C9',
        'base-title': '#272221',
        'base-subtitle': '#403937',
        'base-text': '#555564',
        'base-label': '#555564',
        'base-hover': '#D7D5D5',
        'base-button': '#555564',
        'base-input': '#EDEDED',
        'base-card': '#F3F2F2',
        'background': '#FAFAFA',
        'base-button-add': '#E6E5E5',
      },
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
        secondary: ['Baloo 2', 'cursive'],
      },

      lineHeight: {
        md: '130%',
        lg: '160%',
      },



    },
  },
  plugins: [],
}
