import React from 'react'
import './Footer.css'

export function Footer () {
  return (
    <footer>
      <div className='footer-section'>
        <h2>Let's talk</h2>
        <div className='subtitle'>3levatecollective@gmail.com</div>
      </div>
      <div className='footer-section'>
        <h2>Follow Us</h2>
        <div className='subtitle'>
          <p>Behance</p>
          <p>Linkedin</p>
          <p>Instagram</p>
        </div>
      </div>
      <div className='footer-section'>
        <h2>© All rights reserved</h2>
        <div className='subtitle'>the colective you have been looking for</div>
      </div>
    </footer>
  )
}
