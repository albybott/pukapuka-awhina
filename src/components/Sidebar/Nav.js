import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import NavGroup from './NavGroup'

const NavGroupWrapper = styled.ul`
  margin: 0;
  padding: 0 0 0 1.5rem;
`

const pages = {
  Karakia: [
    { title: 'Opening Prayer', path: '/karakia/opening-prayer' },
    { title: 'Closing Prayer', path: '/karakia/closing-prayer' },
    { title: 'Prayer For Kai', path: '/karakia/prayer-for-kai' },
    { title: 'Prayer For Tamaiti', path: '/karakia/prayer-for-tamariki' },
    {
      title: 'Prayer For Blessing a House',
      path: '/karakia/prayer-for-blessing-a-house',
    },
  ],
  Waiata: [{ title: 'Waiata Himene', path: '/waiata/waiata-himene' }],
  Whaikorero: [{ title: 'Tangata Whenua', path: '/whaikorero/tangata-whenua' }],
}

const Nav = props => (
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
              }
            }
          }
        }
      }
    `}
    render={data => {
      // this will become our site pages put into groups
      let sitePages = {}

      // iterate over the data and prepare the site pages object
      data.allSitePage.edges.forEach(edge => {
        const group = edge.node.fields.group
        const title = edge.node.fields.title
        const path = edge.node.path

        if (!sitePages.hasOwnProperty(group)) {
          sitePages[group] = []
        }

        sitePages[group].push({ title, path })
      })

      return (
        <NavGroupWrapper>
          {Object.entries(sitePages).map(([key, value]) => {
            return <NavGroup key={key} title={key} links={value} />
          })}
        </NavGroupWrapper>
      )
    }}
  />
)

export default Nav
