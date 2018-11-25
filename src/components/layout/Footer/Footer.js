import React from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'

const FooterWrapper = styled(Box)`
  bottom: 0;
  position: fixed;
  left: 0px;
  z-index: 10;
  padding: 0 0.5rem;
  width: 100%;

  height: ${props => props.theme.footerHeight}rem;
  border-top: 1px solid ${props => props.theme.colors['lightpurple']};
  background-color: ${props => props.theme.colors['purplebg']};

  display: flex;
  align-items: center;
`

const Footer = props => <FooterWrapper>This is the footer</FooterWrapper>

export default Footer
