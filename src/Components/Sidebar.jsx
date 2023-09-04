import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsGridFill } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();
  const [iconStates, setIconStates] = useState({
    dashboard: false,
    addCard: false,
    view: false,
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust the breakpoint as needed
  const [isMiniDrawerOpen, setIsMiniDrawerOpen] = useState(false); // State to track mini drawer open/close

  const userID = localStorage.getItem('userID');

  const handleDashboardClick = () => {
    navigate('/dashboard');
    setIconStates({ dashboard: true, addCard: false, view: false });
  };

  const handleAddCardClick = () => {
    navigate('/AddNewCardForm');
    setIconStates({ dashboard: false, addCard: true, view: false });
  };

  const handleAddTemplateClick = () => {
    navigate('/Template');
    setIconStates({ dashboard: false, addCard: false, view: true });
  };

  useEffect(() => {
    // Add a listener to handle window resize and update isMobile state
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);

    return () => {
      // Clean up the listener when the component unmounts
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMiniDrawer = () => {
    setIsMiniDrawerOpen(!isMiniDrawerOpen);
  };


  return (
    <aside className=" text-gray-500" style={{ backgroundColor: "#111536" }}>
      {/* Normal sidebar for larger screens */}
      {!isMobile && (
        <div className="hidden md:flex flex-col items-center justify-center h-screen w-16">
          <ul>
            <li className="p-5" onClick={handleDashboardClick}>
              <BsGridFill
                className={`h-6 w-6 cursor-pointer ${
                  iconStates.dashboard ? 'text-yellow-500' : 'text-gray-500'
                }`}
                style={{ animation: iconStates.dashboard ? 'rainbowAnimation 2s infinite' : 'none' }}
              />
            </li>
            <li className="p-5" onClick={handleAddCardClick}>
              <BiUser
                className={`h-6 w-6 cursor-pointer ${
                  iconStates.addCard ? 'text-yellow-500' : 'text-gray-500'
                }`}
                style={{ animation: iconStates.addCard ? 'rainbowAnimation 2s infinite' : 'none' }}
              />
            </li>
            <li className="p-5" onClick={handleAddTemplateClick}>
              <AiOutlineEye
                className={`h-6 w-6 cursor-pointer ${
                  iconStates.view ? 'text-yellow-500' : 'text-gray-500'
                }`}
                style={{ animation: iconStates.view ? 'rainbowAnimation 2s infinite' : 'none' }}
              />
            </li>
          </ul>
        </div>
      )}

        {/* Mini drawer for screens below md */}
        {isMobile && (
        <div className={`md:hidden ${isMiniDrawerOpen ? 'w-60' : 'w-16'} transition-all ease-in-out duration-300`}>
          {/* Mini drawer content */}
          {isMiniDrawerOpen && (
            <div className="relative top-20 p-2" style={{ backgroundColor: "#111536" }}>
              <ul className="flex flex-row ml-28 space-x-4">
                {/* Add your mini drawer links here */}
                <li onClick={handleDashboardClick}>
                  <BsGridFill
                    className={`h-6 w-6 cursor-pointer ${
                      iconStates.dashboard ? 'text-yellow-500' : 'text-gray-500'
                    }`}
                    style={{ animation: iconStates.dashboard ? 'rainbowAnimation 2s infinite' : 'none' }}
                  />
                </li>
                <li onClick={handleAddCardClick}>
                  <BiUser
                    className={`h-6 w-6 cursor-pointer ${
                      iconStates.addCard ? 'text-yellow-500' : 'text-gray-500'
                    }`}
                    style={{ animation: iconStates.addCard ? 'rainbowAnimation 2s infinite' : 'none' }}
                  />
                </li>
                <li onClick={handleAddTemplateClick}>
                  <AiOutlineEye
                    className={`h-6 w-6 cursor-pointer ${
                      iconStates.view ? 'text-yellow-500' : 'text-gray-500'
                    }`}
                    style={{ animation: iconStates.view ? 'rainbowAnimation 2s infinite' : 'none' }}
                  />
                </li>
              </ul>
            </div>
          )}
          {/* Button to toggle the mini drawer */}
          <button onClick={toggleMiniDrawer} className="p-3 absolute flex justify-center items-center top-[76px] left-0 text-white">
  {isMiniDrawerOpen ? (
    <>
      <span className="mr-2">Close</span> <FaAngleDoubleLeft /> 
    </>
  ) : (
    <>
      <span className="mr-2">Open</span> <FaAngleDoubleRight />
    </>
  )}
</button>
        </div>
      )}

      <style>
        {`
          @keyframes rainbowAnimation {
            0% { color: red; }
            16.67% { color: orange; }
            33.33% { color: yellow; }
            50% { color: green; }
            66.67% { color: blue; }
            83.33% { color: indigo; }
            100% { color: violet; }
          }
        `}
      </style>
    </aside>
  );
};

export default Sidebar;