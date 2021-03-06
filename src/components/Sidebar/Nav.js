import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import NavGroup from './NavGroup'
import HomeLink from './HomeLink'

const NavGroupWrapper = styled.ul`
  margin: 0;
  padding: 0 0 0 1.5rem;
`

class Nav extends React.Component {
  render({ location } = this.props) {
    return (
      <StaticQuery
        query={graphql`
          query NavQuery {
            allSitePage(filter: { fields: { title: { ne: null } } }) {
              edges {
                node {
                  id
                  path
                  fields {
                    title
                    group
                    root
                  }
                }
              }
            }
          }
        `}
        render={data => {
          // this object will become our site pages put into groups
          let sitePages = {}

          // iterate over the data and prepare the site pages object
          // that will be used later to build the navigation
          data.allSitePage.edges.forEach(edge => {
            const group = edge.node.fields.group
            const title = edge.node.fields.title
            const root = edge.node.fields.root
            const path = edge.node.path

            if (!sitePages.hasOwnProperty(group)) {
              sitePages[group] = { links: [], root: root }
            }

            sitePages[group].links.push({ title, path })
          })

          return (
            <NavGroupWrapper>
              <HomeLink />
              {Object.entries(sitePages).map(([key, value]) => {
                return (
                  <NavGroup
                    key={key}
                    group={key}
                    title={key}
                    links={value.links}
                    location={location}
                    root={value.root}
                  />
                )
              })}
            </NavGroupWrapper>
          )
        }}
      />
    )
  }
}

export default Nav
