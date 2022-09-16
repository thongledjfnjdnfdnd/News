// lib
import { memo } from 'react'

// styles
import { StyledArticle } from './styles'

export type ArticleProps = {
  rank: number
  titleName: string
}

const Article = ({ rank, titleName }: ArticleProps) => {
  return (
    <StyledArticle className='row mt-4'>
      <div className='col-md-1'>{rank}</div>
      <a href='#' className='col-md-11'>{titleName}</a>
    </StyledArticle>
  )
}

export default memo(Article)
