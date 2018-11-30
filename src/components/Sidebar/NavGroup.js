import React from 'react'
import styled from 'styled-components'

import NavGroupHeader from './NavGroupHeader'
import NavLinkItems from './NavLinkItems'

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

    // if the current root path matches the group root (i.e. karakia group and root is /karakia/)
    // then update the state and make this group active
    if (path !== '/') {
      // the root path will be at index 1 once path is converted to array
      const pathRoot = path.split('/')[1]

      if (root === pathRoot) {
        this.setState({ isActiveGroup: true })
      } else {
        this.setState({ isActiveGroup: false })
      }
    }
  }

  render({ title, links } = this.props) {
    return (
      <NavGroupItem>
        <NavGroupHeader
          isActiveGroup={this.state.isActiveGroup}
          title={title}
          clickHandler={this.handleHeaderClick}
        />
        <NavLinkItems links={links} isActiveGroup={this.state.isActiveGroup} />
      </NavGroupItem>
    )
  }
}

export default NavGroup
