import React from 'react'
import { Header, Footer, Home } from './Components/index'
// import { AppRouter } from './AppRouter'

function App () {
  return (

    <>
      <div className='flex items-center justify-center flex-col text-center pt-20 pb-6' />
      <h1 className='text-4xl md:text-7x1 mb-1 md:mb-3'>
        Prueba TW
      </h1>
      <div />
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
