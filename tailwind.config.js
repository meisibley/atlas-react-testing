/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // blue: '#1fb6ff',
        blue: {
          100: '#E9EDF5',
          200: '#CFDBE8',
          300: '#A4BBD5',
          400: '#7396BD',
          500: '#517AA6',
          600: '#446997',
          700: '#334E71',
          800: '#2E435E',
          900: '#2A3A50',
        },
        // purple: '#7e5bef',
        purple: {
          50: '#FAF7FC',
          100: '#F3EDFA',
          200: '#E7DBF3',
          300: '#D6BEE9',
          400: '#C098DA', //text-white start
          500: '#A36EC7',
          600: '#874FAA',
          700: '#794497',
          800: '#5D3573',
          900: '#50305F',
        },
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        yellow: '#ffc82c',
        'gray-dark': '#273444',
        gray: '#8492a6',
        'gray-light': '#d3dce6',
      },
    },
  },
  plugins: [],
}

