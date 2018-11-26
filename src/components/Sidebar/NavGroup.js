import React from 'react'
import styled from 'styled-components'

import NavGroupHeader from './NavGroupHeader'
import NavLinks from './NavLinks'

const NavGroupItem = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
`

class NavGroup extends React.Component {
  state = {
    active: false,
  }

  handleHeaderClick = () => {
    this.setState(prevState => ({
      active: !prevState.active,
    }))
  }

  render({ title, links } = this.props) {
    return (
      <NavGroupItem>
        <NavGroupHeader
          active={this.state.active}
          title={title}
          clickHandler={this.handleHeaderClick}
        />
        <NavLinks links={links} active={this.state.active} />
      </NavGroupItem>
    )
  }
}

export default NavGroup
