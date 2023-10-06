import React, { useState, useContext, useEffect } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { companyAdminLogin } from '../../../Services/companyAdminService'; // Import companyAdminLogin
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../utils/authContext';

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');
  const { userLoggedIn, setUserLoggedIn, userType, setUserType } = useContext(AuthContext);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const result = await companyAdminLogin(username, password);
  
      if (result.message === 'CompanyAdmin login successful') {
        // Update authentication status
        localStorage.setItem('companyAdminID', result.CompanyAdminID);

        setUserLoggedIn(true);
  
        // Store userType in state
        setUserType(result.userType);
        navigate('/companyadmin/dashboard');
      } else {
        setLoginError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setLoginError('An error occurred during login');
    }
  };
  
  useEffect(() => {
    if (userLoggedIn && userType === 'companyadmin') {
      navigate('/companyadmin/dashboard');
    }
  }, [userLoggedIn, userType]);

  return (
    <div className="flex items-center justify-center " style={{ backgroundColor: "#0D0F23" }}>
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow border border-2 border-blue-950" style={{ backgroundColor: "#111536" }}>
        <h1 className="text-3xl font-Inter text-white font-semibold text-center">Sign In</h1>
        <form className="mt-6">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full  px-2 mb-4">
              <label htmlFor="displayName" className="text-white font-Inter">Username/Email-ID</label>
              <input
                type="text"
                id="displayName"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
              />
            </div>
            <div className="w-full px-2 mb-4 relative">
              <label htmlFor="designation" className="text-white font-Inter">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="designation"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
                />
                <span
                  className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <MdVisibility style={{ color: 'white', fontSize: '1.5rem' }} /> : <MdVisibilityOff style={{ color: 'white', fontSize: '1.5rem' }} />}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex">
            <button
              type="submit"
              className="font-Inter text-blue-600 hover:bg-gradient-to-b ml-6 from-blue-600 to-violet-500 hover:text-white border border-blue-600 hover:border-blue-600 hover:opacity-75 px-5 w-40 py-2 rounded-full transition-all duration-300"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              type="button"
              className="font-Inter text-blue-600 hover:bg-gradient-to-b ml-8 from-blue-600 to-violet-500 hover:text-white border border-blue-600 hover:border-blue-600 hover:opacity-75 px-5 py-2 rounded-full transition-all duration-300"
            >
              Forgot Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
