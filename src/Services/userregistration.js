// api/registration.js

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const API_URL = `https://webapi.biscard.in/api/register`;  // Replace with your actual backend API URL

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error); // Throw the error message sent by the backend
    }

    const responseData = await response.json();
    return responseData; // Return the actual response data without any modification
  } catch (error) {
    console.error('Error during registration:', error.message);
    throw error;
  }
};
