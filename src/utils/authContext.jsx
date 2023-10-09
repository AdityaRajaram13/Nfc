import React from 'react';
import { createContext, useState, useEffect } from 'react';
import { isAuthenticated } from './auth'; // Import the isAuthenticated function

const BACKEND_URL = 'https://webapi.biscard.in';

const CHECK_AUTH = `https://webapi.biscard.in/api/check-auth`;

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userLoggedIn, setUserLoggedIn] = useState(null);
  const [userType, setUserType] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthenticationStatus = async () => {
      try {
        const isAuthenticatedUser = await isAuthenticated();
        setUserLoggedIn(isAuthenticatedUser);

        if (isAuthenticatedUser) {
          const response = await fetch(`https://webapi.biscard.in/api/check-auth`, {
            method: 'GET',
            credentials: 'include',
          });
          const responseData = await response.json();
          setUserType(responseData.userType); // Set both user type and user logged in
        }

        setLoading(false);
      } catch (error) {
        console.error('Error checking authentication status:', error.message);
        setLoading(false);
      }
    };

    checkAuthenticationStatus();
  }, []);

  const handleSetUserLoggedIn = (loggedIn) => {
    setUserLoggedIn(loggedIn);
  };

  if (loading) {
    return null;
  }

  return (
    <AuthContext.Provider
      value={{
        userLoggedIn,
        userType, // Make sure to include userType in the context
        setUserLoggedIn: handleSetUserLoggedIn,setUserType
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};



export { AuthContext, AuthProvider };
