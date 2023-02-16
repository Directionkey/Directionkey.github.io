/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0286ffc7ca30234570847b03d61dc19a"
  },
  {
    "url": "assets/css/0.styles.a92c5315.css",
    "revision": "8df00d99e22135f4bf608c764d4c6a6d"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.6ac529af.js",
    "revision": "0e7d78268e10e3f5bf04505afc99e157"
  },
  {
    "url": "assets/js/10.d1847221.js",
    "revision": "4a403554fd9eebcad79b011d9b444ba8"
  },
  {
    "url": "assets/js/11.772dfdf6.js",
    "revision": "05e652b103833dbee051718c490e23ae"
  },
  {
    "url": "assets/js/12.86174f75.js",
    "revision": "12eba1d688b43f13fb2f0a89ed09f712"
  },
  {
    "url": "assets/js/13.62efc993.js",
    "revision": "caa1b0fca40a181b0b3ab54029046fb2"
  },
  {
    "url": "assets/js/14.cc27edb2.js",
    "revision": "fde65719f55c0142c7e64ab6c97cc54a"
  },
  {
    "url": "assets/js/15.c868857b.js",
    "revision": "286d7b79598159581a603b4711faca3d"
  },
  {
    "url": "assets/js/16.7d3c19f2.js",
    "revision": "7367e33c801dfb134df3931a39aa6e34"
  },
  {
    "url": "assets/js/17.5997eacf.js",
    "revision": "0df0e4c1b259c579dd91b5fb8cbabb71"
  },
  {
    "url": "assets/js/18.b062eb0f.js",
    "revision": "d3e6620a8fb092e3ee60338b4287a67c"
  },
  {
    "url": "assets/js/19.03ac82f4.js",
    "revision": "c7968e8087dcb358ca554d7ccdbf954e"
  },
  {
    "url": "assets/js/20.10eb3af0.js",
    "revision": "87735d2f256058b4766530eb98168ac7"
  },
  {
    "url": "assets/js/21.dad27917.js",
    "revision": "80347e08001ebb589ee4865d70912f0b"
  },
  {
    "url": "assets/js/22.e3905624.js",
    "revision": "0be6a6dfdd29af5663353b461b77d499"
  },
  {
    "url": "assets/js/23.94efc68d.js",
    "revision": "7be211a8c754bec278cf2b31064d61d6"
  },
  {
    "url": "assets/js/24.922a5f71.js",
    "revision": "f69d246bbe7b07878280c6e65f0e441d"
  },
  {
    "url": "assets/js/25.65616f0d.js",
    "revision": "20cf061aaea5d0657439c3f22ce343f4"
  },
  {
    "url": "assets/js/26.d960795e.js",
    "revision": "27536bc8a86c089f000fdb766f8f2d64"
  },
  {
    "url": "assets/js/27.85b6e2f5.js",
    "revision": "5ed10710c8447fb5e0b97c6ec7698936"
  },
  {
    "url": "assets/js/28.ff22dfc4.js",
    "revision": "b9c0f1ef91a0b82f59e1b73bb9afd05b"
  },
  {
    "url": "assets/js/29.064aaf1c.js",
    "revision": "177edcd401b2a8e50941f415616090ae"
  },
  {
    "url": "assets/js/3.1ce28bf8.js",
    "revision": "52579ea7f388c40fa0c6c790da189435"
  },
  {
    "url": "assets/js/30.f0646f7f.js",
    "revision": "e4c1245608ff5aa46ab1a91890ef624a"
  },
  {
    "url": "assets/js/31.9b167005.js",
    "revision": "bc7910dbe8a7b30e1ecfd3947eace242"
  },
  {
    "url": "assets/js/32.c7d83815.js",
    "revision": "5ae14bd617153e2811922dda37912f61"
  },
  {
    "url": "assets/js/33.a3edd550.js",
    "revision": "7c49fbce24400c1b13df4397f7f6c5eb"
  },
  {
    "url": "assets/js/34.0b04a73b.js",
    "revision": "fa4cdbe29d1751b083848db238dad744"
  },
  {
    "url": "assets/js/35.43c3b7f7.js",
    "revision": "09a558a07218a2bd345356f189c7763b"
  },
  {
    "url": "assets/js/36.78463006.js",
    "revision": "e48f3548c8aa215381ebd3799de2c736"
  },
  {
    "url": "assets/js/37.9e5ffdc6.js",
    "revision": "b5a7db15f267b9af66d4a7a9823cdbcb"
  },
  {
    "url": "assets/js/38.4f2271fa.js",
    "revision": "26113acca717396ee963e82bede3fdf5"
  },
  {
    "url": "assets/js/39.1ecd406b.js",
    "revision": "c84a58a0dc8d662124f541904835f28b"
  },
  {
    "url": "assets/js/4.fed0fc2c.js",
    "revision": "a5d63980d4e11463c30502b15f4ab818"
  },
  {
    "url": "assets/js/40.f804587b.js",
    "revision": "ca7d3c461faf4b740b2d5793303b4217"
  },
  {
    "url": "assets/js/41.59d7bd01.js",
    "revision": "ed1dac50dac7bb853717ac4bd057a649"
  },
  {
    "url": "assets/js/42.eefcceb5.js",
    "revision": "2ec39553ff8dbcc45dc039be92c9d87b"
  },
  {
    "url": "assets/js/43.fa2a1d8e.js",
    "revision": "165eebf1f35a25519d463cafe1da098a"
  },
  {
    "url": "assets/js/44.62722f09.js",
    "revision": "62c6d3ccc38f8a25727d771b2cfe37e1"
  },
  {
    "url": "assets/js/45.7176433e.js",
    "revision": "58d0682f93b0fd7ae45ef0a924fef2a4"
  },
  {
    "url": "assets/js/46.929fc43a.js",
    "revision": "a8ff1fac4b5f7a45a588f288c64aae8d"
  },
  {
    "url": "assets/js/47.994cdca6.js",
    "revision": "11de3dc04b001d126427edb5dc4d889d"
  },
  {
    "url": "assets/js/5.00eac478.js",
    "revision": "152e965e15ad164cf935096fbbee9522"
  },
  {
    "url": "assets/js/6.61f25e0a.js",
    "revision": "f231765b6be9d1a57f9c9ba6ffadc4ea"
  },
  {
    "url": "assets/js/7.0bdf12f6.js",
    "revision": "dcc1e1ac881ac03cfb646861fc22bdb1"
  },
  {
    "url": "assets/js/8.58169d5e.js",
    "revision": "130baf9bbda9ff80059e52e4d083b039"
  },
  {
    "url": "assets/js/9.d3dec110.js",
    "revision": "cf0b86b1f0de481f8b08015857381d4d"
  },
  {
    "url": "assets/js/app.b530efea.js",
    "revision": "c0f119c363a4a61ee7858a480461bbb0"
  },
  {
    "url": "blogs/css/2021/CssDoodle1.html",
    "revision": "4f22e1a7ccbb07d23d564d51e48a4601"
  },
  {
    "url": "blogs/css/2021/CssDoodle2.html",
    "revision": "3529abf1c6bb14c714e9374374f63f91"
  },
  {
    "url": "blogs/css/2021/scope.html",
    "revision": "ce294808753236793b30f8f07eeeeb28"
  },
  {
    "url": "blogs/css/2022/glass.html",
    "revision": "4660babe560de7e66b8163e4e779beb9"
  },
  {
    "url": "blogs/design/2021/FilledInVsOutline.html",
    "revision": "0b119f6e0e6aa8df0129f34bb6d173b6"
  },
  {
    "url": "blogs/design/2021/lottie.html",
    "revision": "437c69033cfe9c1a70ba48769014388c"
  },
  {
    "url": "blogs/design/2021/ResolutionRatio.html",
    "revision": "554f373866e5d64e5515667ddde9077a"
  },
  {
    "url": "blogs/design/2021/SketchRenameIt.html",
    "revision": "7ef9ec526b6ad0f39ae40c7ddc650f14"
  },
  {
    "url": "blogs/js/2021/async.html",
    "revision": "785c941b4a0b4e6348e772cab62991d9"
  },
  {
    "url": "blogs/js/2021/axios.html",
    "revision": "b0f82e0c0b4be109f8cef038b3930062"
  },
  {
    "url": "blogs/js/2021/eventLoop.html",
    "revision": "e94449f7591112f2c4b5687bd6b223b3"
  },
  {
    "url": "blogs/js/2021/IdleDetector.html",
    "revision": "ace0087cf7d0a273aa25dfcc31d92c3d"
  },
  {
    "url": "blogs/js/2021/vue-class-component.html",
    "revision": "ed52a189dc5d3cda32848541ec375737"
  },
  {
    "url": "blogs/js/2021/vue-lazyload.html",
    "revision": "49f33eade3bdcd864fc30b4e177ddca0"
  },
  {
    "url": "blogs/js/2021/vue-router.html",
    "revision": "2c025fe56be7fa35ea4c892fb31faa54"
  },
  {
    "url": "blogs/js/2021/vue3-ts-elplus.html",
    "revision": "c7a7111bcf765ca4a8559703ffd84b85"
  },
  {
    "url": "blogs/js/2023/openAI.html",
    "revision": "07445868950bdc11715f44c33bacc181"
  },
  {
    "url": "blogs/music/2021/bluebird.html",
    "revision": "443f4f37904962230f2c1105d2673926"
  },
  {
    "url": "blogs/music/2021/chord.html",
    "revision": "0648646eebdc5295af64660b014d93c8"
  },
  {
    "url": "blogs/music/2021/MoonOnTheWater.html",
    "revision": "c6312880140f34efb46d3af9a5b9f12a"
  },
  {
    "url": "blogs/music/2021/shikinouta.html",
    "revision": "7f79c69e7fc9f267a9262b268b5a73a7"
  },
  {
    "url": "blogs/website/2021/git.html",
    "revision": "c6c4e11496e3160a2991be592f03516c"
  },
  {
    "url": "blogs/website/2021/imgur.html",
    "revision": "0db167a30b9004500c42169ffcd27d6c"
  },
  {
    "url": "blogs/website/2021/nginx.html",
    "revision": "8aca151f3fdc290f51887c4fac1d38c2"
  },
  {
    "url": "blogs/website/2021/vextab.html",
    "revision": "1d00abb37917090b1083742781c55632"
  },
  {
    "url": "blogs/website/2021/vue-cli3.html",
    "revision": "4eca376c4823c9948c5b92bb7ab4f800"
  },
  {
    "url": "blogs/website/2021/vuepress.html",
    "revision": "7433b014a37bc0d9acfe13338faf225c"
  },
  {
    "url": "categories/Chatgpt/index.html",
    "revision": "439649c24aa6461ffc1cbbbaa6f36de8"
  },
  {
    "url": "categories/Code/index.html",
    "revision": "cac9829671bca478d2d42af74d42a9d5"
  },
  {
    "url": "categories/css-doodle/index.html",
    "revision": "8b55d8721a984024baf3c604a0cbb762"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "7aa1008e63e9e2d1ed49bceae7c78b91"
  },
  {
    "url": "categories/Design/index.html",
    "revision": "367dc332655de5752cf3f26ebbc9dd4e"
  },
  {
    "url": "categories/doc/index.html",
    "revision": "c0bd06fe8849efecb48e24debc075ac5"
  },
  {
    "url": "categories/index.html",
    "revision": "64f7b9f13ebd1bcfcfe3896a595141d5"
  },
  {
    "url": "categories/Music/index.html",
    "revision": "46f36223234ad29e4edaea1677e47577"
  },
  {
    "url": "categories/Website/index.html",
    "revision": "ed0e99e417ae16da8c84c2fa14e3ae78"
  },
  {
    "url": "docs/theme-reco/markdown.html",
    "revision": "da505700afe17e06e007c97fcf766ff8"
  },
  {
    "url": "icon/bg.jpg",
    "revision": "6b72b0a7c3d5e5dff655037f6006329f"
  },
  {
    "url": "icon/LatteAndCat.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icon/LatteAndCat.svg",
    "revision": "8e2d868e240a4e9b1520fd83ad4b3ad3"
  },
  {
    "url": "icon/me.jpeg",
    "revision": "7b1f2625681378a67e1254994936dbe1"
  },
  {
    "url": "icon/me.png",
    "revision": "34dac91db68c591e01416cd6b76ebecb"
  },
  {
    "url": "index.html",
    "revision": "db8ad83c8de955b284dd90e47532b4d9"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "0d4b526f7daebfacdd89442d0d7d0e0a"
  },
  {
    "url": "tag/Chatgpt/index.html",
    "revision": "48a998fe4f28a2a170f37062ab1590ea"
  },
  {
    "url": "tag/css-doodle/index.html",
    "revision": "4d340958f93e10ecfaf1bc1515529ee1"
  },
  {
    "url": "tag/css/index.html",
    "revision": "8d5ee9be62f1a61378afd3a762afd6c4"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "98d70f781e4e28bc85e026542af5b921"
  },
  {
    "url": "tag/git/index.html",
    "revision": "b418b590415df671ba23c0c7043ca95f"
  },
  {
    "url": "tag/Guitar/index.html",
    "revision": "3dfcfa64a1d2a88c5336eeeb1ad4a700"
  },
  {
    "url": "tag/Harmonica/index.html",
    "revision": "77fd8e0215162e2ac86499ba6c167334"
  },
  {
    "url": "tag/Icon/index.html",
    "revision": "763ecfa6fb890bef3c9f756654053a4d"
  },
  {
    "url": "tag/ImagesWeserv/index.html",
    "revision": "5f95c295023cbda64c5cebc865845e4c"
  },
  {
    "url": "tag/Imgur/index.html",
    "revision": "199c2081db76da73c936fbb77942a1de"
  },
  {
    "url": "tag/index.html",
    "revision": "0726557e06537b0f1ff9bb377265c7f9"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "80609e30b8516810075800c4901d9327"
  },
  {
    "url": "tag/Lottie/index.html",
    "revision": "304855cb3f8f1392d732d4536039f966"
  },
  {
    "url": "tag/Nginx/index.html",
    "revision": "2de3a3bc979c68493156ce2761cdf9ba"
  },
  {
    "url": "tag/scoped/index.html",
    "revision": "d060cfdbf20d0f49990d4e25304faa1a"
  },
  {
    "url": "tag/sketch/index.html",
    "revision": "406875fa8d40e1a3b4a0c2dff32b555a"
  },
  {
    "url": "tag/test/index.html",
    "revision": "1638d9c5571dab1d8dbeaf5676af98f3"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "77c459b108507a442306daa29ff00d05"
  },
  {
    "url": "tag/VexTab/index.html",
    "revision": "9e4d1abbed9f0a2a6c821d9a4fc8ffd1"
  },
  {
    "url": "tag/vue-cli3/index.html",
    "revision": "c2781cbd208757fbf1445b911689c9fe"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "2b24eb730ce2888be688204934c60393"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "407f52c0528e363249088d623981b811"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "49017c01e50cd738748b3f609b864dc2"
  },
  {
    "url": "tag/单位/index.html",
    "revision": "86ff501c1dadff9fdc89d3e48c2f2266"
  },
  {
    "url": "timeline/index.html",
    "revision": "e3d246da44c10731ea83a0092c8dab0f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
