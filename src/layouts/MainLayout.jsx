import { useEffect } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router";
import { useDispatch } from "react-redux";
import { GetJoinedCommunities } from "../redux/slices/communitySlices";
function MainLayout() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(GetJoinedCommunities())
  },[dispatch])

  return (

    <>
      <Header />
      <Outlet />
    </>
  );
}

export default MainLayout;
