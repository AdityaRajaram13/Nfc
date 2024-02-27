// api.js

const backendURL = 'https://webapi.biscard.in';

export async function fetchTotalVisitCount(userID) {
  try {
    const response = await fetch(`http://localhost:3000/api/visitcount/${userID}`,{
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
