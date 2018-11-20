import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Box, Image } from 'rebass'
import styled from 'styled-components'

import Logo from '../../images/gatsby-icon.svg'

const Header = styled(Box)`
  padding: 0 0 0 0.5rem;
  position: fixed;
  left: 0px;
  width: 100%;

  top: 3.25rem;
  height: 4.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

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
        <Header>
          <Image src={Logo} />
        </Header>
      </>
    )}
  />
)

export default MainHeader
