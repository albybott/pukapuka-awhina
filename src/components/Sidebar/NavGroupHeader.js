import React from 'react'
import { Button, Image } from 'rebass'
import styled from 'styled-components'
import Arrow from '../../images/arrow-icon.svg'

const NavGroupHeaderButton = styled(Button)`
  padding: 0.5rem 0;
  text-align: right;
  background-color: inherit;

  color: ${props => props.theme.colors['text']};

  font-size: 0.8em;
  font-weight: normal;
  border-bottom: 1px solid ${props => props.theme.colors['second']};
  width: 100%;
  text-align: left;
  text-transform: uppercase;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors['main']};
  }

  &:focus {
    box-shadow: none;
  }

  &.current {
    color: ${props => props.theme.colors['main']};
  }
`

const SectionArrow = styled(Image)`
  padding: 0 1rem;
  opacity: '1';
  transform: rotate(0deg);
  transition: transform 0.05s ease 0s;

  &.current {
    color: '0.3';
    transform: rotate(180deg);
  }
`

const NavGroupHeader = ({ title, clickHandler, active }) => {
  let activeClassName
  if (active) {
    activeClassName = 'current'
  }

  return (
    <NavGroupHeaderButton className={activeClassName} onClick={clickHandler}>
      {title}
      <SectionArrow src={Arrow} className={activeClassName} />
    </NavGroupHeaderButton>
  )
}

export default NavGroupHeader
