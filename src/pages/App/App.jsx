import { useState } from 'react'
import './App.css'
import SearchPage from '../SearchPage/SearchPage'
import AuthPage from '../AuthPage/AuthPage'
import UserPage from '../UserPage/UserPage'
import NavBar from '../../components/NavBar/NavBar'
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service'
import RecAreaPage from '../RecAreaPage/RecAreaPage'
import HomePage from '../HomePage/HomePage'


function App() {
  

  const [activeRecArea, setRecArea] = useState(null);
  const [user, setUser] = useState(getUser())


  function selectActiveRecArea(recArea) {
    setRecArea(recArea);
  }

  function estUser(user) {
    setUser(user)
  }

  return (
    <main className="app font-worksands">
      <NavBar estUser={estUser} user={user} />
      { user ?
        <>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/search' element={<SearchPage activeRecArea={activeRecArea} selectActiveRecArea={selectActiveRecArea} />} />
            <Route path='/user' element={<UserPage user={user} />} />
            <Route path='/recareas' element={<RecAreaPage activeRecArea={activeRecArea} selectActiveRecArea={selectActiveRecArea} />} />
          </Routes>
        </>
        :
        <AuthPage estUser={estUser}/>
      }
    </main>
  )
}

export default App
