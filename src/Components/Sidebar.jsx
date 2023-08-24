import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsGridFill } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';
import { TiChartBar } from 'react-icons/ti';
import { FaHistory } from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();
  const [iconStates, setIconStates] = useState({
    dashboard: false,
    addCard: false,
    view: false,
  
  });
  
  const userID = localStorage.getItem('userID');

  
  const handleDashboardClick = () => {
    navigate('/dashboard');
    setIconStates({ ...iconStates, dashboard: true, addCard: false, view: false, chart: false, history: false });
  };

  const handleAddCardClick = () => {
    navigate('/AddNewCardForm');
    setIconStates({ ...iconStates, dashboard: false, addCard: true, view: false, chart: false, history: false });
  };

  const handleAddTemplateClick = () => {
    navigate('/Template');
    setIconStates({ ...iconStates, dashboard: false, addCard: false, view: true, chart: false, history: false });
  };



  return (
    <aside className="fixed top-0 left-0 h-screen w-16 flex flex-col space-y-10 items-center justify-center text-white" style={{ backgroundColor: "#111536" }}>
      <div className="flex w-16 flex-col items-center">
        <div className="space-y-48">
          <ul>
            <li className="p-5" onClick={handleDashboardClick}>
              <BsGridFill
                className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"
                style={{ animation: iconStates.dashboard ? 'rainbowAnimation 2s infinite' : 'none' }}
              />
            </li>
            <li className="p-5" onClick={handleAddCardClick}>
              <BiUser
                className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"
                style={{ animation: iconStates.addCard ? 'rainbowAnimation 2s infinite' : 'none' }}
              />
            </li>
            <li className="p-5"  onClick={handleAddTemplateClick}>
              <AiOutlineEye
                className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"
                style={{ animation: iconStates.view ? 'rainbowAnimation 2s infinite' : 'none' }}
              />
            </li>
            <li className="p-5" >
              <TiChartBar
                className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"
                style={{ animation: iconStates.chart ? 'rainbowAnimation 2s infinite' : 'none' }}
              />
            </li>
            <li className="p-5">
              <FaHistory
                className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"
                style={{ animation: iconStates.history ? 'rainbowAnimation 2s infinite' : 'none' }}
              />
            </li>
          </ul>
        </div>
        {/* Rest of the component */}
      </div>
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