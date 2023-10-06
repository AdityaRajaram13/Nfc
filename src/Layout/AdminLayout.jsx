import React, { useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Admin/Navbar';
import Sidebar from '../Components/Admin/Sidebar';
import { AuthContext } from '../utils/authContext';
import Landing from '../Components/Admin/Landing';

const AdminLayout = () => {
  const { userLoggedIn, userType } = useContext(AuthContext);
  const location = useLocation();
  const isExcludedRoute = ['/admin'].includes(location.pathname);

  if (isExcludedRoute) {
    return (
      <div>
        <Navbar />
        <Landing/>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="fixed top-0 w-full z-30">
        <Navbar />
      </div>
      <div className="flex flex-grow">
      {userLoggedIn && userType === 'admin' && (
          <div className="fixed left-0 top-0 h-screen z-10">
            <Sidebar />
          </div>
        )}
        <main className="flex-grow bg-gray-100 overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;