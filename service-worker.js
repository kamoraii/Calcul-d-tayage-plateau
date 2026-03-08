const CACHE_NAME = "etayage-cache-v1"

const urlsToCache = [
"./",
"./index.html",
"./icone.jpg",
"https://html2canvas.hertzen.com/dist/html2canvas.min.js"
]

self.addEventListener("install", event => {
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache => cache.addAll(urlsToCache))
)
})

self.addEventListener("fetch", event => {
event.respondWith(
caches.match(event.request)
.then(response => {
return response || fetch(event.request)
})
)
})