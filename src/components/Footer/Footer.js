import React from 'react'
import { Box, Image } from 'rebass'
import styled from 'styled-components'
import Logo from '../../images/nmo-logo-full.png'
import FooterBG from '../../images/nmo-footer.jpg'

const FooterWrapper = styled(Box)`
  bottom: 0;
  position: fixed;
  left: 0px;
  z-index: 10;
  padding: 0;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors['second']};
  background-color: #000;

  height: 7rem;
  ${props => props.theme.media.laptop`height: 6rem;`};
`

const LogoWrapper = styled(Box)`
  padding: 1rem 0;
  height: 72%;
`

const LogoImage = styled(Image)`
  height: 100%;
  margin: 0 auto;
`

const FooterBGWrapper = styled(Box)`
  height: 2rem;
  background-image: url(${FooterBG});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
`

const Footer = props => (
  <FooterWrapper>
    <LogoWrapper>
      <LogoImage src={Logo} />
    </LogoWrapper>
    <FooterBGWrapper />
  </FooterWrapper>
)

export default Footer
