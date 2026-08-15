// import React from 'react';

import { FiMoon } from "react-icons/fi";
import { NavLink } from "react-router";
import Logo from "./Logo";
function Header() {

  return (
    <>
      <header className="w-full p-6 bg-white border-b border-gray-300">
        <nav className="flex mx-auto max-w-7xl justify-between">
          <div className="flex  my-center gap-2">
            <Logo className="text-black" />
            <ul className="flex text-color-text my-center gap-2">
              <li>
                <NavLink to="/explore">
                  {({ isActive }) => (
                    <span className={isActive ? "nav-active px-3 py-1.5" : "text-gray px-3 py-1.5"}>Explore</span>
                    )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/events">
                  {({ isActive }) => (
                    <span className={isActive ? "nav-active px-3 py-1.5" : "text-gray px-3 py-1.5"}>Event</span>
                    )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/communities">
                  {({ isActive }) => (
                    <span className={isActive ? "nav-active px-3 py-1.5" : "text-gray px-3 py-1.5"}>Communities</span>
                    )}
                </NavLink>
              </li>

            </ul>
          </div>

          <div className="flex my-center gap-2">
            <p className="text-color-text pr-1">browsing as guest</p>
            <div className="p-2 cursor-pointer">
              <FiMoon size={24} />
            </div>
            <button className="px-4 py-1.5 rounded-lg text-white bg-primary cursor-pointer">
              Sign In
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
