import React from 'react'
import theme from '../../styles/theme'
import { ThemeProvider } from 'styled-components'

import LayoutWrapper from './LayoutWrapper'

/**
 * The main layout component that all pages are wrapped with
 */
class Layout extends React.Component {
  state = {
    showMobileNav: false,
    showENG: false,
    hasENG: false,
  }

  handleToggleEnglishTrans = hasENG => {
    this.setState({ hasENG })
  }

  handleToggleSidebar = () => {
    this.setState(prevState => ({
      showMobileNav: !prevState.showMobileNav,
    }))
  }

  handleToggleTransClick = () => {
    this.setState(prevState => ({
      showENG: !prevState.showENG,
    }))
  }

  render({ location, children } = this.props) {
    return (
      <ThemeProvider theme={theme}>
        <LayoutWrapper
          location={location}
          showMobileNav={this.state.showMobileNav}
          toggleSidebarClick={this.handleToggleSidebar}
          toggleHasENG={this.handleToggleEnglishTrans}
          toggleShowENG={this.handleToggleTransClick}
          hasENG={this.state.hasENG}
          showENG={this.state.showENG}
        >
          {children}
        </LayoutWrapper>
      </ThemeProvider>
    )
  }
}

export default Layout
