const CACHE_NAME = "RADSP"
const Cache_Files= [
    '/src/App.js',
    '/src/components/Home.js'
]

// Installing SW
self.addEventListener("install",(event)=>{
    console.log("Service installing");
    event.waitUntil(caches.open(CACHE_NAME).then((cache)=>{return cache.addAll(Cache_Files)}))
});

// SW Respond
self.addEventListener('fetch',(event)=>{
    event.respondWith(caches.match(event.request)
        .then(cached => cached || fetch(event.request))
    )
})

// SW activate
self.addEventListener("activate",(event)=>{
    console.log("Services activating.");
})