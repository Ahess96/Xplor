import React, { useEffect, useState } from 'react'
import * as recreationAPI from '../../utilities/recreation-api'
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';

export default function RecAreaDetails({activeRecArea, selectActiveRecArea}) {

    const [activities, setActivities] = useState([])
    // const [plans, setPlans] = useState(null)
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


  async function handleAddRecArea(evt, activeRecArea, activities, date, leaveDate) {
    evt.preventDefault();
    // setDate(evt.target.value);
    await recreationAPI.sendRecArea(activeRecArea.RecAreaDescription, activities, date, leaveDate, activeRecArea.RecAreaID, activeRecArea.RecAreaName, activeRecArea.RecAreaDirections);
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

  function handleChangeDate(evt) {
    setDate(evt.target.value);
  }

  function handleChangeLeaveDate(evt) {
    setLeaveDate(evt.target.value);
  }


  return (
    <>
      <h1>{ recAreaName }</h1>
      <h3>Directions</h3>
      <div dangerouslySetInnerHTML={{ __html: sanitizedDirection}}></div>
      <h3>Description</h3>
      <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></div>
      { keywordsArray?.map((keyword, idx) => (
        // only show keywords that are not included in activities
        !activities.includes(keyword) ? (
          <form onSubmit={(evt) => handleAddActivity(evt, keyword)}>
            <li key={idx}>{keyword}</li>
            <button className='blue' type='submit'>Add</button>
          </form>
        ) : (
          <form onSubmit={(evt) => handleRemoveActivity(evt, keyword)}>
            <li key={idx}>{keyword}</li>
            <button className='red' type='submit'>Remove</button>
          </form>
        )
      ))}

      <form onSubmit={(evt) => handleAddRecArea(evt, activeRecArea, activities, date, leaveDate)}>
        <input type="date" value={date} name='date'
        onChange={handleChangeDate}
        />
        <input type="date" value={leaveDate} name='leaveDate'
        onChange={handleChangeLeaveDate}
        />
        <button type='submit'>Add to trip</button>
      </form>
    </>
  )
}
