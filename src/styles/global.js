// css-normalize library for styled-components - injected into global style with template string
import styledNormalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

// Note: typography.js in injected via gatsby plugin - typography config is in styles/typography.js

const GlobalStyle = createGlobalStyle` 
  ${styledNormalize}
  
  html{
    /* default font size - current using max-width in theme.js (Desktop first) */
    font-size: 1.3125em;

    ${props => props.theme.media.desktop`font-size: 1.3125em`};
    ${props => props.theme.media.laptop`font-size: 1.125em`};
    ${props => props.theme.media.tablet`font-size: 1.0625em;`};
    ${props => props.theme.media.phone`font-size: 1em;`};
  }

  img {
    padding: 0;
    margin: 0;
  }
  
  h1 {
    color: ${props => props.theme.main};
  }
`

export default GlobalStyle
