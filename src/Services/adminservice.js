
export const adminLogin = async (username, password) => {
  try {
    const response = await fetch(`https://webapi.biscard.in/api/admin`, { // Use the new admin-login route
      method: 'POST',
      credentials: 'include', // Include credentials for cross-origin requests (e.g., cookies)
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Failed to log in');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error logging in:', error);
    throw new Error('Unable to log in');
  }
};


export const adminLogout = async () => {
  try {
    const response = await fetch(`https://webapi.biscard.in/api/admin/logout`, {
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
      throw new Error('Admin logout failed');
    }
  } catch (error) {
    console.error('Error during admin logout:', error);
    throw error;
  }
};