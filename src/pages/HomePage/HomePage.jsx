import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='flex flex-col items-center min-h-screen' style={{backgroundImage: 'url(https://images.unsplash.com/photo-1429516387459-9891b7b96c78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)', backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover' }}>
      <div className='flex flex-col text-center font-bold justify-center items-center m-20 py-10 px-20 max-w-3xl rounded-lg backdrop-blur-sm bg-gray-200 bg-opacity-40 z-20'>
        <h1 className=' text-3xl'>Welcome to </h1>
        <img className='object-fill h-32 w-56 cursor-pointer transform hover:scale-110 transition duration-200' src="https://i.ibb.co/5R3PQW5/Firefly-leafy-pothos-91921.png" alt="logo" />
        <p className='text-lg'>Xplor is your straight forward, clutter free solution to planning a trip to one of the thousands of recreation sites provided by <Link className='text-amber-800' target='blank' to='https://www.recreation.gov/'>Recreation.gov</Link>.</p>
        <p className='text-lg mt-8'>Navigate to the <Link className='text-amber-800' to='/recareas'>Recreation Areas</Link> Page to get your adventure started.</p>
      </div>
    </div>
  )
}
