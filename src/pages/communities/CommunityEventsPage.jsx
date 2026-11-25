import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import EventItemCard from "../../components/EventItemCard";
import { GetEventsByCommunityId } from "../../redux/slices/eventSlices";

function CommunityEventsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.events);
  console.log(events)
  React.useEffect(() => {
    dispatch(
      GetEventsByCommunityId({
        communityId: id,
      }),
    );
  }, [dispatch, id]);

  return (
    <div>
      <h2 className="text-xs font-semibold text-gray-400 mb-3">
        UPCOMING EVENTS
      </h2>

      {events.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event) => (
            <EventItemCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <h2 className="text-lg font-medium">No Upcoming Events</h2>

          <p className="text-sm text-gray-500 mt-1">
            This community doesn't have any upcoming events yet.
          </p>
        </div>
      )}
    </div>
  );
}

export default CommunityEventsPage;
