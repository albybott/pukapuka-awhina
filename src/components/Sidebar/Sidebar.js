import React from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'

import Nav from './Nav'

const SidebarWrapper = styled(Box)`
  top: ${props => props.theme.totalHeadHeight};
  position: fixed;
  z-index: 10;
  height: 100vh;
  width: ${props => props.theme.sidebarWidth[3]};
  background-color: ${props => props.theme.colors['third']};
  border-right: 1px solid ${props => props.theme.colors['second']};

  ${props =>
    props.theme.media.desktop`width: ${props => props.theme.sidebarWidth[3]}`};

  ${props =>
    props.theme.media.laptop`width: ${props => props.theme.sidebarWidth[2]}`};

  ${props =>
    props.theme.media.tablet`width: ${props => props.theme.sidebarWidth[1]}`};

  ${props => props.theme.media.phone`display: none;`};
`

const Sidebar = props => (
  <SidebarWrapper>
    <Nav location={props.location} />
  </SidebarWrapper>
)

export default Sidebar
