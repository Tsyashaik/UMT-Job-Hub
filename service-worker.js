self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("umt-job-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/login.html",
        "/home.html",
        "/style.css",
        "/auth.js"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
