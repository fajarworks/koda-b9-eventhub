import { BiSolidMapPin } from "react-icons/bi";
import { BsFillLaptopFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { updateEvent } from "../redux/slices/eventSlices";

function CreateEvent2() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateEvent({
        date: e.target.date.value,
        startTime: e.target.startTime.value,
        endTime: e.target.endTime.value,
        format: e.target.format.value,
        location: e.target.location.value,
        capacity: e.target.capacity.value,
      }),
      navigate("/create-event/3")
    );
  };
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-8">
        <div>
          <h1 className="font-bold text-2xl">Basic Information</h1>
          <p className="text-color-text">
            Tell Attendees what your event is about.
          </p>
        </div>
        <form action=""
          onSubmit={handleSubmit}>
          <div className="pt-6">
            <label htmlFor="date">Event Date</label>
            <input
              className="border border-gray-300 rounded-lg w-full bg-white px-3 py-2.5 focus:outline-none"
              type="date"
              name="date"
              id="date"
            />
          </div>
          <div className="flex gap-2 pt-6">
            <div className="">
              <label htmlFor="starTime">Start Time</label>
              <input
                className="block border border-gray-300 rounded-lg w-full bg-white px-3 py-2.5 focus:outline-none"
                type="time"
                name="startTime"
                id="startTime"
              />
            </div>
            <div>
              <label htmlFor="endTime">End Time</label>
              <input
                className="block border border-gray-300 rounded-lg w-full bg-white px-3 py-2.5 focus:outline-none"
                type="time"
                name="endTime"
                id="endTime"
              />
            </div>
          </div>
          <div className="pt-6">
            <label className="block mb-2">Event Format</label>

            <div className="flex gap-1 w-fit bg-gray-300 rounded-lg p-2">
              <label
                htmlFor="inperson"
                className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-50 has-checked:bg-white"
              >
                <input
                  type="radio"
                  name="format"
                  id="inperson"
                  value="inPerson"
                  hidden
                  defaultChecked
                />
                <span className="flex items-center gap-2">
                  {" "}
                  <BiSolidMapPin /> In Person
                </span>
              </label>

              <label
                htmlFor="online"
                className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-50 has-checked:bg-white"
              >
                <input
                  type="radio"
                  name="format"
                  id="online"
                  value="online"
                  hidden
                />
                <span className="flex items-center gap-2">
                  {" "}
                  <BsFillLaptopFill />
                  Online
                </span>
              </label>
            </div>
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
            <button
              type="submit"
              className="flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg gap-2 cursor-pointer"
            >
              <FiArrowRight /> Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent2;
