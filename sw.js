self.addEventListener('fetch', function(event) {
  // এটি অফলাইনে পেজ লোড করতে সাহায্য করবে
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
