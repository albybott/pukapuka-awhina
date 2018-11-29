import React from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'

/**
 * This is the main content area component of the application
 */
const ContentWrapper = styled(Box)`
  position: relative;
  top: ${props => props.theme.totalHeadHeight};
  height: 100vh;
  width: 100%;
  z-index: 1;
  padding: 0 0 0 ${props => props.theme.sidebarWidth[3]};
  background-color: white;

  ${props =>
    props.theme.media.laptop`padding: 0 0 0 ${props =>
      props.theme.sidebarWidth[2]}`};

  ${props =>
    props.theme.media.tablet`padding: 0 0 0 ${props =>
      props.theme.sidebarWidth[1]}`};

  ${props => props.theme.media.phone`padding: 0`};
`

const ContentContainer = styled(Box)`
  max-width: 36.4rem;
  /* position: relative; */
  margin: 0px auto;
  padding: 2rem 2rem ${props => props.theme.footerHeight + 2}rem 2rem;

  /* remove the top header from any first element */
  * > :first-child {
    margin-top: 0 !important;
  }
`

const Content = ({ children }) => (
  <ContentWrapper>
    <ContentContainer>{children}</ContentContainer>
  </ContentWrapper>
)

export default Content
