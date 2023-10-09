// companyAdminService.js

const backendURL = 'https://webapi.biscard.in';

export const companyAdminLogin = async (username, password) => {
  try {
    const response = await fetch(`https://webapi.biscard.in/api/companyadmin/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      const errorMessage = errorResponse.message || 'Failed to log in';
      throw new Error(errorMessage);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error logging in:', error);
    throw new Error('Unable to log in');
  }
};


export const companyAdminLogout = async () => {
  try {
    const response = await fetch(`https://webapi.biscard.in/api/companyadmin/logout`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('CompanyAdmin logout failed');
    }
  } catch (error) {
    console.error('Error during CompanyAdmin logout:', error);
    throw error;
  }
};
