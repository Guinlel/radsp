const CACHE_NAME = "RADSP"
const Cache_Files= [
    '/',
    'static/js/main.chunk.js',
    'static/js/0.chunk.js',
    'static/js/bundle.js',
    'leaflet@1.8.0/dist/leaflet.js',
    'manifest.json',
    'favicon.ico',
    'sockjs-node/info?t=1653402190477',
    'logo192.png'
]

// Installing SW
self.addEventListener("install",(event)=>{
    console.log("Service installing");
    event.waitUntil(caches.open(CACHE_NAME).then((cache)=>{return cache.addAll(Cache_Files)}))
});

// SW Respond
// self.addEventListener("fetch", event => {
//     console.log(`Request of ${event.request.url}`);
  
//     // comportement par défaut: requête le réseau
//     event.respondWith(fetch(event.request));
//   });

self.addEventListener("fetch",(event)=>{
    event.respondWith(
        caches.match(event.request).
        catch(()=>{ return fetch(event.request)
        .then(()=>{
            return cache.open(CACHE_NAME).then(()=>{
                caches.put(event.request, response.clone());
                return response;
            })
        })
        })
    )
});

// SW activate
self.addEventListener("activate",(event)=>{
    console.log("Services activating.");
})

