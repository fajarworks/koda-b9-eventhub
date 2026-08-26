import React from "react";
import { useSelector } from "react-redux";
import EventItemCard from "../../components/EventItemCard";

function ProfileEventPage() {
  const events = useSelector((state) => state.events.events);
  const isLoggedIn = useSelector((state) => state.auth.auth);
  const getEvents = events.filter((event) =>
    event.attendees?.includes(isLoggedIn?.email),
  );
  return (
    <div className="max-w-5xl mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      {getEvents.map((item) => {
        return (
          <EventItemCard key={item.id} event={item} />
      )
    })}
  </div>
    </div>
  )
}

export default ProfileEventPage;
