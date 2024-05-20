/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      content: {
        empty: '" "'
      },
      colors: {
        'orange': '#F18365'
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif']
      }
    },
  },
  plugins: [],
}

