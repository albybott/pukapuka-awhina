import React from 'react'
import styled from 'styled-components'

import NavGroup from './NavGroup'

const NavGroupWrapper = styled.ul`
  margin: 0;
  padding: 0 0 0 1.5rem;
`

const pages = {
  Karakia: [
    { title: 'Opening Prayer', path: '/karakia/opening-prayer' },
    { title: 'Closing Prayer', path: '/karakia/closing-prayer' },
    { title: 'Prayer For Kai', path: '/karakia/prayer-for-kai' },
    {
      title: 'Prayer For Blessing a House',
      path: '/karakia/prayer-for-blessing-a-house',
    },
  ],
  Waiata: [{ title: 'Waiata Himene', path: '/waiata/waiata-himene' }],
  Whaikorero: [{ title: 'Tangata Whenua', path: '/whaikorero/tangata-whenua' }],
}

const Nav = props => (
  <NavGroupWrapper>
    {Object.entries(pages).map(([key, value]) => {
      return <NavGroup key={key} title={key} links={value} />
    })}
  </NavGroupWrapper>
)

export default Nav
