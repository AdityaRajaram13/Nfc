const backendURL = 'http://localhost:3000'; // Update with your backend URL

// Define a function to add users with CSV data
export const addUsersWithCompanyAdmin = async (CompanyAdminID, csvData) => {
  try {
    const response = await fetch(`http://localhost:3000/api/admin/addusercompanycsv`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        CompanyAdminID: CompanyAdminID,
        csvData: csvData, // Pass the CSV data including CompanyAdminID
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to add users with CompanyAdminID');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error adding users with CompanyAdminID:', error);
    throw new Error('An error occurred while adding users with CompanyAdminID');
  }
};
