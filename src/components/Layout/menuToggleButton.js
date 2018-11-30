import React from 'react'
import styled from 'styled-components'
import { Button, Box } from 'rebass'

const MenuButtonWrapper = styled(Box)`
  position: absolute;
  bottom: 30vh;
  right: 20vw;
  display: none;
  z-index: 999;

  ${props => props.theme.media.laptop`display: block;`};
`

const MenuButton = styled(Button)`
  padding: 0.3rem;
  position: fixed;
  height: 4rem;
  width: 4rem;

  background-color: ${props => props.theme.colors['main']};
  border: 1px solid ${props => props.theme.colors['third']};
  border-radius: 5rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px;

  &:hover {
    background-color: ${props => props.theme.colors['bannerTxt']};
    border: 1px solid ${props => props.theme.colors['second']};
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px;
  }
`

const MenuToggleButton = ({ toggleSidebarClick }) => (
  <MenuButtonWrapper>
    <MenuButton onClick={toggleSidebarClick}>MENU</MenuButton>
  </MenuButtonWrapper>
)

export default MenuToggleButton
