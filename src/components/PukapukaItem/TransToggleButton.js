import React from 'react'
import styled from 'styled-components'
import { Button, Box } from 'rebass'

const TransButtonWrapper = styled(Box)`
  position: absolute;
  top: 0.25rem;
  right: 3rem;

  ${props => props.theme.media.phone`top: -0.4rem`};
`

const TransButton = styled(Button)`
  padding: 0.5rem;
  display: 'block';
  position: fixed;

  background-color: ${props => props.theme.colors['main']};
  border: 1px solid ${props => props.theme.colors['second']};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;

  &:hover {
    background-color: ${props => props.theme.colors['third']};
    color: ${props => props.theme.colors['main']};
  }

  &:focus {
    box-shadow: none;
  }
`

const TransToggleButton = props => (
  <TransButtonWrapper>
    <TransButton onClick={props.toggleTrans}>
      {props.showENG ? 'MAORI' : 'ENGLISH'}
    </TransButton>
  </TransButtonWrapper>
)

export default TransToggleButton
