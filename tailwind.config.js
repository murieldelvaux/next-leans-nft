/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'selector',
  content: [
    './app/**/*tsx'
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#007bff',
          secondary: '#6c757d',
          background: '#BEBEFF',
          text: '#212529',
        },
        dark: {
          background: '#0F0F11',
          primary: '#007bff',
          secondary: '#343a40',
          text: '#fff',
        },
      },
    },
  },
  plugins: [],
}

