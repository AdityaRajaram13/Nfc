const backendURL = 'http://localhost:3000'; // Update with your backend URL

export const deleteCompanyUser = async (CompanyAdminID, UserID) => {
  try {
    const response = await fetch(`http://localhost:3000/api/cpm/CompanyAdmin/${CompanyAdminID}/users/${UserID}`, {
      method: 'DELETE',
      credentials: 'include', // Include cookies if your authentication relies on cookies
    });

    if (!response.ok) {
      throw new Error('Failed to delete company user');
    }

    // No need to parse response data for delete requests

    return true; // Indicate successful deletion
  } catch (error) {
    console.error('Error deleting company user:', error);
    throw new Error('Failed to delete company user');
  }
};
