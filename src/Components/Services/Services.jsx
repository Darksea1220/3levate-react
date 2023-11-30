import React from 'react'
import './services.css'
import arrow from '../../img/3whitearrow.png'
import redStar from '../../img/4redstar.png'

export function Services () {
  return (
    <div className='w-full flex flex-col bg-[#1C1C1C]'>
      <h1 className='w-full text-9xl font-extrabold px-36 text-gray-50'>Services</h1>
      <div className='w-full flex'>
        <div className='h-[400px] w-full flex justify-center items-center'>
          <span className='bg-yellow-500 rounded-full w-72 h-72' />
        </div>
        <div className='w-full flex flex-col '>
          <div className='flex items-end h-80'>
            <p className='w-4/5 text-end text-gray-50 pb-20 text-3xl'>Unlock the power of creative<br /> collaboration <b className='text-yellow-500'>with us</b></p>
            <p className='pb-10 px-10 text-gray-50 font-extrabold text-5xl'>x</p>
          </div>
          <span className='bg-blue-700 w-full h-20 -mr-28' />
        </div>
      </div>
      <div className='flex pt-20 px-36'>
        <div className='w-2/3 flex flex-col gap-4'>
          <p className='text-gray-400 text-xl'>_________ Brand Design Systems</p>
          <p className='text-gray-50 text-7xl hover:scale-110 ease-in'>
            Design Sistem Development<br />
          </p>
          <p className='text-gray-50 text-7xl hover:scale-110 ease-in'>
            User Interface (UI) Design<br />
          </p>
          <p className='text-gray-50 text-7xl hover:scale-110 ease-in'>
            Digital Product Development<br />
          </p>
        </div>
        <div className='w-1/3 h-[600px] pt-72 pl-44'>
          <img src={arrow} className='rotate-90' />
        </div>
      </div>
      <div className='flex pt-20 px-36'>
        <div className='w-1/3 h-[600px] '>
          <img src={redStar} className='' />
        </div>
        <div className='w-2/3 flex flex-col gap-4 text-end'>
          <p className='text-gray-400 text-xl'>Product development and enhancement _________</p>
          <p className='text-gray-50 text-7xl hover:scale-110 ease-in'>
            Prototyping and Testing<br />
          </p>
          <p className='text-gray-50 text-7xl hover:scale-110 ease-in'>
            UserExperience (UX) Design<br />
          </p>
          <p className='text-gray-50 text-7xl hover:scale-110 ease-in'>
            User-Centered Research<br />
          </p>
          <p className='text-gray-50 text-7xl hover:scale-110 ease-in'>
            Design Thinking and Ideation<br />
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-4 py-20 px-36'>
        <p className='text-gray-400 text-xl'>_________ Brand Communication and management</p>
        <p className='text-gray-50 text-7xl hover:scale-110 ease-in'>
          Content Strategy and Copywriting<br />
        </p>
        <p className='text-gray-50 text-7xl hover:scale-110 ease-in'>
          Project Management and Collaboratio<br />
        </p>
        <p className='text-gray-50 text-7xl hover:scale-110 ease-in'>
          Quality Assurance (QA) and Testing<br />
        </p>
      </div>
      <div className='flex flex-col gap-4 px-36 w-full items-center'>
        <p className='text-gray-400 text-xl py-36'>Have a cool project idea?</p>
        <div className='h-[400px] flex items-end py-48 pr-80'>
          <span className='bg-pink-500 rounded-full w-72 h-72 block relative bottom-0 right-[-800px]' />
          <p className='w-[700px] text-6xl text-gray-50 text-center z-10'>Let's Craft <b>Your Vision Together!</b></p>
        </div>
      </div>
    </div>
  )
}
