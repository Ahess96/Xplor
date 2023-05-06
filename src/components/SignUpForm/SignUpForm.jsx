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
        <form className="flex flex-col" autoComplete="off" onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name='name' value={formData.name} onChange={handleChange} required />
            <label>Email</label>
            <input type="email" name='email' value={formData.email} onChange={handleChange} required />
            <label>Password</label>
            <input type="password" name='password' value={formData.password} onChange={handleChange} required />
            <label>Confirm Password</label>
            <input type="password" name='confirm' value={formData.confirm} onChange={handleChange} required />
            <button className="py-2 px-4 bg-orange-200 hover:bg-orange-500 text-white font-semibold rounded-lg shadow-md" type='submit' disabled={disable}>Sign Up</button>
        </form>
        <p className="error">&nbsp;{formData.error}</p>
    </>
  );
}
