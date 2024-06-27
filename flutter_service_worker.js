'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e141ad81e857db0be5568ade169dc728",
"assets/AssetManifest.bin.json": "9de06ca7e2ab7e2cae8ce3f56f73b362",
"assets/AssetManifest.json": "3455566813f868a4e2be5a9252617c98",
"assets/assets/fonts/Lato/Lato-Black.ttf": "d83ab24f5cf2be8b7a9873dd64f6060a",
"assets/assets/fonts/Lato/Lato-BoldItalic.ttf": "acc03ac1e9162f0388c005177d55d762",
"assets/assets/fonts/Lato/Lato-Light.ttf": "2bcc211c05fc425a57b2767a4cdcf174",
"assets/assets/fonts/Lato/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/fonts/Lato/Lato-Thin.ttf": "7ab0bc06eecc1b75f8708aba3d3b044a",
"assets/assets/fonts/NotoSansEthiopic/NotoSansEthiopic-Black.ttf": "c3be51ba61c5c513480579312f8185b9",
"assets/assets/fonts/NotoSansEthiopic/NotoSansEthiopic-Bold.ttf": "5d93d5284b27bb76db6210f8dc2f5867",
"assets/assets/fonts/NotoSansEthiopic/NotoSansEthiopic-Light.ttf": "14e6f1dcc96e8e74270de2512edff286",
"assets/assets/fonts/NotoSansEthiopic/NotoSansEthiopic-Regular.ttf": "b6d2fc04477566cc16047e2e3b65f6ff",
"assets/assets/fonts/NotoSansEthiopic/NotoSansEthiopic-Thin.ttf": "01e04c0f3626cc27053a76157da83660",
"assets/assets/icons/admin.svg": "7dd324a8c2766dd598a2c283491ecf26",
"assets/assets/icons/admin_1.svg": "f9beee5cfe1312a9c7fa9da8449b0afb",
"assets/assets/icons/dashboard.svg": "470661be77acf1b33f4e5593c886476f",
"assets/assets/icons/detail.svg": "28fd1928759adb471ddaa943b6697362",
"assets/assets/icons/fa.svg": "faeca7c1ed34f8a213159f18d7260fc6",
"assets/assets/icons/history.svg": "413ab2883ee0393e59d4b3c8565d3af2",
"assets/assets/icons/image-gallery.svg": "c6d6abf172f1e9e8828d8a170d701d2e",
"assets/assets/icons/people.svg": "3b8f9fde8c62810ed4ff83d0cff5fb3a",
"assets/assets/icons/wallet.svg": "87b97d70b78e50c08b3676a8896598ce",
"assets/assets/images/icon.webp": "14acaa6132d36b82c544a8f23be4ccbc",
"assets/assets/images/mamapays.png": "8057c8b79c72ba78b42d0e4a7f5d1f9a",
"assets/assets/images/no-image-available.png": "0e4a663eae8cbe389514e3fde18bf4da",
"assets/assets/images/no-image.png": "da31ed9f95e48a4c75b17581f421a9ce",
"assets/assets/images/no-profile.png": "cf09e00170d77f79bb6221b42f6ac74d",
"assets/assets/images/profile.png": "4ac39f98106e89ef321104bd0cc4044f",
"assets/assets/images/signal-stream-slash-svgrepo-com.svg": "505832c26d621c892fddc0a3b7aaa253",
"assets/assets/images/undraw_page_not_found_re_e9o6.svg": "9db21ea7c8fe15417d7e74ba0ed5bbbb",
"assets/FontManifest.json": "d8d0dfcf5651f7f2a11dc7692bce2c1b",
"assets/fonts/MaterialIcons-Regular.otf": "4f2b821bbf17b4e148589200f7f0a379",
"assets/NOTICES": "1bf672b0c5f684742af755a4b82bc8b5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5e3d65f856012724a60b1e76e87f1c26",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "ec6cc114195fbeef7767f059790356fd",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "6bc95c727aa92b6f134f847de011f926",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d6f87d7226af05dd9e7f5416baae6cab",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "4703c57ed4e1b7a5094556220b6db08a",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "d2b963f3010aa933e1b74b1e2f093e01",
"icons/Icon-512.png": "eca475bbde94f49d4146bcf3e8dcfdb3",
"icons/Icon-maskable-192.png": "d2b963f3010aa933e1b74b1e2f093e01",
"icons/Icon-maskable-512.png": "eca475bbde94f49d4146bcf3e8dcfdb3",
"index.html": "b79e493ac0637cb7744c39e5867f7b7c",
"/": "b79e493ac0637cb7744c39e5867f7b7c",
"main.dart.js": "8b8508200690be812fed3ccc87a69c5f",
"manifest.json": "9c1d814d5c2515333b93005c4afadefa",
"version.json": "6d571d350e3dd12f60940604cee4552b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
