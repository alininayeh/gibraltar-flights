self.addEventListener('install', e => {
    console.log('install service worker', e);
    self.skipWaiting();
});

self.addEventListener('activate', e => {
    console.log('activate service worker', e);
    self.skipWaiting();
});