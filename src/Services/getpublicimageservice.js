

//public template fetch image

export async function getUserImageURL(userID) {
  try {
    const response = await fetch(`https://webapi.biscard.in/public/user/${userID}`);
    
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
