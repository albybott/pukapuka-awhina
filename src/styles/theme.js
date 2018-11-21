import { css } from 'styled-components'

// use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
// const emSize = sizes[label] / 16
// em breakpoints based on Rebass defaults
const sizes = {
  desktop: 80,
  laptop: 64,
  tablet: 48,
  phone: 32,
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
  main: 'rgba(61, 90, 128, 1)',
  second: 'rgba(152, 193, 217, 1)',
  third: 'rgba(224, 251, 252, 1)',
  fourth: 'rgba(238, 108, 77, 1)',
  fifth: 'rgba(41, 50, 65, 1)',
  media,
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    purple: '#663399',
    oranga: 'orange',
    secondary: '#ede7f3',
    tertiary: '#fbfafc',
    text: '#000000e0',
    blue: '#07c',
    lightgray: '#f6f6ff',
  },
  space: [0, 4, 8, 16, 24, 32, 48, 56, 64, 128, 256],
  bannerHeight: ['3.25rem'],
  headerHeight: ['3.25rem'],
  sidebarWidth: ['10rem', '12rem', '17rem', '20rem'],
  totalHeadHeight: '6.5rem',
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
}

export default theme
