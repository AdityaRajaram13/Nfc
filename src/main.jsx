// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter as Router } from 'react-router-dom';
// import { AuthProvider } from './utils/authContext';



// ReactDOM.createRoot(document.getElementById('root')).render(
//   <AuthProvider>
//     <Router>
//     <App />
//   </Router>
//   </AuthProvider>
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './utils/authContext';
import OfflineMessage from './Components/OfflineMessage.jsx';
import InstallButton from './Components/InstallButton.jsx';

// Check if the browser supports service workers
if ('serviceWorker' in navigator) {
  // Register the service worker
  navigator.serviceWorker
  .register('/sw.js') // Updated path to 'sw.js'
  .then((registration) => {
    console.log('Service Worker registered with scope:', registration.scope);
  })
  .catch((error) => {
    console.error('Service Worker registration failed:', error);
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <AuthProvider>
    <Router>
      <App />
    </Router>
  </AuthProvider>
  <InstallButton />
  <OfflineMessage />
  </>
);

