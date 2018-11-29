import React from 'react'
import styled from 'styled-components'

const MainHeader = styled.h2`
  color: #6e7837;
  text-transform: uppercase;
  margin: 0 0 0.5rem 0;
  padding: 0;
`

export default ({ children }) => <MainHeader>{children}</MainHeader>
