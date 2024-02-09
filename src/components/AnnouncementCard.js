import React from 'react';
import OutingScheduleCard from './InnerComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
const AnnouncementsContainer = () => {
  return (
    <div className=" mx-auto border-2 rounded p-3">
        <div className='flex flex-row justify-between'>
          <div className='flex items-center'>
            Announcements
        </div>
        <div className="border-2 rounded p-3 flex items-center ">
      <div>
      Today, 13 Sep 2021
      </div>
      <div className="text-blue-500 cursor-pointer">
        <FontAwesomeIcon icon={faAngleDown} /> {/* Arrow down icon */}
      </div>
    </div>  
        </div>
        <div className='my-3'>
<OutingScheduleCard text1="Department 1" text2="Additional Info 1" timeAgo="5 Minutes ago" />
        </div>
        <div className='my-3'>
<OutingScheduleCard text1="Department 2" text2="Additional Info 2" timeAgo="10 Minutes ago" />
        </div>
        <div className='my-3'>
<OutingScheduleCard text1="Department 3" text2="Additional Info 3" timeAgo="15 Minutes ago" />
        </div>
      
      
      

      <div className="mt-4 text-center text-blue-500 cursor-pointer">
        See All Announcements
      </div>
    </div>
  );
};

export default AnnouncementsContainer;
