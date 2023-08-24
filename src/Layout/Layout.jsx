// Layout.jsx
import React, { useContext, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import UserProfile from '../Components/UserProfile';
import { AuthContext } from '../utils/authContext';
import { isAuthenticated } from '../utils/auth';

const Layout = () => {
  const { userLoggedIn, userType } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isExcludedRoute = ['/', '/signin', '/signup'].includes(location.pathname);
  const isTemplateRoute = location.pathname === '/Template'; // Check if it is the /Template route

  useEffect(() => {
    setLoading(false);
  }, [userLoggedIn]);

  if (loading) {
    return null;
  }

  if (isExcludedRoute) {
    return (
      <div>
        <Navbar />
        <Outlet />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="fixed top-0 w-full z-30">
        <Navbar />
      </div>
      <div className="flex flex-grow">
      {userLoggedIn && userType === 'user' && ( // Render UserProfile if userLoggedIn is true and it's not the /Template route
          <div className="fixed top-16 right-0 z-20">
            <UserProfile />
          </div>
        )}
        {userLoggedIn && userType === 'user' && (
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

export default Layout;
