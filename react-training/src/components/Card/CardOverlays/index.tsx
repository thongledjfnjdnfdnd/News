// lib
import { memo } from 'react'

// component
import Tooltip from '@components/Tooltip'

// style
import { StyledTagLinkSection } from '../styles'

// helper
import { splitTitle } from '@helper/splitTitle'

export type CardOverlaysProps = {
  img: string
  cardTitle: string
  cardContent?: string
  tooltip: string
  fontSize: string
}

const CardOverlays = ({ img, cardTitle, cardContent, tooltip, fontSize }: CardOverlaysProps) => {
  return (
    <div className='card text-bg-dark h-100'>
      <img src={img} className='card-img h-100' alt='...' />
      <div className='card-img-overlay d-flex align-items-end'>
        <div>
          <Tooltip nameTag={tooltip} />
          <h5 className={`card-title ${fontSize} card-overlays`}>
            <StyledTagLinkSection color='#212529' href=''>{splitTitle(cardTitle)}</StyledTagLinkSection>
          </h5>
          <p className='card-text fs-6 fw-light'>{cardContent}</p>
        </div>
      </div>
    </div>
  )
}

export default memo(CardOverlays)
