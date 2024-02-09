import React, { useState } from 'react';

const LeftNavBar = () => {
  const [menuItems] = useState([
    { text: 'Dashboard', icon: '📊' },
    { text: 'Messages', icon: '✉️' },
    { text: 'Notifications', icon: '🔔' },
    { text: 'Profile', icon: '👤' },
    { text: 'Settings', icon: '⚙️' },
    { text: 'Support', icon: '❓' },
  ]);

  return (
    <div className="bg-gray-100 text-grey-600 p-4 pt-10">
      <div className="text-xl font-bold mb-4">Logo</div>

      <div className="mb-2">
        <h3 className="text-[15px] text-gray-400">Main Menu</h3>
      </div>
      <ul className="list-none p-0 m-0 text-xl">
        {menuItems.map((item, index) => (
          <li key={index} className="flex items-center mb-2">
            <span className="mr-2">{item.icon}</span>
            <span className={`${item.text==="Dashboard"? "text-red-500":"" }`} >{item.text}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <h3 className="text-[15px] text-gray-400 pb-2">Others</h3>
      </div>

      <ul className="list-none p-0 m-0">
        <li className="flex items-center mb-2">
          <span className="mr-2">🌐</span>
          <span>Language</span>
        </li>
        
      </ul>
    </div>
  );
};

export default LeftNavBar;
