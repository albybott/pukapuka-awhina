import React from 'react'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

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

const PlayerWrapper = styled(Box)`
  margin: 1.5rem 0 0 0;
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
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
    this.setState({ hasENG: this.props.item.lines[0].eng })
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

    let reactPlayer
    if (this.props.item.youtube) {
      reactPlayer = (
        <PlayerWrapper>
          <ReactPlayer
            className="react-player"
            url={this.props.item.youtube}
            playing={false}
            width="100%"
            height="100%"
          />
        </PlayerWrapper>
      )
    }

    return (
      <ItemWrapper>
        <ItemHeader
          title={this.props.item.heading.title}
          translation={this.props.item.heading.translation}
          showENG={this.state.showENG}
        />

        <ButtonWrapper>{transToggleButton}</ButtonWrapper>

        <ItemContent
          lines={this.props.item.lines}
          showENG={this.state.showENG}
        />

        {reactPlayer}
      </ItemWrapper>
    )
  }
}

export default PukapukaItem
