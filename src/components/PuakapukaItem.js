import React from 'react'
import { Box, Flex, Button } from 'rebass'
import styled from 'styled-components'

const ItemWrapper = styled(Box)`
  p:first-of-type {
    margin-top: ${props => (props.showButtons ? '0 !important' : '1rem')};
  }
`

const MainHeader = styled.h2`
  color: ${props => props.theme.colors['text']};
  margin: 0 0 0.5rem 0;
  padding: 0;
`

const HeaderTrans = styled.h5`
  margin: 0;
  padding: 0 0 0.25rem 0;
  font-weight: normal;
  display: ${props => (props.show ? 'block' : 'none')};
`

const Line = styled.p`
  font-weight: bold;
  margin: 0.3rem 0;
`

const Buttons = styled(Flex)`
  justify-content: flex-end;
  flex-wrap: nowrap;
`

const TransButton = styled(Button)`
  padding: 0.3rem;
  align-self: center;
  display: ${props => (props.show ? 'block' : 'none')};

  background-color: ${props => props.theme.colors['purple']};
  border: 1px solid ${props => props.theme.colors['lightpurple']};
  border-radius: 4px;

  &:hover {
    background-color: ${props => props.theme.colors['purplebg']};
    color: ${props => props.theme.colors['purple']};
  }

  &:focus {
    box-shadow: none;
  }
`

const Trans = styled.span`
  display: ${props => (props.show ? 'block' : 'none')};
  font-weight: normal;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono,
    Courier New, monospace;

  background: #fdfaf6;
  font-size: 0.8em;
  padding: 0.4rem 0;
  margin: 0;
`
class PukapukaItem extends React.Component {
  state = { showTrans: false }

  handleShowTransClick = () => {
    this.setState(prevState => ({
      showTrans: !prevState.showTrans,
      showButton: false,
    }))
  }

  render() {
    return (
      <ItemWrapper showButtons={this.state.showButton}>
        <MainHeader>
          {this.props.title.maori}
          <HeaderTrans show={this.state.showTrans && this.props.title.eng}>
            {this.props.title.eng || ''}
          </HeaderTrans>
        </MainHeader>
        <Buttons>
          <TransButton
            onClick={this.handleShowTransClick}
            show={this.state.showButton}
          >
            {this.state.showTrans ? 'Hide English' : 'Show English'}
          </TransButton>
        </Buttons>

        {this.props.lines.map(line => {
          if (line.eng && !this.state.showButton) {
            this.setState({ showButton: true })
          }

          return (
            <Line>
              {line.maori}
              <Trans show={this.state.showTrans}>{line.eng || ''}</Trans>
            </Line>
          )
        })}
      </ItemWrapper>
    )
  }
}

export default PukapukaItem
