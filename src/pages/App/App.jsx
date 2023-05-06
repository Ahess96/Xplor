import { useState } from 'react'
import './App.css'
import SearchPage from '../SearchPage/SearchPage'
import AuthPage from '../AuthPage/AuthPage'
import UserPage from '../UserPage/UserPage'
import NavBar from '../../components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service'


function App() {
  
  const [user, setUser] = useState(getUser())
  function estUser(user) {
    setUser(user)
  }

  return (
    <main className="app">
      <NavBar estUser={estUser} user={user} />
      { user ?
        <>
          <Routes>
            <Route path='/search' element={<SearchPage />} />
            <Route path='/user' element={<UserPage />} />
          </Routes>
        </>
        :
        <AuthPage estUser={estUser}/>
      }
    </main>
  )
}

export default App
