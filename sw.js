// Generado por publicar.py: no editar a mano
const CACHE = 'redes3d-b703ee1725ea';
const ARCHIVOS = [
  "./",
  "iconos/icono-192.png",
  "iconos/icono-512.png",
  "iconos/icono-maskable-512.png",
  "index.html",
  "manifest.webmanifest",
  "vendor/three/LICENSE",
  "vendor/three/addons/controls/OrbitControls.js",
  "vendor/three/addons/exporters/OBJExporter.js",
  "vendor/three/addons/loaders/OBJLoader.js",
  "vendor/three/addons/renderers/CSS2DRenderer.js",
  "vendor/three/three.module.js"
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k.startsWith('redes3d-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
// Primero la caché; lo de otros dominios (modelos .obj por URL) va directo a la red
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request)));
});
