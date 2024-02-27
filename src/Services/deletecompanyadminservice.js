const backendURL = 'https://webapi.biscard.in'; // Update with your backend URL

export const deleteCompanyAdmin = async (CompanyAdminID) => {
  try {
    const response = await fetch(`http://localhost:3000/api/companyadmin/delete/${CompanyAdminID}`, {
      method: 'DELETE',
      credentials: 'include', // Include cookies if your authentication relies on cookies
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete company admin');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error deleting company admin:', error);
    throw new Error('Failed to delete company admin');
  }
};
