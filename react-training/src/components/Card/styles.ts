// lib
import styled from 'styled-components'

export const StyledTagLinkSection = styled.a`
  color: ${(props) => (props.color === '#212529' ? '#fff' : '#000')};
  text-decoration: none;
  &:hover {
    color: #2eb8a6;
  }
`

export const StyledImg = styled.img`
  min-height: 300px;
`

export const StyledCardBackground = styled.div`
  background-color: ${(props) => props.color};
  & a {
    color: ${(props) => (props.color === '#212529' ? '#fff' : '#000')};
    text-decoration: none;
    &:hover {
      color: #2eb8a6;
    }
  }
`
