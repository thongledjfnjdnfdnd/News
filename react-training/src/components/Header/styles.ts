// lib
import styled from 'styled-components'

export const StyledSearchInput = styled.input`
  &:focus {
    box-shadow: 0px 0px 0px;
    border-color: #d7d7d7;
    outline: 0px;
  }
`
export const StyledSearchIcon = styled.div`
  position: absolute;
  top: 5px;
  right: 20px;
  & button {
    border: none;
  }
`

export const StyledBreadcrumbLink = styled.a`
  text-decoration: none;
  color: #6c757d;
`
