import React, { useEffect, useState } from 'react'
import * as recreationAPI from '../../utilities/recreation-api'
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';

export default function RecAreaDetails({activeRecArea, selectActiveRecArea}) {

    const [activities, setActivities] = useState([])
    const [notes, setNotes] = useState("Let's Xplor")
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
    const [leaveDate, setLeaveDate] = useState(new Date().toISOString().slice(0, 10))

    const [keywordsArray, setKeywordsArray] = useState([])
    const recAreaName = activeRecArea.RecAreaName;
    // sanitize html from recreation.gov
    const sanitizedDirection = DOMPurify.sanitize(activeRecArea.RecAreaDirections);
    const sanitizedDescription = DOMPurify.sanitize(activeRecArea.RecAreaDescription);
    const navigate = useNavigate();

    useEffect(() => {
      const keywords = activeRecArea.Keywords.split(',');
      // remove name from keywords if present
      const filteredKeywords = keywords.filter(keyword => keyword !== recAreaName);
      setKeywordsArray(filteredKeywords);
    }, [activeRecArea.Keywords, recAreaName]);


  async function handleAddRecArea(evt, activeRecArea, activities, notes, date, leaveDate) {
    evt.preventDefault();
    // setDate(evt.target.value);
    await recreationAPI.sendRecArea(activeRecArea.RecAreaDescription, activities, notes, date, leaveDate, activeRecArea.RecAreaID, activeRecArea.RecAreaName, activeRecArea.RecAreaDirections);
    selectActiveRecArea([]);
    navigate('/user');
  }

  function handleAddActivity(evt, keyword) {
    evt.preventDefault();
    let actArr = [...activities];
    actArr.push(keyword);
    setActivities(actArr);
  }

  function handleRemoveActivity(evt, keyword) {
    evt.preventDefault();
    const updatedActivities = activities.filter(act => act !== keyword)
    setActivities(updatedActivities)
  }

  function handleChangeNotes(evt) {
    setNotes(evt.target.value)
  }

  function handleChangeDate(evt) {
    setDate(evt.target.value);
  }

  function handleChangeLeaveDate(evt) {
    setLeaveDate(evt.target.value);
  }


  return (
    <div className='flex flex-col text-center justify-center items-center px-8'>
      <h1 className='font-bold font-quicksand text-xl'>{ recAreaName.toUpperCase() }</h1>
      <div className='border my-4 p-6'>
        <h3 className='font-bold font-quicksand text-xl m-4'>Directions</h3>
        <div dangerouslySetInnerHTML={{ __html: sanitizedDirection}}></div>
      </div>
      <div className='border my-4 p-6'>
        <h3 className='font-bold font-quicksand text-xl m-4'>Description</h3>
        <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></div>
      </div>
      <h3 className='font-bold font-quicksand text-xl m-4'>Add Activities to your visit:</h3>
      <div className='border rounded-md bg-amber-100 p-2'>
      { keywordsArray.length > 1 ? 
       keywordsArray?.map((keyword, idx) => (
        // only show keywords that are not included in activities
        !activities.includes(keyword) ? (
            <form
              className='flex justify-between items-center min-w-full my-1'
              onSubmit={(evt) => handleAddActivity(evt, keyword)}>
              <p className='mr-4'>{keyword}</p>
              <button className='bg-indigo-300 border rounded-md px-1 transform hover:scale-110 transition duration-200' type='submit'>Add</button>
            </form>
        ) : (
            <form 
            className='flex justify-between items-center min-w-full'
            onSubmit={(evt) => handleRemoveActivity(evt, keyword)}>
              <p 
              className='mr-4'
              key={idx}>{keyword}</p>
              <button className='bg-orange-800 border rounded-md px-1 text-white transform hover:scale-110 transition duration-200' type='submit'>Remove</button>
            </form>
        )
      ))

      :
      <div className=''>No Activities provided by Recreation.gov</div>}
      </div>

      <h3 className='font-bold font-quicksand text-xl m-4'>Notes</h3>
      <form className='border'>
        <input className='border-2 border-orange-400 rounded-md bg-white rounded-lg px-4 py-2' onChange={handleChangeNotes} type="text" name="notes" value={notes} />
      </form>


      <div className='m-8'>
        <form onSubmit={(evt) => handleAddRecArea(evt, activeRecArea, activities, notes, date, leaveDate)} className='flex flex-col gap-2' >
          <label htmlFor='date'>Arrival:</label>
          <input 
          className='transform hover:scale-110 transition duration-200 hover:bg-amber-100 hover:rounded-md'
          type="date" value={date} name='date'
          onChange={handleChangeDate}
          />
          <label htmlFor="leaveDate">Departure:</label>
          <input 
          className='transform hover:scale-110 transition duration-200 hover:bg-amber-100 hover:rounded-md'
          type="date" value={leaveDate} name='leaveDate'
          onChange={handleChangeLeaveDate}
          />
          <button 
          className='ml-2 px-1 border rounded-md bg-indigo-300 transform hover:scale-110 transition duration-200'
          type='submit'>Add to Trip</button>
        </form>
      </div>
    </div>
  )
}
