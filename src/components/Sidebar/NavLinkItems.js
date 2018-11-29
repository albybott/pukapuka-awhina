import React from 'react'
import styled from 'styled-components'

import NavLinkItem from './NavLinkItem'
import NavLink from './NavLink'

const NavLinkList = styled.ul`
  padding: 0;
  margin: 0;
`

const NavLinkItems = ({ links, isActiveGroup }) => {
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

export default NavLinkItems
