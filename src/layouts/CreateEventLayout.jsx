// import React from 'react';
import CreateEventNav from '../components/CreateEventNav';
import { Outlet } from 'react-router';

function CreateEventLayout() {
  return (
    <>
      <CreateEventNav />
      <Outlet/>
    </>
  );
}

export default CreateEventLayout;
