module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        harsh: {
          50: '#2b3148'
        },
        navColor: 
        {
          50: '#eaf1ff',
          100: '#ced5e6',
          200: '#2B3148',
          300: '#919dbb',
          400: '#7381a6',
          500: '#59678c',
          600: '#44506e',
          700: '#313950',
          800: '#1c2233',
          900: '#070b18',
          
        }
          
        
      } 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
