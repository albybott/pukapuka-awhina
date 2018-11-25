import React from 'react'
import { navigate } from 'gatsby'
import { Button, Image, Box } from 'rebass'
import styled from 'styled-components'
import Arrow from '../../../../images/arrow-icon.svg'

const SubMenuSection = styled.ul`
  margin: 0;
  padding: 0 0 0 1.5rem;
`

const SubMenuSectionItem = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
`

const SectionButton = styled(Button)`
  padding: 0.5rem 0;
  text-align: right;
  background-color: inherit;

  color: ${props => (props.active ? props.theme.colors['purple'] : 'inherit')};

  font-size: 0.8em;
  font-weight: normal;
  border-bottom: 1px solid ${props => props.theme.colors['lightpurple']};
  width: 100%;
  text-align: left;
  text-transform: uppercase;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors['purple']};
  }

  &:focus {
    box-shadow: none;
  }
`

const SectionArrow = styled(Image)`
  padding: 0 1rem;

  opacity: ${props => (props.active ? '1' : '0.3')};

  transform: rotate(${props => (props.active ? '180' : '0')}deg);
  transition: transform 0.05s ease 0s;
`

const SubMenuWrapper = styled(Box)`
  display: ${props => (props.active ? 'block' : 'none')};
`

class Sidebar extends React.Component {
  state = {
    active: this.props.active,
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
            <SectionButton
              onClick={() => this.handleSectionClick()}
              active={this.state.active}
            >
              {this.props.sectionName}
              <SectionArrow active={this.state.active} src={Arrow} />
            </SectionButton>
            <SubMenuWrapper active={this.state.active}>
              {this.props.children}
            </SubMenuWrapper>
          </SubMenuSectionItem>
        </SubMenuSection>
      </>
    )
  }
}

export default Sidebar
