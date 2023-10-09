const backendURL = 'http://localhost:3000'; // Update with your backend URL

export const getCompanyAdminUsers = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/getcompanyadminuser`, {
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
