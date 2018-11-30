import React from 'react'
import styled from 'styled-components'

import Nav from './Nav'

const SidebarWrapper = styled.div`
  top: ${props => props.theme.totalHeadHeight};
  position: fixed;
  z-index: 10;
  height: 100%;
  padding: 0 0 ${props => props.theme.footerHeight * 2 + 1}rem 0;

  overflow-y: auto;
  overflow-x: hidden;
  width: ${props => props.theme.sidebarWidth[3]};
  background-color: ${props => props.theme.colors['third']};
  border-right: 1px solid ${props => props.theme.colors['second']};

  ${props =>
    props.theme.media.desktop`width: ${props => props.theme.sidebarWidth[3]}`};

  ${props =>
    props.theme.media.laptop`${
      props.showMobileNav ? 'display: block' : 'display: none'
    };
    top: 0;
  z-index: 11; padding-top: 2rem;`};
`

const Sidebar = ({ showMobileNav, location }) => (
  <SidebarWrapper showMobileNav={showMobileNav}>
    <Nav location={location} />
  </SidebarWrapper>
)

export default Sidebar
