self.addEventListener('fetch', function (event) {
  if (/\.jpg$/.test(event.request.url)) {
    event.respondWith(
      fetch('/images/unicorn.jpg', {
        mode: 'no-cors'
      })
    );
  }
})
