import { NavLink } from "react-router";
import { useAuth } from "../hooks/useAuth";
// import { useSelector } from "react-redux";

function Navbar() {
  // const isLoggedin = useSelector(state => state.auth.auth)

   const {isAuthenticated} = useAuth()
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

      {isAuthenticated && (<li>
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
