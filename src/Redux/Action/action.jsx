import { fetchProfileDetails } from '../../Services/ProfileService';

export const setProfileData = (profileData) => ({
  type: 'SET_PROFILE_DATA',
  payload: profileData,
});

export const fetchProfileData = (profileID) => {
  return async (dispatch) => {
    try {
      console.log('Fetching profile data...');
      const profileData = await fetchProfileDetails(profileID);
      console.log('Profile data fetched:', profileData);
      dispatch({ type: 'FETCH_PROFILE_SUCCESS', payload: profileData });
    } catch (error) {
      console.error('Error fetching profile data:', error.message);
      dispatch({ type: 'FETCH_PROFILE_FAILURE', payload: error.message });
    }
  };
};