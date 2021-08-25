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
    "revision": "c4e66c44efe48a7177e171c9556ec7ba"
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
    "url": "assets/js/11.79c2869a.js",
    "revision": "f1f8a27bc1aaba407e3915f95768c58e"
  },
  {
    "url": "assets/js/12.bc9456b2.js",
    "revision": "b3e25f2d2106c3e88babc7e2adfb14b2"
  },
  {
    "url": "assets/js/13.f85e5374.js",
    "revision": "5cef6ad94b5142a89bac851d45c7d2eb"
  },
  {
    "url": "assets/js/14.23176f96.js",
    "revision": "e895fbfef321785d914ac21bfca148ed"
  },
  {
    "url": "assets/js/15.b68f734c.js",
    "revision": "9ad634581307579c437c05071f515a4d"
  },
  {
    "url": "assets/js/16.9bb1858f.js",
    "revision": "74f9cbe76f5720bc2518461ff78bc62d"
  },
  {
    "url": "assets/js/17.1bf207fb.js",
    "revision": "818d05d1c58d02cb4035de72adabf0b2"
  },
  {
    "url": "assets/js/18.04e4aa51.js",
    "revision": "8dcca233bb0f2454697a9e38fa551a17"
  },
  {
    "url": "assets/js/19.55258991.js",
    "revision": "edad3cbb74ede067b430a570391aa3df"
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
    "url": "assets/js/8.924f586b.js",
    "revision": "dc6567865a73becc5a23073b140f60ff"
  },
  {
    "url": "assets/js/9.67ead715.js",
    "revision": "7b5e0784aa4335cbeb6d7f5fb985fb3a"
  },
  {
    "url": "assets/js/app.d54c87bc.js",
    "revision": "62e5c88a7d04346c1822be9c3df51e76"
  },
  {
    "url": "blogs/css/2021/20210715.html",
    "revision": "8ad7f5a2e0e0e76773cc5f67f791b95e"
  },
  {
    "url": "blogs/design/2021/210714.html",
    "revision": "221d956615f7e13c703dd1f4676da3bb"
  },
  {
    "url": "blogs/js/2021/20210714.html",
    "revision": "2cc7968884e9d9e30dbd2b0cc5d9da43"
  },
  {
    "url": "blogs/website/2021/210714.html",
    "revision": "57042f875dfd00bd4f35665c618cdbc8"
  },
  {
    "url": "categories/code/index.html",
    "revision": "ff401be2acc11fa11f22f81cb9472f3b"
  },
  {
    "url": "categories/css-doodle/index.html",
    "revision": "853d0a616fd211bf0df19ef09fc7efb3"
  },
  {
    "url": "categories/design/index.html",
    "revision": "1bc05c045a00fe95e0e3c93df0bd06e2"
  },
  {
    "url": "categories/doc/index.html",
    "revision": "85d6f4fc2d8c052a6903c9fde4016c8c"
  },
  {
    "url": "categories/index.html",
    "revision": "ea45c6de13f9baf4fd09caabe837b35b"
  },
  {
    "url": "categories/website/index.html",
    "revision": "445dbe3f5f37cb9f280f51b31128ff50"
  },
  {
    "url": "docs/theme-reco/20210714.html",
    "revision": "0492cdea0e7d57b1ff8482f8993602e4"
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
    "revision": "a9aede1b598a8fd9c6f1e8d7feb4c0ab"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "0d4b526f7daebfacdd89442d0d7d0e0a"
  },
  {
    "url": "tag/css-doodle/index.html",
    "revision": "5d662805cba0ba941414c3538c5a71bd"
  },
  {
    "url": "tag/index.html",
    "revision": "ff4402ad3bd0ca752a7a9953b5d9e39d"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "130f356ad97f934ee835e34f8f93cde9"
  },
  {
    "url": "tag/sketch/index.html",
    "revision": "5d719d24e8d81852b3d1f56e3e01adcf"
  },
  {
    "url": "tag/website/index.html",
    "revision": "65a68cfc83889b1f4012fe443d92e398"
  },
  {
    "url": "timeline/index.html",
    "revision": "33268bc91c4ab416d09d022b8cb5d003"
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
