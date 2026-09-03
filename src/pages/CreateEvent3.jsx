import { FiArrowLeft, FiPlus, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import TagBadge from "../components/TagBadge.jsx";
import {
  addSpeaker,
  createEventThunk,
  removeSpeaker,
  resetEvent,
  updateEvent,
} from "../redux/slices/eventSlices";
import { useAuth } from "../hooks/useAuth.js";

function CreateEvent3() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { event } = useSelector((state) => state.events);
  const { user } = useAuth()
  console.log(user);


  const handleAddSpeaker = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const role = e.target.role.value.trim();
    if (!name || !role) return;
    dispatch(
      addSpeaker({
        name,
        role,
      }),
    );
    dispatch(updateEvent({
      organizer: {
        name: user.name


      }
    }))
    e.target.reset();
  };

  const handlePublishEvent = () => {
    dispatch(createEventThunk(event));
    dispatch(resetEvent())
    navigate("/create-event-success")
  };

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
            <form onSubmit={handleAddSpeaker} action="">
              <div>
                <label htmlFor="speakers">Speakers (optional)</label>

                <div className=" w-full flex items-center gap-2">
                  <input
                    className="border border-gray-300 rounded-lg w-full bg-white px-3 py-2.5 focus:outline-orange-500"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    id="speakers"
                  />
                  <input
                    className="w-full border border-gray-300 rounded-lg  bg-white px-3 py-2.5 focus:outline-orange-500"
                    type="text"
                    name="role"
                    placeholder="Backend Developer"
                  />
                  <button className="border border-gray-300 rounded-lg w-15 bg-white px-3 py-2.5 focus:outline-none cursor-pointer">
                    Add
                  </button>
                </div>
              </div>
            </form>
            <div>
              <div className="flex flex-wrap gap-2 mt-3">
                {event.speakers.length > 0 &&
                  event.speakers.map((speaker, index) => {
                    return (
                      <div
                        className="bg-white rounded-lg border border-gray-300 px-2 py-0.5 flex gap-2 "
                        key={index}
                      >
                        <div>
                          <p className="font-medium">{speaker.name}</p>
                          <p className="text-gray-500">{speaker.role}</p>
                        </div>
                        <div
                          onClick={() => {
                            dispatch(removeSpeaker(index));
                          }}
                          className="p-1"
                        >
                          <FiX />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className=" border border-gray-300 bg-white rounded-lg mt-6">
          <div className="px-4 py-2.5 flex items-center justify-between">
            <p className="text-color-text">Title</p>
            <span>{event?.title}</span>
          </div>
          <div className="px-4 py-2.5 flex items-center justify-between">
            <p className="text-color-text">Category</p>

            <TagBadge label={event.tags} />
          </div>
          <div className="px-4 py-2.5 flex items-center justify-between">
            <p className="text-color-text">Date</p>
            <span>{event.title}</span>
          </div>
          <div className="px-4 py-2.5 flex items-center justify-between">
            <p className="text-color-text">Time</p>
            <span>
              {event.startTime} - {event.endTime}{" "}
            </span>
          </div>
          <div className="px-4 py-2.5 flex items-center justify-between">
            <p className="text-color-text">Format</p>
            <span>{event?.location}</span>
          </div>
          <div className="px-4 py-2.5 flex items-center justify-between">
            <p className="text-color-text">Capacity</p>
            <span>{event?.capacity} Attendees</span>
          </div>
          <div className="px-4 py-2.5 flex items-center justify-between">
            <p className="text-color-text">Speakers</p>
            <span>{event.speakers?.length} added</span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6 pt-6 border-t border-t-gray-300">
          <button className=" flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer">
            <FiArrowLeft /> Back
          </button>
          <button
            className="flex items-center justify-center px-4 py-2 bg-orange-500 text-white rounded-lg gap-2 cursor-pointer"
            onClick={handlePublishEvent}
          >
            <FiPlus /> Publish Event
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateEvent3;
