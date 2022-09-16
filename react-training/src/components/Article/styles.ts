import styled from 'styled-components'

export const StyledArticle = styled.div`
  & div {
    display: flex;
    color: #fff;
    background-color: #999;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 5px;
  }
  & a {
    color: #000;
    text-decoration: none;
  }
  & a:hover {
    color: #2eb8a6;
  }
`
