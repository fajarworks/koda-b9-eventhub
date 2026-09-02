import React, { useState } from "react";
import { FiBell, FiGrid, FiMenu, FiMoon, FiUsers, FiX } from "react-icons/fi";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { Link, NavLink, useNavigate } from "react-router";
import NavbarMobile from "./NavbarMobile";
import { useSelector } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import ModalLogoutAlert from "./ModalLogoutAlert";

function Header() {
  const [show, setShow] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenu, setIsMobileMenu] = React.useState(false);
  const {users} = useSelector((state) => state.users);
  const { user } = useAuth();

  const personalInfo = users.find((u) => u.email === user?.email);

  const navigate = useNavigate();

  const handleSignOut = () => {
    setIsMenuOpen(false);
    setIsMobileMenu(false);
    setShow(true)
  };

  const handleProfile = () => {
    setIsMenuOpen(false);
    navigate("/profile");
  };

  return (
    <header className="w-full px-6 py-4 bg-white border-b border-gray-300 sticky top-0 z-50">
      <nav className="flex mx-auto justify-between">
        <div className="flex items-center gap-2">
          <Logo className="text-black" />
          <Navbar />
        </div>

        <div className="flex items-center justify-center gap-2">
          <div>
            {user?.role === "organizer" && (
              <NavLink
                to="/organizer-dashboard"
                className={({ isActive }) =>
                  `hidden lg:flex items-center justify-center gap-2 p-2 rounded-full ${
                    isActive
                      ? "bg-orange-100 text-primary"
                      : "text-color-text hover:bg-gray-100"
                  }`
                }
              >
                <FiGrid size={24} />
                Dashboard
              </NavLink>
            )}

            {user?.role === "admin" && (
              <NavLink
                to="/admin-dashboard"
                className={({ isActive }) =>
                  `hidden lg:flex items-center justify-center gap-2 p-2 rounded-full ${
                    isActive
                      ? "bg-orange-100 text-primary"
                      : "text-color-text hover:bg-gray-100"
                  }`
                }
              >
                <FiGrid size={24} />
                Dashboard
              </NavLink>
            )}
          </div>
          <div>
            {user ? (
              <Link to="/notifications">
                <FiBell size={24} />
              </Link>
            ) : (
              <p className=" hidden lg:block text-color-text pr-1">
                browsing as guest
              </p>
            )}
          </div>

          <button className="p-2 cursor-pointer">
            <FiMoon size={24} />
          </button>

          <div className="relative md:hidden">
            <button onClick={() => setIsMobileMenu((prev) => !prev)}>
              {isMobileMenu ? <FiX /> : <FiMenu />}
            </button>
            {isMobileMenu && (
              <NavbarMobile
                userActive={user}
                onClose={() => setIsMobileMenu(false)}
                onSignOut={handleSignOut}
              />
            )}
          </div>
          <div className=" hidden relative md:block">
            {user ? (
              <>
                <button
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  className="cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full overflow-hidden bg-orange-500">
                    {personalInfo?.photoProfile ? (<img src={personalInfo?.photoProfile || user?.photoProfile} alt="" className="w-full h-full" />) : (<span className="text-lg w-full h-full flex items-center justify-center capitalize text-white">{ personalInfo?.fullName.charAt(0) || user.fullName.charAt(0) }</span>) }

                  </div>
                </button>

                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-50 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50 text-clip">
                    <div className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 cursor-default">
                      <p className="font-medium">{personalInfo?.fullName || user.fullName}</p>
                    </div>
                    <div className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 cursor-default">
                      <p>{personalInfo?.email || user.email}</p>
                    </div>
                    <div
                      onClick={handleProfile}
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-color-text hover:bg-gray-100"
                    >
                      <span>
                        <FiUsers />
                      </span>
                      <span>Profile</span>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100 cursor-pointer"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </>
            ) : (
              <Link
                to={"/auth/login"}
                className="px-4 py-1.5 rounded-lg text-white bg-primary cursor-pointer"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </nav>
      <ModalLogoutAlert show={show} setShow={setShow}/>
    </header>
  );
}

export default Header;
