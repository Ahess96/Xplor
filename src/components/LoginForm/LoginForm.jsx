import React, { useState } from 'react'
import * as usersService from '../../utilities/users-service'

export default function LoginForm({estUser}) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({...credentials, [evt.target.name]: evt.target.value});
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      estUser(user);
    } catch {
      setError('Invalid login credentials, please try again')
    }
  }

  return (
    <>
      <form 
      className='flex flex-col items-center justify-center'
      autoComplete='off' onSubmit={handleSubmit}>
        <label className='self-start p-1'>Email</label>
          <input
          className='my-1 py-1 px-2 border rounded-md'
          type='text' name='email' value={credentials.email} onChange={handleChange} required />
        <label className='justify-self-end self-start p-1'>Password</label>
          <input
          className='my-1 py-1 px-2 border rounded-md'
          type='password' name='password' value={credentials.password} onChange={handleChange} required />
        <button
        className='border rounded-md hover:bg-orange-100 px-2 mt-2'
        type='submit'>Log In</button>
      </form>
      <p className='error'>&nbsp;{error}</p>
    </>
  )
}
