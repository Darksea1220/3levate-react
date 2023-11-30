import React, { useState } from 'react'
import './Contact.css'
import redStar from '../../img/4redstar.png'

export function Contact () {
  const [isFormSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className='contact w-full flex flex-col bg-[#1C1C1C] relative'>
      <h1 className='w-full text-9xl font-extrabold px-36 text-gray-50'>Contact Us</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 pt-20 px-36'>
        <label className='text-gray-50 text-xl'>Name</label>
        <input type='text' name='name' required className='input-field' />

        <label className='text-gray-50 text-xl'>Email</label>
        <input type='email' name='email' required className='input-field' />

        <label className='text-gray-50 text-xl'>Message</label>
        <textarea name='message' required className='textarea-field' />

        <button type='submit' className='submit-button'>
          Send
        </button>
      </form>

      {isFormSubmitted && (
        <div className='notification py-4 px-36'>
          <p className='text-gray-50'>
            Form submitted successfully! We'll get back to you soon.
          </p>
        </div>
      )}

      <img src={redStar} alt='Red Star' className='red-star' />
    </div>
  )
}
