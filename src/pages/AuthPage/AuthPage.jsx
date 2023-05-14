import React, { useState } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({estUser}) {
  
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className='AuthPage min-h-screen flex flex-col items-center'
    style={{backgroundImage: 'url(https://images.unsplash.com/photo-1545063168-0e149bddf68c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)', backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover' }}>
      <div className='flex flex-col justify-center items-center p-20 bg-rose-100 bg-opacity-50 max-w-lg mt-10 rounded-md py-8'>
        {showLogin ? <LoginForm estUser={estUser} /> 
        :
        <SignUpForm estUser={estUser} />
        }
        <h3 className='mb-4'>Or</h3>
        <h2 
          className='border rounded-md hover:bg-orange-100 px-2'
          onClick={() => setShowLogin(!showLogin)}>
              {showLogin ? 'Sign Up' : 'Log In'}
        </h2>
      </div>
    </main>
  );
}
