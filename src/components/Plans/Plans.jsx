import React, {useState} from 'react'
import { FaChevronDown } from 'react-icons/fa';
import * as recreationAPI from '../../utilities/recreation-api'
import PlanList from '../PlanList/PlanList';

export default function Plans({recArea, setUpdateRecAreas}) {

  const [isOpen, setIsOpen] = useState(false);

  async function handleDelete(evt) {
    evt.preventDefault();
    await recreationAPI.deleteRecArea(evt.target['_id'].value);
    setUpdateRecAreas();
  }

  
  return (
    <>
        <div>
            <h2>{recArea.recAreaName}</h2>
            <p><strong>Arrival:</strong> {new Date(recArea.date).toDateString()}</p>
            <p><strong>Departure:</strong>{new Date(recArea.leaveDate).toDateString()}</p>
            <div className='relative'>
              <p 
                className='cursor-pointer'
                onClick={() => setIsOpen(!isOpen)}
              ><strong>Planned Activities</strong>
              <FaChevronDown className='inline-block ml-1' />
              </p>

              <PlanList isOpen= {isOpen} recArea={recArea} />
                
            </div>
            <form onSubmit={(evt) => handleDelete(evt)}>
                <input type="hidden" name='_id' value={recArea._id} />
                <button type='submit'>Delete</button>
            </form>
        </div>
    </>
  )
}
