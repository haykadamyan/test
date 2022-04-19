module.exports = {
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}', 
    './src/pages/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    screens: {
      'xl': {'min': '993px'},

      'lg': {'max': '992px', 'min': '769px'},

      'md': {'max': '768px', 'min': '577px'},

      'sm': {'max': '576px',  'min': '391px'},
      
      'xs': {'max': '390px', 'min': '0px'},
    }
  },
  variants: {},
  plugins: [],
}
