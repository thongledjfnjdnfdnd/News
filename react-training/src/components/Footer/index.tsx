// lib
import { memo } from 'react'

// assets
import logoFooter from '@assets/images/logo-footer.png'

// styles
import { StyledFooter } from './styles'

// component
import PostPopular from '@components/PostPopular'
import CategoryAndArchive from '@components/CategoryAndArchive'

// types
import { INews } from '@types/news'

// mock
import { mockDataCategory } from '@mocks/mockDataCategory'

export type FooterProps = {
  categoryData: INews
}

const Footer = ({ categoryData }: FooterProps) => {
  return (
    <div className='container-fluid mt-5 bg-dark'>
      <div className='container pt-5'>
        <div className='row'>
          <StyledFooter className='col-md-4'>
            <div className='logo-footer'>
              <img src={logoFooter} alt='logo' />
            </div>
            <div className='about pt-4'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor magna eget
                elit efficitur, at accumsan sem placerat. Nulla tellus libero, mattis nec molestie
                at, facilisis ut turpis. Vestibulum dolor metus, tincidunt eget odio
              </p>
            </div>
            <div className='contact pt-2'>
              <p>Any questions? Call us on (+1) 96 716 6879</p>
            </div>
            <div className='social pt-3'>
              <span>Share:</span>
            </div>
          </StyledFooter>
          <div className='col-md-4'>
            <div>
              <h4 className='mb-4 text-white'>Post Popular</h4>
              <PostPopular backgroundColor='#212529' categoryData={categoryData} />
            </div>
          </div>
          <div className='col-md-4'>
            <h4 className='mb-4 text-white'>Category</h4>
            <CategoryAndArchive dataCategoryAndArchive={mockDataCategory} textColor='#fff' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Footer)
