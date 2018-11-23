import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import SubMenuSection from './SubMenuSection'

const SubMenuItems = styled.ul`
  padding: 0;
  margin: 0;
`

const SubMenuItem = styled.li`
  list-style: none;
  padding: 0 0 0 1rem;
  margin: 0;

  color: ${props => props.theme.colors['purplebg']};

  :hover {
    color: ${props => props.theme.colors['lightpurple']};
  }
`

const SubMenuLink = styled(Link)`
  text-decoration: none;
  font-size: 0.8em;
  display: block;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${props => props.theme.colors['lightpurple']};

  color: ${props => props.theme.colors['text']};

  &:hover,
  &:active,
  &.current {
    color: ${props => props.theme.colors['purple']};
  }

  &.current {
    font-weight: bold;
  }
`

class SubMenu extends React.Component {
  render(props) {
    return (
      <SubMenuSection
        sectionName={this.props.sectionName}
        active={
          this.props.activeSection === this.props.sectionName.toLowerCase()
        }
      >
        <SubMenuItems>
          {this.props.pages.map(link => (
            <SubMenuItem key={link.path}>
              <SubMenuLink activeClassName="current" to={link.path}>
                {link.title}
              </SubMenuLink>
            </SubMenuItem>
          ))}
        </SubMenuItems>
      </SubMenuSection>
    )
  }
}

export default SubMenu
