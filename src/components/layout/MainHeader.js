import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import { Box, Image } from 'rebass'
import styled from 'styled-components'

import Logo from '../../images/gatsby-icon.svg'

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

const MainMenuItems = styled.ul`
  ${props => props.theme.media.phone`display: none;`};
  font-family: ${props => props.theme.fonts.header};
  display: flex;
  margin: 0;
  padding: 0 0 0 2rem;
  list-style: none;
  font-size: 0.8em;

  *:last-child {
    margin: 0;
  }
`
const MainMenuItem = styled.li`
  margin: 0 1rem 0 0;
  padding: 0;
`
const MainMenuLink = styled(Link)`
  margin: 0;
  padding: 0;
  text-decoration: none;
  display: block;
  line-height: ${props => props.theme.headerHeight};
  letter-spacing: 0.03em;
  text-transform: uppercase;

  ${props =>
    props.active &&
    'border-bottom: 0.125rem solid ' + props.theme.colors['purple']};

  color: ${props => props.active && props.theme.colors['purple']};

  :hover {
    color: ${props => props.active && props.theme.colors['purple']};
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
          <MainMenuItems>
            <MainMenuItem>
              <MainMenuLink active to="/">
                DOCS
              </MainMenuLink>
            </MainMenuItem>
            <MainMenuItem>
              <MainMenuLink to="/">TUTORIAL</MainMenuLink>
            </MainMenuItem>
            <MainMenuItem>
              <MainMenuLink to="/">PLUGINS</MainMenuLink>
            </MainMenuItem>
            <MainMenuItem>
              <MainMenuLink to="/page-2">Page 2</MainMenuLink>
            </MainMenuItem>
          </MainMenuItems>
        </Header>
      </>
    )}
  />
)

export default MainHeader
