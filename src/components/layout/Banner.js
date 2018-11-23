import React from 'react'
import { Box, Link } from 'rebass'
import styled from 'styled-components'

const BannerWrapper = styled(Box)`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  padding: 0 0 0 0.5rem;
  overflow-x: auto;

  height: ${props => props.theme.bannerHeight};
  font-family: ${props => props.theme.fonts.header};

  display: flex;
  flex-direction: column;
  justify-content: center;

  div,
  a {
    color: ${props => props.theme.colors['lightpurple']};
    font-size: 0.9em;
  }
`

const BannerText = styled(Box)`
  white-space: nowrap;
`

const Banner = props => (
  <BannerWrapper bg="purple">
    <BannerText>{props.msg}</BannerText>
  </BannerWrapper>
)

export default Banner
