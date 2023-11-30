import {TextField } from "@mui/material";
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
    <body>
    <div className='contact w-full h-full flex flex-col bg-[#1C1C1C] '>
      <h1 className='w-full text-9xl font-extrabold px-36 text-gray-50 mb-8'>Contact Us</h1>
      <form onSubmit={handleSubmit} className='flex flex-col m-2 gap-4 pt-200 px-40 items-center mx-auto'>
        <label className='text-gray-50 text-xl'>Name</label>
        <div class="mt-2">
        <input type='text' name='name' required className='input-field block w-80 rounded-md border border-white border-opacity-10 bg-white bg-opacity-10'  />
        </div>

        <label className='text-gray-50 text-xl'>Email</label>
        <input type='email' name='email' required className='input-field block w-80 rounded-md border border-white border-opacity-10 bg-white bg-opacity-10' />

        <label className='text-gray-50 text-xl'>Message</label>
        <textarea name='message' required className='textarea-field block w-80 rounded-md border border-white border-opacity-10 bg-white bg-opacity-10' />

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
    </body>
  )
}
