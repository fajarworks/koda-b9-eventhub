// import React from "react";
import EventItemCard from "../../components/EventItemCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEventsUser } from "../../redux/slices/userSlices";

function ProfileEventPage() {
  const dispatch = useDispatch()
  const {userEvents} = useSelector((state)=> state.user )
  useEffect(()=> {
    dispatch(getEventsUser())
  },[dispatch])
  
  return (
    <div className="max-w-5xl mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      {userEvents?.data?.map((item) => {
        return (
          <EventItemCard key={item.id} event={item} />
      )
    })}
  </div>
    </div>
  )
}

export default ProfileEventPage;
