importScripts (
  'https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js'
);

if (workbox) {
  console.log('Workbox loaded! :-)');
  workbox.precaching.precache([
    'index.html',
    'css/main.css',
    'css/boxes.css',
    'css/containers.css',
    'css/basic-elements.css',
    'about.html',
    'brands.html'
    ]);

  workbox.routing.setDefaultHandler (
    new workbox.strategies.StaleWhileRevalidate()
  );

  workbox.routing.setCatchHandler(({event}) => {
    return caches.match('index.html');
  })
} else {
  console.log('no no no ... we do not have Workbox loaded');
}
