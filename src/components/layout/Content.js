import React from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'

const ContentWrapper = styled(Box)`
  background-color: lightgrey;

  position: fixed;
  top: ${props => props.theme.totalHeadHeight};
  height: 100vh;
  width: 100%;
  z-index: 10;

  padding: 0 0 0 ${props => props.theme.sidebarWidth[3]};

  ${props =>
    props.theme.media.laptop`padding: 0 0 0 ${props =>
      props.theme.sidebarWidth[2]}`};

  ${props =>
    props.theme.media.tablet`padding: 0 0 0 ${props =>
      props.theme.sidebarWidth[1]}`};

  ${props => props.theme.media.phone`padding: 0`};
`

const ConentContainer = styled(Box)`
  max-width: 36.4rem;
  position: relative;
  margin: 0px auto;
  padding: 2rem;

  /* remove the top header from any first element */
  * > :first-child {
    margin-top: 0 !important;
  }
`

const Content = ({ children }) => (
  <ContentWrapper>
    <ConentContainer>{children}</ConentContainer>
  </ContentWrapper>
)

export default Content
