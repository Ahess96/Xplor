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
    <div>
      <div className="form-container">
        <form autoComplete='off' onSubmit={handleSubmit}>
          <label>Email</label>
            <input type='text' name='email' value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
            <input type='password' name='password' value={credentials.password} onChange={handleChange} required />
          <button type='submit'>Log In</button>
        </form>
        <p className='error'>&nbsp;{error}</p>
      </div>
    </div>
  )
}
