import React, { useEffect, useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function MobileNav({user, handleLogout, close}) {
  
    const [animation, setAnimation] = useState(false)

  useEffect(function() {
    setAnimation(true)
    window.addEventListener('resize', (e) => {
        if (e.target.innerWidth >=640) {
            close();
        }
    });
    return () => {
        window.removeEventListener('resize', () => {})
    }
  }, [])
  
    return (

    <>
    { user ?
        <>
            <div className='fixed inset-0 top-0 l-0 h-screen w-full backdrop-blur-sm bg-gray-500 bg-opacity-60 z-20'></div>
            <div className='fixed inset-0 top-0 l-0 p-5 z-40'>
                <div className={`w-full bg-white p-5 transition-all ${
                    animation ? 'scale-100' : 'scale-95'
                }`}>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-black'>Navigation</h1>
                        <AiOutlineClose className='w-7 h-7 hover:scale-110 transition-all cursor-pointer text-black'
                        onClick={close}/>
                    </div>
                    <div className='mt-5 divide-y' onClick={close}>
                        <Link className='block py-2 text-zinc-500' to='/recareas'>Recreation Areas</Link>
                        <Link className='block py-2 text-zinc-500' to='/search'>Search</Link>
                        <Link className='block py-2 text-zinc-500' to='/user'>Your Orders</Link>
                        <Link className='block py-2 text-zinc-500' to='' onClick={handleLogout}>Logout</Link>
                    </div>
                </div>
            </div>
        </>
    :
    <div>
        <Link className='block py-2 text-zinc-500' to='/'>Login/Sign Up</Link>
    </div>
    }
    </>
  )
}
