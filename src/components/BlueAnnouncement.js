import React from 'react';
import OutingScheduleCard from './InnerComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
const BlueAnnouncements = () => {
  return (
    <div className=" mx-auto border-2 rounded p-5  bg-blue-800 rounded-xl">
        <div className='flex flex-row items-center  text-white pb-5'>
          <div>
            Recent Activity
        </div> 
        </div>
        <div>
        <div className='text-gray-300 text-[10px]'>
            10:40AM, Fri 10 Sept 2021
         </div>
<div className='text-white'>
You Posted a New Job
</div>
<div className='text-gray-300'>
Kindly check the requirements and<br/> terms of work and make sure everything is right.
</div>
        </div>
        <div className='flex flex-row items-center justify-around pt-5'>
          <div className='pr-2 text-gray-300'>
          Today you makes 12 Activity
        </div>
        <div className='pl-3'>
        <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 focus:outline-none focus:shadow-outline">
      See All Activity
    </button>
            </div> 
        </div>
  

      
    </div>
  );
};

export default BlueAnnouncements;
