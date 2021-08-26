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
    "revision": "2dc7f4dac301481c4821c81f31e54098"
  },
  {
    "url": "assets/css/0.styles.cc4ffdfb.css",
    "revision": "1d2358e6604b30e07d66f70b0431d164"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.c27c64a8.js",
    "revision": "c8a399c0fe6128ab50af7995884e5932"
  },
  {
    "url": "assets/js/10.000b6ff8.js",
    "revision": "d85a913b605eaa9bbd08dc9ed87a093a"
  },
  {
    "url": "assets/js/11.ae50b260.js",
    "revision": "6a091d16d7384452733f1bc0c0b905b8"
  },
  {
    "url": "assets/js/12.db23d40a.js",
    "revision": "411bbf64e26e40e1f0f90a925400ab35"
  },
  {
    "url": "assets/js/13.6600bca2.js",
    "revision": "38ea18c2f2a43da11383f251d160fb93"
  },
  {
    "url": "assets/js/14.23176f96.js",
    "revision": "e895fbfef321785d914ac21bfca148ed"
  },
  {
    "url": "assets/js/15.0762fd19.js",
    "revision": "22b2991674995839476fb5b8b1f6ffe5"
  },
  {
    "url": "assets/js/16.ff967eae.js",
    "revision": "28163853db816602594bfeca54a87bc5"
  },
  {
    "url": "assets/js/17.1bf207fb.js",
    "revision": "818d05d1c58d02cb4035de72adabf0b2"
  },
  {
    "url": "assets/js/18.44131677.js",
    "revision": "822e967fb3135474a6a1f2625249a05f"
  },
  {
    "url": "assets/js/19.3e9dc6dc.js",
    "revision": "a44b8d0881438ccb00f691acec7ff555"
  },
  {
    "url": "assets/js/3.84b1b6a8.js",
    "revision": "4fb68eea396410b7a59821f006470db5"
  },
  {
    "url": "assets/js/4.8356e883.js",
    "revision": "c191ba123b2f63d183342707f4d4e60f"
  },
  {
    "url": "assets/js/5.f545b973.js",
    "revision": "a220a24539d5a60ea85a26c52a8f083f"
  },
  {
    "url": "assets/js/6.fc8fd1f4.js",
    "revision": "abc5dcca24073e9f40f78805ce119f22"
  },
  {
    "url": "assets/js/7.823c9236.js",
    "revision": "fbe098fc43efa89b5a52e091c83fd853"
  },
  {
    "url": "assets/js/8.23d42753.js",
    "revision": "e04d8bb9c5c3ac96045d9196d865b40a"
  },
  {
    "url": "assets/js/9.d949099b.js",
    "revision": "166484f90a1873933554c1dc0ff1a12a"
  },
  {
    "url": "assets/js/app.924e6f82.js",
    "revision": "356ae259ce60a5ea90019a9c09bd65b7"
  },
  {
    "url": "blogs/css/2021/20210715.html",
    "revision": "7ed22c4e0ac121847e1c38ca1268cb48"
  },
  {
    "url": "blogs/design/2021/210714.html",
    "revision": "ff63d72f07e839c24624777743e445ee"
  },
  {
    "url": "blogs/js/2021/20210714.html",
    "revision": "7cb77799b3127b55cffec504a33d043f"
  },
  {
    "url": "blogs/website/2021/210714.html",
    "revision": "79889c5c56f1328e94078bf35f32f24f"
  },
  {
    "url": "categories/code/index.html",
    "revision": "c82e9f156730789ab5978268c812aaca"
  },
  {
    "url": "categories/css-doodle/index.html",
    "revision": "6536ab2d4de3e26380435b7bec917edb"
  },
  {
    "url": "categories/design/index.html",
    "revision": "14992e0f2644a3c81ad41c554d4c4950"
  },
  {
    "url": "categories/doc/index.html",
    "revision": "445d7a36eb10b14e0f7a38d34a4641ab"
  },
  {
    "url": "categories/index.html",
    "revision": "71b87e7e84edbe14776cb1fb88a6e4b5"
  },
  {
    "url": "categories/website/index.html",
    "revision": "cf4819c21d8153242df9ecfe0c181f11"
  },
  {
    "url": "docs/theme-reco/20210714.html",
    "revision": "283954cc871e9a5c8764af44ea64d6f2"
  },
  {
    "url": "icon/123.gif",
    "revision": "f4cacab46386a7fb655c8405d7f9bedf"
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
    "revision": "c21c68b094aa33a1a3bde49439c799cc"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "0d4b526f7daebfacdd89442d0d7d0e0a"
  },
  {
    "url": "tag/css-doodle/index.html",
    "revision": "4b13543c2bba84157e19e9d76d0ed573"
  },
  {
    "url": "tag/index.html",
    "revision": "6674680da98e39c5807355acd629010d"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "e3d1d4a976e5a5d07f94c26a19674353"
  },
  {
    "url": "tag/sketch/index.html",
    "revision": "3614f3fb9bcae256942df2618e744b0f"
  },
  {
    "url": "tag/website/index.html",
    "revision": "ea546899fa0a582ba79c60234ea81075"
  },
  {
    "url": "timeline/index.html",
    "revision": "5515a40629d7c5f79ba8589369656d1f"
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
