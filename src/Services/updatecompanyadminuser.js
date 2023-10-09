const backendURL = 'https://webapi.biscard.in'; // Update with your backend URL

export const updateCompanyAdmin = async (companyAdminID, updatedUserData) => {
  try {
    const response = await fetch(`https://webapi.biscard.in/api/companyadmin/update/${companyAdminID}`, {
      method: 'PUT',
      credentials: 'include', // Include cookies if your authentication relies on cookies

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUserData),
    });

    if (!response.ok) {
      throw new Error('Failed to update company admin user');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error updating company admin user:', error);
    throw new Error('Failed to update company admin user');
  }
};
