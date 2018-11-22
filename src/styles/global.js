// css-normalize library for styled-components - injected into global style with template string
import styledNormalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

// Note: typography.js in injected via gatsby plugin - typography config is in styles/typography.js

const GlobalStyle = createGlobalStyle` 
  ${styledNormalize}
  
  html{
    /* this will ensure border is included with box items   */
    box-sizing: border-box;

    /* default font size - current using max-width in theme.js (Desktop first) */
    font-size: 1.2rem;

    ${props => props.theme.media.desktop`font-size: 1.2rem`};
    ${props => props.theme.media.laptop`font-size: 1.1rem`};
    ${props => props.theme.media.tablet`font-size: 1.05rem;`};
    ${props => props.theme.media.phone`font-size: 1rem;`};
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
