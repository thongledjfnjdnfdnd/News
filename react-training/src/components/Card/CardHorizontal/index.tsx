// lib
import { memo } from 'react'
import { Outlet } from 'react-router-dom'

// styles
import { StyledCardBackground, StyledTagLinkSection } from '../styles'

// constants
import { Path } from '@constant/Enum'

// helper
import { splitTitle } from '@helper/splitTitle'

export type CardHorizontalProps = {
  img: string
  alt: string
  cardTitle: string
  tab: string
  createDate: string
  idNews: number
  urlTab?: string
  backgroundColor: string
}

const CardHorizontal = ({
  img,
  alt,
  cardTitle,
  tab,
  createDate,
  idNews,
  urlTab,
  backgroundColor,
}: CardHorizontalProps) => {
  return (
    <div className='card mb-3 border-0'>
      <StyledCardBackground className='row g-0' color={backgroundColor}>
        <div className='col-md-4'>
          <img src={img} className='img-fluid rounded-start' alt={alt} />
        </div>
        <div className='col-md-8'>
          <div className='card-body pt-0 ps-3'>
            <h5 className='card-title fs-6'>
              <StyledTagLinkSection href={`${Path.DETAILS}-${idNews}`}>
                {splitTitle(cardTitle)}
              </StyledTagLinkSection>
            </h5>
            <p className='card-text fw-lighter'>
              <span>
                <StyledTagLinkSection href={urlTab}>{tab + ' '}</StyledTagLinkSection>
              </span>
              -{' ' + createDate.substring(0, 10)}
            </p>
          </div>
        </div>
      </StyledCardBackground>
    </div>
  )
}

export default memo(CardHorizontal)
