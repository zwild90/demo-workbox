console.log('app.js loaded');

window.addEventListener('load', () => {
  const deleteCacheButton = document.getElementById('delete-cache-button');
  const hardRelaodButton = document.getElementById('hard-reload-button')
  
  deleteCacheButton.onclick = () => {
    console.log('deleting cache');

    caches.keys().then(cacheNames => {
      cacheNames.forEach(cacheName => {
        // caches.delete(cacheName);
      });
    });
  };

  hardRelaodButton.onclick = () => {
    console.log('reloading cache');

    location.reload(true);
  };
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    console.log('loading sw');
    navigator.serviceWorker.register('sw.js', { scope: '/' })
      .then(handleRegistration)
      .catch((error) => console.log('SW registration failed: ', error));
  });
}

function handleRegistration(registration) {
  registration.onupdatefound = () => {
    console.log('SW registered client: ', registration);
    console.log("NEW VERSION FOUND....UPDATING...");
    const installingWorker = registration.installing;
    installingWorker.onstatechange = () => {
      console.log('installing worker', installingWorker);
      if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
        location.reload();
        console.log("NEW VERSION READY...RELOAD!");
      }

      if (installingWorker.state === 'activated' && !navigator.serviceWorker.controller) {
        console.log("SERVICE WORKER INSTALLED!");
      }
    };
  };

  setInterval(function () {
    registration.update();
  }, 6000);
}
