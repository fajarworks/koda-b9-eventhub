import React from 'react';



function Logo({className = ""}) {
  return (
    <div>
      <div className="flex gap-2 items-center my-2 cursor-pointer">
        <div className=" w-7 h-7 flex my-center rounded-md  bg-primary font-medium text-white cursor-pointe">
          <p>E</p>
        </div>
        <p className={`font-bold ${className}`}>EventHub</p>
      </div>
    </div>
  );
}

export default Logo;
