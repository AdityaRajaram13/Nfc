import React from 'react';
import CompanyAdminNavbar from './CompanyAdminNavbar';
import Login from './Login Form/Login'; // Import your CompanyAdmin login component here
import AdminImage from "../../assets/Images/admin.png"

const CompanyAdminLanding = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center min-h-screen" style={{ backgroundColor: "#0D0F23" }}>
        {/* Left side with image */}
        <div className="flex-4 p-4 flex items-center justify-center md:justify-end">
          {/* Add your landing page image here */}
          <img className="max-w-full h-auto md:max-w-none" src={AdminImage} alt="Image" />
        </div>
        
        {/* Right side with login */}
        <div className="flex-[0.5] p-4 flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl text-center font-bold text-white mb-4 md:mb-8">Welcome to Biscard Panel</h1>
          {/* Render your CompanyAdmin login component */}
          <Login />
        </div>
      </div>
    </div>
  );
};

export default CompanyAdminLanding;
