import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../utils/auth';
import { AuthContext } from '../utils/authContext'; // Import the AuthContext
import { CgProfile } from 'react-icons/cg';
import Hamburger from 'hamburger-react';


const Navbar = () => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const { userLoggedIn, setUserLoggedIn } = useContext(AuthContext); // Use the userLoggedIn state from context

  const [showDropdown, setShowDropdown] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [toggleMobileDropdowns, setToggleMobileDropdowns] = useState({
    product: false,
    profile: false,
    currency: false,
  })
  const [toggleDropdowns, setToggleDropdowns] = useState({
    product: false,
    profile: false,
    currency: false,
  })

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setToggleDropdowns({
          product: false,
          profile: false,
          currency: false,
        });
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);




  const handleDashboardClick = () => {
    navigate('/dashboard');
  };


  const handleLogout = async () => {
    console.log('Logging out...');
    const logoutSuccess = await logoutUser();
    if (logoutSuccess) {
      console.log('Logout successful.');
      setUserLoggedIn(false);
      localStorage.removeItem('userID');
      localStorage.removeItem('userType');
      localStorage.removeItem('userToken');
      navigate('/');
    } else {
      console.log('Logout failed.');
    }
  };

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <header className="h-16 w-full  items-center relative z-50 justify-end px-5  border-b-2 border-blue-600" style={{ backgroundColor: "#111536" }}>
      <div className="h-16 hidden md:flex w-full  items-center relative z-50 justify-end px-5 space-x-10 border-b-2" style={{ backgroundColor: "#111536" }}>
        <div className='flex w-full justify-start  text-5xl font-Poppins font-bold text-white'>
          <p>Biscard</p>
        </div>
        <ul className="flex space-x-4 text-white">
          <li className="font-medium"> <Link to="/">Home</Link></li>
          <li className="relative">
            <button
              className="font-medium"
              onClick={() => setToggleDropdowns({ ...toggleDropdowns, product: !toggleDropdowns.product })}
            >
              Products
              {toggleDropdowns.product && (
                <div className="absolute top-full -right-14 w-40 bg-blue-950 shadow rounded-md mt-5" ref={dropdownRef}>
                  <ul className="py-2 px-4 space-y-2">
                    <li className="text-white font-Inter cursor-pointer hover:bg-violet-900 py-1 px-2 rounded-md">
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
              onClick={() => setToggleDropdowns({ ...toggleDropdowns, profile: !toggleDropdowns.profile })}
            />
            {toggleDropdowns.profile && (
              <div className="absolute top-full right-0 w-40 bg-blue-950 shadow rounded-md mt-3" ref={dropdownRef}>

                <ul className="py-2 px-4 space-y-2">
                  {userLoggedIn ? (
                    <>
                      <li className="text-white font-Inter cursor-pointer hover:bg-violet-900 py-1 px-2 rounded-md" onClick={handleDashboardClick}>
                        My Profile
                      </li>
                      <li className="text-white font-Inter cursor-pointer hover:bg-violet-900 py-1 px-2 rounded-md" onClick={handleLogout}>
                        Logout
                      </li>
                    </>
                  ) : (
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
        <div className='flex w-full justify-start item-center   text-4xl font-Poppins font-bold text-white'>
          <p>Biscard</p>
        </div>
        <Hamburger
          toggled={isOpen}
          toggle={toggleMenu}
          color="#4FD1C5"
          className="m-4 z-[70]"
        />
      </div>

      {
        isOpen && (
          <div className="fixed md:hidden  inset-0 w-[60%]  bg-pink-300 border-r shadow-xl transition duration-300">
            <div className='flex w-full justify-end item-center px-4 mt-4   text-4xl font-Poppins font-bold text-white'>
              <p>Biscard</p>
            </div>
            <ul className="flex-col ml-2  mt-20 text-center flex-wrap">
              <li className="relative mt-2  text-xl">

                <div
                  onClick={() => setToggleMobileDropdowns({ ...toggleMobileDropdowns, profile: !toggleMobileDropdowns.profile })}
                  className="px-10 py-2 font-Poppins md:px-9 md:py-4  hover:bg-pink-600 text-white font-bold"
                >
                  Profile
                  {toggleMobileDropdowns.profile && (
                    <div
                      ref={dropdownRef}
                      className="mt-3 bg-blue-400"
                    >
                      <ul className="text-center">
                        {userLoggedIn ? (
                          <>
                            <li
                              onClick={() => {
                                handleDashboardClick;
                                setOpen(false);
                              }}
                            >
                              My Profile
                            </li>
                            <li
                              onClick={handleLogout}>
                              Logout
                            </li>
                          </>
                        ) : (
                          <>
                            <Link
                              to="/signin"
                              onClick={() => {
                                setShowDropdown(false);
                                setOpen(false);
                              }}
                              className="text-white font-Poppins hover:text-blue-300"
                            >
                              <li >Log In</li>
                            </Link>
                            <Link
                              to="/signup"
                              onClick={() => {
                                setShowDropdown(false);
                                setOpen(false);

                              }}
                              className="text-white font-Poppins hover:text-blue-300"
                            >
                              <li className="md:py-2">Create Profile</li>
                            </Link>
                          </>
                        )}
                        <li />
                      </ul>
                    </div>
                  )}
                </div>
              </li>

              <li className=" py-1  text-xl">
                <Link to="/" className="px-10 py-2 font-Poppins md:px-9 md:py-4  hover:bg-pink-600 text-white font-bold">
                  Home
                </Link>
              </li>

              <li className="relative mt-2  md:py-2 text-xl">
                <button
                  onClick={() => setToggleMobileDropdowns({ ...toggleMobileDropdowns, product: !toggleMobileDropdowns.product })}
                  onMouseLeave={() => handleProductDropdownHover(false)}
                  className="px-10 py-2 font-Poppins md:px-9 md:py-4  hover:bg-pink-600 text-white font-bold"
                >
                  Products
                  {toggleMobileDropdowns.product && (
                    <div
                      ref={dropdownRef}
                      className="absolute left-0 right-0 mt-3 bg-blue-400 "
                    >
                      <ul className="  text-center">
                        <li>
                          <Link to="/products" className="text-white font-Poppins hover:text-blue=-300">
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