import React from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'

const SidebarWrapper = styled(Box)`
  background-color: lightgreen;

  top: 5rem;
  height: 100vh;
  width: 320px;
  position: fixed;
  z-index: 10;

  ${props => props.theme.media.phone`display: none;`};
`

const SidebarHeader = styled(Box)`
  background-color: lightgrey;
  padding: 0;
  margin: 0;
`

const SidebarContent = styled(Box)`
  padding: 0.5rem;
`

const Sidebar = props => (
  <SidebarWrapper>
    <SidebarHeader>SB Header</SidebarHeader>
    <SidebarContent>Content</SidebarContent>
  </SidebarWrapper>
)

export default Sidebar
