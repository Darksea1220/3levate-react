import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export function Footer () {
  const behanceLinks = [
    'https://www.behance.net/rossyhurtado1',
    'https://www.behance.net/douglasosorio',
    'https://www.behance.net/mariajosebarney',
    'https://www.behance.net/juanjobuesaqu1/projects'
  ]

  return (
    <footer>
      <div className='footer-section'>
        <h2>
          <Link to='/contact'>Let's talk</Link>
        </h2>
        <div className='subtitle'>3levatecollective@gmail.com</div>
      </div>
      <div className='footer-section'>
        <h2>Follow Us on Behance</h2>
        <div className='subtitle'>
          <p><a href={behanceLinks[0]} target='_blank' rel='noopener noreferrer'>Ross</a></p>
          <p><a href={behanceLinks[1]} target='_blank' rel='noopener noreferrer'>Doug</a></p>
          <p><a href={behanceLinks[2]} target='_blank' rel='noopener noreferrer'>Jota</a></p>
          <p><a href={behanceLinks[3]} target='_blank' rel='noopener noreferrer'>Juan</a></p>
        </div>
      </div>
      <div className='footer-section'>
        <h2>© All rights reserved</h2>
        <div className='subtitle'>the collective you have been looking for</div>
      </div>
    </footer>
  )
}
