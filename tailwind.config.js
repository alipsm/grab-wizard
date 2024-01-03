/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    escreens: {
      sm: '480px',
      md: '768px',
      xl: '1440px',
    },
    colors: {
      skyBlue: '#93B1A6',
      forestGreen: '#5C8374',
      burntSienna: '#183D3D',
      charcoalBlack: '#040D12',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {}
  },
  plugins: [],
}

