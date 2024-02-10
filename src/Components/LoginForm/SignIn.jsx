import React, { useContext, useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../utils/auth';
import { AuthContext } from '../../utils/authContext';
import Footer from '../Home/Footer';

const SignIn = () => {
  const { userLoggedIn, setUserLoggedIn, userType, setUserType } = useContext(AuthContext);
  const navigate = useNavigate(); // To navigate to different routes
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (event) => {
    event.preventDefault();
  
    try {
      // Call the loginUser function to authenticate the user
      const user = await loginUser({
        username: username,
        password: password,
      });
  
      // If authentication is successful, set userLoggedIn to true using setUserLoggedIn
      setUserLoggedIn(true);
      setUserType(user.userType);

  
      // Get user ID and userType from the response
      const userID = user.userID;
      const userType = user.userType;
  
      console.log('User type:', userType); // Log the userType to verify
  
      // Save user ID and userType to localStorage
      localStorage.setItem('userID', userID);
      localStorage.setItem('userType', userType);
  
      // If authentication is successful, navigate to /dashboard
    } catch (error) {
      // Handle authentication failure, show error message, etc.
      setError(error.message);
    }
  };
  useEffect(() => {
    if (userLoggedIn && userType === 'user') {
      navigate('/dashboard');
    }
  }, [userLoggedIn, userType]);
  
  

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100" style={{ backgroundColor: "#0D0F23" }}>
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow border border-2 border-blue-950" style={{ backgroundColor: "#111536" }}>
        <h1 className="text-3xl font-Inter text-white font-semibold text-center">Sign In</h1>
        <form className="mt-6" onSubmit={handleSignIn}>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full  px-2 mb-4">
              <label htmlFor="displayName" className="text-white font-Inter">Username/Email-ID</label>
              <input
                type="text"
                id="displayName"
                value={username} // Bind value to username state
                onChange={(e) => setUsername(e.target.value)} // Handle changes to update the state
                className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
              />
            </div>
            <div className="w-full px-2 mb-4">
              <label htmlFor="designation" className="text-white font-Inter">Password</label>
              <input
                type="password"
                id="designation"
                value={password} // Bind value to password state
                onChange={(e) => setPassword(e.target.value)} // Handle changes to update the state
                className="w-full px-4 py-2 text-white bg-transparent rounded-lg border border-2 border-blue-950 rounded focus:outline-none focus:border-violet-500"
              />
            </div>
          </div>
          {error && <p className="text-red-500">{error}</p>} {/* Show error message if there is an error */}
          <div className=" mt-4 flex">
            <button
              type="submit"
              className="font-Inter text-blue-600 hover:bg-gradient-to-b ml-6 from-blue-600 to-violet-500 hover:text-white border border-blue-600 hover:border-blue-600 hover:opacity-75 px-5 w-40 py-2 rounded-full transition-all duration-300"
            >
              Login
            </button>
            <button
              type="button"
              className=" font-Inter text-sm text-blue-600 hover:bg-gradient-to-b ml-8 from-blue-600 to-violet-500 hover:text-white border border-blue-600 hover:border-blue-600 hover:opacity-75 px-5 py-2 rounded-full transition-all duration-300"
            >
              I Forgot My Password
            </button>
          </div>
          <hr className="my-8   border-blue-600" />
          <p className="mt-4 font-Inter text-white text-center">
            New User? <Link to="/SignUp" className="text-blue-300 hover:text-blue-500">Create Profile</Link>
          </p>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default SignIn;
