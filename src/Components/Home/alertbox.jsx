import React, { useState, useEffect } from 'react';

function AlertBox() {
    const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if the browser supports PWA installation
    if ('beforeinstallprompt' in window) {
      // Prevent the default browser prompt
      const installPromptEvent = window.beforeinstallprompt;
      installPromptEvent.preventDefault();

      // Show the installation prompt
      setIsVisible(true);

      // Set up an event listener for the installation prompt
      installPromptEvent.userChoice.then((result) => {
        if (result.outcome === 'accepted') {
          console.log('User accepted the install prompt.');
          // You can add further logic here if needed after installation
        } else {
          console.log('User declined the install prompt.');
          // Handle the case where the user declined the installation
        }

        // Hide the alert box once the user interacts with the prompt
        setIsVisible(false);
      });
    }
  }, []);

  const handleInstall = () => {
    // Trigger the installation prompt for your PWA here
    if ('beforeinstallprompt' in window) {
      const installPromptEvent = window.beforeinstallprompt;
      console.log('handleInstall called'); // Add this line
      installPromptEvent.prompt();
    }
  };
  

  const handleCancel = () => {
    // Handle cancel logic here
    // For example, you can simply hide the alert box
    setIsVisible(false);
  };
  return (
    <>
    {isVisible && (
      <div className="fixed inset-x-0 z-70 bg-teal-500 justify-center  text-white text-center p-2 bottom-0 h-16 w-screen flex items-center justify-end px-5 space-x-10 border-b-2 border-blue-600">
          <div className="bg-blue-500 text-white rounded-md absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-16 h-16">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-blue-500 w-4 h-4"></span>
          </div>
          <p className="text-lg font-semibold text-black mb-4 mr-24 justify-center">Add this app to your home screen for quick access. Do you want to install it?</p>
          <div className="flex justify-end space-x-2">
            <button
              onClick={handleInstall}
              className="px-6 py-3 font-Poppins mdpx-9 md:py-4 bg-purple-500 hover:bg-purple-700 text-white font-semibold rounded-full animate-pulse"
            >
              Install
            </button>
            <button
              onClick={handleCancel}
              className="px-6 py-3 font-Poppins mdpx-9 md:py-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-full animate-pulse"
            >
              Cancel
            </button>
          </div>
        </div>
    )}
  </>
  );
}

export default AlertBox;
