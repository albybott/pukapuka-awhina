import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 0.8em;
  display: block;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${props => props.theme.colors['second']};

  color: ${props => props.theme.colors['text']};

  &:hover,
  &.current {
    color: ${props => props.theme.colors['main']};
  }

  &.current {
    font-weight: bold;
  }
`

export default ({ children, to, activeClassName }) => (
  <NavLink activeClassName={activeClassName} to={to}>
    {children}
  </NavLink>
)
