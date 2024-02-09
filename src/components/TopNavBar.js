import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faEnvelope, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const TopNavBar = () => {
  return (
    <div className="bg-gray-100 text-gray-800 p-4 flex justify-between items-center">
      {/* Left Side: Search Input */}
      <div className="flex items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded focus:outline-none focus:shadow-outline"
          />
          <span className="absolute right-4 top-2 text-gray-500">
            <FontAwesomeIcon icon={faSearch} /> {/* Search icon */}
          </span>
        </div>
      </div>

      {/* Right Side: Notifications, Messages, User Profile */}
      <div className="flex items-center">
        <span className="mx-4">
          <FontAwesomeIcon icon={faBell} className="text-gray-400" /> {/* Notification icon */}
        </span>
        <span className="mx-4">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" /> {/* Message icon */}
        </span>
        <div className="flex items-center mx-4">
          <img
            src="path/to/profile-pic.jpg"  // Replace with the actual path to your profile picture
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-row items-end">
          <span className="text-sm pr-5">Admirra John</span>
          <span className="text-xs text-gray-400">
            <FontAwesomeIcon icon={faAngleDown} /> {/* Down arrow icon */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
