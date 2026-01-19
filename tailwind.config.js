/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Original color palette from jogakonstancin.pl
        primary: {
          DEFAULT: '#760004',
          dark: '#600',
          light: '#900',
        },
        accent: {
          DEFAULT: '#d05300',
          cream: '#e0d5b1',
          muted: '#b3b092',
        },
        body: {
          DEFAULT: '#515154',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Verdana', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
