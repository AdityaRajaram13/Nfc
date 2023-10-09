const backendURL = 'https://webapi.biscard.in'; // Update with your backend URL

export const getCompanyAdminUsers = async () => {
  try {
    const response = await fetch(`https://webapi.biscard.in/api/getcompanyadminuser`, {
      method: 'GET',
      credentials: 'include', // Include cookies if your authentication relies on cookies
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch company admin users');
    }

    const responseData = await response.json();
    return responseData.users; // Return the array of company admin users
  } catch (error) {
    console.error('Error fetching company admin users:', error);
    throw new Error('Failed to fetch company admin users');
  }
};
