// profileService.js


//CREATE USER PROFILES
const backendURL = 'http://localhost:3000'; // Replace with your backend URL


export const createProfile = async (profileData) => {
  try {
    const response = await fetch(`http://localhost:3000/api/profile`, {
      method: 'POST',
      credentials: 'include', // Include credentials for cross-origin requests (e.g., cookies)
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData), // Convert the profileData object to JSON
    });

    if (!response.ok) {
      throw new Error('Failed to create profile');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error creating profile:', error);
    throw new Error('Unable to create profile');
  }
};
  //ARRAY OF PROFILES 
export const getProfiles = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/profile`, {
        method: 'GET',
        credentials: 'include', // Include credentials for cross-origin requests (e.g., cookies)
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch profile data');
      }
  
      const profiles = await response.json();
      return profiles;
    } catch (error) {
      console.error('Error fetching profiles:', error);
      throw new Error('Unable to fetch profile data');
    }
  };

  //FETCH PARTICULAR PROFILE OF USER BASED ON PROFILE ID
  export const fetchProfileDetails = async (profileID) => {
    try {
      const response = await fetch(`http://localhost:3000/api/profile/${profileID}`, {
        method: 'GET',
        credentials: 'include',
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch profile details');
      }
  
      const profileData = await response.json();
      return profileData;
    } catch (error) {
      console.error('Error fetching profile details:', error);
      throw new Error('Unable to fetch profile details');
    }
  };

  
//update Profile including customfield
export const updateProfile = async (profileData) => {
  try {
    const response = await fetch(`http://localhost:3000/api/profile/${profileData.profileID}`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData),
    });

    if (!response.ok) {
      throw new Error('Failed to update profile data');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error updating profile:', error);
    throw new Error('Unable to update profile data');
  }
};


//customfield Delete of particular profile
export const deleteCustomField = async (customFieldID) => {
  try {
    const response = await fetch(`http://localhost:3000/api/profile/custom-field/${customFieldID}`, {
      method: 'DELETE',
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error('Failed to delete custom field');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error deleting custom field:', error);
    throw new Error('Unable to delete custom field');
  }
};

//Delete Complete users particular profile
export const deleteProfile = async (profileID) => {
  try {
    const response = await fetch(`http://localhost:3000/api/profile/${profileID}`, {
      method: 'DELETE',
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Failed to delete profile');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error deleting profile:', error);
    throw new Error('Unable to delete profile');
  }
};


  
//updateISdefault Value
  export const updateIsDefaultProfile = async (profileID, isDefaultProfile) => {
    try {
      const response = await fetch(`http://localhost:3000/api/profile/update-default/${profileID}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isDefaultProfile }),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to update IsDefaultProfile: ${response.statusText}`);
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error updating IsDefaultProfile:', error);
      throw error;
    }
  };



  // get isDefault Profile
  export const getUserDefaultProfile = async (userID) => {
    try {
      const response = await fetch(`http://localhost:3000/${userID}`);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
      
      const profile = await response.json();
      return profile;
    } catch (error) {
      console.error('An error occurred:', error.message);
      throw error;
    }
  };
  