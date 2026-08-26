import React from "react";
import { LuBookmark, LuCalendar, LuMapPin, LuUsers } from "react-icons/lu";
import { Link } from "react-router";
import TagBadge from "./TagBadge";
import ModalLoginALert from "./ModalLoginAlert";
import { useDispatch, useSelector } from "react-redux";
import { addJoinEventThunk, addSaveEventThunk, removeJoinedEventThunk, removeSavedEventThunk } from "../redux/slices/eventSlices";
import { FiCheck } from "react-icons/fi";
function EventItemCard({ event }) {
  const progress = Math.min((event.attendees.length / event.capacity) * 100, 100);
  const isLoggedin = useSelector((state) => state.auth.auth);
  const [show, setShow] = React.useState(false);
  const dispatch = useDispatch();

  const isJoined = event.attendees.includes(isLoggedin?.email)
  const isSaved = event.userSaved.includes(isLoggedin?.email)

  const handleJoinEvent = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isLoggedin) {
      setShow(true);
      return
    }
    if (!isJoined) {
    dispatch(
      addJoinEventThunk({
        eventId: event.id,
        userEmail: isLoggedin.email,
      }),
    );
    } else {
      dispatch(removeJoinedEventThunk({
        eventId: event.id,
        userEmail: isLoggedin.email
      }))
    }
  };

  const handleBookmark = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isLoggedin) {
      setShow(true);
      return
    }
    if (!isSaved) {

    dispatch(addSaveEventThunk({
      eventId: event.id,
      userEmail: isLoggedin.email
    }))
    } else {
      dispatch(removeSavedEventThunk({
        eventId: event.id,
        userEmail: isLoggedin.email
      }))
    }
  };
  return (
    <>
      <Link to={`/events/${event.id}`} className="block h-full">
        <article className="w-full max-w-sm h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:-translate-y-0.5 hover:shadow-md flex flex-col">
          <div className="relative">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="flex gap-2 absolute bottom-2 left-2">
              {event.tags.map((tag) => (
                <TagBadge key={tag} label={tag} />
              ))}
            </div>
          </div>
          <div className="p-5 flex flex-col flex-1 gap-1">
            <div className="pb-3">
              <h1 className="font-semibold text-xl line-clamp-2">
                {event.title}
              </h1>
            </div>
            <div className="flex gap-1.5 items-center text-color-text">
              <LuCalendar />
              <span>
                {event.date} · {event.startTime} WIB
              </span>
            </div>
            <div className="flex gap-1.5 items-center text-color-text">
              <LuMapPin />
              <span>{event.location}</span>
            </div>
            <div className="flex gap-1.5 items-center text-color-text">
              <LuUsers />
              <span>
                {event.attendees.length} / {event.capacity} attendees
              </span>
            </div>
            <div className="w-full flex flex-col gap-2 mt-2">
              <div className="w-full flex justify-between">
                <span>{event.attendees.length} attendees</span>
                <span>{event.capacity} capacity</span>
              </div>

              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-amber-500 h-2 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <div className="w-full flex items-center gap-2 py-2 mt-auto">
              <button
                onClick={handleJoinEvent}
                className={`w-full flex items-center justify-center gap-2 ${isJoined ? "bg-green-500"  : "bg-primary"} px-3 py-1.5 text-white rounded-lg cursor-pointer`}
              >
                <FiCheck className={ `${isJoined ? "block" : "hidden"}` } />
                {isJoined?  "Registered" : "Join Event"}
              </button>

              <button
                onClick={handleBookmark}
                className={` p-2 rounded-lg border  flex items-center cursor-pointer ${isSaved? "border-blue-500 bg-blue-100 text-blue-500" : "border-gray-300"}`}
              >
                <LuBookmark />
              </button>
            </div>
          </div>
        </article>
      </Link>
      <ModalLoginALert show={show} setShow={setShow} />
    </>
  );
}

export default EventItemCard;
