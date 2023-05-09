import React from 'react'
import * as recreationAPI from '../../utilities/recreation-api'

export default function Plans({recArea, setUpdateRecAreas}) {
  
  async function handleDelete(evt) {
    evt.preventDefault();
    await recreationAPI.deleteRecArea(evt.target['_id'].value);
    setUpdateRecAreas();
  }
  
  return (
    <>
        <div>
            {recArea.recAreaName}
            <form onSubmit={(evt) => handleDelete(evt)}>
                <input type="hidden" name='_id' value={recArea._id} />
                <button type='submit'>Delete</button>
            </form>
        </div>
    </>
  )
}
