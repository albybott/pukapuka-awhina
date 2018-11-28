import React from 'react'
import styled from 'styled-components'
import { Button } from 'rebass'

const TransButton = styled(Button)`
  padding: 0.3rem;
  align-self: center;
  display: 'block';

  background-color: ${props => props.theme.colors['main']};
  border: 1px solid ${props => props.theme.colors['lightpurple']};
  border-radius: 4px;

  &:hover {
    background-color: ${props => props.theme.colors['purplebg']};
    color: ${props => props.theme.colors['main']};
  }

  &:focus {
    box-shadow: none;
  }
`

const TransToggleButton = props => (
  <TransButton onClick={props.toggleTrans}>
    {props.showENG ? 'Hide English' : 'Show English'}
  </TransButton>
)

export default TransToggleButton
