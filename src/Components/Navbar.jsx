import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { logoutUser } from '../utils/auth';
import { AuthContext } from '../utils/authContext'; // Import the AuthContext
import { CgProfile } from 'react-icons/cg';
import Hamburger from 'hamburger-react';
import profilePng from '../assets/Images/profile.png';


const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { userLoggedIn, setUserLoggedIn } = useContext(AuthContext); // Use the userLoggedIn state from context
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    // Event listener to detect clicks outside the dropdowns
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
        setShowCurrencyDropdown(false);
        setShowProductDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
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

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <header className="h-16 w-full  items-center relative z-50 justify-end px-5 space-x-10 border-b-2 border-blue-600" style={{ backgroundColor: "#111536" }}>
      <div className="h-16 hidden md:flex w-full  items-center relative z-50 justify-end px-5 space-x-10 border-b-2" style={{ backgroundColor: "#111536" }}>
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
      </div>
      <div className="md:hidden flex justify-end right-0 py-2" >
      <Hamburger
        toggled={isOpen}
        toggle={toggleMenu}
        color="#4FD1C5" 
        className="m-4 z-[70]"      
          // Apply Tailwind CSS margin class
      />
      </div>

      {
      isOpen &&(
      <div className="fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-20%] bg-blue-200 border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0">        <div className="text-xl md:hidden flex items-center justify-center right-0 py-4 font-bold">
         
          <img
            src={profilePng} // Use the imported profilePng variable here
            alt="Profile"
            onClick={() => setShowDropdown(true)}
            className="cursor-pointer w-12 h-12 text-center"
          />
          <div className="mt-4">
            {showDropdown && (
              <div
                ref={dropdownRef}
                className="absolute left-0 right-0 mt-4 bg-blue-400 z-[20]"
              >
                <ul className="md:flex md:space-x-4 md:py-2 text-center">
                  {userLoggedIn ? (
                    <>
                      <li
                        className="md:py-2"
                        onClick={() => {handleDashboardClick;
                          setOpen(false);
                        }}
                      >
                        My Profile
                      </li>
                      <li className="md:py-2" 
                      
                      onClick={handleLogout}>
                        Logout
                      </li>
                    </>
                  ) : (
                    // If the user is not logged in, show "Login" and "Create Profile" options
                    <>
                      <Link
                        to="/signin"
                        onClick={() => {setShowDropdown(false);
                          setOpen(false);
                        }}
                        className="text-white hover:text-blue-300"
                      >
                        <li className="md:py-2">Log In</li>
                      </Link>
                      <Link
                        to="/signup"
                        onClick={() =>{ setShowDropdown(false);
                          setOpen(false);

                        }}
                        className="text-white hover:text-blue-300"
                      >
                        <li className="md:py-2">Create Profile</li>
                      </Link>
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
        <ul className="md:flex md:space-x-4 md:py-2 text-center flex-wrap">
          <li className="md:py-2 text-xl">
            <Link to="/" className="px-10 py-2 font-Poppins md:px-9 md:py-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full animate-pulse">
              Home
            </Link>
          </li>
          <li className="relative mt-2  md:py-2 text-xl">
            <button
              onClick={() => handleProductDropdownHover(true)}
              onMouseLeave={() => handleProductDropdownHover(false)}
              className="px-10 py-2 mt-2 font-Poppins  bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full animate-pulse"
            >
              Products
              {showProductDropdown && (
                <div
                  ref={dropdownRef}
                  className="absolute left-0 right-0 mt-3 bg-blue-400 md:bg-transparent md:w-auto"
                >
                  <ul className="md:flex md:space-x-4 md:py-2 text-center">
                    <li className="md:py-2" onClick={handleDropdownOptionClick}>
                      <Link to="/products" className="text-white hover:text-blue=-300">
                        Cards
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </button>
          </li>
        </ul>

          
        </div>
     

   
      )}
      
    </header>
    

  );
};

export default Navbar;