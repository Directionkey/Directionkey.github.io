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
    "revision": "1f300c20da424f43841ae968f1e8c98b"
  },
  {
    "url": "assets/css/0.styles.39383f49.css",
    "revision": "ec47dc52eeec6b2a4adce085f778615a"
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
    "url": "assets/js/16.974be9b5.js",
    "revision": "72e29db9dfad6554952a0dbd710a9046"
  },
  {
    "url": "assets/js/17.b288bee3.js",
    "revision": "2002c827598d106f5bdfd54d455b47f3"
  },
  {
    "url": "assets/js/18.4b51f38a.js",
    "revision": "dbd1313f3395914105d70b3b59b63a10"
  },
  {
    "url": "assets/js/19.66a6d354.js",
    "revision": "aac2b8f2a908cf679b1406a7fdb7a175"
  },
  {
    "url": "assets/js/20.f5c0ef95.js",
    "revision": "90dc1054a6c564c5aa079239b1f48022"
  },
  {
    "url": "assets/js/21.85587aff.js",
    "revision": "83b725aea90ee73f5cdcf10d55ee7488"
  },
  {
    "url": "assets/js/22.04949505.js",
    "revision": "357ca5229fdc032393e0175061bc07c9"
  },
  {
    "url": "assets/js/23.02909d64.js",
    "revision": "865f8d8451c0743c8c0c40e0df61cac9"
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
    "url": "assets/js/26.063891d2.js",
    "revision": "037ade4a6f0f916192eecd78c5454f8d"
  },
  {
    "url": "assets/js/27.44fc89b6.js",
    "revision": "e2fa831d72dcec88c65aeb051c0297e4"
  },
  {
    "url": "assets/js/28.30e24f03.js",
    "revision": "d3a4d7421dd917b1253566ca35d77e1a"
  },
  {
    "url": "assets/js/29.b7f072ed.js",
    "revision": "b545eeb95bc3868a611abcb1a38cb5a5"
  },
  {
    "url": "assets/js/3.1ce28bf8.js",
    "revision": "52579ea7f388c40fa0c6c790da189435"
  },
  {
    "url": "assets/js/30.cf78a82f.js",
    "revision": "240fa80fb63d52759be66538b2f967fa"
  },
  {
    "url": "assets/js/31.206df84a.js",
    "revision": "f2af9b38df28effb9a08cba35a4f13f5"
  },
  {
    "url": "assets/js/32.4efbe792.js",
    "revision": "3dbd9c9410c34e3da49993885b1a5f10"
  },
  {
    "url": "assets/js/33.00256052.js",
    "revision": "b8ae908d3c03259ed019bc5503350ab2"
  },
  {
    "url": "assets/js/34.a9d4066e.js",
    "revision": "66caa376c4b3fb337c58a5281c38bd39"
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
    "url": "assets/js/39.1ce0dbca.js",
    "revision": "757d56cf232d7e0a601bb6cb06b27d17"
  },
  {
    "url": "assets/js/4.fed0fc2c.js",
    "revision": "a5d63980d4e11463c30502b15f4ab818"
  },
  {
    "url": "assets/js/40.1d76266b.js",
    "revision": "449a7fbd371cca2812db6ea03dedbb9a"
  },
  {
    "url": "assets/js/41.c5ff6a9a.js",
    "revision": "8265dfa42dc84b598051d0972341a26c"
  },
  {
    "url": "assets/js/42.480e39fd.js",
    "revision": "8922f38d78fcd374981e2f8503ecfacf"
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
    "url": "assets/js/app.22dd2e45.js",
    "revision": "cd16c681ffdc0acaf6178dec4fdf5b0b"
  },
  {
    "url": "blogs/css/2021/CssDoodle1.html",
    "revision": "6f77b8138dfa21d4a4743343b6bf18b6"
  },
  {
    "url": "blogs/css/2021/CssDoodle2.html",
    "revision": "19505119b96bf03d73e5f78acb28f572"
  },
  {
    "url": "blogs/css/2021/scope.html",
    "revision": "7f70f6677325617d69a1873afae2b28a"
  },
  {
    "url": "blogs/css/2022/glass.html",
    "revision": "47b031efa7915707c358b7932b7e43a5"
  },
  {
    "url": "blogs/design/2021/FilledInVsOutline.html",
    "revision": "9c974e3a2aba54e103dd951e10a9cc5b"
  },
  {
    "url": "blogs/design/2021/lottie.html",
    "revision": "3c131c0a9997c8f4c7db6df134e3180c"
  },
  {
    "url": "blogs/design/2021/ResolutionRatio.html",
    "revision": "f2c320a119c4f75e2fa5064089994e2d"
  },
  {
    "url": "blogs/design/2021/SketchRenameIt.html",
    "revision": "27acf1df1b2b413a7fd5db568976b68f"
  },
  {
    "url": "blogs/js/2021/async.html",
    "revision": "cf2ef71ec005bf1d9b74bb46c73714f7"
  },
  {
    "url": "blogs/js/2021/axios.html",
    "revision": "62800738182191400daa2729431baead"
  },
  {
    "url": "blogs/js/2021/eventLoop.html",
    "revision": "a4213c8e747f73c6f363d30b76d4b019"
  },
  {
    "url": "blogs/js/2021/IdleDetector.html",
    "revision": "47962c947e2a4fdee56ffe4011beb441"
  },
  {
    "url": "blogs/js/2021/vue-class-component.html",
    "revision": "1f49149f21044e420a0d599c3871e309"
  },
  {
    "url": "blogs/js/2021/vue-lazyload.html",
    "revision": "6655cdde590306f5b2feccd62472c612"
  },
  {
    "url": "blogs/js/2021/vue-router.html",
    "revision": "2bb3ba15111b5845562cd68f8b50568c"
  },
  {
    "url": "blogs/js/2021/vue3-ts-elplus.html",
    "revision": "23817426d02f6b3b5933fe9eaabd9c7a"
  },
  {
    "url": "blogs/js/2023/openAI.html",
    "revision": "a4f3e2cbb842754cc2e33f77b0075237"
  },
  {
    "url": "blogs/music/2021/bluebird.html",
    "revision": "1a05ea159ceb179df4080a3c31b5f3cf"
  },
  {
    "url": "blogs/music/2021/chord.html",
    "revision": "7583deda6ad3cd8ac607ff7c5a3732ff"
  },
  {
    "url": "blogs/music/2021/MoonOnTheWater.html",
    "revision": "c3dc97f4df53b5498adb61ddb9043016"
  },
  {
    "url": "blogs/music/2021/shikinouta.html",
    "revision": "e3bffdb25733a5e1099c028bfe83728a"
  },
  {
    "url": "blogs/website/2021/git.html",
    "revision": "a1de0ce4e4c98577dc2c296e28eb1efc"
  },
  {
    "url": "blogs/website/2021/imgur.html",
    "revision": "368e3b621eb1ebc022b87cd6e208e7d7"
  },
  {
    "url": "blogs/website/2021/nginx.html",
    "revision": "a0a1a27cb7a11450432da30616d924d3"
  },
  {
    "url": "blogs/website/2021/vextab.html",
    "revision": "76358c342b2e49343365b3d1bc045915"
  },
  {
    "url": "blogs/website/2021/vue-cli3.html",
    "revision": "e79a14d3c689be588cdd071d151fc426"
  },
  {
    "url": "blogs/website/2021/vuepress.html",
    "revision": "5dc7bec8146024c2d58763b61c96b50b"
  },
  {
    "url": "categories/Chatgpt/index.html",
    "revision": "9428d8d52a2d667924951c28ecc6d57f"
  },
  {
    "url": "categories/Code/index.html",
    "revision": "6b7acd6b2f80b19c0d0208afb48426f6"
  },
  {
    "url": "categories/css-doodle/index.html",
    "revision": "e77c9f80d81aabee704f6513ccf2e6bc"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "5bf02b695d602de27ba7d119cef6e019"
  },
  {
    "url": "categories/Design/index.html",
    "revision": "f5c444c808150c4b3a9d3bae87da8b70"
  },
  {
    "url": "categories/doc/index.html",
    "revision": "8457c7205c0e7e132f4cc77a53e66a04"
  },
  {
    "url": "categories/index.html",
    "revision": "e515633ef370483acf0ba99b5deda82b"
  },
  {
    "url": "categories/Music/index.html",
    "revision": "62770a84c7133f0cfb6cc96487242734"
  },
  {
    "url": "categories/Website/index.html",
    "revision": "00ea7bd67928603e8be6531eb16e59fa"
  },
  {
    "url": "docs/theme-reco/markdown.html",
    "revision": "5134ea5f59acb31820c631688f479a7b"
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
    "revision": "98e45c33adfed9153a9125e5bd569cff"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "0d4b526f7daebfacdd89442d0d7d0e0a"
  },
  {
    "url": "tag/Chatgpt/index.html",
    "revision": "81657baf6bd0b1960eb444147ebef3cd"
  },
  {
    "url": "tag/css-doodle/index.html",
    "revision": "a060a1542453f22623ff9e8b58c5f2f5"
  },
  {
    "url": "tag/css/index.html",
    "revision": "572c41b0a294d5ceb59934d8cdf03d61"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "dbfbf0a4082e88f0db21d0c7843f7252"
  },
  {
    "url": "tag/git/index.html",
    "revision": "058dcc918c68dd9b056d140fc41de8bf"
  },
  {
    "url": "tag/Guitar/index.html",
    "revision": "88d2b5baefe499db8a0d1b33edd5f988"
  },
  {
    "url": "tag/Harmonica/index.html",
    "revision": "687b6599b3d834e63549a08e4ce30f2e"
  },
  {
    "url": "tag/Icon/index.html",
    "revision": "fbae61f2a4a05f5892c19af382bb0f57"
  },
  {
    "url": "tag/ImagesWeserv/index.html",
    "revision": "48807572abf7dcdfc1eee760a2303654"
  },
  {
    "url": "tag/Imgur/index.html",
    "revision": "3e22ee726388fbd3531f62f405a22494"
  },
  {
    "url": "tag/index.html",
    "revision": "202a27957b5c084b22b31ec3ab4f46f1"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "43ef1830e17f4ced16875f00bd7ba412"
  },
  {
    "url": "tag/Lottie/index.html",
    "revision": "b70efad380e1003979399b05936c9363"
  },
  {
    "url": "tag/Nginx/index.html",
    "revision": "4876b0af6366e4770fe900425ec17c1c"
  },
  {
    "url": "tag/scoped/index.html",
    "revision": "2b77c47c193d8c9c7312e831ee897066"
  },
  {
    "url": "tag/sketch/index.html",
    "revision": "7043bc29f73c8a05657cb6ad3cd10127"
  },
  {
    "url": "tag/test/index.html",
    "revision": "03e118cebbd163319223d38c2f78671f"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "c6e919926548fe51ba4714033eb4a9ee"
  },
  {
    "url": "tag/VexTab/index.html",
    "revision": "99a1e89920fdd1af7c1259f14ef66720"
  },
  {
    "url": "tag/vue-cli3/index.html",
    "revision": "f954690ac243f2f26f8ded2260fef3fe"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "7da9c208439cb2119f4e9b32724850b2"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "7e1b24cdd779f95a48a9c493c3a2f167"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "ad152a61a779a2c8e08d0c2f2d4d624f"
  },
  {
    "url": "tag/单位/index.html",
    "revision": "1ebff858703a975696209c6c795a89ba"
  },
  {
    "url": "timeline/index.html",
    "revision": "86457c12d88cf80a070a241a53896b37"
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
