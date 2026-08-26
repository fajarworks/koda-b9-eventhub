import React from "react";
import { useSelector } from "react-redux";
import EventItemCard from "../../components/EventItemCard";
import { LuBookmark } from "react-icons/lu";
import { Link } from "react-router";

function SavedEventPage() {
  const events = useSelector((state) => state.events.events);
  const isLoggedIn = useSelector((state) => state.auth.auth);

  const savedEvents = events.filter((event) =>
    event.userSaved?.includes(isLoggedIn?.email)
  );

  return (
    <div>
      {savedEvents.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {savedEvents.map((event) => (
            <EventItemCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 text-gray-400">
            <LuBookmark size={40} />
          </div>

          <h1 className="mt-5 text-xl font-semibold">
            No Saved Events
          </h1>

          <p className="mt-2 text-color-text">
            Bookmark events you're interested in.
            </p>
            <Link className="px-4 py-2 bg-primary rounded-lg text-white mt-5" to="/explore">

              Explore Events
            </Link>
        </div>
      )}
    </div>
  );
}

export default SavedEventPage;
