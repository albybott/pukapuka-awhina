import React from 'react'
import styled from 'styled-components'
import MainHeading from '../MainHeading'

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
      <MainHeading>
        {title}
        {titleTranslation}
      </MainHeading>
    )
  }
}

export default Header
