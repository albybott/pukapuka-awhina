import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Flex } from 'rebass'
import styled from 'styled-components'

import TransToggleButton from './TransToggleButton'
import Search from './Search'

const HeaderWrapper = styled(Flex)`
  top: ${props => props.theme.bannerHeight};
  position: fixed;
  left: 0px;
  z-index: 10;
  padding: 0 0.5rem;
  width: 100%;

  height: ${props => props.theme.headerHeight};
  border-bottom: 1px solid ${props => props.theme.colors['second']};
  background-color: white;

  align-items: center;
  justify-content: space-between;
`

const HeaderButtonWrapper = styled(Flex)`
  align-items: center;
  justify-content: space-evenly;
`

const Header = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      // only add the translation toggle button if there is english
      let transToggleButton
      if (props.hasENG) {
        transToggleButton = (
          <TransToggleButton
            showENG={props.showENG}
            toggleTrans={props.toggleShowENG}
          />
        )
      }

      return (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <HeaderWrapper as="header">
            <HeaderButtonWrapper>{transToggleButton}</HeaderButtonWrapper>

            <Search />
          </HeaderWrapper>
        </>
      )
    }}
  />
)

export default Header
