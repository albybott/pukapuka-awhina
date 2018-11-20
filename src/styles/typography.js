import Typography from 'typography'
// import funstonTheme from 'typography-theme-funston'

const typography = new Typography({
  // this is a typography.js theme
  // funstonTheme,

  includeNormalize: false, // Dont add normalize.css (added in the GlobalStyle)
  blockMarginBottom: 0, // Default margin bottom for all block elements
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: [
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Georgia', 'serif'],
})

export default typography
