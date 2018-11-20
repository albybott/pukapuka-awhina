import React from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'

import GlobalStyle from '../styles/GlobalStyle'

import Banner from './banner'
import MainHeader from './mainHeader'
import Sidebar from './sidebar'

const Content = styled(Box)`
  background-color: lightseagreen;
  text-align: center;
  color: white;
  padding: 0.5rem;

  position: fixed;
  top: 5rem;
  left: 320px;
  height: 100vh;
  width: 100%;

  z-index: 10;
`
// <ThemeProvider theme={theme}>

/* </ThemeProvider> */

const Wrapper = ({ children }) => (
  <>
    <Banner />
    <MainHeader />
    <Sidebar />

    <Content>{children}</Content>
    <GlobalStyle />
  </>
)

export default Wrapper
