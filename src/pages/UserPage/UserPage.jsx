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
    <>
      {recAreas.map((recArea, idx) => <Plans key={idx} recArea={recArea} setUpdateRecAreas={setUpdateRecAreas} />)}
    </>
  )
}
