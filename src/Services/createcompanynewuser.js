const backendURL = 'https://webapi.biscard.in';// Update with your backend URL

export const createCompanyUser = async (CompanyAdminID, userData) => {
  try {
    const response = await fetch(`https://webapi.biscard.in/api/cpm/CompanyAdmin/create`, {
      method: 'POST',
      credentials: 'include', // Include cookies if your authentication relies on cookies
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        CompanyAdminID: CompanyAdminID,
        ...userData, // Include any other user data you want to send to the backend
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create company user');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error creating company user:', error);
    throw new Error('Failed to create company user');
  }
};
