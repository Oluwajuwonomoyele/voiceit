/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
    './public/index.html'
  ],
  media: 'class',
  theme: {
    screens: {
      sm: '425px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        'primary': '#4B0673',
        'secondary1': '#EC1CA7', 
        'secondary2': '#FBE4CF',
        'customGray' : '#4F5665',
      },
      fontFamily : {
        'nunito': ['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}
