import React from "react";
import { LuMapPin, LuPencil } from "react-icons/lu";
import EditProfileModal from "../components/EditProfileModal";
import { Toaster } from "react-hot-toast";
import { NavLink, Outlet } from "react-router";
import { useSelector } from "react-redux";

function ProfileLayout() {
  const [isShow, setIsShow] = React.useState(false);
  const isLoggedIn = useSelector(state => state.auth.auth)


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
      <div className="max-w-5xl mx-auto p-6">
        <div className=" flex gap-3">
          <div className="w-20 h-20 rounded-xl overflow-hidden">
            <img src="/images/alex-kim.jpg" alt="" className="w-full h-full" />
          </div>
          <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="pb-3">
                <p className="text-xl font-medium">{ isLoggedIn.fullName }</p>
                <p className="text-color-text cursor-pointer">
                  {isLoggedIn.email}
                </p>
              </div>
              <div>
                <button
                  onClick={handleEditProfile}
                  type="button"
                  className="border border-gray-300 flex items-center px-2 py-0.5 rounded-lg gap-2 text-color-text hover:bg-gray-300  cursor-pointer"
                >
                  <LuPencil />
                  Edit Profile
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <LuMapPin />
              <p className="text-color-text">Bandung, Indonesia</p>
            </div>
            <div className="flex items-center">
              <p className="text-color-text"> Joined March 2025</p>
            </div>
            <span className="text-red-400 bg-red-100 rounded-lg px-2">
              Attendee
            </span>
            <div className="max-w-2xl">
              <p className="text-color-text">
                Backend engineer & community builder. Passionate about Go,
                distributed systems, and connecting people through events.
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
        <div className=" max-w-5xl mx-auto flex gap-6">
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
