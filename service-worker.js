const CACHE_NAME = 'timeflow-final-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './android-launchericon-48-48.png',
  './android-launchericon-72-72.png', 
  './android-launchericon-192-192.png',
  './android-launchericon-512-512.png'
];

// Instalar Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker instalado');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptar solicitudes
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Devuelve desde cache o haz fetch
        return response || fetch(event.request);
      })
  );
});

// Activar nuevo Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker activado');
});
