self.addEventListener('fetch', function(event) {
  // Por ahora, solo deja pasar las peticiones de los mapas
  event.respondWith(fetch(event.request));
});