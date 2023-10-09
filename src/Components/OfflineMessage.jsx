import React, { useState, useEffect } from 'react';

function OfflineMessage() {
  const [isOnline, setIsOnline] = useState(true); // Initialize as online by default

  useEffect(() => {
    // Check the initial online status when the component mounts
    setIsOnline(navigator.onLine);

    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);

    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, []);

  return (
    <div
      className={`${
        isOnline ? 'hidden' : 'block'
      } bg-red-500 text-white text-center p-2`}
    >
      You are currently offline. Please check your internet connection.
    </div>
  );
}

export default OfflineMessage;
