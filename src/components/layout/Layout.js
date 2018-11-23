import React from 'react'
import theme from '../../styles/theme'
import { ThemeProvider } from 'styled-components'

import LayoutWrapper from './LayoutWrapper'

/**
 * The main layout component that all pages are wrapped with
 */
class Layout extends React.Component {
  render(props) {
    return (
      <ThemeProvider theme={theme}>
        <LayoutWrapper location={this.props.location}>
          {this.props.children}
        </LayoutWrapper>
      </ThemeProvider>
    )
  }
}

export default Layout
