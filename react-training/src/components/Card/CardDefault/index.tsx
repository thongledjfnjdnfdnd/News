// lib
import { memo } from 'react'

// constants
import { Path } from '@constant/Enum'

// styles
import { StyledImg, StyledTagLinkSection } from '../styles'

// helper
import { splitTitle } from '@helper/splitTitle'

export type CardDefaultProps = {
  idNews: number
  img: string
  cardTitle: string
  tab: string
  createDate: string
  alt: string
  urlPost: string
  urlTab?: string
}

const CardDefault = ({
  idNews,
  img,
  cardTitle,
  tab,
  createDate,
  alt,
  urlTab,
}: CardDefaultProps) => {
  return (
    <div className='card border-0'>
      <StyledImg src={img} className='card-img-top' alt={alt} />
      <div className='card-body pt-3 ps-0'>
        <h5 className='card-title card-default'>
          <StyledTagLinkSection href={`${Path.DETAILS}-${idNews}`}>
            {splitTitle(cardTitle)}
          </StyledTagLinkSection>
        </h5>
        <p className='card-text'>
          <span>
            <StyledTagLinkSection href={urlTab}>{tab + ' '}</StyledTagLinkSection>
          </span>
          -{' ' + createDate.substring(0, 10)}
        </p>
      </div>
    </div>
  )
}

export default memo(CardDefault)
