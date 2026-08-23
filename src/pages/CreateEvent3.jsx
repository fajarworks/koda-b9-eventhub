import React from "react";
import { FiArrowLeft, FiCheck, FiX } from "react-icons/fi";

function CreateEvent3() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-8">
        <div>
          <div>
            <h1 className="font-bold text-2xl">Speakers & Review</h1>
            <p className="text-color-text">
              Tell Attendees what your event is about.
            </p>
          </div>
          <div className="pt-6">
            <form action="">
              <div>
                <label htmlFor="speakers">Speakers (optional)</label>

                <div className=" flex items-center gap-2">
                  <input
                    className="border border-gray-300 rounded-lg w-full bg-white px-3 py-2.5 focus:outline-none"
                    type="text"
                    name="speakers"
                    id="speakers"
                  />
                  <button className="border border-gray-300 rounded-lg w-15 bg-white px-3 py-2.5 focus:outline-none">
                    Add
                  </button>
                </div>
              </div>
            </form>
            <div>
              <div className="mt-2">
                <span className="flex bg-gray-300 rounded-full w-20 items-center gap-1 px-3 py-1 border border-gray-500">
                  Alwi
                  <FiX />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" border border-gray-300 bg-white rounded-lg mt-6">
          <div className="px-4 py-2.5 flex items-center justify-between">
            <p className="text-color-text">Title</p>
            <span>My Event</span>
          </div>
          <div className="px-4 py-2.5 flex items-center justify-between">
            <p className="text-color-text">Category</p>
            <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-500">Technology</span>
          </div>
          <div className="px-4 py-2.5 flex items-center justify-between">
            <p className="text-color-text">Date</p>
            <span>2026-08-27</span>
          </div>
          <div className="px-4 py-2.5 flex items-center justify-between">
            <p className="text-color-text">Time</p>
            <span>11:11 - 12:12 WIB</span>
          </div>
          <div className="px-4 py-2.5 flex items-center justify-between">
            <p className="text-color-text">Format</p>
            <span>Legenda Wisata</span>
          </div>
          <div className="px-4 py-2.5 flex items-center justify-between">
            <p className="text-color-text">Capacity</p>
            <span>400 Attendees</span>
          </div>
          <div className="px-4 py-2.5 flex items-center justify-between">
            <p className="text-color-text">Speakers</p>
            <span>1 added</span>
          </div>

        </div>
        <div className="flex justify-between items-center mt-6 pt-6 border-t border-t-gray-300">
          <button className=" flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer">
            <FiArrowLeft /> Back
          </button>
          <button className="flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-lg gap-2 cursor-pointer">
            <FiCheck /> Publish Event
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent3;
