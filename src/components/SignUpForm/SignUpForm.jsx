import React, { useState } from 'react'
import { signUp } from '../../utilities/users-service';

export default function SignUpForm({estUser}) {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  })

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
        const data = {...formData};
        // remove data from submission not needed in user info
        delete data.confirm;
        delete data.error;
        const user = await signUp(data);
        estUser(user);
      } catch {
        setFormData({
          ...formData,
          error: 'One of your entries does not meet our requirements'
        });
      }
  }

  const handleChange = (evt) => {
    setFormData({
        ...formData,
        [evt.target.name]: evt.target.value,
        error: ''
    });
  }

  // disable login button is PW don't match
  const disable = formData.password !== formData.confirm;

  return (
    <>
        <form className="flex flex-col items-center justify-center" autoComplete="off" onSubmit={handleSubmit}>
            <label className='self-start p-1'>Name</label>
            <input
            className='py-1 px-2 border rounded-md'
            type="text" name='name' value={formData.name} onChange={handleChange} required />
            <label className='self-start p-1'>Email</label>
            <input
            className=' py-1 px-2 border rounded-md'
            type="email" name='email' value={formData.email} onChange={handleChange} required />
            <label className='self-start p-1'>Password</label>
            <input
            className='py-1 px-2 border rounded-md'
            type="password" name='password' value={formData.password} onChange={handleChange} required />
            <label className='self-start p-1'>Confirm Password</label>
            <input
            className='py-1 px-2 border rounded-md'
            type="password" name='confirm' value={formData.confirm} onChange={handleChange} required />
            <button className="border rounded-md hover:bg-orange-100 px-2 mt-2" type='submit' disabled={disable}>Sign Up</button>
        </form>
        <p className="error">&nbsp;{formData.error}</p>
    </>
  );
}
