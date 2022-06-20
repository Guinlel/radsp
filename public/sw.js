const CACHE_NAME = "RADSP"
const Cache_Files= [
    '/',
    '/static/js/main.chunk.js',
    '/static/js/0.chunk.js',
    '/static/js/bundle.js',
    '/manifest.json',
    '/favicon.ico',
    '/icon-192.png',
    '/icon-512.png',
    '/static/js/2.chunk.js',
    '/conversion',
    '/calcul-dose',
    '/calcul-perimetre',
    '/activite-restante',
    '/calcul-dose-beta',
    '/calcul-dose-gamma',
    '/meteo',
    '/static/media/icon-header-blanc.744d63dc.png',
    '/main.a81e53d800eb40de1a7e.hot-update.js',
    '/a-propos',
    '/radionucleide',
    '/static/media/etiquettes-transport.440f554b.png',
    '/static/media/Debit-dose-etiquettes.d940f996.png',
    '/static/media/gravite-etiquettes-transport.5163f718.png',
    '/etiquette',
    '/memo-rad',
    '/static/media/double-enveloppe-rad.63ddcb70.png',
    '/static/media/sas-sdis32.a0a9e3a7.png',
]

// Installing SW
self.addEventListener("install",(event)=>{
    console.log("Service installing");
    event.waitUntil(caches.open(CACHE_NAME).then((cache)=>{return cache.addAll(Cache_Files)}))
});

// SW Respond
self.addEventListener("fetch",event=>{
    if (event.request.url.includes("/api")){
        event.respondWith(caches.match(event.request));
        event.waitUntil(update(event.request).then(refresh));
    } else {
        event.respondWith(caches.match(event.request).then(response =>{{
            if (response){
                return response;
            }         
        }}))
    }
})

// SW activate
self.addEventListener("activate",(event)=>{
    console.log("Services activating.");
})



function update(request){
    return fetch(request.url).then(
        response=>
        cache(request, response)
        .then(()=>response)
    );
    } 

function refresh(response){
    return response
    .json()
    .then(jsonResponse =>{
        self.clients.matchAll().then(clients =>{
            clients.forEach(client=>{
                client.postMessage(
                    JSON.stringify({
                        type: response.url,
                        date: jsonResponse.data
                    })
                );
            });
        });
        return jsonResponse.data
    })
}

function cache(request, response) {
    if (response.type === "error" || response.type === "opaque") {
      return Promise.resolve(); // do not put in cache network errors
    }
  
    return caches
      .open(CACHE_NAME)
      .then(cache => cache.put(request, response.clone()));
    }