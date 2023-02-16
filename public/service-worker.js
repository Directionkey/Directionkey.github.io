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
    "revision": "141c5d2143d0ed62604d73d8ac0409a2"
  },
  {
    "url": "assets/css/0.styles.a86e6894.css",
    "revision": "addfdc9cb31d0077768458e584bb6356"
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
    "url": "assets/js/24.53354b62.js",
    "revision": "941788348b14db1323d355beec999422"
  },
  {
    "url": "assets/js/25.65616f0d.js",
    "revision": "20cf061aaea5d0657439c3f22ce343f4"
  },
  {
    "url": "assets/js/26.dadaef68.js",
    "revision": "fe3133e620269b3a4d73ba970278ffad"
  },
  {
    "url": "assets/js/27.44fc89b6.js",
    "revision": "e2fa831d72dcec88c65aeb051c0297e4"
  },
  {
    "url": "assets/js/28.66d955fd.js",
    "revision": "cb1a66f5a250494e2728ba5804ca2653"
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
    "url": "assets/js/30.9e0c7e35.js",
    "revision": "9b7f1730f211268333692be5df540b64"
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
    "url": "assets/js/app.d6d3ee85.js",
    "revision": "bcd6996c7e3bdd88bdd2b3b220810347"
  },
  {
    "url": "blogs/css/2021/CssDoodle1.html",
    "revision": "e0f88909cc12ca58c4b381b81f7c1c78"
  },
  {
    "url": "blogs/css/2021/CssDoodle2.html",
    "revision": "49a64e0fe513f2796fb2acc1d7cc0786"
  },
  {
    "url": "blogs/css/2021/scope.html",
    "revision": "59cab23fb534e294e1323d52c6354817"
  },
  {
    "url": "blogs/css/2022/glass.html",
    "revision": "8879eb106af939fe37d402c92ed5b314"
  },
  {
    "url": "blogs/design/2021/FilledInVsOutline.html",
    "revision": "6e7b5171a0e468bc0acf719313de129f"
  },
  {
    "url": "blogs/design/2021/lottie.html",
    "revision": "984c864615322d19e723588c898daca4"
  },
  {
    "url": "blogs/design/2021/ResolutionRatio.html",
    "revision": "6e345388b9fe6308ac9d091aada02097"
  },
  {
    "url": "blogs/design/2021/SketchRenameIt.html",
    "revision": "0ca8d749aa0a3cda122a4faddcedeae9"
  },
  {
    "url": "blogs/js/2021/async.html",
    "revision": "7a57f4e92e56a3f5446934dc66a55864"
  },
  {
    "url": "blogs/js/2021/axios.html",
    "revision": "5308d976daf090ba4c48673fd8cdb0ba"
  },
  {
    "url": "blogs/js/2021/eventLoop.html",
    "revision": "e36d20e1a4a897733ff7dd620044ef8f"
  },
  {
    "url": "blogs/js/2021/IdleDetector.html",
    "revision": "8d7d37e8777fea4a3bf5031c5665a541"
  },
  {
    "url": "blogs/js/2021/vue-class-component.html",
    "revision": "0661e9cc8c2b398e0791c8e6c0c32d90"
  },
  {
    "url": "blogs/js/2021/vue-lazyload.html",
    "revision": "c2afb9bcd00e89ae1490e64f883049f8"
  },
  {
    "url": "blogs/js/2021/vue-router.html",
    "revision": "462b1e232d573649941a9801e8947e3a"
  },
  {
    "url": "blogs/js/2021/vue3-ts-elplus.html",
    "revision": "a414a4e6bc2202d203d83cbf9ce4350f"
  },
  {
    "url": "blogs/js/2023/openAI.html",
    "revision": "b2824c40f60ae54a26cd09e964d7a4ad"
  },
  {
    "url": "blogs/music/2021/bluebird.html",
    "revision": "17eb8ae66508a3cace06838387b111d9"
  },
  {
    "url": "blogs/music/2021/chord.html",
    "revision": "5a0fdf717f9a060741e75d855f6fd662"
  },
  {
    "url": "blogs/music/2021/MoonOnTheWater.html",
    "revision": "71455cca66150088c8cafa632bca31af"
  },
  {
    "url": "blogs/music/2021/shikinouta.html",
    "revision": "65c9bfe0e5948726346119e406204c19"
  },
  {
    "url": "blogs/website/2021/git.html",
    "revision": "3f1355a6bec0e2985a516500918cf23b"
  },
  {
    "url": "blogs/website/2021/imgur.html",
    "revision": "3c16f4923a416262588f8242ce033a29"
  },
  {
    "url": "blogs/website/2021/nginx.html",
    "revision": "b86ebe3b08cb9d747b3704581326da71"
  },
  {
    "url": "blogs/website/2021/vextab.html",
    "revision": "d57ce11215d6851a04425cf97524bac9"
  },
  {
    "url": "blogs/website/2021/vue-cli3.html",
    "revision": "28d71babb81b77e5dcecb21b55139ca8"
  },
  {
    "url": "blogs/website/2021/vuepress.html",
    "revision": "68d13d66318fdca2be7da29e6d9754df"
  },
  {
    "url": "categories/Chatgpt/index.html",
    "revision": "2ed9241d498d3912dcf6320d2ea46811"
  },
  {
    "url": "categories/Code/index.html",
    "revision": "de3351debea04ea13c65aaefe1d45980"
  },
  {
    "url": "categories/css-doodle/index.html",
    "revision": "9b8a046a52a0d9dbc8536327ef272136"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "e32ef0a48d654aefd6ff4a132870e1ea"
  },
  {
    "url": "categories/Design/index.html",
    "revision": "cfa779bd9446b6b250439be075256b29"
  },
  {
    "url": "categories/doc/index.html",
    "revision": "bcb7aeba80ce3bce7a33e6decd57551c"
  },
  {
    "url": "categories/index.html",
    "revision": "94dc4956802776fd47454ff205b84268"
  },
  {
    "url": "categories/Music/index.html",
    "revision": "05d677392f218cfdf0153d1bf2a40070"
  },
  {
    "url": "categories/Website/index.html",
    "revision": "fdc680c599fada1bcea0e71a3fa65426"
  },
  {
    "url": "docs/theme-reco/markdown.html",
    "revision": "6f669afa9f8583119739204fe3f8e8a2"
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
    "revision": "3eac20d9e4c4c530f9182aa0ea218b1b"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "0d4b526f7daebfacdd89442d0d7d0e0a"
  },
  {
    "url": "tag/Chatgpt/index.html",
    "revision": "978f2e58a8582e0c16c40c392b8b46ff"
  },
  {
    "url": "tag/css-doodle/index.html",
    "revision": "5a7482834cb381043ad6fa4e2be1a452"
  },
  {
    "url": "tag/css/index.html",
    "revision": "7410d4d5138fbeaf95db8d37247817ca"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "3f3c8a243c2e1f003b650444f14b4a3c"
  },
  {
    "url": "tag/git/index.html",
    "revision": "03be24579e7349949c4acb8616f57984"
  },
  {
    "url": "tag/Guitar/index.html",
    "revision": "e3fc87f515b5bcac824d55a151627322"
  },
  {
    "url": "tag/Harmonica/index.html",
    "revision": "fa39a18100d1fdd569a1109bf1eca84b"
  },
  {
    "url": "tag/Icon/index.html",
    "revision": "70de2200f7e050119326f58fe822b124"
  },
  {
    "url": "tag/ImagesWeserv/index.html",
    "revision": "fcff983bf13bd50f39fbf2dfbcf30fa0"
  },
  {
    "url": "tag/Imgur/index.html",
    "revision": "f426f0b4c081749c5337adb04477504b"
  },
  {
    "url": "tag/index.html",
    "revision": "b68bfe235cd37e8bb6ce14ebdeb19a97"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "89ada82865eb15799921bf733a56bcd4"
  },
  {
    "url": "tag/Lottie/index.html",
    "revision": "efa7d4a77e17abe5ab6fb06e29c13928"
  },
  {
    "url": "tag/Nginx/index.html",
    "revision": "8553e85a3181c39714a8b556fe96fd57"
  },
  {
    "url": "tag/scoped/index.html",
    "revision": "1a79e86c3f5bb52737b001319f4f27f6"
  },
  {
    "url": "tag/sketch/index.html",
    "revision": "f5cda5588d3590f5d3b9a2c42de173d6"
  },
  {
    "url": "tag/test/index.html",
    "revision": "b066dfb0fcb2f5dcee26d4d81e1f8375"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "0e7eb1f41a49bee99e2be2d4e3b9da5a"
  },
  {
    "url": "tag/unit/index.html",
    "revision": "a8f7489c892446073ff6ed9438fef206"
  },
  {
    "url": "tag/VexTab/index.html",
    "revision": "16565516a9be865d4bd5f8bca293fe6e"
  },
  {
    "url": "tag/vue-cli3/index.html",
    "revision": "31e7670ef3bebcc3760aa2081ed3cf49"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "8bb6a4dc280ac755cfb78d17f8d9c850"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "4b4031dc24dc96770d5247c06a6a44c2"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "a0683fdf46d2ad30e5f51a3611d200ba"
  },
  {
    "url": "timeline/index.html",
    "revision": "49446b1c31dbdea7d5176ef0dfb4dad3"
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
