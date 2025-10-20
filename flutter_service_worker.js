'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b7784c7090228beee9f65b96e921687a",
"assets/AssetManifest.bin.json": "40e5a1c5d712ac68c3d3afa12c735d09",
"assets/AssetManifest.json": "27a5ea4651d286207a4e14157e572902",
"assets/assets/fonts/SF6.otf": "15c4c69902a56b6ca32221884fc8536c",
"assets/assets/fonts/SF6.ttf": "3a19208471b0856f52f922c660af9fff",
"assets/assets/images/backAKI.png": "ef53c5e036d3ad3eb43ca25c7313acd5",
"assets/assets/images/backAkuma.png": "852a8ec202e8aca9e28712f3ded03b2c",
"assets/assets/images/backAlex.png": "eccdcc75845ecb10fdddfc4aacd4c229",
"assets/assets/images/backBlanka.png": "3408d3f68828677bcc43d5bd0e092d78",
"assets/assets/images/backCammy.png": "93f66b44e5c9093f3aa272eec2317600",
"assets/assets/images/backChunLi.png": "14a0824e2baadd34665d1e348366df2d",
"assets/assets/images/backCViper.png": "7345834abf8aa91601b88164562efb66",
"assets/assets/images/backDeeJay.png": "0bcfaece3507bf20a557a6a4b04c9829",
"assets/assets/images/backDhalsim.png": "74d33239885a6c75dd942a5dd4065e5b",
"assets/assets/images/backEd.png": "3ce75da334fd584fc3c226f554d6ed10",
"assets/assets/images/backEHonda.png": "538891a660b9d8653b4f7a993b10d314",
"assets/assets/images/backElena.png": "b9ba47dbc0d92c2fe0c03e50eefd629a",
"assets/assets/images/backgroundCharacter.jpg": "4b70f4dc0eab04b1554ba2590938ea49",
"assets/assets/images/backgroundMoveList.jpg": "2fb286b3ea0cb6f7d9dc6835c253d6ae",
"assets/assets/images/backgroundSelect.jpg": "fb6ba79c1bcaa33acf5d4c48949a1203",
"assets/assets/images/backGuile.png": "8ae4e28ffab3c118f754bf7815ec953b",
"assets/assets/images/backIngrid.png": "32dfac7986d2909426c3990d038de68e",
"assets/assets/images/backJamie.png": "94d8f28cedf86ae465a1f708d8f14b19",
"assets/assets/images/backJp.png": "c108f9d4c5a63fc82954cbc2de7916cc",
"assets/assets/images/backJuri.png": "aabe4a25606f62279398b937af654c5d",
"assets/assets/images/backKen.png": "0771b23721751b6d189cc77ad8ca681b",
"assets/assets/images/backKimberly.png": "92e64c0cae15e09c433c76035b993e19",
"assets/assets/images/backLily.png": "2bb61a8c6b1539ca56c0ac87137b85b7",
"assets/assets/images/backLuke.png": "c26d5ec4e22961f0a196028b2704adf3",
"assets/assets/images/backMai.png": "5e599191fe661c52c3a8501817c62e5f",
"assets/assets/images/backManon.png": "4f35d2c56513c48105ea3cf57ba68fd7",
"assets/assets/images/backMarisa.png": "0a0126d12d1de2d2e6b24ec7d07aee38",
"assets/assets/images/backMBison.png": "8167567b75176935d8f7af1103d44a81",
"assets/assets/images/backRashid.png": "53b481e6c28e868738d64fc40d6c1ba8",
"assets/assets/images/backRyu.png": "9cd8e35bd17044240d1827bae2bf40b9",
"assets/assets/images/backSagat.png": "11da1b92642b387b05b2a230fb25f202",
"assets/assets/images/backTerry.png": "ca0044cbb3127deaaf67ccec77522c60",
"assets/assets/images/backZangief.png": "da3b2e7fac31c1967688c4ff25fb7b70",
"assets/assets/images/custom0.png": "a9deb0c37a6b1ac194eb38d7266025d5",
"assets/assets/images/custom1.png": "82b3c807b54232502e84aa47e311dd46",
"assets/assets/images/custom10.png": "2d68a4da8321f3d923f4384a92264c84",
"assets/assets/images/custom11.png": "6a9dd5864f4fa1932738f59d8476ec21",
"assets/assets/images/custom12.png": "69bc28d2a11609d335f635fa84f617df",
"assets/assets/images/custom13.png": "7254e8964638da19c62c6080c67775a0",
"assets/assets/images/custom14.png": "caba46a19de773f3a2a972d26138f68e",
"assets/assets/images/custom15.png": "852b8b2d2482369b1c6a6cba7a4a03b4",
"assets/assets/images/custom16.png": "13e203fd9fcfbd41c01ad3fc31108184",
"assets/assets/images/custom17.png": "8a3c7e6b5d47bc33b6fc212ab3764a19",
"assets/assets/images/custom18.png": "84c3e273f29ed46b9a02e49b742cdf31",
"assets/assets/images/custom19.png": "04d4e1f95d2e56d68b03727550ec5dbc",
"assets/assets/images/custom2.png": "58229fc8bed10b725f92a2e5c318caa8",
"assets/assets/images/custom20.png": "60722e55ecb8935259bb3f2c08c74593",
"assets/assets/images/custom21.png": "9132854857fe66de9bf4afd4ce03e1ea",
"assets/assets/images/custom22.png": "37e15481f061c20b5e8123fc22b60c36",
"assets/assets/images/custom23.png": "f0dc2c4e63e3acea8ffc789f639222de",
"assets/assets/images/custom24.png": "dfcf1294abfb9b3c89feab7648cdcaac",
"assets/assets/images/custom25.png": "2c616358015bb99bf9139026fe87a113",
"assets/assets/images/custom26.png": "d3107f285448be081b91b3579654d437",
"assets/assets/images/custom27.png": "51bc5a7c85ab727bda6ed34dec98e0b5",
"assets/assets/images/custom28.png": "d833308b6dfcffe6396f63b5bc5dd9de",
"assets/assets/images/custom29.png": "e049094092fc23d014e560317e6d7239",
"assets/assets/images/custom3.png": "a82aabb7a49d4d62c7483d18d4182d2a",
"assets/assets/images/custom4.png": "bb653ddf1f7fd1694b0e85f3d1e94e3f",
"assets/assets/images/custom5.png": "b27a03ec584c9513fa3f50db3b8be6a5",
"assets/assets/images/custom6.png": "d1409b788aab0479251c987f2d416c36",
"assets/assets/images/custom7.png": "531524c155589b9abebd401321364bae",
"assets/assets/images/custom8.png": "d88ec55af08120d76b3d398074be5b65",
"assets/assets/images/custom9.png": "8b55e559ed2ca408e9b097249b40bf34",
"assets/assets/images/iconAKI.png": "676f85d3324a067f203caea453962efa",
"assets/assets/images/iconAkuma.png": "09e287b9e72bc8091f6f4e3890072ee4",
"assets/assets/images/iconAlex.png": "fb116f3a61c91cac57b38a1ee10704db",
"assets/assets/images/iconAny.png": "d18279ad09930be6ecbd6e057e8ded29",
"assets/assets/images/iconBlanka.png": "036f421c9990ec5e48736ef063c598a6",
"assets/assets/images/iconCammy.png": "a8c1e0b60f387145bf424fc8241abb18",
"assets/assets/images/iconCheckOff.png": "97c6d52070499ca35ae60b37495b35eb",
"assets/assets/images/iconCheckOn.png": "931af3b878d4b21d796a247ccb2c5a97",
"assets/assets/images/iconChunLi.png": "ed775807750a56e34aaab8e33f5337fc",
"assets/assets/images/iconCViper.png": "6d2e683d861283da4ee5f4c4d27087ba",
"assets/assets/images/iconDeeJay.png": "ded82596d0f1dc582a6e4a1ed106b87c",
"assets/assets/images/iconDhalsim.png": "9e28b93212faf1d6bfc68b8e48435dbb",
"assets/assets/images/iconEd.png": "e9237b9f9d7d1c25bf72b75306a0e2d7",
"assets/assets/images/iconEHonda.png": "11dc7eb40fd37138b345c28410ab28f5",
"assets/assets/images/iconElena.png": "5325f654897429a2df089264086ee916",
"assets/assets/images/iconGuile.png": "dc4ec6c44e96e8c67494f8a681fb16a6",
"assets/assets/images/iconIngrid.png": "d9965ea414f0f2073dc9c991b928a490",
"assets/assets/images/iconJamie.png": "fac622e7c661f00f7260311a7e365ec4",
"assets/assets/images/iconJp.png": "741445479e97be4ce6f2a15f583959a6",
"assets/assets/images/iconJuri.png": "4fff52cd49af55f659763d98c1a172be",
"assets/assets/images/iconKen.png": "0c049ee14d032222f104471b76e8bc79",
"assets/assets/images/iconKimberly.png": "761113d3fc82d463ed128e62fecb1254",
"assets/assets/images/iconLily.png": "e3ffe684323b52d740ca52f855d0b6ee",
"assets/assets/images/iconLuke.png": "f0f7a5ce12385f4fc6f7e11163ba2504",
"assets/assets/images/iconMai.png": "44fcdbc8da59364b33a5dcd1a4e6b615",
"assets/assets/images/iconManon.png": "638bdbc3a7cd60044e30a42b9fa21580",
"assets/assets/images/iconMarisa.png": "834e6b259a74d6a8fcad855fb7a79a8d",
"assets/assets/images/iconMBison.png": "9704b1b0a858c30f411b0c6c57951cd5",
"assets/assets/images/iconRashid.png": "754427e3540d495dfa845c3eef036219",
"assets/assets/images/iconRyu.png": "ac895fdaf447ded533bb8036c2b78346",
"assets/assets/images/iconSagat.png": "a06ba70e228269a70fa385e9bbe4f792",
"assets/assets/images/iconTerry.png": "ff44e6d5b73c92a7ec8d826cedc0b92f",
"assets/assets/images/iconZangief.png": "1646a90d39536ecfa2aae8a36bf3fb99",
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
"assets/assets/images/titleAlex.png": "3edd152cd24d7503715873856e263f89",
"assets/assets/images/titleBlanka.png": "3f89e024c73b2a550f896b22b22c4b89",
"assets/assets/images/titleCammy.png": "5cf783b61229bbc48490a46924b9d690",
"assets/assets/images/titleChunLi.png": "b156e6cd526d29fe20d06887e7e9917c",
"assets/assets/images/titleCViper.png": "28153713735663c64036261d5792292d",
"assets/assets/images/titleDeeJay.png": "45d7737f2055696bdc625007fd1d133e",
"assets/assets/images/titleDhalsim.png": "9a2593501c616ffec0da3ffd98b6e405",
"assets/assets/images/titleEd.png": "887d05480a097617c2999702519f69eb",
"assets/assets/images/titleEHonda.png": "75d77020a6c1a07b152a7d4d74426d70",
"assets/assets/images/titleElena.png": "a58d947d4f6eca277ca2f2d0e4fcdbb0",
"assets/assets/images/titleGuile.png": "d32e66e81852521daeaff9fee2a272ec",
"assets/assets/images/titleIngrid.png": "84e51ccd3a654d33a018f45d5e516c8a",
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
"assets/fonts/MaterialIcons-Regular.otf": "dfa1ab6bcd082f8c6800d3583a8be921",
"assets/NOTICES": "de1896b5d66ac0eb06d0f156db571513",
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
"flutter_bootstrap.js": "991fb2f7b21587c8eeab7f1a48bdd1f9",
"icons/Icon-192.png": "7d22f3ca8c83b73c29a730c8cb48db11",
"icons/Icon-512.png": "fa133daaab0c03de9c25d473e80a17c0",
"icons/Icon-maskable-192.png": "7d22f3ca8c83b73c29a730c8cb48db11",
"icons/Icon-maskable-512.png": "fa133daaab0c03de9c25d473e80a17c0",
"index.html": "05b7ff4612cdf5f0b6a6f5c5397d1580",
"/": "05b7ff4612cdf5f0b6a6f5c5397d1580",
"main.dart.js": "0ad193342b5fafe3badc846164c48f9e",
"manifest.json": "b1d23f47c896262768a9f21f971f8439",
"splash/img/dark-1x.png": "058e802e9bce30524abd6f0c16b61be5",
"splash/img/dark-2x.png": "f8b0dc5ae164b4b9cc07b1339fa9eae4",
"splash/img/dark-3x.png": "cee2d3dce0fbeca2b790429c0150bb5b",
"splash/img/dark-4x.png": "fd4c315dd75b1495cb206723d73e0613",
"splash/img/light-1x.png": "058e802e9bce30524abd6f0c16b61be5",
"splash/img/light-2x.png": "f8b0dc5ae164b4b9cc07b1339fa9eae4",
"splash/img/light-3x.png": "cee2d3dce0fbeca2b790429c0150bb5b",
"splash/img/light-4x.png": "fd4c315dd75b1495cb206723d73e0613",
"StreetLoggerWeb-1.0.0.zip": "de9f0bd98c8d21cdec59659b6b5c497a",
"version.json": "0082213a7041f58ab690cb31d034b527"};
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
