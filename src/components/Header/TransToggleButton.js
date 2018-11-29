import React from 'react'
import styled from 'styled-components'
import { Button } from 'rebass'

const TransButton = styled(Button)`
  padding: 0.5rem;
  margin: 0 0.5rem;

  background-color: ${props => props.theme.colors['main']};
  border: 1px solid ${props => props.theme.colors['second']};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;

  &:hover {
    background-color: ${props => props.theme.colors['bannerTxt']};
  }

  &:focus {
    box-shadow: none;
  }
`

const TransToggleButton = props => (
  <TransButton onClick={props.toggleTrans}>
    {props.showENG ? 'MAORI' : 'ENGLISH'}
  </TransButton>
)

export default TransToggleButton
