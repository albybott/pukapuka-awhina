import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Home from '../Icons/Home'

const HomeLinkWrapper = styled.li`
  list-style: none;
`

const HomeLink = styled(Link)`
  text-decoration: none;
  font-size: 0.8em;

  display: flex;
  align-items: center;

  padding: 0.5rem 0;
  border-bottom: 1px solid ${props => props.theme.colors['second']};
  color: ${props => props.theme.colors['text']};

  .home-link__icon {
    fill: ${props => props.theme.colors['fourth']};
  }

  span {
    display: block;
    margin-left: 0.25rem;
  }

  &:hover {
    color: ${props => props.theme.colors['bannerTxt']};
    text-decoration: none;

    .home-link__icon {
      fill: ${props => props.theme.colors['bannerTxt']};
    }
  }

  &.current {
    font-weight: bold;

    .home-link__icon {
      fill: ${props => props.theme.colors['text']};
    }

    &:hover {
      color: ${props => props.theme.colors['text']};

      .home-link__icon {
        fill: ${props => props.theme.colors['text']};
      }
    }
  }
`

export default props => (
  <HomeLinkWrapper>
    <HomeLink activeClassName="current" to="/">
      <Home className="home-link__icon" width="1rem" />
      <span>HOME</span>
    </HomeLink>
  </HomeLinkWrapper>
)
