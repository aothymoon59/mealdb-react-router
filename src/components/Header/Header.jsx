import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full p-5 bg-blue-100">
      <div className="relative flex items-center justify-between ">
        <div>
          <Link to="/">
            <h2 className="text-4xl font-bold text-blue-700">FoodsDine</h2>
          </Link>
        </div>

        <ul className="items-center hidden space-x-8 md:flex">
          <li>
            <NavLink
              to="/"
              className={`${({ isActive }) =>
                isActive
                  ? "active"
                  : "default"} hover:text-blue-400 text-xl font-medium`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/foods"
              className={`${({ isActive }) =>
                isActive
                  ? "active"
                  : "default"} hover:text-blue-400 text-xl font-medium`}
            >
              Foods
            </NavLink>
          </li>
        </ul>
        {/* Mobile Navbar Section */}
        <div className="md:hidden">
          {/* Dropdown Open Button */}
          <button title="Open Menu" onClick={() => setIsOpen(!isOpen)}>
            <Bars3Icon className="h-6 w-6 text-blue-700" />
          </button>
          {isOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/">
                      <h2 className="text-4xl font-bold text-blue-700">
                        FoodsDine
                      </h2>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <XMarkIcon className="h-6 w-6 text-blue-700" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <NavLink
                        to="/"
                        className={`${({ isActive }) =>
                          isActive
                            ? "active"
                            : "default"} hover:text-blue-400 text-xl font-medium`}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/foods"
                        className={`${({ isActive }) =>
                          isActive
                            ? "active"
                            : "default"} hover:text-blue-400 text-xl font-medium`}
                      >
                        Foods
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
