import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import { Box, Label } from 'rebass'
import styled from 'styled-components'

import SVGIcon from '../SVGIcon'

const HeaderWrapper = styled(Box)`
  top: ${props => props.theme.bannerHeight};
  position: fixed;
  left: 0px;
  z-index: 10;
  padding: 0 0.5rem;
  width: 100%;

  height: ${props => props.theme.headerHeight};
  border-bottom: 1px solid ${props => props.theme.colors['second']};
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const SearchForm = styled.form`
  margin: 0;
  padding: 0;
`
const SearchInput = styled.input`
  background-color: ${props => props.theme.colors['third']};

  border: 0;
  outline: 0;
  border-radius: 2px;
  color: ${props => props.theme.colors['second']};
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
    color: ${props => props.theme.colors['text']};
    width: 10rem;
  }
`

const SearchLabel = styled(Label)`
  height: 1.5rem;
`

const SearchIcon = styled(SVGIcon)`
  background-color: ${props => props.theme.colors['third']};

  path {
    fill: ${props => props.theme.colors['text']};
  }
`

const HeaderMSG = styled.h5`
  padding: 0;
  margin: 0;
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
          <HeaderMSG>He Pukapuka Awhina mō ngā Whānau</HeaderMSG>
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
