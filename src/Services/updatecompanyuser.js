const backendURL = 'https://webapi.biscard.in'; // Update with your backend URL

export const updateCompanyUser = async (CompanyAdminID, userID, updatedUserData) => {
  try {
    const response = await fetch(`https://webapi.biscard.in/api/CompanyAdmin/${CompanyAdminID}/users/${userID}/update`, {
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
