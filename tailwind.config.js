/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        light: {
          'bg-light':"#BEBEFF",
          primary: '#007bff',
          secondary: '#6c757d',
          text: '#212529',
        },
        dark: {
          'bg-dark': '#0F0F11',
          white: '#FFFFFF', 
          'white-63': 'rgba(255, 255, 255, 0.63)',
          'white-92': 'rgba(255, 255, 255, 0.92)', 
          'dark-gray': '#303030', 
          purple: '#7851EC', 
          'purple-40': 'rgba(120, 81, 236, 0.4)',
          'purple-60': 'rgba(120, 81, 236, 0.6)',
          'purple-dark': "#5C3BBF",
          black: '#000000', 
          'black-20':'rgba(0, 0, 0, 0.2)',
          'gray-light': '#a6a6a6', 
          'gray-light-30': 'rgba(48, 48, 48, 0.3)', 
          cyan: '#24D2F9', 
        },
      },
    },
  },
  plugins: [],
}

