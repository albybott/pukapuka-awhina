import React from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'

import SideNav from './SideNav/SideNav'

/**
 * Page sidebar component which contains the side navigation bar
 */
const SidebarWrapper = styled(Box)`
  top: ${props => props.theme.totalHeadHeight};
  position: fixed;
  z-index: 10;
  height: 100vh;
  width: ${props => props.theme.sidebarWidth[3]};
  background-color: ${props => props.theme.colors['purplebg']};
  border-right: 1px solid ${props => props.theme.colors['lightpurple']};

  ${props =>
    props.theme.media.desktop`width: ${props => props.theme.sidebarWidth[3]}`};

  ${props =>
    props.theme.media.laptop`width: ${props => props.theme.sidebarWidth[2]}`};

  ${props =>
    props.theme.media.tablet`width: ${props => props.theme.sidebarWidth[1]}`};

  ${props => props.theme.media.phone`display: none;`};
`

class Sidebar extends React.Component {
  pages = {
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
    Whaikorero: [
      { title: 'Tangata Whenua', path: '/whaikorero/tangata-whenua' },
    ],
  }

  render(props) {
    let activeSection = ''

    if (this.props.location) {
      activeSection = this.props.location.pathname.split('/')[1]
    }

    return (
      <SidebarWrapper>
        {Object.entries(this.pages).map(([key, value]) => {
          return (
            <SideNav
              key={key}
              activeSection={activeSection}
              sectionName={key}
              pages={value}
            />
          )
        })}
      </SidebarWrapper>
    )
  }
}

export default Sidebar
