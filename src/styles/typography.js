import Typography from 'typography'
import funstonTheme from 'typography-theme-funston'

const typography = new Typography({
  // this is a typography.js theme
  // import with npm and add as per below
  funstonTheme,
  includeNormalize: false,

  // baseFontSize: '18px',
  // baseLineHeight: 1.666,
  // headerFontFamily: [
  //   'Avenir Next',
  //   'Helvetica Neue',
  //   'Segoe UI',
  //   'Helvetica',
  //   'Arial',
  //   'sans-serif',
  // ],
  // bodyFontFamily: ['Georgia', 'serif'],
})

export default typography
