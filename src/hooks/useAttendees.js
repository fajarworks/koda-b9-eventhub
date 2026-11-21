import React from "react";

const API_URL = import.meta.env.VITE_API_URL;

export function useEventAttendees(eventId, initial = 0){
  const [count, setCount] = React.useState(initial)
  const [connected, setConnected] = React.useState(false)

  React.useEffect(()=>{
  if (!eventId) return
    const es = new EventSource(`${API_URL}/events/${eventId}/attendees/stream`)
    es.onopen = ()=> setConnected(true)
    es.onerror = ()=> setConnected(false)
    es.addEventListener("attendees", (e)=> {
      setCount(JSON.parse(e.data).count)
    })
    return ()=> es.close()
  },[eventId])
  return { count, connected}
}