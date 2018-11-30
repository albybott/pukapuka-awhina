import { css } from 'styled-components'

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
// const emSize = sizes[label] / 16
// em breakpoints based on Rebass defaults
const sizes = {
  desktop: 80,
  laptop: 64,
  tablet: 48,
  phone: 40,
}

// Iterate through the sizes and create a media template
/// max-width: apply to all screen sizes equal to or narrower than _size
/// max-width: apply to all screen sizes equal to or wider than _size

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}em) {
      ${css(...args)};
    }
  `
  return acc
}, {})

/* Now that you've defined your media templates, you can use them like this:
const MediaThemedH1 = styled.h1`
  ${props => props.theme.media.desktop`color: ${props.theme.fifth}`};
  ${props => props.theme.media.tabletLarge`color: ${props.theme.second}`};
  ${props => props.theme.media.tabletSmall`color: ${props.theme.fourth}`};
  ${props => props.theme.media.phone`color: ${props.theme.main}`};
`;
*/

// Pass media template via theme object and Styled Components ThemeProvider
const theme = {
  media,
  colors: {
    main: '#1e1f26', // main color (banner)
    second: '#aaaaaa', // (borders)
    third: '#eeeeee', // background menu, footer - lighter than main
    fourth: '#878787', // background - slightly darker
    bannerBg: '#000',
    bannerTxt: '#96a34a', // banner text
    text: 'rgba(0, 0, 0, 0.88)', // default text color
  },
  bannerHeight: '3.5rem',
  headerHeight: '3rem',
  footerHeight: 7,
  sidebarWidth: ['14rem', '16rem', '18rem', '18rem'],
  totalHeadHeight: '6.5rem',
}

export default theme
