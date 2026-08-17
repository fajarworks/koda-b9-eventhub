import {
  FiHome,
  FiCompass,
  FiCalendar,
  FiUsers,
  FiUser,
  FiLogOut,
} from "react-icons/fi";
import { Link } from "react-router";

function NavbarMobile({ userActive, onClose, onSignOut }) {
  return (
    <div className="absolute right-2 top-20 w-72 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden z-50">
      {userActive ? (
        <>
          {/* Profile */}
          <div className="p-4 flex items-center gap-3">
            <img
              src="/images/alex-kim.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div>
              <p className="font-semibold">{userActive.fullName}</p>
              <p className="text-sm text-gray-400">{userActive.email}</p>
            </div>
          </div>

          <div className="border-t border-gray-200" />

          {/* Navigation */}
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

          <div className="border-t border-gray-200" />

          {/* Sign Out */}
          <button
            onClick={onSignOut}
            className="w-full flex items-center gap-4 px-5 py-4 text-red-500 hover:bg-red-50"
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
