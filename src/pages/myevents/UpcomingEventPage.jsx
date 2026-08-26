import React from "react";
import { useSelector } from "react-redux";
import EventItemCard from "../../components/EventItemCard";

function UpcomingEventPage() {
  const event = useSelector((state) => state.events.events);
  const isLoggedIn = useSelector((state) => state.auth.auth);

  const upcomingEvents = event.filter((event) =>
    event.attendees?.includes(isLoggedIn?.email),
  );

  return (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      {upcomingEvents.map((item) => {
        return (
          <EventItemCard key={item.id} event={item} />
      )
    })}
  </div>
  )
}

export default UpcomingEventPage;
