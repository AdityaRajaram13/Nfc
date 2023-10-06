import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { companyAdminLogout } from '../../Services/companyAdminService'; // Import your companyAdminLogout function here
import { AuthContext } from '../../utils/authContext'; // Import your AuthContext here

const CompanyAdminNavbar = () => {
  const { setUserLoggedIn, userLoggedIn, userType } = useContext(AuthContext); // Assuming you have a method to set userLoggedIn state
  const navigate = useNavigate(); // Use useNavigate hook to handle navigation

  const handleLogout = async () => {
    try {
      await companyAdminLogout(); // Call the companyAdminLogout function from companyAdminService
      setUserLoggedIn(false); // Clear the userLoggedIn state
      localStorage.removeItem('companyAdminID');
      navigate('/companyadmin'); // Use navigate for redirection
    } catch (error) {
      console.error('Error during CompanyAdmin logout:', error);
    }
  };

  return (
    <nav className="bg-blue-900 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/companyadmin" className="text-white text-2xl font-bold">
            CompanyAdmin Logo
          </Link>
          <ul className="flex space-x-4">
            {/* Add more navigation links as needed */}
            {userLoggedIn && userType === 'companyadmin' && (
              <li>
                <button
                  onClick={handleLogout}
                  className="text-white hover:text-gray-300"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CompanyAdminNavbar;
