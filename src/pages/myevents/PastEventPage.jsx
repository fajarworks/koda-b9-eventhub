import React from 'react';
import { useSelector } from 'react-redux';
import EventItemCard from '../../components/EventItemCard';

function PastEventPage() {
  const events = useSelector(state => state.events.events)
  const isLoggedIn = useSelector(state => state.auth.auth)


  const pastEvents = events.filter((events) => {
    const isJoined = events.attendees.includes(isLoggedIn.email)
    const isPast = new Date(events.date) < new Date()
    return isJoined && isPast
  })


  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
      {pastEvents.map((event) => (
        <EventItemCard key={ event.id } event={event} />
      ))}
    </div>
  );
}

export default PastEventPage;
