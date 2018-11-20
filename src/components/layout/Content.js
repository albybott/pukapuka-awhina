import React from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'

const ContentWrapper = styled(Box)`
  background-color: lightgrey;

  position: fixed;
  top: 7.75rem;
  height: 100vh;
  width: 100%;

  padding: 0 0 0 20rem;

  z-index: 10;

  ${props => props.theme.media.phone`
    padding: 0;
  `};
`

const ConentContainer = styled(Box)`
  max-width: 36.4rem;
  position: relative;
  margin: 0px auto;
  padding: 2.1rem 1.05rem 4.9rem;
`

const Content = ({ children }) => (
  <ContentWrapper>
    <ConentContainer>{children}</ConentContainer>
  </ContentWrapper>
)

export default Content
