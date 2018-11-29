import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import { Flex, Label, Image } from 'rebass'
import styled from 'styled-components'

import SVGIcon from '../SVGIcon'
// import Whare from '../../images/whare-icon.svg'
import Whare from '../Icons/Whare'

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
    fill: ${props => props.theme.colors['main']};
  }
`

const HeaderLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors['text']};

  h5 {
    padding: 0 0 0 0.25rem;
    margin: 0;
  }

  img {
    height: 1.8rem;

    svg path {
      fill {
        color: red;
      }
    }
  }

  :hover {
    color: ${props => props.theme.colors['bannerTxt']};
    text-decoration: none;
  }
`

const WhareIcon = styled(Whare)`
  fill: ${props => props.theme.colors['text']};

  :hover {
    fill: ${props => props.theme.colors['fourth']};
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
          <HeaderLink to="/">
            {/* <WhareIcon width="3rem" /> */}
            {/* <Heading as="h5" className="headlink__heading" p={0} m={0}>
              He Pukapuka Awhina mō ngā Whānau
            </Heading> */}
          </HeaderLink>
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
