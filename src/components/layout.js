import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './wrapper'
import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>{children}</Wrapper>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
