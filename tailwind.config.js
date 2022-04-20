module.exports = {
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}', 
    './src/pages/**/*.{ts,tsx,js,jsx}'
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
        gray: {
          50: '#7E818F',
          100: '#95A1A1',
          200: '#5B5150'
        },
        blue: {
          50: '#EAEEEF'
        },
        ['white-opacity']: 'rgba(255, 255, 255, 0.3)'
      },
      fontSize: {
        body1: '15px',
        body2: '17px',
        subtitle1: '19px',
        price: '31px',
        ['price-label']: '29px',
      }
    },
  },
  variants: {},
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}
