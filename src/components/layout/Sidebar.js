import React from 'react'
import { Link } from 'gatsby'
import { Box } from 'rebass'
import styled from 'styled-components'

const SidebarWrapper = styled(Box)`
  background-color: ${props => props.theme.colors['purplebg']};
  border-right: 1px solid ${props => props.theme.colors['lightpurple']};
  font-family: ${props => props.theme.fonts.menu};

  top: ${props => props.theme.totalHeadHeight};
  height: 100vh;
  width: ${props => props.theme.sidebarWidth[3]};
  position: fixed;
  z-index: 11;

  ${props =>
    props.theme.media.desktop`width: ${props => props.theme.sidebarWidth[3]}`};
  ${props =>
    props.theme.media.laptop`width: ${props => props.theme.sidebarWidth[2]}`};
  ${props =>
    props.theme.media.tablet`width: ${props => props.theme.sidebarWidth[1]}`};

  ${props => props.theme.media.phone`display: none;`};
`

const SidebarHeader = styled(Box)`
  height: 3.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`

const SidebarContent = styled(Box)``

const SubMenuItems = styled.ul`
  padding: 0;
`

const SubMenuItem = styled.li`
  padding: 0;
  margin: 0;

  font-weight: ${props => (props.active ? 'bold' : 'normal')};

  color: ${props =>
    props.active
      ? props.theme.colors['purple']
      : props.theme.colors['purplebg']};

  :hover {
    color: ${props => props.theme.colors['lightpurple']};
  }
`

const SubMenuLink = styled(Link)`
  text-decoration: none;
  font-size: 0.8em;
  display: block;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${props => props.theme.colors['lightpurple']};

  color: ${props =>
    props.active ? props.theme.colors['purple'] : props.theme.colors['text']};

  :hover {
    color: ${props => props.theme.colors['purple']};
  }
`

const Sidebar = props => (
  <SidebarWrapper>
    <SidebarContent>
      <SubMenuItems>
        <SubMenuItem active>
          <SubMenuLink to="http:/google.com" active>
            Menu Item
          </SubMenuLink>
        </SubMenuItem>
        <SubMenuItem>
          <SubMenuLink to="/page-2">Page 2</SubMenuLink>
        </SubMenuItem>
        <SubMenuItem>
          <SubMenuLink to="http:/google.com">Menu Item</SubMenuLink>
        </SubMenuItem>
      </SubMenuItems>
    </SidebarContent>
  </SidebarWrapper>
)

export default Sidebar
