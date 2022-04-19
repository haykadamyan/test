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
    }
  },
  variants: {},
  plugins: [],
}
