// userDataService.js

export const getAllUsers = async () => {
  try {
    const response = await fetch(`https://webapi.biscard.in/api/register/admin/getallusers`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw new Error('Unable to fetch user data');
  }
};


export const updateUser = async (userID, userData) => {
    try {
      const response = await fetch(`https://webapi.biscard.in/api/register/admin/${userID}`, {
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
  
      return true; // Indicates successful update
    } catch (error) {
      console.error('Error updating user data:', error);
      throw new Error('An error occurred while updating user data');
    }
  };


  export const deleteUser = async (userID) => {
    try {
      const response = await fetch(`https://webapi.biscard.in/api/register/admin/${userID}`, {
        method: 'DELETE',
        credentials: 'include',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
  
      return true; // Indicates successful delete
    } catch (error) {
      console.error('Error deleting user:', error);
      throw new Error('An error occurred while deleting user');
    }
  };

  

  
export const addUser = async (userData) => {
    try {
      const response = await fetch(`https://webapi.biscard.in/api/register/admin/adduser`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add user');
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error adding user:', error);
      throw new Error('An error occurred while adding user');
    }
  };





  export const addUsersFromCSV = async (csvData) => {
    try {
      const response = await fetch(`https://webapi.biscard.in/api/register/admin/addusersfromcsv`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ csvData }), // Pass the CSV data in the request body
      });
  
      if (!response.ok) {
        throw new Error('Failed to add users from CSV');
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error adding users from CSV:', error);
      throw new Error('An error occurred while adding users from CSV');
    }
  };