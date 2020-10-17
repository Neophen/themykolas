module.exports = {
  purge: false,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  theme: {
    fontFamily: {
      'display': ["Bebas Neue", 'cursive'],
      'body': ["Source Sans Pro", 'sans-serif'],
    },
    extend: {
      borderRadius: {
        large: '20px',
        modal: '40px',
      },
      colors: {
        'gray-100': 'var(--var-gray-100)',
        'gray-500': 'var(--var-gray-500)',
        'primary-400': 'var(--var-primary-400)',
        'primary-500': 'var(--var-primary-500)',
        'primary-600': 'var(--var-primary-600)',
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [
    require('tailwindcss-fluid')({
      textSizes: {
        h2: {
          min: '20px',
          max: '40px',
          minvw: '320px',
          maxvw: '1280px'
        }
      },
    }),
  ],
  corePlugins: {
    container: false,
  }
}
