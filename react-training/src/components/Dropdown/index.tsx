// lib
import { memo } from 'react'

// constants
import { Path } from '@constant/Enum'

export interface DropdownMenu {
  dropdownItem: string
  dropdownLink: string
}

export type DropdownProps = {
  dropdown: string
  listDropdown: DropdownMenu[]
}

const Dropdown = ({ dropdown, listDropdown }: DropdownProps) => {
  return (
    <li className='nav-item dropdown'>
      <a
        className='nav-link dropdown-toggle fw-normal fs-6 text-dark p-3'
        href='#'
        role='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        {dropdown}
      </a>
      <ul className='dropdown-menu'>
        {listDropdown.map((item) => (
          <li key={item.dropdownItem}>
            <a className='dropdown-item' href={`${Path.SEARCH}-${item.dropdownItem}`}>
              {item.dropdownItem}
            </a>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default memo(Dropdown)
