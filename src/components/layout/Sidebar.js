import React from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'

const SidebarWrapper = styled(Box)`
  background-color: lightgreen;

  top: 7.75rem;
  height: 100vh;
  width: 15rem;
  position: fixed;
  z-index: 11;

  ${props => props.theme.media.tablet`display: none;`};
`

const SidebarHeader = styled(Box)`
  height: 3.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`

const SidebarContent = styled(Box)`
  padding: 0.5rem;
`

const Sidebar = props => (
  <SidebarWrapper>
    <SidebarHeader bg="secondary" pl="40px" pr="8px">
      SB Header
    </SidebarHeader>
    <SidebarContent>Content</SidebarContent>
  </SidebarWrapper>
)

export default Sidebar
