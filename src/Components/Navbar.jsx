import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { logoutUser } from '../utils/auth';
import { AuthContext } from '../utils/authContext'; // Import the AuthContext
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { userLoggedIn, setUserLoggedIn } = useContext(AuthContext); // Use the userLoggedIn state from context


  useEffect(() => {
    // Event listener to detect clicks outside the dropdowns
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
        setShowCurrencyDropdown(false);
        setShowProductDropdown(false);
      }
    };

    // Add the event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDashboardClick = () => {
    navigate('/dashboard');
  };

  const handleProductDropdownHover = (isHovering) => {
    setShowProductDropdown(isHovering || showProductDropdown);
  };

  const handleCurrencyDropdownHover = (isHovering) => {
    setShowCurrencyDropdown(isHovering || showCurrencyDropdown);
  };

  const handleDropdownOptionClick = () => {
    setShowDropdown(false);
    setShowCurrencyDropdown(false);
    setShowProductDropdown(false);
  };

  const handleLogout = async () => {
    console.log('Logging out...');
    const logoutSuccess = await logoutUser();
    if (logoutSuccess) {
      console.log('Logout successful.');
      // After successful logout, update the userLoggedIn state
      setUserLoggedIn(false);
      // Remove user ID and userType from local storage
      localStorage.removeItem('userID');
      localStorage.removeItem('userType');
      localStorage.removeItem('userToken');
      // Navigate the user to the home page
      navigate('/');
    } else {
      console.log('Logout failed.');
    }
  };

  return (
    <header className="h-16 w-full flex items-center relative z-50 justify-end px-5 space-x-10 border-b-2 border-blue-600" style={{ backgroundColor: "#111536" }}>
      <ul className="flex space-x-4 text-white">
        <li className="font-medium"> <Link to="/">Home</Link></li>
        <li className="relative">
        <button
            className="font-medium"
            onClick={() => handleProductDropdownHover(true)}
            onMouseLeave={() => handleProductDropdownHover(false)}
          >
            Products
            {showProductDropdown && (
              <div className="absolute top-full -right-14 w-40 bg-blue-950 shadow rounded-md mt-5" ref={dropdownRef}>
                {/* Products Dropdown items */}
                <ul className="py-2 px-4 space-y-2">
                  <li className="text-white font-Inter cursor-pointer hover:bg-violet-900 py-1 px-2 rounded-md" onClick={handleDropdownOptionClick}>
                  <Link to="/products" className="block">
                    Cards
                  </Link>
                  </li>
                </ul>
              </div>
            )}
          </button>
        </li>
       
      </ul>

      <div className="flex flex-shrink-0 items-center space-x-4 text-white">
      <div className="relative">
          <CgProfile
            className="h-10 w-10 rounded-full cursor-pointer border-2 border-blue-400"
            onClick={() => setShowDropdown(true)}
          />
            {showDropdown && (
              <div className="absolute top-full right-0 w-40 bg-blue-950 shadow rounded-md mt-3" ref={dropdownRef}>
                <ul className="py-2 px-4 space-y-2">
                {userLoggedIn ? (
                    <>
                      {/* Display Dashboard option for logged-in users */}
                      <li className="text-white font-Inter cursor-pointer hover:bg-violet-900 py-1 px-2 rounded-md" onClick={handleDashboardClick}>
                        My Profile
                      </li>
                      <li className="text-white font-Inter cursor-pointer hover:bg-violet-900 py-1 px-2 rounded-md" onClick={handleLogout}>
                        Logout
                      </li>
                    </>
                  ) : (
                    // If user is not logged in, show "Login" and "Create Profile" options
                    <>
                      <Link to="/signin" onClick={() => setShowDropdown(false)}>
                        <li className="text-white font-Inter cursor-pointer hover:bg-violet-900 py-1 px-2 rounded-md">
                          Log In
                        </li>
                      </Link>
                      <Link to="/signup" onClick={() => setShowDropdown(false)}>
                        <li className="text-white font-Inter cursor-pointer hover:bg-violet-900 py-1 px-2 rounded-md">
                          Create Profile
                        </li>
                      </Link>
                    </>
                  )}
                </ul>
              </div>
            )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;