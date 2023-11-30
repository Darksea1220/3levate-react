import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { queryUser } from '../Services/db'
import './Login.css'

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
          <Navigate to='/ProjectDetail' />
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
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor='username'>E-mail</label>
        <input
          type='email'
          id='username'
          placeholder='Enter your E-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Enter</button>
        <p className='forgot-password'>Forgot Password?</p>
      </form>
    </div>
  )
}
