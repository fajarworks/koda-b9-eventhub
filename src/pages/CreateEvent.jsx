import {  FiArrowRight } from "react-icons/fi";

function CreateEvent() {
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
            <label className="" htmlFor="image">
              Cover Image
            </label>
          </div>
          <div className="pt-6">
            <label htmlFor="title">Event Title</label>
            <input
              className="border border-gray-300 rounded-lg w-full bg-white px-3 py-2.5 focus:outline-none"
              type="text"
              name="title"
              id="title"
            />
          </div>
          <div className="pt-6">
            <label htmlFor="description">Description</label>
            <textarea
              className="border border-gray-300 rounded-lg w-full bg-white px-3 py-2.5 focus:outline-none"
              name="description"
              id="description"
              rows={5}
              placeholder="what will attendees learn or experience?"
            ></textarea>
          </div>
          <div className="pt-6">
            <label htmlFor="category">Category</label>
            <select
              className="block border border-gray-300 rounded-lg w-full bg-white px-3 py-2.5 focus:outline-none"
              name="category"
              id="category"
            >
              <option value="">Select Category</option>
              <option value="Technology">Technology</option>
              <option value="bussines">Bussines</option>
              <option value="ai">AI</option>
              <option value="career">Career</option>
              <option value="programming">Programming</option>
            </select>
          </div>
          <div className="pt-6">
            <label htmlFor="community">Community</label>
            <select
              className="block border border-gray-300 rounded-lg w-full bg-white px-3 py-2.5 focus:outline-none"
              name="category"
              id="category"
            >
              <option>No Community</option>
            </select>
          </div>
          <div className="flex justify-between items-center mt-6 pt-6 border-t border-t-gray-300">
            <button className=" px-4 py-2 border border-gray-300 rounded-lg cursor-pointer">Cancel</button>
            <button className="flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg gap-2 cursor-pointer"><FiArrowRight/> Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
