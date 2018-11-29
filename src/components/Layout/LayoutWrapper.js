import React from 'react'
import GlobalStyle from '../../styles/global'
import styled from 'styled-components'

import Banner from '../Banner'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import MenuToggleButton from './menuToggleButton'
import Content from '../Content'
import Footer from '../Footer/Footer'

const LayoutWrapper = styled.div`
  position: relative;
`

/**
 * This component wraps all of the main page components and adds the global
 * css style making it available to all components in the application
 */
export default ({
  location,
  children,
  showMobileNav,
  toggleSidebarClick,
  toggleHasENG,
  toggleShowENG,
  hasENG,
  showENG,
}) => (
  <LayoutWrapper>
    <Banner msg="He Pukapuka Āwhina" />
    <Header hasENG={hasENG} showENG={showENG} toggleShowENG={toggleShowENG} />
    <Sidebar location={location} showMobileNav={showMobileNav} />
    <Content toggleHasENG={toggleHasENG} showENG={showENG}>
      {children}
    </Content>
    <Footer />
    <MenuToggleButton toggleSidebarClick={toggleSidebarClick} />
    <GlobalStyle />
  </LayoutWrapper>
)
