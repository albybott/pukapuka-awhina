import React from 'react'
import { Button, Image, Box } from 'rebass'
import styled from 'styled-components'
import Arrow from '../../images/arrow-icon.svg'

const SubMenuSection = styled.ul`
  margin: 0;
  padding: 0 0 0 1.5rem;
`

const SubMenuSectionItem = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;

  button {
    padding: 0.5rem 0;
    text-align: right;
    background-color: inherit;
    color: inherit;
    font-family: inherit;
    font-size: 0.8em;
    font-weight: normal;
    border-bottom: 1px solid ${props => props.theme.colors['lightpurple']};
    width: 100%;
    text-align: left;
    text-transform: uppercase;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover,
    &:focus {
      cursor: pointer;
      color: ${props => props.theme.colors['purple']};
      box-shadow: 1px 1px 1px 0 ${props => props.theme.colors['lightpurple']};
    }
  }
`

const SectionArrow = styled(Image)`
  padding: 0 1rem;
  transform: rotate(${props => (props.active ? '0' : '180')}deg);
`

const SubMenuWrapper = styled(Box)`
  display: ${props => (props.active ? 'block' : 'none')};
`

class Sidebar extends React.Component {
  state = {
    active: false,
  }

  handleSectionClick = () => {
    this.setState(prevState => ({
      active: !prevState.active,
    }))
  }

  render(props) {
    return (
      <>
        <SubMenuSection>
          <SubMenuSectionItem>
            <Button onClick={() => this.handleSectionClick()}>
              {this.props.sectionName}
              <SectionArrow active={this.props.active} src={Arrow} pr="1rem" />
            </Button>
            <SubMenuWrapper active={this.props.active}>
              {this.props.children}
            </SubMenuWrapper>
          </SubMenuSectionItem>
        </SubMenuSection>
      </>
    )
  }
}

export default Sidebar
