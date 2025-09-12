'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1e5bd06bf2377c889160e4379d207dfb",
"assets/AssetManifest.bin.json": "a15763ca449e31aa7871f2d49a79a177",
"assets/AssetManifest.json": "26461d4600a3df3a871a2e8c3c23fdad",
"assets/assets/fonts/SF6.otf": "15c4c69902a56b6ca32221884fc8536c",
"assets/assets/fonts/SF6.ttf": "3a19208471b0856f52f922c660af9fff",
"assets/assets/images/backAKI.png": "21f1ebfb825905f234ce0b13c0244190",
"assets/assets/images/backAkuma.png": "a03575eae2b974a92874df50e904f6b3",
"assets/assets/images/backBlanka.png": "ab78f12dc5bf1218fe3dbca96cb57628",
"assets/assets/images/backCammy.png": "cf9fe381d07e9a4cd7d74f805d88329f",
"assets/assets/images/backChunLi.png": "06115bd27cfba22858de3aa6719254e8",
"assets/assets/images/backDeeJay.png": "315ccab44b8a2765fb59965d234e061b",
"assets/assets/images/backDhalsim.png": "2b4a789b02f7a8c35b6348945dbde0e4",
"assets/assets/images/backEd.png": "512742cd9b1ef8274b7286027858650c",
"assets/assets/images/backEHonda.png": "81531c434fe978fdb526cdb9bd51d220",
"assets/assets/images/backElena.png": "dc69d92e2b7cca86bae741118ab25fb7",
"assets/assets/images/backgroundCharacter.png": "c49cd354783571a227e83742e0711e41",
"assets/assets/images/backgroundMoveList.png": "827b28486dbe719ca8a7cd5342461a9d",
"assets/assets/images/backgroundSelect.png": "c95c7f80e4d9c25350f4886d7ce234ff",
"assets/assets/images/backGuile.png": "6684937175f2599f846f2599931c1ec3",
"assets/assets/images/backJamie.png": "c6385f49503884c74a3cf06dfd4204f6",
"assets/assets/images/backJp.png": "f2d2631408923f75abd0a9448eeb26aa",
"assets/assets/images/backJuri.png": "eaef49867625c89201d4d176e13ca57e",
"assets/assets/images/backKen.png": "dbffa99cb40849daac80887a1becc920",
"assets/assets/images/backKimberly.png": "543496b1a28951558b9dc77491e91a40",
"assets/assets/images/backLily.png": "d1977c989ebe1d8e72e72c4b35647a76",
"assets/assets/images/backLuke.png": "884bdf12214f41946a7c434376cd2821",
"assets/assets/images/backMai.png": "061618320aaa2710c8ed0d7a9b74fc53",
"assets/assets/images/backManon.png": "6f2386e8cecf31c35713f6446e63e2c1",
"assets/assets/images/backMarisa.png": "35788012a9d67ef5214f1506892683b4",
"assets/assets/images/backMBison.png": "bfb2c737501853283b85622691e81d73",
"assets/assets/images/backRashid.png": "504a18da1faa8d263679f28e8ba93616",
"assets/assets/images/backRyu.png": "603c8576cf55dd0e9e2fadbb0a6e295e",
"assets/assets/images/backSagat.png": "78cbfddb4de6d20e486987a9166da837",
"assets/assets/images/backTerry.png": "67ff13d0471bd2942408dd7e032a89db",
"assets/assets/images/backZangief.png": "7cc195b323628e36f0ba77d15bc53cdf",
"assets/assets/images/iconAKI.png": "dde380bc1be1a7c9204c6dcb0f8a46dd",
"assets/assets/images/iconAkuma.png": "4fc50ab95111f5276d8565153c3198c1",
"assets/assets/images/iconAlex.png": "67f5aecea3444a3c584a686671a572af",
"assets/assets/images/iconAny.png": "6c39a4dec17e867e1fa19e816b3e57a4",
"assets/assets/images/iconBlanka.png": "4866f13f94ba1206add007cd6040f49a",
"assets/assets/images/iconCammy.png": "707f2f0453a0c077689f0087cac8a517",
"assets/assets/images/iconCheckOff.png": "dd4cb86e430deb06f768dd8047ab0bbf",
"assets/assets/images/iconCheckOn.png": "21ab6f4f66a73153db438a27f82d8ffb",
"assets/assets/images/iconChunLi.png": "86b412e33c4bc69121f219430de0b4cb",
"assets/assets/images/iconCViper.png": "204910ed5973ad0d34d00263ed6edbae",
"assets/assets/images/iconDeeJay.png": "1b238163a2e08734769b0622a6431075",
"assets/assets/images/iconDhalsim.png": "193d6692299b49ea0dbc92e7a85c270f",
"assets/assets/images/iconEd.png": "fa8fa243a938bda99c8921344eb913de",
"assets/assets/images/iconEHonda.png": "c1b82d093a4c84885fd34ae3faddf27a",
"assets/assets/images/iconElena.png": "a7b64ac4b04117f0c3493d42f6846ffe",
"assets/assets/images/iconGuile.png": "5938dce41fcf2d933264b03dd8f6015a",
"assets/assets/images/iconIngrid.png": "fff2587500f7c308564e284a9c1d5619",
"assets/assets/images/iconJamie.png": "578a5c4445df65b1dbb695dcfb8e79b7",
"assets/assets/images/iconJp.png": "4936cf0bfd487dcc10c2cd58af26844c",
"assets/assets/images/iconJuri.png": "fc2429dc09c0c00ac8c3cd1e72eaef6a",
"assets/assets/images/iconKen.png": "a23442d68f3fc869686174b01c194283",
"assets/assets/images/iconKimberly.png": "553018fd41930f7f75010b4724ae65a8",
"assets/assets/images/iconLily.png": "a7cc81fab23ea56f29f553e7b20707e4",
"assets/assets/images/iconLuke.png": "d10e82b5749e82dacf299e4c8e6024df",
"assets/assets/images/iconMai.png": "110da79073dd8d0c64a612077a503837",
"assets/assets/images/iconManon.png": "48d73e03ba8e3f686bc228930ab2a0a8",
"assets/assets/images/iconMarisa.png": "33d94806118439cbd3e6a07b960fe46b",
"assets/assets/images/iconMBison.png": "2d4cdfda5111b76c50d15527960c2182",
"assets/assets/images/iconRashid.png": "a2488e99f1dea0fa23e705fa742a9868",
"assets/assets/images/iconRyu.png": "f082d2c00181b7d36caecaa8d7cb957a",
"assets/assets/images/iconSagat.png": "ff5820f0fbde3dab6d7182b957df0661",
"assets/assets/images/iconTerry.png": "5a18aa75c48ef50480c59208826db67c",
"assets/assets/images/iconZangief.png": "7ee3ae1808c04a47a44ea77a8fe782f0",
"assets/assets/images/logoIcon.png": "751b769c2b6650a25488b0a56f14713f",
"assets/assets/images/logoSf6.png": "9064fe2f6a0d9ed7bbb0d8fec217d1b4",
"assets/assets/images/logoStreetLogger.png": "2af61d21df4a701b7a832c4739752e27",
"assets/assets/images/logoStreetLoggerA12.png": "cdfa507c0410f795b0b120a6f69d5db6",
"assets/assets/images/subsequentArrow.svg": "96e334b88b3c97a4dde1a7e30a44dc40",
"assets/assets/images/textIcon-.png": "c00cf8539b7e1918e60c575ef2e210b6",
"assets/assets/images/textIcon1.png": "1cfa91135760c6d8a2cb6ce10c670246",
"assets/assets/images/textIcon1C.png": "82c4855b05d6c2688262df0221ef031d",
"assets/assets/images/textIcon2.png": "3f40b63e92a6ff167920f62b6814b35d",
"assets/assets/images/textIcon2C.png": "cf13794ba9e0db393d205b233a50f4f8",
"assets/assets/images/textIcon3.png": "ffa3c61b8470c4e8313f617a15459152",
"assets/assets/images/textIcon360.png": "af3292fb7172340eb13699a71df44e1d",
"assets/assets/images/textIcon3C.png": "bc78eb508d811b855386cd2e8c3a4c5b",
"assets/assets/images/textIcon4.png": "cff8c454cd30ffb5a65fcbe0fb80be26",
"assets/assets/images/textIcon4C.png": "95636d8d7b8d018a5dd1a7b857033bac",
"assets/assets/images/textIcon5.png": "3b933076d1ea420ae0e02a2cf2ef13e6",
"assets/assets/images/textIcon6.png": "9072f21ae4922b2087fed899ef56e24b",
"assets/assets/images/textIcon6C.png": "0d658c3693e835f7bb71f635358b8c15",
"assets/assets/images/textIcon7.png": "429347dc528a1cfe734757a0f92ce39a",
"assets/assets/images/textIcon7C.png": "eb934f24348d61bf8dfd67ceffe8ad1d",
"assets/assets/images/textIcon8.png": "cf8e377b8875daa022441025a92e09d0",
"assets/assets/images/textIcon8C.png": "bf9cb4bf0cb9b13f64f9e76532f8613a",
"assets/assets/images/textIcon9.png": "fc4ef5646aa035fa0e8a5675340dbda3",
"assets/assets/images/textIcon9C.png": "71071801611d43982c23383e1a9503e2",
"assets/assets/images/textIconA.png": "d8224a14c177d026f20ca0a57f67d2d0",
"assets/assets/images/textIconAUTO.png": "3bef632517698ece085df7837709522e",
"assets/assets/images/textIconC.png": "f360665e897fbf117e89ef5313e1fd17",
"assets/assets/images/textIconCA.png": "a8fb6c93da9b91b4c9080b0272d9de20",
"assets/assets/images/textIconCharacter.png": "a985ca0ac5ca8f95bffebc656f8381c2",
"assets/assets/images/textIconClassic.png": "a8d99fe4f88126faea9c58942d2e7aa1",
"assets/assets/images/textIconD.png": "d75314fcfe92a6408ed2d9ac0139a7ec",
"assets/assets/images/textIconDh.png": "7c000bbfd5a0d05a23f3f583a4ebe29c",
"assets/assets/images/textIconDI.png": "966086524cc48e6d57e0604699b35ed7",
"assets/assets/images/textIconDP.png": "b517baa13ddb39f7c26e689ff419c93d",
"assets/assets/images/textIconDR.png": "aa4719c0591fdf6d438116720cb99b2f",
"assets/assets/images/textIconEmpty.png": "dcda353cbbdb62fbae4b10eebb1c4d3c",
"assets/assets/images/textIconH.png": "784b79216503af780f940b37fa100e54",
"assets/assets/images/textIconHK.png": "ec177c7498526422e302525f763e762f",
"assets/assets/images/textIconHP.png": "6f6f5a5f9d1efbc78ae49ea006538d61",
"assets/assets/images/textIconK.png": "1b820917c94ebdc5f56d576c71a705f8",
"assets/assets/images/textIconL.png": "54fd6cca59760d6503ff0ade9e8f5b97",
"assets/assets/images/textIconLK.png": "dacbc06db40884bd7531dde681d3e8ed",
"assets/assets/images/textIconLP.png": "40951a1b933c1eadb538ef6dc928a9bc",
"assets/assets/images/textIconM.png": "40c49b882d1a3a36ecb90cec146653a1",
"assets/assets/images/textIconMK.png": "a1eb53dde48de7312de47bfdbaab0bcf",
"assets/assets/images/textIconModern.png": "131324d43fcffdddfa7802b1cb2bb4b0",
"assets/assets/images/textIconMP.png": "daf65bf2686eab3bb0a335be01e38696",
"assets/assets/images/textIconP.png": "b0425e94c4cf9465917bf372755d0dd8",
"assets/assets/images/textIconR.png": "2e1d037e9783d195a8ed1a9aef6b8050",
"assets/assets/images/textIconSA.png": "228d08c1efb8f889470c3cf1d4a5bff1",
"assets/assets/images/textIconSA1.png": "4097880a2cf2a4a5161f17318177798f",
"assets/assets/images/textIconSA2.png": "62c7ee8924f1a1c7af61126fe3474ba2",
"assets/assets/images/textIconSA3.png": "0643d94550fd2c4b11b34ad12cee5459",
"assets/assets/images/textIconSP.png": "9632f86a8e0bbcd5703db00f5a2ae5cc",
"assets/assets/images/textIconT.png": "0a34bc1078f7eb1d24046faafce5b3aa",
"assets/assets/images/thumbUp.png": "c6806bde7298436fe87c275965d07dc2",
"assets/assets/images/titleAKI.png": "f878ebca68dd98c2ef53fb17a83ffa7a",
"assets/assets/images/titleAkuma.png": "9e02e107ccbd6bc902a0299fd7fd36cc",
"assets/assets/images/titleBlanka.png": "3f89e024c73b2a550f896b22b22c4b89",
"assets/assets/images/titleCammy.png": "5cf783b61229bbc48490a46924b9d690",
"assets/assets/images/titleChunLi.png": "b156e6cd526d29fe20d06887e7e9917c",
"assets/assets/images/titleDeeJay.png": "45d7737f2055696bdc625007fd1d133e",
"assets/assets/images/titleDhalsim.png": "9a2593501c616ffec0da3ffd98b6e405",
"assets/assets/images/titleEd.png": "887d05480a097617c2999702519f69eb",
"assets/assets/images/titleEHonda.png": "75d77020a6c1a07b152a7d4d74426d70",
"assets/assets/images/titleElena.png": "a58d947d4f6eca277ca2f2d0e4fcdbb0",
"assets/assets/images/titleGuile.png": "d32e66e81852521daeaff9fee2a272ec",
"assets/assets/images/titleJamie.png": "1bfe32a2cca80e89c68f10c7cc2a03e6",
"assets/assets/images/titleJp.png": "41afc06ce41994ae350bec77fb19c538",
"assets/assets/images/titleJuri.png": "d87f14cce11abbfd4dacdb01ef537076",
"assets/assets/images/titleKen.png": "1495c7c41b1a1aae12f35785089c1b05",
"assets/assets/images/titleKimberly.png": "b519bceff45be350aed1bbbd91aa194b",
"assets/assets/images/titleLily.png": "1e460fa7d5d058dee6eac9f31b3cc12f",
"assets/assets/images/titleLuke.png": "bbf02e75a620246d9462bad109d1b491",
"assets/assets/images/titleMai.png": "7f0aebcb60de60c4af312873078ae158",
"assets/assets/images/titleManon.png": "03435748d3e276aadd67903a18e9747e",
"assets/assets/images/titleMarisa.png": "2f7f0c8892848fa1d071ef7c9d4eeb90",
"assets/assets/images/titleMBison.png": "e2851681b5aeb1bbe4db5a56a46cda86",
"assets/assets/images/titleRashid.png": "3fc5ac42662345cb3666b82511ee977f",
"assets/assets/images/titleRyu.png": "83e958aa4f05e69c14950e82d844e104",
"assets/assets/images/titleSagat.png": "e67b490021269e9556759315fec52f43",
"assets/assets/images/titleTerry.png": "4b18e02b88a896c9878291e2b6d03296",
"assets/assets/images/titleZangief.png": "aa5fba6fe66a083ebf6b0e0bc8624c93",
"assets/FontManifest.json": "3fce8be0cc6f2cbbdebc67491fb93933",
"assets/fonts/MaterialIcons-Regular.otf": "0be7061cc481714fe43a46e9ecc9c71f",
"assets/NOTICES": "ed5f2f485644f9b27c7ccb57aee06b97",
"assets/packages/quill_native_bridge_linux/assets/xclip": "d37b0dbbc8341839cde83d351f96279e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "01419876adddca9a705b178027f39931",
"canvaskit/canvaskit.wasm": "224531fa8a219a8a6525ea90bfb883e9",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "e7ca51a00317e84321ed47f5a18c1275",
"canvaskit/chromium/canvaskit.wasm": "0a56b0c592bf1bddd3e6c2d85551ceb6",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "1a9aae4da4b9188c315c03d56a3a45f4",
"canvaskit/skwasm.wasm": "c92138c2247d77be3983c6d87973ccc6",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "430bbaf7cd06234024ba1340e932ce3f",
"canvaskit/skwasm_heavy.wasm": "93400cde1aad6370395b4a8d1b64ded4",
"favicon.png": "02d50c8788b92c4f6315597b9f38d2b2",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "ebbc10e11c5fdc69e99f5193b80f3db7",
"icons/Icon-192.png": "7d22f3ca8c83b73c29a730c8cb48db11",
"icons/Icon-512.png": "fa133daaab0c03de9c25d473e80a17c0",
"icons/Icon-maskable-192.png": "7d22f3ca8c83b73c29a730c8cb48db11",
"icons/Icon-maskable-512.png": "fa133daaab0c03de9c25d473e80a17c0",
"index.html": "05b7ff4612cdf5f0b6a6f5c5397d1580",
"/": "05b7ff4612cdf5f0b6a6f5c5397d1580",
"main.dart.js": "cce91c8e17e72fcf2fedfbd3c086ddec",
"manifest.json": "b1d23f47c896262768a9f21f971f8439",
"splash/img/dark-1x.png": "058e802e9bce30524abd6f0c16b61be5",
"splash/img/dark-2x.png": "f8b0dc5ae164b4b9cc07b1339fa9eae4",
"splash/img/dark-3x.png": "cee2d3dce0fbeca2b790429c0150bb5b",
"splash/img/dark-4x.png": "fd4c315dd75b1495cb206723d73e0613",
"splash/img/light-1x.png": "058e802e9bce30524abd6f0c16b61be5",
"splash/img/light-2x.png": "f8b0dc5ae164b4b9cc07b1339fa9eae4",
"splash/img/light-3x.png": "cee2d3dce0fbeca2b790429c0150bb5b",
"splash/img/light-4x.png": "fd4c315dd75b1495cb206723d73e0613",
"StreetLoggerWeb-0.1.3.zip": "706ae130a730d79b4d6effb721b6b55c",
"version.json": "bf81d689d2326e284e4feb72168e6f7b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
