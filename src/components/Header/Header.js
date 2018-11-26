import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import { Box, Image, Label } from 'rebass'
import styled from 'styled-components'

import Logo from '../../images/gatsby-icon.svg'
import SVGIcon from '../SVGIcon'

const HeaderWrapper = styled(Box)`
  top: ${props => props.theme.bannerHeight};
  position: fixed;
  left: 0px;
  z-index: 10;
  padding: 0 0.5rem;
  width: 100%;

  height: ${props => props.theme.headerHeight};
  border-bottom: 1px solid ${props => props.theme.colors['lightpurple']};
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogoImage = styled(Image)`
  height: 1.55rem;
`

const SearchForm = styled.form`
  margin: 0;
  padding: 0;
`
const SearchInput = styled.input`
  background-color: #f5f3f7;

  border: 0;
  outline: 0;
  border-radius: 2px;
  color: #8c65b3;
  padding: 0 0.125rem;
  overflow: hidden;
  width: 5rem;
  height: 100%;
  font-size: 0.9rem;

  -webkit-transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus {
    color: #663399;
    background-color: #f5f3f7;
    width: 10rem;
  }
`

const SearchLabel = styled(Label)`
  height: 1.5rem;
`

const SearchIcon = styled(SVGIcon)`
  background-color: #f5f3f7;

  path {
    fill: #8c65b3;
  }
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
        <HeaderWrapper as="header">
          <Link to="/">
            <LogoImage src={Logo} />
          </Link>

          <SearchForm>
            <SearchLabel>
              <SearchIcon name="search" width={20} />
              <SearchInput id="search" placeholder="Search" type="text" />
            </SearchLabel>
          </SearchForm>
        </HeaderWrapper>
      </>
    )}
  />
)

export default Header
