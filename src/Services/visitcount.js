// api.js

const backendURL = import.meta.env.VITE_BACKEND_URL;

export async function fetchTotalVisitCount(userID) {
  try {
    const response = await fetch(`${backendURL}/api/visitcount/${userID}`,{
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
