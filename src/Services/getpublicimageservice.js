

//public template fetch image
const BASE_URL = import.meta.env.VITE_BACKEND_URL; // Replace with your actual server URL

export async function getUserImageURL(userID) {
  try {
    const response = await fetch(`${BASE_URL}/public/user/${userID}`);
    
    if (!response.ok) {
      throw new Error('Error fetching user image URL');
    }

    const data = await response.json();
    return data.imageURL; // Adjust the field name as needed
  } catch (error) {
    console.error('Error fetching user image URL:', error);
    throw error;
  }
}
