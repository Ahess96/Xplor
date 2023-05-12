import React, { useState } from 'react'
import * as recreationAPI from '../../utilities/recreation-api'
import {Link} from 'react-router-dom'
import RecAreaDetails from '../../components/RecAreaDetails/RecAreaDetails'


const ITEMS_PER_PAGE = 19

export default function RecAreaPage({activeRecArea, selectActiveRecArea}) {
  
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
        setPage(1)
        try {
            selectActiveRecArea(null)
            const search = searchInput;
            const recAreas = await recreationAPI.getSearch(search);
            setResults(recAreas)
        } catch (error) {
            console.error('Error fetching search')
        }
    }


  return (
    <div className='flex flex-col'>
      {/* Search Bar */}
      <div className='flex flex-col justify-center items-center mt-36 mb-12'>
      <h1 className=''>Find All Recreation Sites Provided by Recreation.gov</h1>

        <form onSubmit={(evt) => handleSearch(evt)}>
        <div className='flex flex-col'>
          <input
            type="text"
            placeholder='e.g. california hike'
            onChange={handleChange}
            value={searchInput}
            name='search'
            className='border-2 border-orange-400 rounded-md bg-white rounded-lg px-4 py-2'
          />
          <button
            type='submit'
            name='search'
            className='border rounded-md hover:bg-orange-100 px-2 mt-2'
          >
            Search
          </button>
          </div>
        </form>
      </div>

        {/* if recAreas are found, list them otherwise show message */}
        { recAreas.length ?
        <>
        { !activeRecArea ?
          <>
            <div className="flex flex-wrap justify-center">    
            {recAreas.map((recArea, idx) => (
                recArea.RecAreaName.length ?
                  <div key={idx} onClick={() => selectActiveRecArea(recArea)}                  
                  className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4'
                  >
                    {recArea.Keywords ? 
                    <div className='bg-amber-200 h-32 rounded-lg p-4'>
                    <p>
                      {recArea.RecAreaName}
                    </p>
                    </div>     
                    :
                    <div className='bg-orange-200 h-32 rounded-lg p-4'>
                      <p>
                        {recArea.RecAreaName}
                      </p>
                    </div>     
                    }
                                 
                  </div>
                    :
                    null  
            ))}
            </div>
            <div className="flex justify-center">
            {Array.from(new Array(pageCount || 1), (_, i) => i + 1).map((num, idx) => {
              if (num === page) {
                return (
                  <strong
                    key={idx}
                    className="px-3 py-2 bg-gray-800 text-white rounded-md mr-2"
                  >
                    {num}
                  </strong>
                );
              }
              return (
                <Link
                  onClick={() => setPage(num)}
                  key={idx}
                  className="px-3 py-2 bg-gray-200 text-gray-800 rounded-md mr-2 hover:bg-gray-300"
                >
                  {num}
                </Link>
              );
            })}
          </div>
          </>
        :
        <RecAreaDetails activeRecArea={activeRecArea} selectActiveRecArea={selectActiveRecArea} />
        }
        </>
        :
        
        <div className='self-center'>
          <p className=''>Make a valid search to see results!</p>
        </div>
        }
    </div>
  )
}
