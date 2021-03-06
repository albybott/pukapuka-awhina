import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const MainMenuItems = styled.ul`
  ${props => props.theme.media.phone`display: none;`};

  display: flex;
  margin: 0;
  padding: 0 0 0 2rem;
  list-style: none;
  font-size: 0.8em;

  *:last-child {
    margin: 0;
  }
`
const MainMenuItem = styled.li`
  margin: 0 1rem 0 0;
  padding: 0;
`
const MainMenuLink = styled(Link)`
  margin: 0;
  padding: 0;
  text-decoration: none;
  display: block;
  line-height: ${props => props.theme.headerHeight};
  letter-spacing: 0.03em;
  text-transform: uppercase;

  color: ${props => props.theme.colors['text']};

  &:hover,
  &:active {
    color: ${props => props.theme.colors['main']};
  }

  &.active {
    border-bottom: 0.2rem solid ${props => props.theme.colors['main']};
    color: ${props => props.theme.colors['main']};
  }
`

const MainMenu = props => (
  <MainMenuItems>
    <MainMenuItem>
      <MainMenuLink activeClassName="active" to="/">
        Home
      </MainMenuLink>
    </MainMenuItem>
  </MainMenuItems>
)

export default MainMenu
