import React, { useEffect, useState } from 'react'
import * as recreationAPI from '../../utilities/recreation-api'
import {Link} from 'react-router-dom'

const ITEMS_PER_PAGE = 24

export default function SearchPage({activeRecArea, selectActiveRecArea}) {
  
  // current page we're on will be at least 1 
  const [page, setPage] = useState(1)
  const [results, setResults] = useState({})
  // total number of possible pages that can exist for results
  const pageCount = Math.ceil((results?.RECDATA?.length || 1) / ITEMS_PER_PAGE);
  const activities = paginateActivities();

  function paginateActivities() {
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = (page * ITEMS_PER_PAGE) - 1;
    const items = results.RECDATA || [];
    return items.slice(start, end);
  }

  useEffect(function() {
    async function getActivities() {
      try {
        const activities = await recreationAPI.getActivities();
        setResults(activities)
      } catch (error) {
        console.error('Error fetching activities')
      }
    };
    getActivities();
  }, [])
  
  return (
    <>
      {activeRecArea?.Keywords}
      
      <ul>
        {activities.map((r, idx) => (
          <li key={idx}>{r.ActivityName}</li>
        ))}
      </ul>
      {Array.from(new Array(pageCount || 1), (_, i) => i + 1).map((num, idx) => {
        if (num === page) {
          return <strong key={idx}>{num}</strong>
        }
        return <Link onClick={() => setPage(num)} key={idx}>{num}</Link>
      })}
    </>
  )
}
