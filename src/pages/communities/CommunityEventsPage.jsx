import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import EventItemCard from "../../components/EventItemCard";

function CommunityEventsPage() {
  const { id } = useParams();

  const events = useSelector(
    (state) => state.events.events
  );
  const communities = useSelector(state => state.communities.communities)
  const community = communities.find((c)=> c.id === Number(id))

  const communityEvents = events.filter(
    (event) => event.organizer.community === community.name
  );

  return (
    <div>
      <h2 className="text-xs font-semibold text-gray-400 mb-3">
        UPCOMING EVENTS
      </h2>

      {communityEvents.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {communityEvents.map((event) => (
            <EventItemCard
              key={event.id}
              event={event}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <h2 className="text-lg font-medium">
            No Upcoming Events
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            This community doesn't have any upcoming events yet.
          </p>
        </div>
      )}
    </div>
  );
}

export default CommunityEventsPage;
