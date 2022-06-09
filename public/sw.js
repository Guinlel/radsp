const CACHE_NAME = "RADSP"
const Cache_Files= [
    '/',
    '/static/js/main.chunk.js',
    '/static/js/0.chunk.js',
    '/static/js/bundle.js',
    '/manifest.json',
    '/favicon.ico',
    '/sockjs-node/info?t=1654760187677',
    '/icon-192.png',
    '/icon-512.png',
    '/static/js/2.chunk.js',
    '/conversion',
    '/calcul-dose',
    '/calcul-perimetre',
    '/activite-restante',
    '/meteo',
    '/static/media/icon-header-blanc.744d63dc.png',
    '/main.a81e53d800eb40de1a7e.hot-update.js',
    '/a-propos',
    '/radionucleide',
    '/static/media/etiquettes-transport.440f554b.png',
    '/static/media/Debit-dose-etiquettes.d940f996.png',
    '/static/media/gravite-etiquettes-transport.5163f718.png',
    '/etiquette'
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

// self.addEventListener("fetch",(event)=>{
//     event.respondWith(
//         caches.match(event.request).
//         catch(()=>{ return fetch(event.request)
//         .then(()=>{
//             return cache.open(CACHE_NAME).then(()=>{
//                 caches.put(event.request, response.clone());
//                 return response;
//             })
//         })
//         })
//     )
// });

self.addEventListener("fetch",event=>{
    if (event.request.url.includes("/api")){
        event.respondWith(caches.match(event.request));
        event.waitUntil(update(event.request).then(refresh));
    } else {
        event.respondWith(caches.match(event.request).then(response =>{{
            return response;
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