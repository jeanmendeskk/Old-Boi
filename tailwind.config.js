/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#000',
      'gray': '#1C1D1F',
      'white': '#fff',
      'green': '#127E00',
      'blue': '#003F79',
      'offwhite': '#D9D9D9',
      'textg': '#A9A9A9'
    },
    fontFamily: {
      'porter': 'Porter Sans Block',
      'sans': 'Open Sans',
      'osw': 'Oswald'
    }
  },
  plugins: [],
}

