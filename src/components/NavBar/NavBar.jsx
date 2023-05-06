import React from 'react'
import { Link } from 'react-router-dom'
import { logOut } from '../../utilities/users-service'


export default function NavBar({user, estUser}) {
  
  function handleLogout() {
    logOut();
    estUser(null);
  }

  return (
    <nav>
      { user ?
      <>
        <Link to='/search'>Search</Link>
        &nbsp; | &nbsp;
        <Link to='/user'>Your Orders</Link>
        &nbsp; | &nbsp;
        <Link to='' onClick={handleLogout}>Logout</Link>
      </>
      :
      <Link to='/'>Login/Sign Up</Link>
      }
    </nav>
  )
}
