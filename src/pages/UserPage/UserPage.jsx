import React, { useEffect, useState } from 'react'
import * as recreationAPI from '../../utilities/recreation-api'
import Plans from '../../components/Plans/Plans';

export default function UserPage() {
  
  const [recAreas, setRecAreas] = useState([])
  const [startUseEffect, setStartUseEffect] = useState(true)

  function setUpdateRecAreas() {
    setStartUseEffect(false);
  }

  useEffect(function() {
    async function getRecAreas() {
      try {
        const recAreas = await recreationAPI.getAll();
        setRecAreas(recAreas);
      } catch (error) {
        console.error('Error fetching planned recreation areas')
      }
    };
    getRecAreas();
    setStartUseEffect(true);
  }, [startUseEffect])
  
  return (
    <div
      className="relative"
      style={{
        backgroundImage: 'url(ganapathy-kumar-L75D18aVal8-unsplash.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      <div
        className="absolute inset-0 overflow-auto"
        style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold m-4">Xplor Forever</h1>
          <h2 className="text-lg">Enjoy your trip</h2>
          {recAreas.map((recArea, idx) => (
            <Plans key={idx} recArea={recArea} setUpdateRecAreas={setUpdateRecAreas} />
          ))}
        </div>
      </div>
    </div>
  )
}
