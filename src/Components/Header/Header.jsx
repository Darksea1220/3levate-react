import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export function Header () {
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
      <p className='brand'>
        <Link to='/home'>{brandText}</Link>
      </p>
    </header>
  )
}
