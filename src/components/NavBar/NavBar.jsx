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

    <nav className="pt-10 w-full flex justify-center items-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1680849219172-71e4f632b282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)' }}>
      <Link to="/" className='hover:text-white cursor-pointer'>Logo</Link>
      { user ?
      <div className='hidden sm:block'>
        <div className='flex gap-6 items-center shadow-md'>
          
          <Link className='hover:text-white cursor-pointer' to='/recareas'>Recreation Areas</Link>
          <Link className='hover:text-white cursor-pointer' to='/search'>Search</Link>
          <Link className='hover:text-white cursor-pointer' to='/user'>Your Orders</Link>
          <Link className='hover:text-white cursor-pointer' to='' onClick={handleLogout}>Logout</Link>
        </div>
      </div>

      :
      <div>
        <Link className='hover:text-white cursor-pointer' to='/'>Login/Sign Up</Link>
      </div>
  
      }
    <div className='flex justify-end w-full sm:hidden'>
      <button className="bg-white shadow-md px-5 py-2 border border-zinc-300 rounded-full px-5 py-3 bg-white"
      onClick={() => setOpen(true)}>
        <FaBars />
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
