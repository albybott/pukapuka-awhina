import React from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'

/**
 * This is the main content area component of the application
 */
const ContentWrapper = styled.div`
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

  ${props => props.theme.media.laptop`padding: 0 `};
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

const Content = ({ children, toggleHasENG, showENG }) => {
  // this will loop through all of the children components, inject some props building a new array of children with props
  // This is so we can pass use use functions on pages that update sate on the main Layout component
  const childrenWithProps = React.Children.map(children, child => {
    // the props passed are only used on this component
    // if (child.type.name !== 'PukapukaItem') {
    //   return child
    // }
    return React.cloneElement(child, { toggleHasENG, showENG })
  })

  return (
    <ContentWrapper>
      <ContentContainer>{childrenWithProps}</ContentContainer>
    </ContentWrapper>
  )
}

export default Content
