
// Define a function to add CompanyAdmins from CSV
export const addCompanyAdminsFromCSV = async (companyAdminData) => {
  try {
    const response = await fetch(`http://localhost:3000/api/companyadmincsv/addcsv`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ companyAdminData }), // Pass the CompanyAdmin data in the request body
    });

    if (!response.ok) {
      throw new Error('Failed to add CompanyAdmins from CSV');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error adding CompanyAdmins from CSV:', error);
    throw new Error('An error occurred while adding CompanyAdmins from CSV');
  }
};
