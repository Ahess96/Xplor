import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { logOut } from '../../utilities/users-service'
import { FaBars } from 'react-icons/fa'
import MobileNav from '../MobileNav/MobileNav';



export default function NavBar({user, estUser}) {
  
  const [open, setOpen] = useState(false)

  function handleLogout() {
    logOut();
    estUser(null);
  }

// collapsible navbar ideas courtesy https://www.youtube.com/watch?v=2oScqZpnduM
  return (

    <nav className="py-4 w-full flex justify-center items-center text-white" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1680849219172-71e4f632b282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)', 
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover' }}>
      <Link className='mr-auto px-6' to="/"><img className='object-fill h-18 w-32 cursor-pointer transform hover:scale-110 transition duration-200' src="https://i.ibb.co/5R3PQW5/Firefly-leafy-pothos-91921.png" alt="logo" /></Link>
      
      { user ?
      <div className='hidden sm:block text-xl'>
        <div className='flex gap-8 items-center'>        
          <Link className='hover:text-lime-600 cursor-pointer hover:font-bold transform hover:scale-110 transition duration-200' to='/recareas'>Recreation Areas</Link>
          {/* <Link className='hover:text-lime-600 cursor-pointer hover:font-bold transform hover:scale-110 transition duration-200' to='/search'>Search</Link> */}
          <Link className='hover:text-lime-600 cursor-pointer hover:font-bold transform hover:scale-110 transition duration-200' to='/user'>Your Orders</Link>
          <Link className='hover:text-lime-600 cursor-pointer hover:font-bold transform hover:scale-110 transition duration-200 mr-6' to='' onClick={handleLogout}>Logout</Link>
        </div>
      </div>

      :

      <div>
        <Link className='hover:text-lime-600 cursor-pointer hover:font-bold transform hover:scale-110 transition duration-200 mr-6 text-xl' to='/'>Login / Sign Up</Link>
      </div>
  
      }
    <div className='flex justify-end w-full sm:hidden'>
      <button className="bg-white shadow-md px-5 py-2 border border-zinc-300 rounded-full px-5 py-3 bg-white"
      onClick={() => setOpen(true)}>
        <FaBars className='text-black'/>
      </button>
    </div>
  { open ? 
    <MobileNav user={user} handleLogout={handleLogout} close={() => setOpen(false)} />
    :
    <></>
  }

</nav>

  )
}
