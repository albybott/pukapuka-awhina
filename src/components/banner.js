import React from 'react'
import { Box, Link } from 'rebass'
import styled from 'styled-components'

const BannerWrapper = styled(Box)`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  padding: 0 0 0 0.5rem;
  height: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  div,
  a {
    color: ${props => props.theme.colors['oranga']};
    font-size: 0.9em;
  }
`

const Banner = props => (
  <BannerWrapper bg="purple">
    <Box>
      <Link>Watch</Link>: “Rise of the Content Mesh: Webcast with Contentful and
      Gatsby”.
    </Box>
  </BannerWrapper>
)

export default Banner
