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
    isActiveGroup: false,
  }

  handleHeaderClick = () => {
    this.setState(prevState => ({
      isActiveGroup: !prevState.isActiveGroup,
    }))
  }

  componentDidMount() {
    const path = this.props.location.pathname
    const root = this.props.root

    if (path !== '/') {
      const pathRoot = path.split('/')[1]

      if (root === pathRoot) {
        this.setState({ isActiveGroup: true })
      }
    }
  }

  render({ title, links } = this.props) {
    return (
      <NavGroupItem>
        <NavGroupHeader
          active={this.state.isActiveGroup}
          title={title}
          clickHandler={this.handleHeaderClick}
        />
        <NavLinks links={links} isActiveGroup={this.state.isActiveGroup} />
      </NavGroupItem>
    )
  }
}

export default NavGroup
