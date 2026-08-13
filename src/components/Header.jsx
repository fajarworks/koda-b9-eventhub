// import React from 'react';

import { FiMoon } from "react-icons/fi";
import { Link, useLocation } from "react-router";
function Header() {
  const location = useLocation()

  return (
    <>
      <header className="mx-auto max-w-7xl  p-6 bg-white border border-b-gray-300">
        <nav className="flex justify-between">
          <div className="flex  my-center gap-2">
          <div className="flex gap-2 my-center">
        <div className=" w-7 flex my-center rounded-md  bg-primary font-medium text-white ">
          <p>E</p>
        </div>
        <p className="font-bold">EventHub</p>
          </div>
          <ul className="flex text-color-text my-center gap-2">
            <Link
                    to="/events"
                    className={
                      location.pathname === "/events"
                        ? "nav-active px-3 py-1.5"
                        : "text-color-text px-3 py-1.5 "
                    }
                  >
                    Events
                  </Link>

                  <Link
                    to="/communities"
                className={

                      location.pathname === "/communities"
                        ? "nav-active px-3 py-1.5"
                        : "text-color-text px-3 py-1.5"
                    }
                  >
                    Communities
              </Link>
              <Link>

              </Link>
            </ul>
          </div>

          <div className="flex my-center gap-2">
            <p className="text-color-text pr-1">browsing as guest</p>
            <div className="p-2">
            <FiMoon />
            </div>
            <button className="px-4 py-1.5 rounded-lg text-white bg-primary">Sign In</button>
          </div>

        </nav>
      </header>
    </>
  );
}

export default Header;
