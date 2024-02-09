import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

const CustomCard2 = ({ firstText, secondText, thirdText, fourthText, graphIconText }) => {
  return (
    <div className=" bg-white rounded-md overflow-hidden shadow-md flex border-2">
      {/* Left Side */}
      <div className="flex flex-col p-4">
        {/* First Row */}
        <div className="mb-2">
          <h2 className="text-lg font-semibold">{firstText}</h2>
        </div>

        {/* Second Row (Bigger) */}
        <div className="mb-4">
          <h2 className="text-[30px] font-semibold">{secondText}</h2>
        </div>

        {/* Third Row (Equal Size) */}
        <div className="mb-0">
          <h2 className="text-lg text-gray-400 font-semibold">{thirdText}</h2>
        </div>

        {/* Fourth Row (Equal Size) */}
        <div>
          <h2 className="text-lg font-semibold text-gray-400">{fourthText}</h2>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center p-4">
        <div className="text-center">
          <FontAwesomeIcon icon={faChartLine} size="3x" className="text-blue-500 mb-2" />
          <div className="text-sm font-semibold">{graphIconText}</div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard2;
