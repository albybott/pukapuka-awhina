import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavLinkList = styled.ul`
  padding: 0;
  margin: 0;
`

const NavLinkItem = styled.li`
  list-style: none;
  padding: 0 0 0 1rem;
  margin: 0;

  color: ${props => props.theme.colors['third']};

  :hover {
    color: ${props => props.theme.colors['second']};
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 0.8em;
  display: block;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${props => props.theme.colors['second']};

  color: ${props => props.theme.colors['text']};

  &:hover,
  &:active,
  &.current {
    color: ${props => props.theme.colors['main']};
  }

  &.current {
    font-weight: bold;
  }
`

const NavLinks = ({ links, isActiveGroup }) => {
  let linkItems
  if (isActiveGroup) {
    linkItems = links.map(link => (
      <NavLinkItem key={link.path}>
        <NavLink activeClassName="current" to={link.path}>
          {link.title}
        </NavLink>
      </NavLinkItem>
    ))
  }

  return <NavLinkList>{linkItems}</NavLinkList>
}

export default NavLinks
