import React from 'react'
import GlobalStyle from '../../styles/global'

import Banner from './Banner'
import MainHeader from './MainHeader'
import Sidebar from './Sidebar'
import Content from './Content'

class Wrapper extends React.Component {
  render(props) {
    return (
      <>
        <Banner msg="He Pukapuka Awhina mō ngā Whānau" />
        <MainHeader />
        <Sidebar location={this.props.location} />
        <Content>{this.props.children}</Content>
        <GlobalStyle />
      </>
    )
  }
}

export default Wrapper
