const CACHE_NAME = 'cruise-app-cache-v49';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './favicon.svg',
  './favicon.ico',
  './images/iorek.jpg',
  './images/lyra.jpg',
  './images/squeak1.jpg',
  './images/squeak2.jpg',
  './images/sherman.jpg',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

self.addEventListener('install', (event) => {
  self.skipWaiting(); // Activate new SW immediately
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim()) // Take control of all tabs immediately
  );
});

function isCacheable(request) {
  return request.method === 'GET' && request.url.startsWith('http');
}

// Network-first for HTML, JS, and CSS pages (so code & UI updates show immediately), stale-while-revalidate for static images/fonts
self.addEventListener('fetch', (event) => {
  if (!isCacheable(event.request)) {
    return;
  }

  const isNetworkFirst = event.request.mode === 'navigate' || 
                         (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) ||
                         event.request.url.includes('.js') ||
                         event.request.url.includes('.css');

  if (isNetworkFirst) {
    // Network first for HTML, JS, CSS
    event.respondWith(
      fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && isCacheable(event.request)) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
        }
        return networkResponse;
      }).catch(() => {
        return caches.match(event.request).then((cached) => cached || caches.match('./index.html'));
      })
    );
  } else {
    // Stale-while-revalidate for CSS/JS/images
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && isCacheable(event.request)) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          }
          return networkResponse;
        }).catch(() => cachedResponse);

        return cachedResponse || fetchPromise;
      })
    );
  }
});
