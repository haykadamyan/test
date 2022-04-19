module.exports = {
  content: [
    './src/components//*.{ts,tsx,js,jsx}',
    './src/pages//*.{ts,tsx,js,jsx}'
  ],
  theme: {
    screens: {
      'xl': {'min': '1366px'},

      'lg': {'max': '1366px'},

      'md': {'max': '992px'},

      'sm': {'max': '767px'},

      'xs': {'max': '575px'},
    },
    extend: {
      colors: {
        primary: '#0BAEB9',
        secondary: '#4E4E4E',
        grey: {
          100: '#95A1A1'
        }
      },
      fontSize: {
        body1: '15px',
        subtitle1: '19px',
        subtitle2: '17px',
      }
    },
  },
  variants: {},
  plugins: [],
}