import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export function Header () {
//   const location = userLocation()
  //   const pageTitle = location.pathname.substring(1)
  const brandText = 'Elevate your vision'

  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/contact'>Contact us</Link></li>
        </ul>
      </nav>
      <p className='brand'>{brandText}</p>
    </header>
  )
}
