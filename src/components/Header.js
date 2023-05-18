import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
      <nav>
          <h3 className='text-blue-600'>LOGO</h3>
          <span className='text-xl'>
              <FontAwesomeIcon
                  icon={faBars}
              />
          </span>
    </nav>
  )
}

export default Header