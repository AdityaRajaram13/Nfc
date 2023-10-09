const backendURL = 'http://localhost:3000'; // Update with your backend URL

export const getCompanyUsers = async (CompanyAdminID) => {
  try {
    const response = await fetch(`http://localhost:3000/api/cpm/CompanyAdmin/${CompanyAdminID}`, {
      method: 'GET',
      credentials: 'include', // Include cookies if your authentication relies on cookies
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch company users');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error fetching company users:', error);
    throw new Error('Failed to fetch company users');
  }
};
