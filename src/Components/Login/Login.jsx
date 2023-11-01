import React from 'react'
import './Login.css'

export function Login () {
  return (
    <div className='login-container'>
      <h1>Login</h1>
      <form>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' placeholder='Enter your username' />
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' placeholder='Enter your password' />
        <button type='submit'>Enter</button>
        <p className='forgot-password'>Forgot Password?</p>
      </form>
    </div>
  )
}
