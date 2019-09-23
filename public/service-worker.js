self.addEventListener('install', e => {
    console.log('install service worker', e);
});

self.addEventListener('activate', e => {
    console.log('activate service worker', e);
});