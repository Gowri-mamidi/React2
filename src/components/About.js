import React, { useState } from 'react'
import './About.css'

export default function About() {
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',


  })
  function handleUser(e) {
    const { name, value } = e.target
    console.log(name, value)
    setNewUser(prevUser => ({
      ...prevUser,
      [name]: value
    }))
  }
  function Change() {
    console.log(newUser)
    setNewUser({ username: '', email: '', password: '' })
  }
  //const handleuser=()=>{ }
  return (
    <div className='input-container'>
      <h1>Login Page</h1>
      <div className='inner-container'>
        <p>
          <input className='inputclass'
            placeholder='Enter User name'
            name='username'
            value={newUser.username}
            onChange={handleUser}
          />
        </p>

        <p>
          <input className='inputclass'
            placeholder='Enter email'
            name='email'
            value={newUser.email}
            onChange={handleUser}
          />
        </p>
        <p>
          <input className='inputclass'
            placeholder="Enter password"
            name="password"
            value={newUser.password}
            onChange={handleUser}
          />
        </p>
        <div className='bottom'>
          <p><a href=''>Forgot password?</a></p>
          <p>Don't have an account?<a href=''>Sign up</a></p>

        </div>
        <button className='button' onClick={Change}>Submit</button>
      </div>
    </div>
  )
}
