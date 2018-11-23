import React from 'react'
import { Link } from 'gatsby'
import { Box, Button, Image } from 'rebass'
import styled from 'styled-components'
import SubMenu from './SubMenu'

const SidebarWrapper = styled(Box)`
  background-color: ${props => props.theme.colors['purplebg']};
  border-right: 1px solid ${props => props.theme.colors['lightpurple']};
  font-family: ${props => props.theme.fonts.menu};

  top: ${props => props.theme.totalHeadHeight};
  height: 100vh;
  width: ${props => props.theme.sidebarWidth[3]};
  position: fixed;
  z-index: 11;

  ${props =>
    props.theme.media.desktop`width: ${props => props.theme.sidebarWidth[3]}`};
  ${props =>
    props.theme.media.laptop`width: ${props => props.theme.sidebarWidth[2]}`};
  ${props =>
    props.theme.media.tablet`width: ${props => props.theme.sidebarWidth[1]}`};

  ${props => props.theme.media.phone`display: none;`};
`

const SidebarHeader = styled(Box)`
  height: 3.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`

class Sidebar extends React.Component {
  pages = {
    karakia: [
      { title: 'Opening Prayer', path: '/karakia/opening-prayer' },
      { title: 'Closing Prayer', path: '/karakia/closing-prayer' },
    ],
    waiata: [
      { title: 'Waiata 1', path: '/karakia/opening-prayer' },
      { title: 'Waiata 2', path: '/karakia/closing-prayer' },
    ],
  }

  render(props) {
    let activeSection = ''

    if (this.props.location) {
      activeSection = this.props.location.pathname.split('/')[1]
    }

    console.log('currentSection: ' + activeSection.toLowerCase())

    return (
      <SidebarWrapper>
        <Box>
          <SubMenu
            activeSection={activeSection}
            sectionName="Karakia"
            pages={this.pages.karakia}
          />
          <SubMenu
            activeSection={activeSection}
            sectionName="Waiata"
            pages={this.pages.waiata}
          />
        </Box>
      </SidebarWrapper>
    )
  }
}

export default Sidebar
