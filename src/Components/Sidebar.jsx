// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// function Sidebar() {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <div className="flex">
//       <div
//         className={`bg-gray-200 w-64 h-screen transition-transform duration-300 transform ${
//           isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         <div className="p-4 flex justify-between items-center bg-gray-300">
//           <h2 className="text-lg font-bold">Drawer Sidebar</h2>
//           <button
//             className="text-gray-600 hover:text-gray-900 transition-colors"
//             onClick={toggleDrawer}
//           >
//             <FontAwesomeIcon icon={isDrawerOpen ? faArrowLeft : faArrowRight} />
//           </button>
//         </div>
//         <div className="p-4">
//           <ul className="space-y-2">
//             <li>Item 1</li>
//             <li>Item 2</li>
//             <li>Item 3</li>
//             <li>Item 4</li>
//           </ul>
//         </div>
//         <button
//           className="absolute top-0 right-0 mt-4 mr-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//           onClick={toggleDrawer}
//         >
//           Close Drawer
//         </button>
//       </div>
//       {isDrawerOpen ? null : (
//         <div className="flex-1 flex items-start">
//           <button
//             className="absolute top-0 left-0 mt-4 ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//             onClick={toggleDrawer}
//           >
//             <FontAwesomeIcon icon={faArrowRight} />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Sidebar;





// import React from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const Sidebar = () => {
//   return (
//     <div>
//       <div className="flex w-16 flex-col items-center">
//         <div className="space-y-48  bg-black">
//           <ul>
//             <li className="p-5">
//               <i className="fas fa-columns h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"></i>
//             </li>
//             <li className="p-5">
//               <i className="fas fa-users h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"></i>
//             </li>
//             <li className="p-5">
//               <i className="fas fa-cog h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"></i>
//             </li>
//             <li className="p-5">
//               <i className="fas fa-envelope h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"></i>
//             </li>
//             <li className="p-5">
//               <i className="fas fa-file-alt h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"></i>
//             </li>
//             <li className="p-5">
//               <i className="fas fa-bell h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"></i>
//             </li>
//           </ul>
//         </div>
//         {/* Rest of the component */}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;




import React,{useState}  from 'react';
import Dashboard from './Dashboard';
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
