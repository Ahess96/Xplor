import React, { useState } from 'react'
import * as recreationAPI from '../../utilities/recreation-api'
import { useNavigate } from 'react-router-dom';

export default function RecAreaDetails({activeRecArea, selectActiveRecArea}) {

    const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

    const keywordsArray = activeRecArea.Keywords.split(',');
    const navigate = useNavigate();

  async function handleAddRecArea(evt, activeRecArea, date) {
    evt.preventDefault();
    setDate(evt.target.value);
    await recreationAPI.sendRecArea(activeRecArea.RecAreaDescription, date, activeRecArea.RecAreaID, activeRecArea.RecAreaName, activeRecArea.RecAreaDirections, activeRecArea.RecAreaID);
    selectActiveRecArea([])
    navigate('/user');
  }

  function handleChange(evt) {
    setDate(evt.target.value);
  }

  return (
    <>
      {keywordsArray.map((keyword, idx) => (
          <>
          <li key={idx}>{keyword}</li>
          <button>Add</button>
          </>
      ))}
      <form onSubmit={(evt) => handleAddRecArea(evt, activeRecArea, date)}>
        <input type="date" value={date} name='date'
        onChange={handleChange}
        />
        <button type='submit'>Add to trip</button>
      </form>
    </>
  )
}
