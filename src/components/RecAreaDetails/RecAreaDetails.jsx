import React, { useEffect, useState } from 'react'
import * as recreationAPI from '../../utilities/recreation-api'
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';

export default function RecAreaDetails({activeRecArea, selectActiveRecArea}) {

    // const [plans, setPlans] = useState(null)
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
    const [leaveDate, setLeaveDate] = useState(new Date().toISOString().slice(0, 10))

    // sanitize html from recreation.gov
    const sanitizedDirection = DOMPurify.sanitize(activeRecArea.RecAreaDirections);
    const sanitizedDescription = DOMPurify.sanitize(activeRecArea.RecAreaDescription);
    const keywordsArray = activeRecArea.Keywords.split(',');
    const navigate = useNavigate();


  // useEffect(function() {
  //   async function getPlans() {
  //     const plans = await recreationAPI.getPlans(activeRecArea.RecAreaID);
  //     setPlans(plans);
  //   }
  //   getPlans();
  // }, [])

  async function handleAddRecArea(evt, activeRecArea, date, leaveDate) {
    evt.preventDefault();
    // setDate(evt.target.value);
    await recreationAPI.sendRecArea(activeRecArea.RecAreaDescription, date, leaveDate, activeRecArea.RecAreaID, activeRecArea.RecAreaName, activeRecArea.RecAreaDirections);
    selectActiveRecArea([]);
    navigate('/user');
  }

  // async function handleAddActivity(evt, keyword, activeRecArea) {
  //   evt.preventDefault();
  //   const updatedPlans = await recreationAPI.addActivityToPlans(keyword, activeRecArea.RecAreaID);
  //   setPlans(updatedPlans)
  // }

  function handleChangeDate(evt) {
    setDate(evt.target.value);
  }

  function handleChangeLeaveDate(evt) {
    setLeaveDate(evt.target.value);
  }


  return (
    <>
      <h3>Directions</h3>
      <div dangerouslySetInnerHTML={{ __html: sanitizedDirection}}></div>
      <h3>Description</h3>
      <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></div>
      {/* {keywordsArray.map((keyword, idx) => (
          <form onSubmit={(evt) => handleAddActivity(evt, keyword, activeRecArea)}>
            <li key={idx}>{keyword}</li>
            <button type='submit'>Add</button>
          </form>
      ))} */}
      <form onSubmit={(evt) => handleAddRecArea(evt, activeRecArea, date, leaveDate)}>
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
