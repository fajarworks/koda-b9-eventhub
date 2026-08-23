// import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router';

function CreateEventNav() {
  return (
    <div className="border-b border-gray-300 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2">
            <Link
              to="/organizer-dashboard"
              className="flex items-center gap-2 text-color-text"
            >
              <FiArrowLeft />
              <p>Back</p>
            </Link>

            <p className="font-medium">Create Event</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
              <p>1</p>
            </div>
            <div className="w-8 border border-gray-300" />
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
              <p>2</p>
            </div>
            <div className="w-8 border border-gray-300" />
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
              <p>3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateEventNav;
