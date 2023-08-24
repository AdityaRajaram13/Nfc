const BASE_URL = import.meta.env.VITE_BACKEND_URL; // Replace with your actual server URL

// Function to fetch the user's image URL based on userID
export async function getUserImageURL(userID) {
  try {
    const response = await fetch(`${BASE_URL}/api/userimage/${userID}`, {
      method: 'GET',
      credentials: 'include', // Include credentials for cross-origin requests (e.g., cookies)
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error fetching user image URL');
    }

    const data = await response.json();
    return data.imageURL;
  } catch (error) {
    console.error('Error fetching user image URL:', error);
    throw error; // Re-throw the error to be handled in the calling code
  }
}
