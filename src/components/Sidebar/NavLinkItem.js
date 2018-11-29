import React from 'react'
import styled from 'styled-components'

const NavLinkItem = styled.li`
  list-style: none;
  padding: 0 0 0 1rem;
  margin: 0;

  color: ${props => props.theme.colors['third']};

  :hover {
    color: ${props => props.theme.colors['second']};
  }
`

export default ({ children }) => <NavLinkItem>{children}</NavLinkItem>
