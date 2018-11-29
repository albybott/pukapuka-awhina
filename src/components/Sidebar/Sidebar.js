import React from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'

import Nav from './Nav'

const SidebarWrapper = styled(Box)`
  top: ${props => props.theme.totalHeadHeight};
  position: fixed;
  z-index: 10;
  height: 100vh;

  overflow-y: scroll;
  overflow-x: hidden;
  width: ${props => props.theme.sidebarWidth[3]};
  background-color: ${props => props.theme.colors['third']};
  border-right: 1px solid ${props => props.theme.colors['second']};

  ${props =>
    props.theme.media.desktop`width: ${props => props.theme.sidebarWidth[3]}`};

  ${props =>
    props.theme.media.laptop`width: ${props => props.theme.sidebarWidth[2]}`};

  ${props =>
    props.theme.media.tablet`width: ${props => props.theme.sidebarWidth[1]}`};

  ${props =>
    props.theme.media.phone`${
      props.showMobileNav ? 'display: block' : 'display: none'
    };
    top: 0;
  z-index: 11;`};
`

const Sidebar = props => (
  <SidebarWrapper showMobileNav={props.showMobileNav}>
    <Nav location={props.location} />
  </SidebarWrapper>
)

export default Sidebar
