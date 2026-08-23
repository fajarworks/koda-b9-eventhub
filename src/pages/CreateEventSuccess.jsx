import React from 'react';
import { FiCheck } from 'react-icons/fi';

function CreateEventSuccess() {
  return (
    <div className='h-[calc(100vh-78px)] flex items-center justify-center'>
      <div className='flex flex-col items-center gap-2'>
        <div className='w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-green-500'>
        <FiCheck size={28}/>
        </div>
        <div>
          <div>
            <h1 className='font-semibold text-3xl text-center'>Event Created!</h1>
          </div>
          <div>
            <p className='text-color-text'>Redirecting to your dashboard...</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CreateEventSuccess;
