import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { queryUser } from '../Services/db'
import { AppRouter } from '../../AppRouter'
import './Login.css'
import elevatelogo from '../../img/elevatelogo.png'

export function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogged, setIsLogged] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const userExists = await queryUser({ email, password })

      if (userExists) {
        setIsLogged(true)
        return (
          <Navigate to='/projects' />
        )
      } else {
        console.log('El E-mail o la contraseña no coinciden')
        console.log(email)
        console.log(password)
      }
    } catch (error) {
      console.error('Error al autenticar:', error)
    }
  }
  return (
    <div className='login-container'>
      <div className='flex items-center justify-center mb-8'>
        <img src={elevatelogo} alt='Logo' className='w-627 h-234 mr-2' />
      </div>
      <h1 className='text-2xl font-extrabold text-center text-white mb-8'>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type='email'
          id='username'
          placeholder='Enter your E-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='input-field block w-80 rounded-md border border-white border-opacity-10 bg-white bg-opacity-10'
        />
        <input
          type='password'
          id='password'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='input-field block w-80 rounded-md border border-white border-opacity-10 bg-white bg-opacity-10'
        />
        <button type='submit'>Enter</button>
        <p className='forgot-password'>Forgot Password?</p>
      </form>
    </div>
  )
}
