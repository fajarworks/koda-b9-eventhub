import React from "react";
import { LuCalendar, LuMapPin, LuPencil } from "react-icons/lu";
import EditProfileModal from "../components/EditProfileModal";
import { Toaster } from "react-hot-toast";
import { NavLink, Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import ChangePasswordModal from "../components/ChangePasswordModal";
import { FiKey } from "react-icons/fi";
import { profileUserThunk } from "../redux/slices/userSlices";
import { dateFormat } from "../utils/dateFormatter";

function ProfileLayout() {
  const [isShow, setIsShow] = React.useState(false);
  const [isShowChangePass, setIsShowChangePass] = React.useState(false)
  const dispatch = useDispatch()
  
  React.useEffect(()=> {
    
    dispatch(profileUserThunk())
  },[dispatch])

  const {user} = useSelector(state => state.user)

  const date = dateFormat(user?.data?.created_at)
  
  const handleEditProfile = () => {
    setIsShow((prev) => !prev);
  };
  const tabs = [
    {
      name: "events",
      path: "/profile/events",
    },
    {
      name: "community",
      path: "/profile/communities",
    },
    {
      name: "Saved",
      path: "/profile/saved",
    },
  ];
  return (
    <main>
      <Toaster />
      <EditProfileModal isShow={isShow} setIsShow={setIsShow} />
      <ChangePasswordModal showModal= {isShowChangePass} setShowModal={setIsShowChangePass}/>
      <div className="max-w-5xl mx-auto p-6">
        <div className=" flex gap-3">
          <div className="w-20 h-20 rounded-xl overflow-hidden bg-orange-500">
            {user?.data?.photo_profile ? (<img src={`http://localhost:8081${user?.data?.photo_profile}`} alt={user?.data?.fullname} className="w-full h-full" />) : (<span className="text-3xl w-full h-full flex items-center justify-center capitalize text-white">{ user?.data?.fullname?.charAt(0) }</span>) }
          </div>
          <div className="w-full">
            <div>
              <p className="font-medium text-xl">
              {user?.data?.fullname}
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="center">
                <p className="text-xl font-medium">{}</p>
                <p className="text-gray-500">
                  {user?.data?.email}
                </p>
              </div>
              <div className="">
                <button
                  onClick={handleEditProfile}
                  type="button"
                  className="border border-gray-300 flex items-center px-2 py-0.5 rounded-lg gap-2 text-color-text hover:bg-gray-300  cursor-pointer"
                >
                  <LuPencil />
                  Edit Profile
                </button>
                <button
                  onClick={()=> setIsShowChangePass(prev => !prev)}
                  type="button"
                  className="bg-orange-500 flex items-center px-2 py-0.5 rounded-lg gap-2 text-white hover:bg-orange-400  cursor-pointer mt-2"
                >
                  <FiKey/>
                  change Password
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <LuMapPin />
                <p className="text-color-text">
                  {user?.data?.location ? user?.data?.location : "don't set any location yet "}
                </p>
              </div>
              <div className="flex items-center gap-2 text-color-text">
                <LuCalendar />
                
                <p>{date}</p>
              </div>
            </div>
              <span className=" text-red-400 bg-red-100 rounded-lg px-2">
                {user?.data?.role}
              </span>
            <div className="max-w-2xl">
              <p className="text-color-text">
                {user?.data?.bio ? user?.data?.bio : "don't have bio yet"}
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 py-6 w-full">
          <div className="text-center">
            <p className="font-medium text-xl">3</p>
            <p>Events</p>
          </div>
          <div className="text-center border-gray-300 border-l-2 border-r-2">
            <p className="font-medium text-xl">1</p>
            <p>Communities</p>
          </div>
          <div className="text-center">
            <p className="font-medium text-xl">0</p>
            <p>Saved</p>
          </div>
        </div>
      </div>
      <div className="mt-5 border-b border-gray-200">
        <div className=" max-w-5xl mx-auto flex gap-6 px-4">
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              className={({ isActive }) =>
                `pb-3 text-sm font-medium border-b-2 ${
                  isActive
                    ? "border-primary text-primary"
                    : "border-transparent text-color-text"
                }`
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="py-4">
        <Outlet />
      </div>
    </main>
  );
}

export default ProfileLayout;
