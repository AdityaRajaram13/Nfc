import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex">
      <div
        className={`bg-gray-200 w-64 h-screen transition-transform duration-300 transform ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center bg-gray-300">
          <h2 className="text-lg font-bold">Drawer Sidebar</h2>
          <button
            className="text-gray-600 hover:text-gray-900 transition-colors"
            onClick={toggleDrawer}
          >
            <FontAwesomeIcon icon={isDrawerOpen ? faArrowLeft : faArrowRight} />
          </button>
        </div>
        <div className="p-4">
          <ul className="space-y-2">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
        <button
          className="absolute top-0 right-0 mt-4 mr-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={toggleDrawer}
        >
          Close Drawer
        </button>
      </div>
      {isDrawerOpen ? null : (
        <div className="flex-1 flex items-start">
          <button
            className="absolute top-0 left-0 mt-4 ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={toggleDrawer}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
