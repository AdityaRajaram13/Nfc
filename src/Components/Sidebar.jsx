import React,{useState}  from 'react';
import Dashboard from '../Pages/Dashboard';
import { BsGridFill } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';
import { TiChartBar } from 'react-icons/ti';
import { FaHistory } from 'react-icons/fa';

const Sidebar = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  const handleGridFillClick = () => {
    setShowDashboard(true);
  };
const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-16 flex flex-col space-y-10 items-center justify-center text-white" style={{ backgroundColor: "#111536" }}>
      <div className="flex w-16 flex-col items-center">
        <div className="space-y-48">
          <ul>
            <li className="p-5" onClick={handleGridFillClick}>
              <BsGridFill
                className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"
              />
            </li>
            <li className="p-5">
              <BiUser
                className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"
              />
            </li>
            <li className="p-5">
              <AiOutlineEye
                className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"
              />
            </li>
            <li className="p-5">
              <TiChartBar
                className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"
              />
            </li>
            <li className="p-5">
              <FaHistory
                className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"
              />
            </li>
            <li className="p-5">
              <i className="fas fa-bell h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"></i>
            </li>
          </ul>
        </div>
        {/* Rest of the component */}
      </div>
      {showDashboard && <Dashboard />}
    </aside>
  );
};
}
export default Sidebar;
