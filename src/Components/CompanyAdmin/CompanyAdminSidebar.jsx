import React from "react";
import { RiDashboardFill, RiProfileFill } from "react-icons/ri"; // Import the icons you want to use

function Sidebar() {
  return (
    <div
      className="lg:hidden fixed flex flex-col top-16 left-0 w-14 hover:w-64 md:w-64 h-full text-white transition-all duration-300 border-none  sidebar"
      style={{ backgroundColor: "#111536" }}
    >
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center h-8">
              <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                Main
              </div>
            </div>
          </li>

          <li>
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <RiDashboardFill size={20} /> {/* Use the React Icon component */}
              </span>
              <span className="ml-2 text-lg tracking-wide truncate">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
            >
            </a>
          </li>

          {/* Add more li elements for other links */}
        </ul>
        <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
          Copyright @2023
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
