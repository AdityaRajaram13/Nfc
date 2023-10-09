// userService.js

const backendURL = 'http://localhost:3000';

export const updateUser = async (userData) => {
  try {
    const response = await fetch(`https://webapi.biscard.in/api/updateuser`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Failed to update user data');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error updating user data:', error);
    throw new Error('Unable to update user data');
  }
};

// Add more user-related service functions here if needed


export const getUserData = async () => {
    try {
      const response = await fetch(`https://webapi.biscard.in/api/getuser`, {
        method: 'GET',
        credentials: 'include', // Include credentials for cross-origin requests (e.g., cookies)
        headers: {
          'Content-Type': 'application/json',
          
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
  
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw new Error('Unable to fetch user data');
    }
  };

  
  export const updatePassword = async (userData) => {
    try {
      const response = await fetch(`https://webapi.biscard.in/api/updatepassword`, {
        method: 'PUT',
        credentials: 'include', // Include credentials for cross-origin requests (e.g., cookies)
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        const responseData = await response.json();
        throw new Error(responseData.error || 'Failed to update password');
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error updating password:', error);
      throw new Error('Unable to update password');
    }
  };
  

  
export default updateUser;