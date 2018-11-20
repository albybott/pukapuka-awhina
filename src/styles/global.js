// css-normalize library for styled-components - injected into global style with template string
import styledNormalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

// Note: typography.js in injected via gatsby plugin - typography config is in styles/typography.js

const GlobalStyle = createGlobalStyle` 
  ${styledNormalize}
  
  img {
    padding: 0;
    margin: 0;
  }
  
  h1 {
    color: ${props => props.theme.main};
  }
`

export default GlobalStyle
