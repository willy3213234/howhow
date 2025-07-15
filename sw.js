self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("motor-app-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./app.js",
        "./styles.css",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
