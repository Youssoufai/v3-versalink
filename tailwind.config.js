/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      content: {
        empty: '" "'
      },
      colors: {
        'orange': '#F18365',
        'lightOrange': '#FAD9D0',
        'gray': '#282B37'
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif']
      }
    },
  },
  plugins: [],
}

