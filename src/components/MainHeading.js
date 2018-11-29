import React from 'react'
import styled from 'styled-components'

const MainHeader = styled.h2`
  color: ${props => props.theme.colors['bannerTxt']};
  text-transform: uppercase;
  margin: 0 0 0.5rem 0;
  padding: 0;
  border-bottom: none;
  font-weight: bold;
`

export default ({ children }) => <MainHeader>{children}</MainHeader>
