import Typography from 'typography'
// import funstonTheme from 'typography-theme-funston'

import theme from './theme'

const typography = new Typography({
  // this is a typography.js theme
  // funstonTheme,

  // blockMarginBottom: 0, // Default margin bottom for all block elements
  includeNormalize: false, // Dont add normalize.css (added in the GlobalStyle)
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: theme.fonts.header,
  bodyFontFamily: theme.fonts.body,
})

export default typography
