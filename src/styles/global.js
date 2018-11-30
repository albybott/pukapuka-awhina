import { createGlobalStyle } from 'styled-components'
import { scale } from './typography'

// Note: typography.js in injected via gatsby plugin - typography config is in styles/typography.js

const GlobalStyle = createGlobalStyle` 
  html{
    /* this will ensure border is included with box items   */
    box-sizing: border-box;

    /* use typography.scale to adjust fonts by veiwport size */
    /* ${{ ...scale(7 / 16) }} */

    /* ${props => props.theme.media.desktop`${{ ...scale(7 / 16) }}`};
    ${props => props.theme.media.laptop`${{ ...scale(5 / 16) }}`};
    ${props => props.theme.media.tablet`${{ ...scale(3 / 16) }}`};
    ${props => props.theme.media.phone`${{ ...scale(2 / 16) }}`}; */
  }

  img {
    padding: 0;
    margin: 0;
  }

  h1{
    color: ${props => props.theme.colors['bannerTxt']}
  }
`

export default GlobalStyle
