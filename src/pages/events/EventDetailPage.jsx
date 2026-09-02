import React from "react";
import { BsShare } from "react-icons/bs";
import { CiChat1 } from "react-icons/ci";
import { FiArrowLeft, FiUsers } from "react-icons/fi";
// import events from "../../data/events.json";
import { LuBookmark, LuCalendar, LuClock, LuMapPin, LuSendHorizontal } from "react-icons/lu";
import { Link, useParams } from "react-router";
import TagBadge from "../../components/TagBadge";
import { useDispatch, useSelector } from "react-redux";
import { addJoinEventThunk, removeJoinedEventThunk } from "../../redux/slices/eventSlices";
import ModalLoginALert from "../../components/ModalLoginAlert";

function EventDetailPage() {
  const [show, setShow] = React.useState(false);
  const events = useSelector(state => state.events.events)
  const isLoggedIn = useSelector((state)=> state.auth.auth)
  const dispatch = useDispatch()
  const { id } = useParams();
  const event = events.find((e) => e.id === Number(id));
  const progress = Math.min(
    (event.attendees.length / event.capacity) * 100,
    100,
  );
  const isJoined = event.attendees.includes(isLoggedIn?.email)

  const handleJoinEvent = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isLoggedIn) {
      setShow(true);
      return
    }
    if (!isJoined) {
    dispatch(
      addJoinEventThunk({
        eventId: event.id,
        userEmail: isLoggedIn.email,
      }),
    );
    } else {
      dispatch(removeJoinedEventThunk({
        eventId: event.id,
        userEmail: isLoggedIn.email
      }))
    }
  };

  return (
    <main className="p-6">
      <div className="flex">
        <Link to="/events" className="flex items-center gap-2 py-2">
          <FiArrowLeft /> Back to Events
        </Link>
      </div>
      <div className="min-h-screen overflow-hidden grid grid-cols-1 gap-2 lg:grid-cols-[7fr_3fr] w-full ">
        <section className="">
          <div className="w-full rounded-lg overflow-hidden">
            <img
              className="w-full object-cover"
              src={event.image || "/images/image1.png"}
              alt={event.title}
            />
          </div>
          <div className="flex gap-2">
            {event.tags.map((t) => (
              <TagBadge key={t} label={t} />
            ))}
          </div>

          <h1 className="font-medium text-2xl">{event.title}</h1>
          <div className="md:hidden border border-gray-300 rounded-lg bg-white w-full p-4 mt-2  ">
            <div className="flex gap-1.5 items-center text-color-text justify-between flex-col">
              <div className="w-full flex justify-between">
                <span>{event.attendees.length} attendees</span>
                <span>{event.capacity} capacity</span>
              </div>
              <div className=" w-full bg-gray-300 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="w-full py-4">
                <button onClick={handleJoinEvent} className={`w-full ${isJoined ? "bg-green-500" : "bg-orange-500" } px-3 py-1.5 text-white rounded-lg cursor-pointer`}>
                 {isJoined ? "Registered" : "Join Event"}
                </button>
              </div>
              <div className="flex w-full gap-2 items-center">
                <button className="px-3 py-1.5 border border-gray-300 w-full text-color-text rounded-lg flex items-center gap-2 justify-center cursor-pointer">
                  {" "}
                  <LuBookmark /> Save
                </button>
                <button className="px-3 py-1.5 border border-gray-300 w-full text-color-text rounded-lg flex items-center gap-2 justify-center cursor-pointer">
                  <BsShare /> Share
                </button>
              </div>
            </div>
          </div>
          <div className="py-2">
            <h2 className="font-medium text-xl py-2">About this event</h2>
            <p className="text-color-text">{event.description}</p>
          </div>
          <div>
            <div className="py-2">
              <p className="font-medium">Speakers</p>
            </div>
            <div className="flex gap-4">
              {event.speakers.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex items-center border border-gray-300 p-4 rounded-lg gap-2 w-full"
                  >
                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                      <img
                        className="object-cover"
                        src={item.avatar}
                        alt={item.name}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-lg">
                        {item.name}
                      </p>
                      <p className="text-color-text  text-sm md:text-lg">
                        {item.role}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <article className="py-4">
              <div className="flex items-center gap-2 py-2">
                <CiChat1 size={28} />
                <p className="font-semibold text-xl">Discussion</p>
                <p>(3)</p>
              </div>
              {event.discussions?.map((item) => {
                return (
                  <div key={item.id} className="py-2">
                    <div className="flex gap-2">
                      <div className="w-7 h-7 rounded-full overflow-hidden">
                        <img
                          className="object-cover"
                          src={item.avatar}
                          alt={item.name}
                        />
                      </div>
                      <div className="border border-gray-300 w-full p-2 rounded-lg">
                        <div>
                          <span className="font-medium text-sm pr-2">
                            {item.name}
                          </span>
                          <span className="text-color-text text-xs">
                            {item.timeAgo}
                          </span>
                        </div>
                        <div className="">
                          <p className="text-color-text">{item.message}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="flex gap-2">
                <div>
                  <img src="/images/pp-dina-rahayu.png" alt="" />
                </div>
                <div className="relative w-full">
                  <input
                    className="w-full rounded-2xl px-4 py-2 border border-gray-300 pr-10 focus:outline-none text-color-text"
                    type="text"
                    name="discussion"
                    id="discussion"
                    placeholder="add to the discussion"
                  />
                  <LuSendHorizontal
                    className="absolute top-1/2 -translate-y-1/2 right-4"
                    color="amber"
                    size={18}
                  />
                </div>
              </div>
            </article>
          </div>
          <div className="">
            <div className="py-4">
              <h3 className="font-medium text-xl">You might also like</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
              <article className="border-gray-300 rounded-lg overflow-hidden border shadow-lg">
                <div className="w-full">
                  <img src="/images/image1.png" alt="" />
                </div>
                <div className="p-2">
                  <p className="font-medium">Frontend Craft Conference</p>
                  <p className="text-color-text">Oct 12, 2026</p>
                </div>
              </article>
              <article className="border-gray-300 rounded-lg overflow-hidden border shadow-lg">
                <div className="w-full">
                  <img src="/images/image1.png" alt="" />
                </div>
                <div className="p-2">
                  <p className="font-medium">Frontend Craft Conference</p>
                  <p className="text-color-text">Oct 12, 2026</p>
                </div>
              </article>
              <article className="border-gray-300 rounded-lg overflow-hidden border shadow-lg">
                <div className="w-full">
                  <img src="/images/image1.png" alt="" />
                </div>
                <div className="p-2">
                  <p className="font-medium">Frontend Craft Conference</p>
                  <p className="text-color-text">Oct 12, 2026</p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="">
          <article className="hidden md:block p-4 border border-gray-300 rounded-lg ">
            <div>
              <span>Event Info</span>
              <span className="flex gap-1 items-center text-color-text">
                <LuCalendar />
                {event.date}
              </span>
              <span className="flex gap-1 items-center text-color-text">
                <LuClock />
                {event.startTime} - {event.endTime} WIB
              </span>
              <span className="flex gap-1 items-center text-color-text">
                <LuMapPin />
                {event.location}
              </span>
              <div className="flex items-center gap-2 ">
                <FiUsers />
                <span className="text-color-text">
                  {Math.round((event.attendees.length / event.capacity) * 100)}%
                  full · {event.capacity - event.attendees.length} spots left
                </span>
              </div>
            </div>
            <div className="flex gap-1.5 items-center text-color-text justify-between flex-col">
              <div className="w-full flex justify-between">
                <span>{event.attendees.length} attendees</span>
                <span>{event.capacity} capacity</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <div className="w-full py-4">
              <button onClick={handleJoinEvent} className={`w-full ${isJoined ? "bg-green-500" : "bg-orange-500" } px-3 py-1.5 text-white rounded-lg cursor-pointer`}>
                {isJoined ? "Registered" : "Join Event"}
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <button className="px-3 py-1.5 border border-gray-300 w-full text-color-text rounded-lg flex items-center gap-2 justify-center cursor-pointer">
                {" "}
                <LuBookmark /> Save
              </button>
              <button className="px-3 py-1.5 border border-gray-300 w-full text-color-text rounded-lg flex items-center gap-2 justify-center cursor-pointer">
                <BsShare /> Share
              </button>
            </div>
          </article>
          <article className="hidden md:block p-4 border border-gray-300 rounded-lg shadow-md mt-2">
            <p className="text-color-text font-medium">ORGANIZED BY</p>
            <div className="flex items-center gap-3 py-1">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={event.organizer.avatar || null}
                  alt={event.organizer.name}
                  className="object-cover"
                />
              </div>
              <div className="">
                <p className="font-medium">{event.organizer.name}</p>
                <p className="text-blue-500">{event.organizer.community}</p>
              </div>
            </div>
          </article>
        </section>
      </div>
      <ModalLoginALert show={show} setShow={setShow} />
    </main>
  );
}

export default EventDetailPage;
