// const LOGIN_URL = `https://webapi.biscard.in/api/login`;
// const LOGOUT_URL = `https://webapi.biscard.in/api/logout`;
// const CHECK_AUTH = `https://webapi.biscard.in/api/check-auth`;
// frontend_url = 'http://localhost:5174';
//backend_url = http://localhost:3000

export const loginUser = async (userData) => {
  try {
    console.log('Sending login request...');
    const response = await fetch(`http://localhost:3000/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
      credentials: 'include', // This enables sending cookies in cross-origin requests
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error); // Throw the error message sent by the backend
    }

    const responseData = await response.json();

    console.log('Login successful. Response data:', responseData);

    // Check if the responseData contains the userType property
    if (!responseData.hasOwnProperty('userType')) {
      throw new Error('userType property is missing in the response data');
    }

    return responseData;
  } catch (error) {
    console.error('Error during login:', error.message);
    throw error;
  }
};




// auth.js - Frontend

// ... (loginUser function remains the same)

export const isAuthenticated = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/check-auth`, {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) {
      console.error('Authentication failed with status:', response.status);
      return false;
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const responseJson = await response.json();
      console.log('Response JSON:', responseJson);

      if (responseJson.userType === 'user' || responseJson.userType === 'admin' || responseJson.userType === 'companyadmin') {
        console.log(`${responseJson.userType} is authenticated.`);
        return true;
      } else {
        console.error('User type not recognized.');
      }
    } else {
      console.error('Response is not in JSON format.');
    }

    return false;
  } catch (error) {
    console.error('Error checking authentication status:', error.message);
    return false;
  }
};


export const logoutUser = async () => {
  try {
    console.log('Logging out...'); // Added this line
    const response = await fetch(`http://localhost:3000/api/logout`, {
      method: 'POST',
      credentials: 'include', // Include credentials to send the HTTP-only cookie
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error); // Throw the error message sent by the backend
    }

    console.log('Logout successful.'); // Added this line
    return true; // Return true if the logout is successful
  } catch (error) {
    console.error('Logout failed:', error.message);
    return false; // Return false if there was an error during logout
  }
};