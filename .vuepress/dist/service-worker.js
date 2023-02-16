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
    "revision": "a7aafb45e2547145810700a6cc56ba9f"
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
    "url": "assets/js/16.af418df0.js",
    "revision": "bf83302e9594227d86ac9aff44bc71af"
  },
  {
    "url": "assets/js/17.cc7d05c6.js",
    "revision": "4e486d8769f644b89c761a4ceb0d0e3c"
  },
  {
    "url": "assets/js/18.b062eb0f.js",
    "revision": "d3e6620a8fb092e3ee60338b4287a67c"
  },
  {
    "url": "assets/js/19.fcee522a.js",
    "revision": "d99e60b830f3d120bf6e9fe5d0dd7363"
  },
  {
    "url": "assets/js/20.f5c0ef95.js",
    "revision": "90dc1054a6c564c5aa079239b1f48022"
  },
  {
    "url": "assets/js/21.cea441d1.js",
    "revision": "e5ca303dfb6d93be2a314cd3a78ad645"
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
    "url": "assets/js/24.3f55b7e6.js",
    "revision": "e40e722d891c1442d8e61a961803fc1a"
  },
  {
    "url": "assets/js/25.0f3b068b.js",
    "revision": "e8cc88431665843a9df36183a42956b5"
  },
  {
    "url": "assets/js/26.dadaef68.js",
    "revision": "fe3133e620269b3a4d73ba970278ffad"
  },
  {
    "url": "assets/js/27.3ebd49ea.js",
    "revision": "9625f4ff554b5ab6149a521a24e3c5f5"
  },
  {
    "url": "assets/js/28.ff22dfc4.js",
    "revision": "b9c0f1ef91a0b82f59e1b73bb9afd05b"
  },
  {
    "url": "assets/js/29.401e1d02.js",
    "revision": "d6398bc2784e0e1639e575c0c4f127da"
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
    "url": "assets/js/31.8c3f5897.js",
    "revision": "ee26de543a4129996950c25d6aec503c"
  },
  {
    "url": "assets/js/32.4efbe792.js",
    "revision": "3dbd9c9410c34e3da49993885b1a5f10"
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
    "url": "assets/js/35.fb80d768.js",
    "revision": "43b0d45c5370f2a2c308fb1664107151"
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
    "url": "assets/js/app.66ae0a69.js",
    "revision": "ca95349eadc0cdc050e581ae35cfb897"
  },
  {
    "url": "blogs/css/2021/CssDoodle1.html",
    "revision": "be2e13a8d95fe9875b2ab9bc2bd2e8a1"
  },
  {
    "url": "blogs/css/2021/CssDoodle2.html",
    "revision": "62afcdcd3a96ffad8d0576f26d37882a"
  },
  {
    "url": "blogs/css/2021/scope.html",
    "revision": "b28f2b7a235697dc6549f8add6adc90e"
  },
  {
    "url": "blogs/css/2022/glass.html",
    "revision": "4a903ba2cf22847909726dd4e830d416"
  },
  {
    "url": "blogs/design/2021/FilledInVsOutline.html",
    "revision": "6e1d0149f5d72f9a8f7539eb7d9b05d3"
  },
  {
    "url": "blogs/design/2021/lottie.html",
    "revision": "9c865bfb0befbed981dc3663d1aa6fe4"
  },
  {
    "url": "blogs/design/2021/ResolutionRatio.html",
    "revision": "3aa6ce1461e31a8df10a503adedf771e"
  },
  {
    "url": "blogs/design/2021/SketchRenameIt.html",
    "revision": "7c10709c804685238d58cb1419a7d942"
  },
  {
    "url": "blogs/js/2021/async.html",
    "revision": "7b090aaf3365d3f4dd8e7fc32ca8dcb5"
  },
  {
    "url": "blogs/js/2021/axios.html",
    "revision": "752b3b820c148aee0fe7b250726dd487"
  },
  {
    "url": "blogs/js/2021/eventLoop.html",
    "revision": "aa98868e0067ea1694fa9a400df3314c"
  },
  {
    "url": "blogs/js/2021/IdleDetector.html",
    "revision": "fd99bec2670dd727207416d0097a2be2"
  },
  {
    "url": "blogs/js/2021/vue-class-component.html",
    "revision": "bcfd2dc0d1393cf371315e69e863c275"
  },
  {
    "url": "blogs/js/2021/vue-lazyload.html",
    "revision": "29316edd8718cea9bdff6a53e6791359"
  },
  {
    "url": "blogs/js/2021/vue-router.html",
    "revision": "f2d96fb3f213e023d4ff3f85e5e35ca4"
  },
  {
    "url": "blogs/js/2021/vue3-ts-elplus.html",
    "revision": "71900eb783ea268cb72de19e2755a1f3"
  },
  {
    "url": "blogs/js/2023/openAI.html",
    "revision": "eccf2e586a3d0bc3e2abc63c5981c865"
  },
  {
    "url": "blogs/music/2021/bluebird.html",
    "revision": "63a6088e336cfcefb618159b7925e794"
  },
  {
    "url": "blogs/music/2021/chord.html",
    "revision": "61da3838d4b6cc1e9d33c79f26a439b7"
  },
  {
    "url": "blogs/music/2021/MoonOnTheWater.html",
    "revision": "c108e541a2e3c1d66a3e592ab26552bc"
  },
  {
    "url": "blogs/music/2021/shikinouta.html",
    "revision": "3c56b561022c1c169f150e45778c04b9"
  },
  {
    "url": "blogs/website/2021/git.html",
    "revision": "dc4a143e18d0366b77fd4e1493df0ad7"
  },
  {
    "url": "blogs/website/2021/imgur.html",
    "revision": "1fe807d855ada2e6c2983c36a17b6f59"
  },
  {
    "url": "blogs/website/2021/nginx.html",
    "revision": "44cec8372e92675ae1c215e1e7ddb8e3"
  },
  {
    "url": "blogs/website/2021/vextab.html",
    "revision": "82ad93cfc5ff1ef5580d26bb2d8f2b4c"
  },
  {
    "url": "blogs/website/2021/vue-cli3.html",
    "revision": "61998b1004473305ec556c83191a69d8"
  },
  {
    "url": "blogs/website/2021/vuepress.html",
    "revision": "9537bd55cf6f30c14e161b6851c1a350"
  },
  {
    "url": "categories/Chatgpt/index.html",
    "revision": "7e2bdd7f3959f2a3a152d1a1f75430e2"
  },
  {
    "url": "categories/Code/index.html",
    "revision": "3ab60dd2b3a16b569bf82d451ead6768"
  },
  {
    "url": "categories/css-doodle/index.html",
    "revision": "dfff2955dd517bee38b426a51b28727b"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "04a1b9ccee80c3798bb2b9c7a9cf4c7b"
  },
  {
    "url": "categories/Design/index.html",
    "revision": "8d1beaa30482011839f53680bc3ce409"
  },
  {
    "url": "categories/doc/index.html",
    "revision": "8c4446d8f89d348aa73454d1a27becbf"
  },
  {
    "url": "categories/index.html",
    "revision": "0a001437554afe23da01840f5a84c94b"
  },
  {
    "url": "categories/Music/index.html",
    "revision": "6824839c9d5c91e43cece0a37b8fd3a1"
  },
  {
    "url": "categories/Website/index.html",
    "revision": "031051012d0ce6e2b4b7f852265401ba"
  },
  {
    "url": "docs/theme-reco/markdown.html",
    "revision": "90201e3acc00ab3eb15f7ba2b9843ab8"
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
    "revision": "894b53dc73e6a2f923a54f00f3d945f9"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "0d4b526f7daebfacdd89442d0d7d0e0a"
  },
  {
    "url": "tag/Chatgpt/index.html",
    "revision": "8ffc53b93f02bfeb4264f2bcc73ddfc7"
  },
  {
    "url": "tag/css-doodle/index.html",
    "revision": "904cc93343294c0b5c1d1709a460f33a"
  },
  {
    "url": "tag/css/index.html",
    "revision": "0ce0e674f207a101c14ee6dd6e57c8f2"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "08f0ead3c6dbeadf9b26faaa4e506c18"
  },
  {
    "url": "tag/git/index.html",
    "revision": "2bbe35105bb4e5982fcbaa1585afe3ca"
  },
  {
    "url": "tag/Guitar/index.html",
    "revision": "3b037c74b85b9a934ad5dbbbb77b058f"
  },
  {
    "url": "tag/Harmonica/index.html",
    "revision": "5f10f2516a1afad162997d5317856297"
  },
  {
    "url": "tag/Icon/index.html",
    "revision": "8c49c14b32d8ccd78267692a73568681"
  },
  {
    "url": "tag/ImagesWeserv/index.html",
    "revision": "378df8875181531cb170ed3d88bffb8d"
  },
  {
    "url": "tag/Imgur/index.html",
    "revision": "98e9575e14048d08d520cdef15678b79"
  },
  {
    "url": "tag/index.html",
    "revision": "7bdd65dbb21b65891d17500a5d81c234"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "c2e868c9db631196ae00846f4b7fdc2a"
  },
  {
    "url": "tag/Lottie/index.html",
    "revision": "f84c0c1d8751e0499e2e40b740761f0e"
  },
  {
    "url": "tag/Nginx/index.html",
    "revision": "83c14b2814f241a47c6a1ec6410d4149"
  },
  {
    "url": "tag/scoped/index.html",
    "revision": "797a198f80a390a4a05c68a7643a49ba"
  },
  {
    "url": "tag/sketch/index.html",
    "revision": "5f44cf18fdf65a581d1d4737f4ccd1f5"
  },
  {
    "url": "tag/test/index.html",
    "revision": "42659e4b41e9d29b4cdcee37cf06e097"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "ab733bd73fd8bb16c507c06f48759475"
  },
  {
    "url": "tag/VexTab/index.html",
    "revision": "a8e37c016d63b62e40bf22da56855218"
  },
  {
    "url": "tag/vue-cli3/index.html",
    "revision": "6d5e832dbf8a80d36a8a7fd9292aaf03"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "bdf667efd3b2ed113ea2d425a01f9c85"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "408bf672db7622b9c173080504035526"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "21b7ff00f1b1c4631bcfa3d9b771bf13"
  },
  {
    "url": "tag/单位/index.html",
    "revision": "c5ce6d40023b6e24b3b2b5e1edd988ec"
  },
  {
    "url": "timeline/index.html",
    "revision": "dfd01fc2af59be4126a21ceaa8faa813"
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
