import React, { useEffect, useState } from 'react'
import * as recreationAPI from '../../utilities/recreation-api'

export default function PlanList( {recArea, isOpen, setUpdateRecAreas}) {
  

    async function handleDelete(evt, act) {
        evt.preventDefault()
        await recreationAPI.deleteActivity(act, evt.target['_id'].value)
        setUpdateRecAreas(true)
    }
    
  return (
    <div className={`max-h-0 overflow-hidden transition-all duration-1000 ${isOpen ? 'max-h-full' : ''}`}>
        {isOpen && (
            <ul>
                {recArea.activities.map((act, idx) => (
                <form  key={idx} onSubmit={(evt) => handleDelete(evt, act)}>
                    <input type="hidden" name='_id' value={recArea._id} />
                    <li 
                    className='flex justify-between items-center'
                    >{act}
                        <span><button 
                        className='p-1 text-orange-700 m-1 hover:bg-orange-700 hover:text-white hover:rounded-md'
                        >x</button></span>
                    </li>
                </form>
                ))}
            </ul>
        )}

    </div>
  )
}
