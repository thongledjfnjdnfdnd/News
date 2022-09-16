// lib
import { memo } from 'react'

// styles
import { StyledBreadcrumbLink } from '../styles'

export type HeaderLineProps = {
  isHeaderLineDashboard: boolean
}

const HeaderLine = ({ isHeaderLineDashboard }: HeaderLineProps) => {
  return isHeaderLineDashboard ? (
    <div id='carouselExampleIndicators' className='carousel slide' data-ride='carousel'>
      <ol className='carousel-indicators'>
        <li data-target='#carouselExampleIndicators' data-slide-to='0' className='active'></li>
        <li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
        <li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
      </ol>
      <div className='carousel-inner d-flex'>
        <div className='px-2'>TRENDING NOW:</div>
        <div className='carousel-item active'>
          <p className='text-muted'>Designer fashion show kicks off Variety Week</p>
        </div>
        <div className='carousel-item'>
          <p className='text-muted'>Microsoft quisque at ipsum vel orci eleifend ultrices</p>
        </div>
        <div className='carousel-item'>
          <p className='text-muted'>Interest rate angst trips up US equity bull market</p>
        </div>
      </div>
    </div>
  ) : (
    <nav aria-label='breadcrumb'>
      <ol className='breadcrumb'>
        <li className='breadcrumb-item'>
          <StyledBreadcrumbLink href='#'>Home</StyledBreadcrumbLink>
        </li>
        <li className='breadcrumb-item'>
          <StyledBreadcrumbLink href='#'>Blog</StyledBreadcrumbLink>
        </li>
        <li className='breadcrumb-item active' aria-current='page'>
          Name Title
        </li>
      </ol>
    </nav>
  )
}

export default memo(HeaderLine)
