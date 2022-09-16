import styled from 'styled-components'

export const StyledArticle = styled.div`
  & div {
    display: flex;
    color: #fff;
    background-color: ${(props) => props.color};
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 5px;

    & i {
      color: white;
    }
  }

  & a {
    text-decoration: none;
    color: #000;
    justify-content: end;
  }

  & a:hover {
    color: #2eb8a6;
  }
`
