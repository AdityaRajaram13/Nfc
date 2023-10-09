// api.js

const backendURL = 'https://webapi.biscard.in';

export async function fetchTotalVisitCount(userID) {
  try {
    const response = await fetch(`https://webapi.biscard.in/api/visitcount/${userID}`,{
        method: 'GET',
        credentials: 'include',
      });
      
    const data = await response.json();
    return data.totalVisitCount;
  } catch (error) {
    console.error('Error fetching visit count:', error);
    throw error;
  }
}
