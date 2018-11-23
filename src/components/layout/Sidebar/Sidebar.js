import React from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'

import SideNav from './SideNav/SideNav'
import { Divider } from 'rebass/dist/Divider'

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
    ],
    Waiata: [
      { title: 'Waiata 1', path: '/karakia/opening-prayer' },
      { title: 'Waiata 2', path: '/karakia/closing-prayer' },
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
          console.log(`key is ${key} value is ${value}`)

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
