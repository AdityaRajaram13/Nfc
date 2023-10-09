// companyAdminService.js


export const createCompanyAdmin = async (companyAdminData) => {
  try {
    const response = await fetch(`https://webapi.biscard.in/api/admin/companyadmin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(companyAdminData),
    });

    if (!response.ok) {
      throw new Error('Failed to create company admin');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error creating company admin:', error);
    throw new Error('Failed to create company admin');
  }
};
