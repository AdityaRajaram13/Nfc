
// Function to fetch the user's image URL based on userID

const BASE_URL = 'https://webapi.biscard.in'; // Replace with your actual server URL

export async function getUserImageURL(userID) {
  try {
    const response = await fetch(`https://webapi.biscard.in/api/userimage/${userID}`,{
      method: 'GET',
      credentials: 'include',
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
