// Generado por publicar.py: no editar a mano
const CACHE = 'redes3d-50702e15b50d';
const ARCHIVOS = [
  "./",
  "iconos/icono-192.png",
  "iconos/icono-512.png",
  "iconos/icono-maskable-512.png",
  "index.html",
  "manifest.webmanifest",
  "modelos/CREDITOS.md",
  "modelos/License-Kenney-Furniture-Kit.txt",
  "modelos/chairDesk.glb",
  "modelos/personas/License-Kenney-Mini-Characters.txt",
  "modelos/personas/Textures/colormap.png",
  "modelos/personas/aid-glasses.glb",
  "modelos/personas/character-female-b.glb",
  "modelos/personas/character-female-d.glb",
  "modelos/personas/character-female-f.glb",
  "modelos/personas/character-male-a.glb",
  "modelos/personas/character-male-d.glb",
  "modelos/personas/character-male-e.glb",
  "modelos/personas/character-male-f.glb",
  "vendor/three/LICENSE",
  "vendor/three/addons/controls/OrbitControls.js",
  "vendor/three/addons/exporters/OBJExporter.js",
  "vendor/three/addons/loaders/GLTFLoader.js",
  "vendor/three/addons/loaders/OBJLoader.js",
  "vendor/three/addons/renderers/CSS2DRenderer.js",
  "vendor/three/addons/utils/BufferGeometryUtils.js",
  "vendor/three/addons/utils/SkeletonUtils.js",
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
