import {
  FiHome,
  FiCompass,
  FiCalendar,
  FiUsers,
  FiUser,
  FiLogOut,
} from "react-icons/fi";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth";

function NavbarMobile({ userActive, onClose, onSignOut }) {
  const { user } = useAuth()
  return (
    <div className="absolute right-0 top-14 w-72 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden z-50">
      {userActive ? (
        <>
          <div className="p-4 flex items-center gap-3">
            <div className="w-7 h-7 rounded-full overflow-hidden bg-orange-500">
              {user?.data?.photo_profile ? (<img src={user?.data?.photo_profile || user?.photo_profile} alt="" className="w-full h-full" />) : (<span className="text-lg w-full h-full flex items-center justify-center capitalize text-white">{ user?.data?.fullname.charAt(0) || user.fullname.charAt(0) }</span>) }

            </div>
            <div>
              <p className="font-semibold">{user?.data?.fullName || user.fullName}</p>
              <p className="text-sm text-gray-400">{user?.data?.email ||  user.email}</p>
            </div>
          </div>
          <div className="border-t border-gray-200" />
          <div className="py-2">
            <Link
              to="/explore"
              onClick={onClose}
              className="flex items-center gap-4 px-5 py-3 hover:bg-orange-50"
            >
              <FiHome size={20} />
              <span>Explore</span>
            </Link>

            <Link
              to="/events"
              onClick={onClose}
              className="flex items-center gap-4 px-5 py-3 hover:bg-orange-50 cursor-pointer"
            >
              <FiCompass size={20} />
              <span>Events</span>
            </Link>

            <Link
              to="/communities"
              onClick={onClose}
              className="flex items-center gap-4 px-5 py-3 hover:bg-orange-50 cursor-pointer"
            >
              <FiUsers size={20} />
              <span>Communities</span>
            </Link>

            <Link
              to="/my-events"
              onClick={onClose}
              className="flex items-center gap-4 px-5 py-3 hover:bg-orange-50 cursor-pointer"
            >
              <FiCalendar size={20} />
              <span>My Events</span>
            </Link>

            <Link
              to="/profile"
              onClick={onClose}
              className="flex items-center gap-4 px-5 py-3 hover:bg-orange-50 cursor-pointer"
            >
              <FiUser size={20} />
              <span>My Profile</span>
            </Link>
          </div>
          <div className="border-t border-gray-200" />
          <button
            onClick={onSignOut}
            className="w-full flex items-center gap-4 px-5 py-4 text-red-500 hover:bg-red-50 cursor-pointer"
          >
            <FiLogOut size={20} />
            <span>Sign Out</span>
          </button>
        </>
      ) : (
        <div className="p-5">
          <p className="text-color-text text-sm">Browsing as guest</p>
          <div className="py-2 text-color-text ">
            <Link
              to="/explore"
              onClick={onClose}
              className="flex items-center gap-4 px-5 py-3 hover:bg-orange-50"
            >
              <FiHome size={20} />
              <span>Explore</span>
            </Link>

            <Link
              to="/events"
              onClick={onClose}
              className="flex items-center gap-4 px-5 py-3 hover:bg-orange-50"
            >
              <FiCompass size={20} />
              <span>Events</span>
            </Link>
                    <Link
              to="/communities"
              onClick={onClose}
              className="flex items-center gap-4 px-5 py-3 hover:bg-orange-50"
            >
              <FiUsers size={20} />
              <span>Communities</span>
            </Link>
            <Link
              to="/my-events"
              onClick={onClose}
              className="flex items-center gap-4 px-5 py-3 hover:bg-orange-50"
            >
              <FiCalendar size={20} />
              <span>My Events</span>
            </Link>
            <Link
              to="/profile"
              onClick={onClose}
              className="flex items-center gap-4 px-5 py-3 hover:bg-orange-50"
            >
              <FiUser size={20} />
              <span>My Profile</span>
            </Link>
          </div>
          <Link
            to="/auth/login"
            onClick={onClose}
            className="block w-full mt-3 px-4 py-2 text-center rounded-lg bg-primary text-white hover:opacity-90"
          >
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavbarMobile;
