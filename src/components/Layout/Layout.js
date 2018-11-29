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
  }

  handleToggleSidebar = () => {
    this.setState(prevState => ({
      showMobileNav: !prevState.showMobileNav,
    }))
  }

  render(props) {
    return (
      <ThemeProvider theme={theme}>
        <LayoutWrapper
          location={this.props.location}
          showMobileNav={this.state.showMobileNav}
          toggleSidebarClick={this.handleToggleSidebar}
        >
          {this.props.children}
        </LayoutWrapper>
      </ThemeProvider>
    )
  }
}

export default Layout
