/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'ftcpallete':{
          10: '#24005B',
          20: '#3E0090',
          30: '#5723AD',
          40: '#6F41C5',
          50: '#895CE1',
          60: '#A477FD',
          70: '#BC99FF',
          80: '#D4BBFF',
          90: '#EBDCFF',
          95: '#F7EDFF',
        },

        'primary':'#6535BB',
        'secondary':'#00639B',
        'tertiary':'#006971',
        'onSurface':'#191C1D',
        'surface':'#FBFDFD',

        'btncolor':{
          'primary':'#6535BB',
          'secondary':'#2A9EEA',
          'surface':'#FBFDFD',
        }
      },
      dropShadow:{
        'figma': '0px 13px 14px -9px rgba(101, 53, 187, 0.33)',
        'test':'0 35px 35px rgba(0, 0, 0, 0.25)'
      
      },
      fontFamily:{
        'Cairo':['Cairo', 'sans-serif']
      }
    },
    
  },
  plugins: [],
}

