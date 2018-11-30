import React from 'react'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'
import ReactPlayer from 'react-player'

import ItemHeader from './ItemHeader'
import ItemContent from './ItemContent'

const ItemWrapper = styled(Box)`
  position: relative;
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
  componentDidMount() {
    // if the first line has an english transalation then set the hasENG state to true
    // this determines if the toggle trans button is added to the DOM
    let hasEngTranslation = false

    if (this.props.item.lines[0].eng) {
      hasEngTranslation = true
    }

    this.props.toggleHasENG(hasEngTranslation)
  }

  render() {
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
          showENG={this.props.showENG}
        />

        <ButtonWrapper />

        <ItemContent
          lines={this.props.item.lines}
          showENG={this.props.showENG}
        />

        {reactPlayer}
      </ItemWrapper>
    )
  }
}

export default PukapukaItem
