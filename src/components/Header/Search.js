import React from 'react'
import styled from 'styled-components'
import { Label } from 'rebass'

import SearchSVG from '../Icons/Search'

const SearchForm = styled.form`
  margin: 0;
  padding: 0;
  justify-self: stretch;
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
  font-size: 1rem;

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
  height: 2.2rem;
`

const SearchIcon = styled(SearchSVG)`
  background-color: ${props => props.theme.colors['third']};

  path {
    fill: ${props => props.theme.colors['second']};
  }
`

const Search = props => (
  <SearchForm>
    <SearchLabel>
      <SearchIcon name="search" width="1.4rem" />
      <SearchInput id="search" placeholder="Search" type="text" />
    </SearchLabel>
  </SearchForm>
)

export default Search
