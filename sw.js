importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.4/workbox-sw.js');

// Set a unique cache name for your app
const cacheName = 'my-pwa-cache-v1';

// Use a NetworkFirst strategy for all requests
workbox.routing.registerRoute(
  ({ request }) => true, // Match all requests
  new workbox.strategies.NetworkFirst({
    cacheName: cacheName,
  })
);

// Handle push notifications
self.addEventListener('push', (event) => {
  const options = {
    body: event.data.text(),
  };

  event.waitUntil(
    self.registration.showNotification('Notification Title', options)
  );
});

// Handle background sync events
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    event.waitUntil(syncDataWithServer());
  }
});

// Custom synchronization logic with the server
async function syncDataWithServer() {
  // Implement your data synchronization logic here
}

// Cleanup old caches during activation
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== cacheName) {
            return caches.delete(name);
          }
        })
      );
    })
  );
});
