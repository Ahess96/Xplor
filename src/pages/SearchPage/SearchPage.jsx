import React, { useEffect, useState } from 'react'
import * as recreationAPI from '../../utilities/recreation-api'

export default function SearchPage() {
  
  const [results, setResults] = useState({})

  useEffect(function() {
    async function getActivities() {
      const activities = await recreationAPI.getActivities();
      setResults(activities);
    }
    getActivities();
  }, [])
  
  return (
    <>
      {results.RECDATA.map((r) =>
        r.ActivityName
      )}
    </>
  )
}
