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
    <>
      <div className='mt-12'>
        <h2 className='text-center'>Search Keywords to Find Recreation Areas</h2>
      </div>

      {/* Search Bar */}
      
      <div className='flex justify-center items-center mt-36 mb-12'>
        <form onSubmit={(evt) => handleSearch(evt)} className="w-full md:w-1/4 mt-5">
          <input
            type="text"
            placeholder='e.g. california hike'
            onChange={handleChange}
            value={searchInput}
            name='search'
            className='border-2 border-orange-700 rounded-md bg-white rounded-lg px-4 py-2'
          />
          <button
            type='submit'
            name='search'
            className='bg-gray-800 text-white rounded-lg px-4 py-2 ml-6'
          >
            Search
          </button>
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
                    <div className='bg-slate-200 h-32 rounded-lg p-4'>
                    <p>
                      {recArea.RecAreaName}
                    </p>
                    </div>     
                    :
                    <div className='bg-amber-200 h-32 rounded-lg p-4'>
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

            {Array.from(new Array(pageCount || 1), (_, i) => i + 1).map((num, idx) => {
                if (num === page) {
                    return <strong key={idx}>{num}</strong>
                }
                return <Link onClick={() => setPage(num)} key={idx}>{num}</Link>
            })}
          </>
        :
        <RecAreaDetails activeRecArea={activeRecArea} selectActiveRecArea={selectActiveRecArea} />
        }
        </>
        :
        <div className=''>
          <p className='text-center'>Make a valid search to see results!</p>
        </div>
        }
    </>
  )
}
