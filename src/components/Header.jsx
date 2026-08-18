import React from "react";
import { FiBell, FiMenu, FiMoon, FiX } from "react-icons/fi";
import Logo from "./Logo";
import Navbar from "./Navbar";
import useLocalStorage from "../hooks/useLocalStorage";
import { Link } from "react-router";
import NavbarMobile from "./NavbarMobile";

function Header() {
  const [userActive, setUserActive] = useLocalStorage("userActive", null);
  const [users] = useLocalStorage("users", []);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenu, setIsMobileMenu] = React.useState(false);
  const personalInfo = users.find((u) => u.email === userActive?.email);

  const handleSignOut = () => {
    setUserActive(null);
    setIsMenuOpen(false);
    setIsMobileMenu(false);
  };

  return (
    <header className="w-full px-6 py-4 bg-white border-b border-gray-300 sticky top-0 z-50">
      <nav className="flex mx-auto max-w-7xl justify-between">
        <div className="flex items-center gap-2">
          <Logo className="text-black" />
          <Navbar />
        </div>

        <div className="flex items-center gap-2">
          <div>
            {userActive ? (
              <Link to="/notifications">
                <FiBell size={23} />
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
                userActive={userActive}
                onClose={() => setIsMobileMenu(false)}
                onSignOut={handleSignOut}
              />
            )}
          </div>
          <div className=" hidden relative md:block">
            {userActive ? (
              <>
                <button
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  className="cursor-pointer"
                >
                  <div className="w-7 h-7 rounded-full overflow-hidden">
                    <img
                      src="/images/alex-kim.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </button>

                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50">
                    <div className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ">
                      <p className="font-medium">
                        {personalInfo?.fullName || userActive.fullName}
                      </p>
                    </div>
                    <div className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ">
                      <p>{personalInfo?.email || userActive.email}</p>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 cursor-pointer"
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
    </header>
  );
}

export default Header;
