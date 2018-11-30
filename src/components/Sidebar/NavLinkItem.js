import React from 'react'
import styled from 'styled-components'

const NavLinkItem = styled.li`
  list-style-type: hidden;
  margin: 0;

  color: ${props => props.theme.colors['third']};

  :hover {
    color: ${props => props.theme.colors['text']};
    list-style-type: disc;
  }
`

export default ({ children }) => <NavLinkItem>{children}</NavLinkItem>
