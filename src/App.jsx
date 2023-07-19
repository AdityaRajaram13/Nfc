import React, {useState} from 'react';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import UserProfile from './Components/Dashboards/UserProfile';
import CardProfile from './Components/Forms/VFCForm'
import GeneralProfileForm from './Components/Forms/GeneralProfile';
import SignIn from './Components/LoginForm/SignIn';
import SignUp from './Components/LoginForm/SignUp';

const App = () => {
  const [userProfile, setUserProfile] = useState({
    name: '',
    jobTitle: '',
    company: '',
    contactDetails: '',
  });
  
  const handleEditProfile = (updatedProfile) => {
    setUserProfile(updatedProfile);
  };
  
  return (
    <>

<Navbar />
      <Routes>
        <Route path='signin' element={<SignIn />}/>
        <Route path='signup' element={<SignUp />}/>
      </Routes>
      
    </>
    
  );
};

export default App;














// import React from 'react';
// import { BsGridFill } from 'react-icons/bs';
// import { BiUser } from 'react-icons/bi';
// import { AiOutlineEye } from 'react-icons/ai';
// import { TiChartBar } from 'react-icons/ti';
// import { FaHistory } from 'react-icons/fa';

// const Sidebar = () => {
//   return (
// <aside className="fixed top-0 left-0 h-screen w-16 flex flex-col space-y-10 items-center justify-center text-white" style={{ backgroundColor: "#111536" }}>
//       {/* Profile */}
//       <div className="flex w-16 flex-col items-center">
//         <div className="space-y-48">
//           <ul>
//             <li className="p-5">
//               <BsGridFill
//                 className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"
//               />
//             </li>
//             <li className="p-5">
//               <BiUser
//                 className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"
//               />
//             </li>
//             <li className="p-5">
//               <AiOutlineEye
//                 className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"
//               />
//             </li>
//             <li className="p-5">
//               <TiChartBar
//                 className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"
//               />
//             </li>
//             <li className="p-5">
//               <FaHistory
//                 className="h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"
//               />
//             </li>
//             <li className="p-5">
//               <i className="fas fa-bell h-6 w-6 cursor-pointer text-gray-500 transition-all hover:text-blue-600"></i>
//             </li>
//           </ul>
//         </div>
//         {/* Rest of the component */}
//       </div>
//     </aside>
//   );
// };

// const Header = () => {
//   return (
//     <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
//       {/* Informação */}
//       <div className="flex flex-shrink-0 items-center space-x-4 text-white">
//         {/* Texto */}
//         <div className="flex flex-col items-end">
//           {/* Nome */}
//           <div className="text-md font-medium">Unknow Unknow</div>
//           {/* Título */}
//           <div className="text-sm font-regular">Student</div>
//         </div>

//         {/* Foto */}
//         <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"></div>
//       </div>
//     </header>
//   );
// };



// const App = () => {
//   return (
//     <div className="h-screen w-full bg-white relative flex overflow-hidden">
//       <Sidebar />
//       <div className="w-full h-full flex flex-col justify-between">
//         <Header />
       
//       </div>
//     </div>
//   );
// };

// export default App;
