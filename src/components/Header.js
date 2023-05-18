import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  let menu = ""
  let menuSide = ""

  if (showMenu) {
    menu =
      <div className='bg-gray-600 h-[100%] w-[80%] fixed top-0 left-0 z-50'>

      </div>
    
    menuSide = <div onClick={() => setShowMenu(false)} className='bg-black fixed left-0 top-0 h-full z-50'></div>
  }


  return (
      <nav>
          <span className='text-xl'>
              <FontAwesomeIcon
                icon={faBars}
                onClick={() => setShowMenu(!showMenu)}
              />
      </span>
      {menu}
      {menuSide}
    </nav>
  )
}

export default Header