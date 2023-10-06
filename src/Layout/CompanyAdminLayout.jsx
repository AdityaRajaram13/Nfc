import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CompanyAdminNavbar from '../Components/CompanyAdmin/CompanyAdminNavbar';
import CompanyAdminSidebar from '../Components/CompanyAdmin/CompanyAdminSidebar'; // Import your CompanyAdminSidebar component
import Landing from '../Components/CompanyAdmin/CompanyAdminLanding';

const CompanyAdminLayout = () => {
  const location = useLocation();
  const isExcludedRoute = ['/companyadmin'].includes(location.pathname);

  if (isExcludedRoute) {
    return (
      <div>
        <CompanyAdminNavbar />
        <Landing />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="fixed top-0 w-full z-30">
        <CompanyAdminNavbar />
      </div>
      <div className="flex flex-grow">
        <CompanyAdminSidebar /> {/* Include your CompanyAdminSidebar here */}
        <main className="flex-grow bg-gray-100 overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default CompanyAdminLayout;
