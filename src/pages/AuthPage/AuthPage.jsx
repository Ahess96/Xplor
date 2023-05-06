import React, { useState } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage({estUser}) {
  
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className='AuthPage'>
            <h2 onClick={() => setShowLogin(!showLogin)}>
                {showLogin ? 'Sign Up' : 'Log In'}
            </h2>
            {showLogin ? <LoginForm estUser={estUser} /> 
            :
            <SignUpForm estUser={estUser} />
            }
    </main>
  );
}
