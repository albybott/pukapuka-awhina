import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Box, Image } from 'rebass'
import styled from 'styled-components'

import Logo from '../../images/gatsby-icon.svg'
import MainMenu from './MainMenu'

const Header = styled(Box)`
  padding: 0 0 0 0.5rem;
  position: fixed;
  left: 0px;
  width: 100%;

  top: ${props => props.theme.bannerHeight};
  height: ${props => props.theme.headerHeight};
  border-bottom: 1px solid ${props => props.theme.colors['lightpurple']};

  display: flex;
  align-items: center;

  img {
    height: 1.55rem;
  }
`

const MainHeader = props => (
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
    render={data => (
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
        <Header as="header">
          <Image src={Logo} />
          <MainMenu />
        </Header>
      </>
    )}
  />
)

export default MainHeader
