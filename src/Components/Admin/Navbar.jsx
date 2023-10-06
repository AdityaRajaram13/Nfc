import React, { useContext } from "react";
import { AuthContext } from "../../utils/authContext"; // Import your AuthContext here
import { adminLogout } from "../../Services/adminservice";
import { CgProfile } from 'react-icons/cg';

function Header() {
  const { userLoggedIn, setUserLoggedIn,userType } = useContext(AuthContext); // Assuming you have a method to set userLoggedIn state

  const handleLogout = async () => {
    try {
      await adminLogout(); // Call the adminLogout function from the adminService
      setUserLoggedIn(false); // Clear the userLoggedIn state
      navigate('/admin'); // Redirect to the desired route
    } catch (error) {
      console.error('Error during admin logout:', error);
    }
  };

  return (
    <div className="fixed w-full  border-b-2 border-blue-600 text-white z-10" style={{ backgroundColor: "#111536" }}>
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 border-none">
        <CgProfile
        className="w-10 h-10 md:w-12 md:h-12 mr-3 rounded-full cursor-pointer border-2 border-blue-400"
        onClick={() => setShowDropdown(true)}
      />          <span className="hidden md:block text-lg font-semibold">ADMIN</span>
        </div>
        
        {userLoggedIn && userType === 'admin' && (
          <button
            onClick={handleLogout}
            className="text-sm px-4 py-2 mx-4 rounded-md bg-red-600 hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-200"
          >
            Log Out
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
