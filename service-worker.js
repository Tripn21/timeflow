const CACHE_NAME = 'timeflow-v2.0';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './android-launchericon-48-48.png',
  './android-launchericon-72-72.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
