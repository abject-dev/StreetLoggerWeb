'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "02fc6999e58da0a204fb8cde63dc8e40",
"assets/AssetManifest.bin.json": "88827bc41abf7c8bcf44840cff87cc2a",
"assets/AssetManifest.json": "a72f73b1b85a1dc1db8cc2e802750d37",
"assets/assets/fonts/SF6.otf": "15c4c69902a56b6ca32221884fc8536c",
"assets/assets/fonts/SF6.ttf": "3a19208471b0856f52f922c660af9fff",
"assets/assets/images/backAKI.avif": "050db89818dc79c898ef71a319be3d49",
"assets/assets/images/backAkuma.avif": "6bf95e51587e785d9c9ea8370b294be8",
"assets/assets/images/backAlex.avif": "0bb81ded87004ca7c1b279bdd4dc6c27",
"assets/assets/images/backBlanka.avif": "80efa1ad930b5de7b545da2ca7ead756",
"assets/assets/images/backCammy.avif": "b8540ef0cd6565fa8640e704ca0c4d6a",
"assets/assets/images/backChunLi.avif": "b49ed9484e8dddc1f09a5a005da672c7",
"assets/assets/images/backCViper.avif": "341bf87efcfea0ae09e332084f198907",
"assets/assets/images/backDeeJay.avif": "e4179c9bdff3d063e3c23318b642c203",
"assets/assets/images/backDhalsim.avif": "3ae9298c82edd4143de13057a1976628",
"assets/assets/images/backEd.avif": "6cb22c63d25f8b09e8192f5c5bf34ecd",
"assets/assets/images/backEHonda.avif": "9aa3fa59b8363a34313e0e2dacefec94",
"assets/assets/images/backElena.avif": "93e42f91e6a7507ebd719e2dcf8f347b",
"assets/assets/images/backgroundCharacter.jpg": "4b70f4dc0eab04b1554ba2590938ea49",
"assets/assets/images/backgroundMoveList.jpg": "2fb286b3ea0cb6f7d9dc6835c253d6ae",
"assets/assets/images/backgroundSelect.jpg": "fb6ba79c1bcaa33acf5d4c48949a1203",
"assets/assets/images/backGuile.avif": "ac3c6b562f450d5b21f2cb009d4e1b47",
"assets/assets/images/backIngrid.avif": "682fb5f46441f80a6272998f8f59ab4a",
"assets/assets/images/backJamie.avif": "45b24a0478e671fc48c6b04467a0a9f1",
"assets/assets/images/backJp.avif": "775c921af7861999a31e232a05e485ef",
"assets/assets/images/backJuri.avif": "55d8f6c9c82dc7a6984435c5fa14136f",
"assets/assets/images/backKen.avif": "2f1b0ca5e6ba629b0d21e396c1ea9659",
"assets/assets/images/backKimberly.avif": "41e53d9cf9596e1300cb9912e397b31f",
"assets/assets/images/backLily.avif": "084cbcf268698cc5e38a1c2d8b9f633c",
"assets/assets/images/backLuke.avif": "b015f8a719510e97404bcebf56fa808a",
"assets/assets/images/backMai.avif": "aa9fd27d38652521fae2114cb092c275",
"assets/assets/images/backManon.avif": "810a5027a6b5c8c4930ec011b141eb14",
"assets/assets/images/backMarisa.avif": "43d0b26a5f9a7d066a00dd875ff6fdfa",
"assets/assets/images/backMBison.avif": "d0782231097cbc0b466b6ad0bf317a64",
"assets/assets/images/backRashid.avif": "7874d9ee3916cfc16aa006d19e1f323a",
"assets/assets/images/backRyu.avif": "2b4f4eb08af960c8e755933b89292309",
"assets/assets/images/backSagat.avif": "dc2c9274750f9bc54b71875301d863c6",
"assets/assets/images/backTerry.avif": "04387c1e70ba9568acdd260ec2b212a3",
"assets/assets/images/backZangief.avif": "a22afc86ea628466da12b48023d8d78a",
"assets/assets/images/custom0.avif": "79edf9500cca7cb4780cb8b597586b56",
"assets/assets/images/custom1.avif": "cb8ec7b7dec17050cd9bbc9258919b48",
"assets/assets/images/custom10.avif": "86ca049c805bb3c1113c24d849082576",
"assets/assets/images/custom11.avif": "bca71768c8bac69a1ad463e7e5d94413",
"assets/assets/images/custom12.avif": "6c79c6513b3b3bd5bd7836f533c7d674",
"assets/assets/images/custom13.avif": "e12f7101a67576e3c33f5399d571ced5",
"assets/assets/images/custom14.avif": "da32213e39a93b0f1073d24275c9986b",
"assets/assets/images/custom15.avif": "5d7d141c073e04bea3ff1a39379c17af",
"assets/assets/images/custom16.avif": "d5274db8fce9a3446edca8fe08bc431f",
"assets/assets/images/custom17.avif": "59df48d346cec3b7c0538d82566cea4c",
"assets/assets/images/custom18.avif": "02b9d3422d191cad11588e26ab967cb0",
"assets/assets/images/custom19.avif": "41fdecf4d33ad4cb14151722bb890dd4",
"assets/assets/images/custom2.avif": "da9f7b40d8daf1a9d4c5c8c6d8518492",
"assets/assets/images/custom20.avif": "02e8728178adf9a42d588f977580cec3",
"assets/assets/images/custom21.avif": "a76ca88d96c677ec3e87a9ef134f7a7a",
"assets/assets/images/custom22.avif": "651bf030a10893528fac5c7012ab81fc",
"assets/assets/images/custom23.avif": "956ffcae92c310472edc6786fa35fade",
"assets/assets/images/custom24.avif": "703a0fe2e3d8f72c74dc6de603a591a0",
"assets/assets/images/custom25.avif": "e6d473ddd8df2c2aa3e30f29a4293565",
"assets/assets/images/custom26.avif": "2a00b84d07abe2ff3db1f2c832e08fb7",
"assets/assets/images/custom27.avif": "a67580bc2eb8e643d24353d8aaae82af",
"assets/assets/images/custom28.avif": "124605b2db5d6a03af99032448475d12",
"assets/assets/images/custom29.avif": "f7de084693b151f3d553177d173f4cb9",
"assets/assets/images/custom3.avif": "af17d226a88f014715e6997630fce82c",
"assets/assets/images/custom4.avif": "323e82dea96d5379ba5dc7a17c825b41",
"assets/assets/images/custom5.avif": "d62e1021902b7dc332b9741811ca8f4d",
"assets/assets/images/custom6.avif": "733117fa02c5a3bc4aefc9f64221c8c7",
"assets/assets/images/custom7.avif": "8cfa0e388397801bf08b7b99e0d221ee",
"assets/assets/images/custom8.avif": "d57ab6d5172f915e304b7574ac6a90df",
"assets/assets/images/custom9.avif": "7e475027b90dd17f3e3c153f898423f2",
"assets/assets/images/iconAKI.avif": "af11b5ec9e4313330ab4f1cabf95146d",
"assets/assets/images/iconAkuma.avif": "10e7d1b1055c5784e7b649a3cb23c010",
"assets/assets/images/iconAlex.avif": "eb873014ea3eab36afaf722f21490e14",
"assets/assets/images/iconAny.avif": "6259a3e2494bdc4852ef75d0976f0ad8",
"assets/assets/images/iconBlanka.avif": "0fe6fcfac1ee3f57891656430a6e4fb6",
"assets/assets/images/iconCammy.avif": "60384b4a5c15dddf37b6ca75acb4b1f2",
"assets/assets/images/iconCheckOff.avif": "38e6844772fb774f38325fa0d1e44452",
"assets/assets/images/iconCheckOn.avif": "b725624d57c5810f63e9803ac86e04aa",
"assets/assets/images/iconChunLi.avif": "fa96a4c910d44c0383ec8128dcd7c9ac",
"assets/assets/images/iconCViper.avif": "8d12a0c0afee2ff83f6cf30be52772ff",
"assets/assets/images/iconDeeJay.avif": "03d828f865219e7d1707b3a4acc2b508",
"assets/assets/images/iconDhalsim.avif": "258dc6ed054f9e86eae026636e2499c5",
"assets/assets/images/iconEd.avif": "05bdd1dcf663262267e7a55d52be9d51",
"assets/assets/images/iconEHonda.avif": "a0624ad9e1ea81fade7d9a925c272bb0",
"assets/assets/images/iconElena.avif": "da913f190c2b2e978c8d8b7f483882b2",
"assets/assets/images/iconGuile.avif": "6f2eb43eec76cc0516c1ec1dd5c2bf8b",
"assets/assets/images/iconIngrid.avif": "ebbe0189ff23f71bfc80c8a27148358d",
"assets/assets/images/iconJamie.avif": "705b1cf79d4f102b1586c2243a4aa8e9",
"assets/assets/images/iconJp.avif": "7a45b74e268cc9dc6bb351abf9d7dde4",
"assets/assets/images/iconJuri.avif": "00af2e61130333b7b0bc6665e927f4b5",
"assets/assets/images/iconKen.avif": "74f8d746a173d08296a39ed1ef54e9b3",
"assets/assets/images/iconKimberly.avif": "1789bab9e29097c79721cb7cd8f3a29e",
"assets/assets/images/iconLily.avif": "93d95aba40f994bd7f410ec4c4389be1",
"assets/assets/images/iconLuke.avif": "4c1f72c363349a95848786ef7e23be5d",
"assets/assets/images/iconMai.avif": "97199e9cd9e468c0edc30b5a4b2168f7",
"assets/assets/images/iconManon.avif": "76e935993c769d5780304ed216bc7eca",
"assets/assets/images/iconMarisa.avif": "e507639c0187e868561ac926273258ea",
"assets/assets/images/iconMBison.avif": "517edc6c58e53cae30585256018bafa6",
"assets/assets/images/iconRashid.avif": "b22f5fb9c5442de0708d9ad30878ba1b",
"assets/assets/images/iconRyu.avif": "0d209449e514db0e51889054665d08a2",
"assets/assets/images/iconSagat.avif": "48acb3943c6bc01aa452c7cdb9b4c99f",
"assets/assets/images/iconTerry.avif": "5399c606552d36ac7bf518bcec3ecc72",
"assets/assets/images/iconZangief.avif": "f6b53dedc769920ac05603748f3cca15",
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
"assets/assets/images/titleAKI.avif": "9a8ff7b44094eb4d3633f8b52e9a086d",
"assets/assets/images/titleAkuma.avif": "a628a1261461647b57a172ac5f956bd2",
"assets/assets/images/titleAlex.avif": "7b49d7f0ba77c63e0a4cd5eb44c18ff8",
"assets/assets/images/titleBlanka.avif": "cb22fc60f68468467d259fb63eacab14",
"assets/assets/images/titleCammy.avif": "87165a39462d09635bd59f520ee324b5",
"assets/assets/images/titleChunLi.avif": "1f94d2f2c4f857380f2294db101f3869",
"assets/assets/images/titleCViper.avif": "f76f2cdb50fef21d862045a203fc443a",
"assets/assets/images/titleDeeJay.avif": "6dda33a9d2599f17ffe0830606505309",
"assets/assets/images/titleDhalsim.avif": "43294d53e436e35f228457b10fd9d13e",
"assets/assets/images/titleEd.avif": "490783d059bb6ae83a711a3803a72591",
"assets/assets/images/titleEHonda.avif": "01ce84a25213d5284854adaf24051cbf",
"assets/assets/images/titleElena.avif": "bf5b6c8be1b09946b9973c2e3e00cf42",
"assets/assets/images/titleGuile.avif": "db79b299ae16b6e126e75d488dd74060",
"assets/assets/images/titleIngrid.avif": "ce1aece83c2536f2d1f395524e67d719",
"assets/assets/images/titleJamie.avif": "d05c07a5cfd07ee90d01e33739a4a264",
"assets/assets/images/titleJp.avif": "dbdc309c0e4b7b47e85117e7a36cf0a2",
"assets/assets/images/titleJuri.avif": "59225a749f479dd737d3740ed3831e86",
"assets/assets/images/titleKen.avif": "c51ead7aa89c457c040590c1e935093b",
"assets/assets/images/titleKimberly.avif": "1afef7cd326ec35ad2e9b33feac4ad9f",
"assets/assets/images/titleLily.avif": "c02430e7e2b36d8c958832b6dcec78b6",
"assets/assets/images/titleLuke.avif": "a293385c9aef838352ada72f30c60f96",
"assets/assets/images/titleMai.avif": "a8155acd3e46da97ab21dd8e45f228db",
"assets/assets/images/titleManon.avif": "ee3c508fb6b546fb9efde540787c96ae",
"assets/assets/images/titleMarisa.avif": "a670a0785b7b4fea08ab313692f21570",
"assets/assets/images/titleMBison.avif": "4fcdf5abf6dd9b96f4ea2116538759ff",
"assets/assets/images/titleRashid.avif": "e86e9997b87efd04cf564a548cd681b7",
"assets/assets/images/titleRyu.avif": "ddfd55ccc989864c3ef2d662786b966f",
"assets/assets/images/titleSagat.avif": "6b4bea47f23a7ca0fc3a4964ed12bbbf",
"assets/assets/images/titleTerry.avif": "9c1c43f3f71d2fe282e1e59d5135eccb",
"assets/assets/images/titleZangief.avif": "e68824526c4d03a55a36b4a4fcb9a517",
"assets/FontManifest.json": "3fce8be0cc6f2cbbdebc67491fb93933",
"assets/fonts/MaterialIcons-Regular.otf": "dfa1ab6bcd082f8c6800d3583a8be921",
"assets/NOTICES": "87d32369b6c99e2cbf77f02c7b30dcc9",
"assets/packages/flutter_avif_web/web/avif_decoder.js": "210926744b435703473ea7f724275ac6",
"assets/packages/flutter_avif_web/web/avif_decoder.loader.js": "c2b3ae85eff12c898be99f617bc8e3ef",
"assets/packages/flutter_avif_web/web/avif_decoder.wasm": "d8b6e291f463af6b88177d0783e3a6e5",
"assets/packages/flutter_avif_web/web/avif_decoder.worker.js": "5af61e88dca5abd4d6ec4c90873af2a4",
"assets/packages/flutter_avif_web/web/avif_encoder.js": "3cf41745d751be9d7352436cba71473d",
"assets/packages/flutter_avif_web/web/avif_encoder.loader.js": "846bfb4fe692bfee3237bd1af3841907",
"assets/packages/flutter_avif_web/web/avif_encoder.worker.js": "dc1e3bc5fbfc8387d7a029ac791ad4d3",
"assets/packages/flutter_avif_web/web/avif_encoder_bg.wasm": "ed284f35b9e048f5a0e55c90f4bfe1d1",
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
"flutter_bootstrap.js": "1ce275c9faa55c6b7a3840a361c79df3",
"icons/Icon-192.png": "7d22f3ca8c83b73c29a730c8cb48db11",
"icons/Icon-512.png": "fa133daaab0c03de9c25d473e80a17c0",
"icons/Icon-maskable-192.png": "7d22f3ca8c83b73c29a730c8cb48db11",
"icons/Icon-maskable-512.png": "fa133daaab0c03de9c25d473e80a17c0",
"index.html": "05b7ff4612cdf5f0b6a6f5c5397d1580",
"/": "05b7ff4612cdf5f0b6a6f5c5397d1580",
"main.dart.js": "e90702c2aa2b559c0d916b6407787637",
"manifest.json": "b1d23f47c896262768a9f21f971f8439",
"splash/img/dark-1x.png": "058e802e9bce30524abd6f0c16b61be5",
"splash/img/dark-2x.png": "f8b0dc5ae164b4b9cc07b1339fa9eae4",
"splash/img/dark-3x.png": "cee2d3dce0fbeca2b790429c0150bb5b",
"splash/img/dark-4x.png": "fd4c315dd75b1495cb206723d73e0613",
"splash/img/light-1x.png": "058e802e9bce30524abd6f0c16b61be5",
"splash/img/light-2x.png": "f8b0dc5ae164b4b9cc07b1339fa9eae4",
"splash/img/light-3x.png": "cee2d3dce0fbeca2b790429c0150bb5b",
"splash/img/light-4x.png": "fd4c315dd75b1495cb206723d73e0613",
"StreetLoggerWeb-0.1.4.zip": "21331ab1ba34985340a52a3042e4ef91",
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
