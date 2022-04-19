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

      // 'sm': '640px',
      // // => @media (min-width: 640px) { ... }
      //
      // 'md': '768px',
      // // => @media (min-width: 768px) { ... }
      //
      // 'lg': '1024px',
      // // => @media (min-width: 1024px) { ... }
      //
      // 'xl': '1280px',
      // // => @media (min-width: 1280px) { ... }
      //
      // '2xl': '1536px',
      // // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: '#0BAEB9',
        secondary: '#4E4E4E',
        gray: {
          50: '#7E818F',
          100: '#95A1A1'
        },
        blue: {
          50: '#EAEEEF'
        }
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
