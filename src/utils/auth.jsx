// auth.js - Frontend
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL; // Import the environment variable
const LOGIN_URL = `${BACKEND_URL}/api/login`;
const LOGOUT_URL = `${BACKEND_URL}/api/logout`;
const CHECK_AUTH = `${BACKEND_URL}/api/check-auth`;

export const loginUser = async (userData) => {
  try {
    console.log('Sending login request...');
    const response = await fetch(LOGIN_URL, {
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
    console.log('Checking authentication status...');
    const response = await fetch(`${CHECK_AUTH}`, {
      method: 'GET',
      credentials: 'include',
    });

    console.log('Server response status:', response.status);
    const responseText = await response.text(); // Read the response text only once
    console.log('Response text:', responseText); // Log the complete response text

    if (!response.ok) {
      console.log('User is not authenticated.');
      return false;
    }

    const responseJson = JSON.parse(responseText); // Parse the response text as JSON
    console.log('Response JSON:', responseJson); // Log the response JSON

    if (responseJson.userType === 'user') {
      console.log('User is authenticated.');
      return true;
    }

    if (responseJson.userType === 'admin') {
      console.log('Admin is authenticated.');
      return true;
    }

    console.log('User type not recognized or not authenticated.');
    return false;
  } catch (error) {
    console.error('Error checking authentication status:', error.message);
    return false;
  }
};

export const logoutUser = async () => {
  try {
    console.log('Logging out...'); // Added this line
    const response = await fetch(`${LOGOUT_URL}`, {
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