import React from 'react'
import GlobalStyle from '../../styles/global'

import Banner from './Banner'
import MainHeader from './MainHeader'
import Sidebar from './Sidebar'
import Content from './Content'


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
