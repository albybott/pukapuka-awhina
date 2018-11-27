import React from 'react'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'

import ItemHeader from './ItemHeader'
import TransToggleButton from './TransToggleButton'
import ItemContent from './ItemContent'

const ItemWrapper = styled(Box)`
  /* p:first-of-type {
    margin-top: ${props => (props.showButtons ? '0 !important' : '1rem')};
  } */
`

const ButtonWrapper = styled(Flex)`
  justify-content: flex-end;
  flex-wrap: nowrap;
`

class PukapukaItem extends React.Component {
  state = {
    showENG: false,
    hasENG: false,
  }

  handleToggleTransClick = () => {
    this.setState(prevState => ({
      showENG: !prevState.showENG,
    }))
  }

  componentDidMount() {
    // if the first line has an english transalation then set the hasENG state to true
    // this determines if the toggle trans button is added to the DOM
    this.setState({ hasENG: this.props.lines[0].eng })
  }

  render(props) {
    // only add the translation toggle button if there is english
    let transToggleButton
    if (this.state.hasENG) {
      transToggleButton = (
        <TransToggleButton
          showENG={this.state.showENG}
          toggleTrans={this.handleToggleTransClick}
        />
      )
    }

    return (
      <ItemWrapper>
        <ItemHeader
          title={this.props.heading.title}
          translation={this.props.heading.translation}
          showENG={this.state.showENG}
        />

        <ButtonWrapper>{transToggleButton}</ButtonWrapper>

        <ItemContent lines={this.props.lines} showENG={this.state.showENG} />
      </ItemWrapper>
    )
  }
}

export default PukapukaItem
