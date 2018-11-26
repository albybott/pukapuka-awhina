import React from 'react'
import styled from 'styled-components'

const MainHeader = styled.h2`
  color: ${props => props.theme.colors['text']};
  margin: 0 0 0.5rem 0;
  padding: 0;
`

const MainHeaderENG = styled.span`
  margin: 0;
  padding: 0 0 0.25rem 0;
  font-weight: normal;
  display: ${props => (props.showENG ? 'block' : 'none')};
  font-size: 60%;
`

class Header extends React.Component {
  render({ maori, eng, showENG } = this.props) {
    // we only need to add the english header to the DOM if one is provided
    let mainHeaderENG
    if (eng) {
      mainHeaderENG = <MainHeaderENG showENG={showENG}>{eng}</MainHeaderENG>
    }

    return (
      <MainHeader>
        {maori}
        {mainHeaderENG}
      </MainHeader>
    )
  }
}

export default Header
