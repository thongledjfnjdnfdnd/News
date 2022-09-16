import styled from 'styled-components'

export const StyledVerticalLine = styled.div`
  border-left: ${(props) => `6px solid ${props.color}`};
  height: 50px;
  margin-bottom: 50px;
`
export const StyledCategory = styled.li`
  color: ${(props) => props.color};
  padding-right: 20px;
`

export const StyledTagLink = styled.a`
  &:hover {
    color: #2eb8a6;
  }
`
