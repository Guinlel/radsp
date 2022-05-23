const CACHE_NAME = "RADSP"
const Cache_Files= ["Home.js","Conversion.js","CalcDose.js","App.js"];

// Installing SW
self.addEventListener("install",(event)=>{
    console.log("Service installing");
    event.waitUntil(caches.open(CACHE_NAME).then((cache)=>{cache.addAll(Cache_Files)}))
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