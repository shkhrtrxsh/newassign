import React from 'react';

const CommonCard = ({ title, subtitle, content, customTextColor,bgcolor }) => {
  return (
    <div className={`${bgcolor} max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md`}>
      <div className="flex flex-col">
        {/* Top Column */}
        <div className="p-4 text-left">
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>

        {/* Middle Column (Twice the size) */}
        <div className="p-8 text-left ">
          <h2 className="text-[40px] font-semibold">{subtitle}</h2>
        </div>

        {/* Bottom Column */}
        <div className={`p-4 text-left ${customTextColor}`}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default CommonCard;
