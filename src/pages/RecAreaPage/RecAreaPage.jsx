import React, { useState } from 'react'
import * as recreationAPI from '../../utilities/recreation-api'
import {Link} from 'react-router-dom'


const ITEMS_PER_PAGE = 24

export default function RecAreaPage() {
  
    const [page, setPage] = useState(1)
    const [searchInput, setSearchInput] = useState('');
    const [results, setResults] = useState({})

    const pageCount = Math.ceil((results?.RECDATA?.length || 1) / ITEMS_PER_PAGE);
    const recAreas = paginateRecAreas();

    function paginateRecAreas() {
        const start = (page - 1) * ITEMS_PER_PAGE;
        const end = (page * ITEMS_PER_PAGE) - 1;
        const items = results.RECDATA || [];
        return items.slice(start, end);
    }

    function handleChange(evt) {
        evt.preventDefault();
        setSearchInput(evt.target.value);
    }

    async function handleSearch(evt) {
        evt.preventDefault();
        try {
            const search = searchInput;
            console.log({search})
            const recAreas = await recreationAPI.getSearch(search);
            setResults(recAreas)
            console.log({results})
        } catch (error) {
            console.error('Error fetching search')
        }
    }


  return (
    <>
      <form onSubmit={(evt) => handleSearch(evt)}>
        <input type="text" placeholder='Search Rec Areas' onChange={handleChange} value={searchInput} name='search' />
        <button type='submit' name='search'>Search</button> 
      </form>
      <ul>
        { recAreas.length ?
        <>
            {recAreas.map((recArea, idx) => (
                <li key={idx}>{recArea.RecAreaName}</li>
            ))}
            {Array.from(new Array(pageCount || 1), (_, i) => i + 1).map((num, idx) => {
                if (num === page) {
                return <strong key={idx}>{num}</strong>
                }
                return <Link onClick={() => setPage(num)} key={idx}>{num}</Link>
            })}
        </>
        :
        <p>There are no results matching the search!</p>
        }
      </ul>
    </>
  )
}