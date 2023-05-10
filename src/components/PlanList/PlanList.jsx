import React from 'react'
import * as recreationAPI from '../../utilities/recreation-api'

export default function PlanList( {recArea, isOpen}) {
  
    async function handleDelete(evt, act) {
        evt.preventDefault()
        await recreationAPI.deleteActivity(act, evt.target['_id'].value)
    }
    
  return (
    <>
        {isOpen && (
            <ul>
                {recArea.activities.map((act, idx) => (
                <form  key={idx} onSubmit={(evt) => handleDelete(evt, act)}>
                    <input type="hidden" name='_id' value={recArea._id} />
                    <li>{act}
                        <span><button>x</button></span>
                    </li>
                </form>
                ))}
            </ul>
        )}

    </>
  )
}
