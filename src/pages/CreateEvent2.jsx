import React from "react";
import { FiArrowRight } from "react-icons/fi";

function CreateEvent2() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-8">
        <div>
          <h1 className="font-bold text-2xl">Basic Information</h1>
          <p className="text-color-text">
            Tell Attendees what your event is about.
          </p>
        </div>
        <form action="">
          <div className="pt-6">
            <label htmlFor="date">Event Date</label>
            <input
              className="border border-gray-300 rounded-lg w-full bg-white px-3 py-2.5 focus:outline-none"
              type="text"
              name="date"
              id="date"
            />
          </div>
          <div className="flex gap-2 pt-6">
            <div>
              <label htmlFor="start">Start Time</label>
              <input
                className="block border border-gray-300 rounded-lg w-full bg-white px-3 py-2.5 focus:outline-none"
                type="text"
                name="start"
                id="start"
              />
            </div>
            <div>
              <label htmlFor="end">End Time</label>
              <input
                className="block border border-gray-300 rounded-lg w-full bg-white px-3 py-2.5 focus:outline-none"
                type="text"
                name="end"
                id="end"
              />
            </div>
          </div>
          <div className="pt-6">
            <label htmlFor="format">Event Format</label>
          </div>
          <div className="pt-6">
            <label htmlFor="location">Location</label>
            <input
              className="block border border-gray-300 rounded-lg w-full bg-white px-3 py-2.5 focus:outline-none"
              type="text"
              name="location"
              id="location"
            />
          </div>
          <div className="pt-6">
            <label htmlFor="capacity">Capacity</label>
            <input
              className="block border border-gray-300 rounded-lg w-full bg-white px-3 py-2.5 focus:outline-none"
              type="number"
              name="capacity"
              id="capacity"
            />
          </div>
          <div className="flex justify-between items-center mt-6 pt-6 border-t border-t-gray-300">
            <button className=" px-4 py-2 border border-gray-300 rounded-lg cursor-pointer">
              Cancel
            </button>
            <button className="flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg gap-2 cursor-pointer">
              <FiArrowRight /> Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent2;
