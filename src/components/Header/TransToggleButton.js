import React from 'react'
import styled from 'styled-components'
import { Button } from 'rebass'

const TransButton = styled(Button)`
  padding: 0.5rem;
  margin: 0 0.5rem;

  background-color: ${props => props.theme.colors['main']};
  border: 1px solid ${props => props.theme.colors['second']};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 20px;

  &:hover {
    background-color: ${props => props.theme.colors['bannerTxt']};
  }

  &:focus,
  &:active {
    background-color: ${props => props.theme.colors['main']};
    box-shadow: none;
  }

  &.show-eng {
    background-color: ${props => props.theme.colors['transBg']};
    border: 1px solid ${props => props.theme.colors['second']};
    color: ${props => props.theme.colors['main']};
  }
`

const TransToggleButton = props => (
  <TransButton
    onClick={props.toggleTrans}
    className={props.showENG ? 'show-eng' : ''}
  >
    {props.showENG ? 'MĀORI' : 'ENGLISH'}
  </TransButton>
)

export default TransToggleButton
