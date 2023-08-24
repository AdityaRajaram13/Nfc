// profileService.js

const backendURL = import.meta.env.VITE_BACKEND_URL; // Replace with your backend URL

export const createProfile = async (profileData) => {
  try {
    const response = await fetch(`${backendURL}/api/profile`, {
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

export const getProfiles = async () => {
    try {
      const response = await fetch(`${backendURL}/api/profile`, {
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

  export const fetchProfileDetails = async (profileID) => {
    try {
      const response = await fetch(`${backendURL}/api/profile/${profileID}`, {
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

  export const updateProfile = async (profileID, updatedProfileData) => {
    try {
      const response = await fetch(`${backendURL}/api/profile/${profileID}`, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(updatedProfileData),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to update profile data: ${response.statusText}`);
      }
  
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  };
  

  export const updateIsDefaultProfile = async (profileID, isDefaultProfile) => {
    try {
      const response = await fetch(`${backendURL}/api/profile/update-default/${profileID}`, {
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

  export const getUserDefaultProfile = async (userID) => {
    try {
      const response = await fetch(`${backendURL}/${userID}`);
      
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