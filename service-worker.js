(() => {
    const CACHE_NAME = 'my-site-cache-v1';

    function fetchAndAdd(request) {
        return fetch(request).then((response) => {
            return caches.open(CACHE_NAME).then((cache)=>{
                cache.put(request, response.clone());
                return response;
            });
        })
    }

    self.addEventListener('fetch', function (event) {
        event.respondWith(
            caches.match(event.request).then(function (response) {
                return response || fetchAndAdd(event.request);
            })
        );
    });
})();