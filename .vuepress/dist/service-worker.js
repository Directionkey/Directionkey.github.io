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
    "revision": "7ef8c502feb640607c5cb0f2babc63ad"
  },
  {
    "url": "assets/css/0.styles.560787a8.css",
    "revision": "d31dce077889b061a07cd0429eadba93"
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
    "url": "assets/js/13.cbb9ce1a.js",
    "revision": "4090b4a547ca84427dfc47393e6d9512"
  },
  {
    "url": "assets/js/14.b7c2c001.js",
    "revision": "2dc16fee7e91c95862f5549b9cd8f7ac"
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
    "url": "assets/js/19.f0cf8a29.js",
    "revision": "85656aaac535b36fc9139c5af6942214"
  },
  {
    "url": "assets/js/20.f5c0ef95.js",
    "revision": "90dc1054a6c564c5aa079239b1f48022"
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
    "url": "assets/js/23.6b942738.js",
    "revision": "c44443bd15700db80f23754daaf84865"
  },
  {
    "url": "assets/js/24.53354b62.js",
    "revision": "941788348b14db1323d355beec999422"
  },
  {
    "url": "assets/js/25.fb42eb1b.js",
    "revision": "c61b6c3d800cb37c67caa5b51097f5c9"
  },
  {
    "url": "assets/js/26.20c00955.js",
    "revision": "bc555db6f26578c101ac61466b1a11f3"
  },
  {
    "url": "assets/js/27.ded85dc9.js",
    "revision": "030b4d9321068d70c0856856a1ce3609"
  },
  {
    "url": "assets/js/28.ff22dfc4.js",
    "revision": "b9c0f1ef91a0b82f59e1b73bb9afd05b"
  },
  {
    "url": "assets/js/29.e1754ccf.js",
    "revision": "b776a6c079f1527220a241ff22b14255"
  },
  {
    "url": "assets/js/3.1ce28bf8.js",
    "revision": "52579ea7f388c40fa0c6c790da189435"
  },
  {
    "url": "assets/js/30.5c90b687.js",
    "revision": "9fb5b87336129edd80a0d4cb0accddee"
  },
  {
    "url": "assets/js/31.5a24f2bd.js",
    "revision": "bffad79d9971e163e44164cd3494d1a2"
  },
  {
    "url": "assets/js/32.6e02e106.js",
    "revision": "8c616cab18e094ee8971c897416492db"
  },
  {
    "url": "assets/js/33.00256052.js",
    "revision": "b8ae908d3c03259ed019bc5503350ab2"
  },
  {
    "url": "assets/js/34.0b04a73b.js",
    "revision": "fa4cdbe29d1751b083848db238dad744"
  },
  {
    "url": "assets/js/35.fb80d768.js",
    "revision": "43b0d45c5370f2a2c308fb1664107151"
  },
  {
    "url": "assets/js/36.78463006.js",
    "revision": "e48f3548c8aa215381ebd3799de2c736"
  },
  {
    "url": "assets/js/37.f626ab5f.js",
    "revision": "7bad8e5ccfc422dbc40d09b0db15f5a8"
  },
  {
    "url": "assets/js/38.2d049946.js",
    "revision": "e8e83162b0717d1f05a86709d7be26f0"
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
    "url": "assets/js/app.9cfea7f1.js",
    "revision": "d7a501b5dfd9b52d781737fd27de26cf"
  },
  {
    "url": "blogs/css/2021/CssDoodle1.html",
    "revision": "9c662920d1213c913b4606c9e1df5d3e"
  },
  {
    "url": "blogs/css/2021/CssDoodle2.html",
    "revision": "8e2ae4e7989829cdae929d12bdc14a57"
  },
  {
    "url": "blogs/css/2021/scope.html",
    "revision": "f6fc1e14b26e0069451d63dd48cbc763"
  },
  {
    "url": "blogs/css/2022/glass.html",
    "revision": "1204d47be65e102c678e0673d2bdd502"
  },
  {
    "url": "blogs/design/2021/FilledInVsOutline.html",
    "revision": "6642fcff4d407e06b8c5ba6877c1f1ec"
  },
  {
    "url": "blogs/design/2021/lottie.html",
    "revision": "460f17570620648c6b454ed503bd7629"
  },
  {
    "url": "blogs/design/2021/ResolutionRatio.html",
    "revision": "cb0bd3519fa6dbd0031fce5f4180c7b5"
  },
  {
    "url": "blogs/design/2021/SketchRenameIt.html",
    "revision": "0bcd895e0a1322525bc569bd3f25dd92"
  },
  {
    "url": "blogs/js/2021/async.html",
    "revision": "671f076fcafb9d27e9820c45f5158891"
  },
  {
    "url": "blogs/js/2021/axios.html",
    "revision": "c5847fd92aaf0e628ac8012814377024"
  },
  {
    "url": "blogs/js/2021/eventLoop.html",
    "revision": "64a6e7b1c0795c40631c6b7fe05422fc"
  },
  {
    "url": "blogs/js/2021/IdleDetector.html",
    "revision": "7ed33aea700bd25064f1f4456961ad0e"
  },
  {
    "url": "blogs/js/2021/vue-class-component.html",
    "revision": "b98cd916000a4af7c15f93516a4c9b49"
  },
  {
    "url": "blogs/js/2021/vue-lazyload.html",
    "revision": "d81f8583a5b248d476f0a65bc79514e2"
  },
  {
    "url": "blogs/js/2021/vue-router.html",
    "revision": "ddb978c7a58a819cd20b59a6950631f6"
  },
  {
    "url": "blogs/js/2021/vue3-ts-elplus.html",
    "revision": "a524ea9c32eb45b69fa57f64e7d7965f"
  },
  {
    "url": "blogs/js/2023/openAI.html",
    "revision": "b66a69507d47774828d5d52bb496e199"
  },
  {
    "url": "blogs/music/2021/bluebird.html",
    "revision": "1dded6c091f2ee5d28f48c94fcec552d"
  },
  {
    "url": "blogs/music/2021/chord.html",
    "revision": "f3e1e80e471a3904a07bfd9f77890608"
  },
  {
    "url": "blogs/music/2021/MoonOnTheWater.html",
    "revision": "31b88063c2d7b64c5294e91959f83a36"
  },
  {
    "url": "blogs/music/2021/shikinouta.html",
    "revision": "ad56b44de8020790d40baf83f39b87fe"
  },
  {
    "url": "blogs/website/2021/git.html",
    "revision": "079d455239687340810e911aaae53149"
  },
  {
    "url": "blogs/website/2021/imgur.html",
    "revision": "d70f5b1fbd70d5424041ff3b4233dea3"
  },
  {
    "url": "blogs/website/2021/nginx.html",
    "revision": "b4c51d7f3e1e6e09a0e3db4038379a07"
  },
  {
    "url": "blogs/website/2021/vextab.html",
    "revision": "6a81e0b1d74afc647d66401a40beb101"
  },
  {
    "url": "blogs/website/2021/vue-cli3.html",
    "revision": "ef6ee69e7c620d75b0e68f38e672fc27"
  },
  {
    "url": "blogs/website/2021/vuepress.html",
    "revision": "a1e77a6b712a66028a47ab7c190dc14a"
  },
  {
    "url": "categories/Chatgpt/index.html",
    "revision": "a958f45e16628f7fe4f5813bf768a595"
  },
  {
    "url": "categories/Code/index.html",
    "revision": "451878a4169bb151f0c0d7f0eab5136e"
  },
  {
    "url": "categories/css-doodle/index.html",
    "revision": "03dbf7b9e3d835c42f5baa92e94ac28c"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "5bebf6b7d3c77004ee297acd18bbba20"
  },
  {
    "url": "categories/Design/index.html",
    "revision": "26d4fd68d9eb8e646a4b601d41da389e"
  },
  {
    "url": "categories/doc/index.html",
    "revision": "a05a1a1b822a8f7073e910f0bb34c906"
  },
  {
    "url": "categories/index.html",
    "revision": "c1c09921c96a2fc396bc1e4e0e771850"
  },
  {
    "url": "categories/Music/index.html",
    "revision": "717bb948c6349e5d2071331545e9d284"
  },
  {
    "url": "categories/Website/index.html",
    "revision": "764e2121e6a623e8b18cf53218fd9c3b"
  },
  {
    "url": "docs/theme-reco/markdown.html",
    "revision": "3ff0ff5acbbcc20770efd326916f2f53"
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
    "revision": "51503cae5609ce6e733ed08de9efa1a2"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "0d4b526f7daebfacdd89442d0d7d0e0a"
  },
  {
    "url": "tag/Chatgpt/index.html",
    "revision": "edbb4e8fd3bcafc3aa3d091d16d610be"
  },
  {
    "url": "tag/css-doodle/index.html",
    "revision": "1d285c14f3bbc5f0284702ba87034d8f"
  },
  {
    "url": "tag/css/index.html",
    "revision": "d55123658dbef87bcb2d743a968564c5"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "953177795759db2c34ab1aa4f1615285"
  },
  {
    "url": "tag/git/index.html",
    "revision": "e02cffba859fadd0486d52e2c8e8171e"
  },
  {
    "url": "tag/Guitar/index.html",
    "revision": "be4034b3b53c1363d1777b2658f8515f"
  },
  {
    "url": "tag/Harmonica/index.html",
    "revision": "8d2175f52376c5759b1e8dfd716a679f"
  },
  {
    "url": "tag/Icon/index.html",
    "revision": "c614d6b31e05b627897c932a8719841f"
  },
  {
    "url": "tag/ImagesWeserv/index.html",
    "revision": "12fd49e7bc9e5cbc4cdef9ea7f6f5b6b"
  },
  {
    "url": "tag/Imgur/index.html",
    "revision": "df592a0f8b03461b543ce470b177bffc"
  },
  {
    "url": "tag/index.html",
    "revision": "36e195b74399795b1df10cba3b59f6a5"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "0a41b817bcda706601b11f1ec4dd12dd"
  },
  {
    "url": "tag/Lottie/index.html",
    "revision": "02499a4b2c2c3607b5d135ea23d7d80a"
  },
  {
    "url": "tag/Nginx/index.html",
    "revision": "eb7a0fb702e3ef0efaa604923e40e72d"
  },
  {
    "url": "tag/scoped/index.html",
    "revision": "6c8c304bcbf8d0543f8b2fa37390fa49"
  },
  {
    "url": "tag/sketch/index.html",
    "revision": "d2ce96f931ab9e0199362c73376cd7a7"
  },
  {
    "url": "tag/test/index.html",
    "revision": "24d1f14e37a640204cebd944d99ea77c"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "ecf6240f34872347c715c1ec1afed693"
  },
  {
    "url": "tag/unit/index.html",
    "revision": "c9b83a80618dd60bd895bf8b39c4a0bd"
  },
  {
    "url": "tag/VexTab/index.html",
    "revision": "e67cb540a16360b47ed44c1bc4f902d8"
  },
  {
    "url": "tag/vue-cli3/index.html",
    "revision": "ca38fcb815ea2b705c948967a3125077"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "c520dee8e1fccacffa8420665b12af2c"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "c5a03d66347130aaee135e430732bdaf"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "386547c0ae7ffc8c48c9ed3011db2bdf"
  },
  {
    "url": "timeline/index.html",
    "revision": "5182e47d5ad3a8bd7f9cfc5d8c321a32"
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
