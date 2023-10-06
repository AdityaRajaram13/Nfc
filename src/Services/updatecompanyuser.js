const backendURL = 'http://localhost:3000'; // Update with your backend URL

export const updateCompanyUser = async (CompanyAdminID, userID, updatedUserData) => {
  try {
    const response = await fetch(`http://localhost:3000/api/CompanyAdmin/${CompanyAdminID}/users/${userID}/update`, {
      method: 'POST',
      credentials: 'include', // Include cookies if your authentication relies on cookies
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ updatedUserData }),
    });

    if (!response.ok) {
      throw new Error('Failed to update user');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error updating user:', error);
    throw new Error('Failed to update user');
  }
};
