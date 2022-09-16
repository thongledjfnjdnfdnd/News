// lib
import { memo, SetStateAction, useRef, useState } from 'react'

// assets
import banner from '@assets/images/banner.jpg'
import logo from '@assets/images/logo.png'

// components
import Dropdown from '@components/Dropdown'
import HeaderLine from './HeaderLine'

// mocks
import {
  mockDataBusinessMenu,
  mockDataEntertainmentMenu,
  mockDataFeaturesMenu,
  mockDataHomeMenu,
  mockDataLifeStyleMenu,
  mockDataNewsMenu,
  mockDataTravelMenu,
  mockDataVideoMenu,
} from '@mocks/mockDataMenu'

// styles
import { StyledSearchIcon, StyledSearchInput } from './styles'

// types
import { Link } from 'react-router-dom'
import { Path } from '@constant/Enum'

export type HeaderProps = {
  isHeaderLineDashboard: boolean
}

const Header = ({ isHeaderLineDashboard }: HeaderProps) => {
  const [queryParam, setQueryParam] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const handleChangeSearchInput = (e: { target: { value: SetStateAction<string> } }) => {
    setQueryParam(e.target.value)
  }

  return (
    <header className='container mt-3'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 d-flex align-items-center'>
            <a href='/'>
              <img src={logo} alt='logo' />
            </a>
          </div>
          <div className='col-md-9 d-flex justify-content-end'>
            <a>
              <img src={banner} alt='banner' />
            </a>
          </div>
        </div>
      </div>
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <Dropdown dropdown='Home' listDropdown={mockDataHomeMenu} />
              <Dropdown dropdown='News' listDropdown={mockDataNewsMenu} />
              <Dropdown dropdown='Entertainment' listDropdown={mockDataEntertainmentMenu} />
              <Dropdown dropdown='Business' listDropdown={mockDataBusinessMenu} />
              <Dropdown dropdown='Travel' listDropdown={mockDataTravelMenu} />
              <Dropdown dropdown='Life Style' listDropdown={mockDataLifeStyleMenu} />
              <Dropdown dropdown='Video' listDropdown={mockDataVideoMenu} />
              <Dropdown dropdown='Feature' listDropdown={mockDataFeaturesMenu} />
            </ul>
          </div>
        </div>
      </nav>
      <div className='row d-flex justify-content-between'>
        <div className='col-md-6 ms-4'>
          <HeaderLine isHeaderLineDashboard={isHeaderLineDashboard} />
        </div>
        <div className='col-md-3'>
          <div className='input-group mb-3'>
            <div>
              <StyledSearchInput
                ref={inputRef}
                onChange={handleChangeSearchInput}
                type='text'
                className='form-control input-text'
                placeholder='Search'
                aria-label="Recipient's username"
                aria-describedby='basic-addon2'
              />
            </div>
            <StyledSearchIcon className='input-group-append'>
              <button>
                <Link to={queryParam !== '' ? `${Path.SEARCH}-${queryParam}` : ''}>
                  <i className='fa fa-search'></i>
                </Link>
              </button>
            </StyledSearchIcon>
          </div>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
