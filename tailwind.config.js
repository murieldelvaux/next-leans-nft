/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        light: {
          'bg-light':"#BEBEFF",
          primary: '#007bff',
          secondary: '#6c757d',
          text: '#212529',
        },
        dark: {
          'bg-dark': '#0F0F11',
          white: '#FFFFFF', // 100%
          'white-63': 'rgba(255, 255, 255, 0.63)',
          'white-92': 'rgba(255, 255, 255, 0.92)', 
          'dark-gray': '#303030', // 100%
          purple: '#7851EC', // 100%
          'purple-40': 'rgba(120, 81, 236, 0.4)',
          black: '#000000', // 20%
          'black-20':'rgba(0, 0, 0, 0.2)',
          'gray-light': '#a6a6a6', // 100%
          'gray-light-30': 'rgba(48, 48, 48, 0.3)', // 30%
          cyan: '#24D2F9', // 100%
        },
      },
    },
  },
  plugins: [],
}

