import { NavLink } from "react-router";
import useLocalStorage from "../hooks/useLocalStorage";

function Navbar() {
    const [userActive] = useLocalStorage("userActive", null)
  return (
    <ul className=" hidden lg:flex flex-col lg:flex-row text-color-text gap-2" >
      <li>
        <NavLink to="/explore">
          {({ isActive }) => (
            <span
              className={
                isActive
                  ? "nav-active inline-block px-3 py-1.5"
                  : "text-gray inline-block px-3 py-1.5"
              }
            >
              Explore
            </span>
          )}
        </NavLink>
      </li>

      <li>
        <NavLink to="/events">
          {({ isActive }) => (
            <span
              className={
                isActive
                  ? "nav-active inline-block px-3 py-1.5"
                  : "text-gray inline-block px-3 py-1.5"
              }
            >
              Event
            </span>
          )}
        </NavLink>
      </li>

      <li>
        <NavLink to="/communities">
          {({ isActive }) => (
            <span
              className={
                isActive
                  ? "nav-active inline-block px-3 py-1.5"
                  : "text-gray inline-block px-3 py-1.5"
              }
            >
              Communities
            </span>
          )}
        </NavLink>
      </li>

      {userActive && (<li>
        <NavLink to="/my-events">
          {({ isActive }) => (
            <span
              className={
                isActive
                  ? "nav-active inline-block px-3 py-1.5"
                  : "text-gray inline-block px-3 py-1.5"
              }
            >
              My Events
            </span>
          )}
        </NavLink>
      </li>)}
    </ul>
  );
}

export default Navbar;
