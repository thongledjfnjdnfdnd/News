// lib
import styled from 'styled-components'

export const StyledTextCategory = styled.div`
  & h4 {
    color: ${(props) => props.color};
  }
  & p {
    color: ${(props) => props.color};
    &:hover {
      color: #2eb8a6;
    }
  }
  & hr {
    color: ${(props) => props.color};
  }
`
