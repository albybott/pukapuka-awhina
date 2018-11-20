import React from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'

const ContentWrapper = styled(Box)`
  background-color: lightseagreen;
  text-align: center;
  color: white;
  padding: 0.5rem;

  position: fixed;
  top: 5rem;
  left: 320px;
  height: 100vh;
  width: 100%;

  z-index: 10;

  ${props => props.theme.media.phone`left: 0px;`};
`

const Content = ({ children }) => (
  <ContentWrapper>{children}</ContentWrapper>
)

export default Content
