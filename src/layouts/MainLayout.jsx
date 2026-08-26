import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { Outlet } from "react-router";
import events from "../data/events.json";
import communities from "../data/communities.json"
import { getEventThunk } from '../redux/slices/eventSlices';
import { getCommunitiesThunk } from '../redux/slices/communitySlices';

function MainLayout() {
  const dispatch = useDispatch();
  const eventList = useSelector(state => state.events.events)
  const communityList = useSelector(state => state.communities.communities)
  React.useEffect(() => {
    if (eventList.length === 0) {

    dispatch(getEventThunk(events))
    }
    if (communityList.length === 0) {
      dispatch(getCommunitiesThunk(communities))
    }
  },[dispatch, eventList.length, communityList.length])

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default MainLayout;
