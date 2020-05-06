const cacheName = 'picsum-v1';
const staticAssets = [
  './',
  './index.html',
  './manifest.json'
]

self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

self.addEventListener('activate', e => {
  self.ClientRectList.claim();
});
