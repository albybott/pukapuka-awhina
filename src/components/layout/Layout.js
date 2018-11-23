import React from 'react'
import PropTypes from 'prop-types'
import theme from '../../styles/theme'
import { ThemeProvider } from 'styled-components'

import Wrapper from './Wrapper'

class Layout extends React.Component {
  render(props) {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper location={this.props.location}>{this.props.children}</Wrapper>
      </ThemeProvider>
    )
  }
}

export default Layout
