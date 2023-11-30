import React, { useState } from 'react'
import './Contact.css'

export function Contact () {
  const [isFormSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    setFormSubmitted(true)
  }

  return (
    <div className='contact'>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' name='name' required />

        <label>Email</label>
        <input type='email' name='email' required />

        <label>Message</label>
        <textarea name='message' required />

        <button type='submit'>Send</button>
      </form>

      {isFormSubmitted && (
        <div className='notification'>
          <p>Form submitted successfully! We'll get back to you soon.</p>
        </div>
      )}
    </div>
  )
}
