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
        <div className='flex flex-col items-center justify-center border-2 m-4 w-1/2 py-8 px-2 rounded-md backdrop-blur-sm bg-gray-200 bg-opacity-40 z-20 hover:bg-orange-100 transform hover:scale-105 transition duration-200'>
            <h2 className='text-xl font-semibold font-quicksand py-6'>{recArea.recAreaName}</h2>
            <p><strong>Arrival:</strong> {new Date(recArea.date).toDateString()}</p>
            <p><strong>Departure:</strong>{new Date(recArea.leaveDate).toDateString()}</p>
            <div className='relative'>
              <p 
                className='cursor-pointer z-40 hover:text-lime-600 transform hover:scale-105 transition duration-200'
                onClick={() => setIsOpen(!isOpen)}
              ><strong>Planned Activities</strong>
              <FaChevronDown className='inline-block ml-1' />
              </p>
              <PlanList isOpen= {isOpen} recArea={recArea} setUpdateRecAreas={setUpdateRecAreas} />
                
            </div>
            <form onSubmit={(evt) => handleDelete(evt)}>
                <input type="hidden" name='_id' value={recArea._id} />
                <button className='hover:text-orange-700' type='submit'>Delete</button>
            </form>
        </div>
    </>
  )
}
