const backendURL = 'https://webapi.biscard.in'; // Update with your backend URL

export const updateCompanyUser = async (CompanyAdminID, UserID, updatedUserData) => {
  try {
    const response = await fetch(`https://webapi.biscard.in/api/cpm/CompanyAdmin/${CompanyAdminID}/users/${UserID}/update`, {
      method: 'PUT',
      credentials: 'include', // Include cookies if your authentication relies on cookies
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUserData), // Pass the updated user data directly
    });

    if (!response.ok) {
      throw new Error('Failed to update company user');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error updating company user:', error);
    throw new Error('Failed to update company user');
  }
};
