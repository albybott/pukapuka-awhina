import React from 'react'
import { Box, Link } from 'rebass'
import styled from 'styled-components'

/**
 * The fixed page banner directly at the top of the page
 */
const BannerWrapper = styled(Box)`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  padding: 0 0 0 0.5rem;
  overflow-x: auto;
  z-index: 10;

  height: ${props => props.theme.bannerHeight};
  font-family: ${props => props.theme.fonts.header};
  background-color: ${props => props.theme.colors['purple']};

  display: flex;
  flex-direction: column;
  justify-content: center;

  div,
  a {
    color: ${props => props.theme.colors['lightpurple']};
    font-size: 0.9em;
  }
`

// white-space: nowrap prevents the banner text from wrapping when the screen width becomes too small
const BannerText = styled(Box)`
  white-space: nowrap;
`

const Banner = props => (
  <BannerWrapper>
    <BannerText>{props.msg}</BannerText>
  </BannerWrapper>
)

export default Banner
