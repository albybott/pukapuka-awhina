import React from 'react'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'

/**
 * The fixed page banner directly at the top of the page
 */
const BannerWrapper = styled(Flex)`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  padding: 0 0 0 0.5rem;
  overflow-x: auto;
  z-index: 10;

  height: ${props => props.theme.bannerHeight};
  background-color: ${props => props.theme.colors['bannerBg']};

  justify-content: flex-start;
  align-items: center;

  div,
  a {
    color: ${props => props.theme.colors['bannerTxt']};
    font-size: 1.5rem;
    font-weight: bold;
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
