const backendURL = 'https://webapi.biscard.in'; // Update with your backend URL

export const getCompanyUsers = async (CompanyAdminID) => {
  try {
    const response = await fetch(`https://webapi.biscard.in/api/cpm/CompanyAdmin/${CompanyAdminID}`, {
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
