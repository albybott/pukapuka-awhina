import React from 'react'
import GlobalStyle from '../../styles/global'

import Banner from '../Banner'
import MainHeader from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content'
import Footer from '../Footer/Footer'

/**
 * This component wraps all of the main page components and adds the global
 * css style making it available to all components in the application
 */
class LayoutWrapper extends React.Component {
  render(props) {
    return (
      <>
        <Banner msg="He Pukapuka Awhina mō ngā Whānau" />
        <MainHeader />
        <Sidebar location={this.props.location} />
        <Content>{this.props.children}</Content>
        <Footer />
        <GlobalStyle />
      </>
    )
  }
}

export default LayoutWrapper
