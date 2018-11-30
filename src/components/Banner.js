import React from 'react'
import { Flex } from 'rebass'
import { Link } from 'gatsby'
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
  white-space: nowrap; /* white-space: nowrap prevents the banner text from wrapping when the screen width becomes too small */

  a {
    color: ${props => props.theme.colors['bannerTxt']};
    font-size: 1.5rem;
    font-weight: bold;

    :hover {
      text-decoration: none;
    }
  }
`

const Banner = ({ msg }) => (
  <BannerWrapper>
    <Link to="/">{msg}</Link>
  </BannerWrapper>
)

export default Banner
