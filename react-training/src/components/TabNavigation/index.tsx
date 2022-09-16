// lib
import { memo } from 'react'

// styles
import { StyledCategory, StyledTagLink, StyledVerticalLine } from './styles'

export type TabNavigationProps = {
  color: string
  nameCategory: string
  data?: string[]
}

const TabNavigation = ({ color, nameCategory, data }: TabNavigationProps) => {
  return (
    <StyledVerticalLine color={color}>
      <nav className='navbar navbar-expand-lg navbar-light bg-light nav-tab'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-mdb-toggle='collapse'
            data-mdb-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <i className='fas fa-bars'></i>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav d-flex align-items-center'>
              <StyledCategory className='nav-item fs-5' color={color}>
                {nameCategory}
              </StyledCategory>
              {data?.map((item) =>
                item === 'View all' ? (
                  <li className='nav-item' key={item}>
                    <StyledTagLink className='nav-link fs-6 fw-light d-flex' href='#'>
                      {item}{' '}
                      <i className='fs-12 m-l-5 fa fa-caret-right ps-2 d-flex align-items-center'></i>
                    </StyledTagLink>
                  </li>
                ) : (
                  <li className='nav-item' key={item}>
                    <StyledTagLink className='nav-link fs-6 fw-normal' href='#'>
                      {item}
                    </StyledTagLink>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </nav>
    </StyledVerticalLine>
  )
}

export default memo(TabNavigation)
