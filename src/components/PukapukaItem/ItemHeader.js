import React from 'react'
import styled from 'styled-components'

const MainHeader = styled.h2`
  color: #6e7837;
  text-transform: uppercase;
  margin: 0 0 0.5rem 0;
  padding: 0;
`

const TitleTrans = styled.span`
  margin: 0;
  padding: 0 0 0.25rem 0;
  font-weight: normal;
  display: ${props => (props.showENG ? 'block' : 'none')};
  font-size: 60%;
`

class Header extends React.Component {
  render({ title, translation, showENG } = this.props) {
    // we only need to add the translation header to the DOM if one is provided
    let titleTranslation
    if (translation) {
      titleTranslation = (
        <TitleTrans showENG={showENG}>{translation}</TitleTrans>
      )
    }

    return (
      <MainHeader>
        {title}
        {titleTranslation}
      </MainHeader>
    )
  }
}

export default Header
