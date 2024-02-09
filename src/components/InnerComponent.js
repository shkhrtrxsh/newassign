import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const OutingScheduleCard = ({ text1, text2, timeAgo }) => {
  return (
    <div className="flex flex-row mx-auto  rounded-md overflow-hidden shadow-md flex items-center p-4 bg-gray-200">
      {/* Left Part */}
      <div className="flex-grow">
        <h2 className="text-lg font-semibold">{text1}</h2>
        <p className="text-sm text-gray-500 mb-2">{text2}</p>

        {/* Right Part */}
        
      </div>

      {/* Right Part */}
      <div className="text-gray-500 ml-4">
      <div className="flex items-center">
          <FontAwesomeIcon icon={faMapPin} className="mr-2" /> {/* Pin icon */}
          <FontAwesomeIcon icon={faEllipsisH} /> {/* Three dots icon */}
        </div>
      </div>
    </div>
  );
};

export default OutingScheduleCard;
