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
    "revision": "0ef16e3c23a0abae4670537c772eae98"
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
    "url": "assets/js/10.dac71643.js",
    "revision": "358b7c120df75bf49314758140eb1faa"
  },
  {
    "url": "assets/js/11.a5ea2232.js",
    "revision": "5d079b519933b014e5f4f435f5b412f1"
  },
  {
    "url": "assets/js/12.db23d40a.js",
    "revision": "411bbf64e26e40e1f0f90a925400ab35"
  },
  {
    "url": "assets/js/13.c454745f.js",
    "revision": "11e1f74694d26e5d11101d9ecad7f2fe"
  },
  {
    "url": "assets/js/14.31c9b822.js",
    "revision": "36d7346ac1a5d7c96312f9fa08a996ad"
  },
  {
    "url": "assets/js/15.0bf96790.js",
    "revision": "14389e2c2bbb4dc52d15625c7ca6c08d"
  },
  {
    "url": "assets/js/16.1d49e4a4.js",
    "revision": "95e189ec6f09d032f05c5c9bb97a6a34"
  },
  {
    "url": "assets/js/17.a4c7a951.js",
    "revision": "c8e6cbbe3edd23c0042ece522839df90"
  },
  {
    "url": "assets/js/18.7db03060.js",
    "revision": "ee4ed423ee71caf61cd42d53e197e95f"
  },
  {
    "url": "assets/js/3.b5d55eca.js",
    "revision": "0bda6b7dc99119cf36c3456d53796341"
  },
  {
    "url": "assets/js/4.8e9ea0ca.js",
    "revision": "7f6dfe6f71c1551ce78d5ae7f19198c8"
  },
  {
    "url": "assets/js/5.5714391b.js",
    "revision": "d886e563d21553d843a7624efcb45f0e"
  },
  {
    "url": "assets/js/6.35f97ae9.js",
    "revision": "148414ac77214db68044f6950855233e"
  },
  {
    "url": "assets/js/7.e58472ab.js",
    "revision": "515c4e91704f8fa1f221f1d11c0ea846"
  },
  {
    "url": "assets/js/8.04d0121a.js",
    "revision": "04bdf80d5062728f9dde0bce207bb9ba"
  },
  {
    "url": "assets/js/9.3dda9bc2.js",
    "revision": "d7bf95b2275d33a5598e6c0d3e859552"
  },
  {
    "url": "assets/js/app.cddf9a18.js",
    "revision": "09c4aa5c277e3147dbcecc67be0cdeba"
  },
  {
    "url": "blogs/css/2021/20210715.html",
    "revision": "6f78f5d4b7aee4dea091f46fabd61d19"
  },
  {
    "url": "blogs/design/2021/210714.html",
    "revision": "a526ffa8db4c7990326c2b09d7e810f9"
  },
  {
    "url": "blogs/js/2021/20210714.html",
    "revision": "5005f3e16496faf7b14e245cd6083ac9"
  },
  {
    "url": "blogs/website/2021/210714.html",
    "revision": "c231281c49d661907577c7cfceabd856"
  },
  {
    "url": "categories/code/index.html",
    "revision": "9cfdff4a16f81d9ac4acd6ad6b38cd3b"
  },
  {
    "url": "categories/css-doodle/index.html",
    "revision": "ef9dbf96768d450058369c7869b71dd5"
  },
  {
    "url": "categories/design/index.html",
    "revision": "0408169555f972789a4ee068adfac7fb"
  },
  {
    "url": "categories/doc/index.html",
    "revision": "e8df8a32c44c6b9a9fee22189e3c0498"
  },
  {
    "url": "categories/index.html",
    "revision": "0daad91f05b23280d315fcd72d40d5bc"
  },
  {
    "url": "categories/website/index.html",
    "revision": "799c2cb360f034659b5d83f0ee283dec"
  },
  {
    "url": "docs/theme-reco/20210714.html",
    "revision": "f73ccf0cca81f903f9744efab14c026b"
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
    "revision": "14eba9f7466c13a1a8c78727d10d6fa9"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "0d4b526f7daebfacdd89442d0d7d0e0a"
  },
  {
    "url": "tag/css-doodle/index.html",
    "revision": "7444ccb0d0131cccceb9fb8f6ee801b7"
  },
  {
    "url": "tag/index.html",
    "revision": "392db413388728a297b1fa328c0970ef"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "9d1102992274e483277ee569650d54ce"
  },
  {
    "url": "tag/sketch/index.html",
    "revision": "21b5271af348b90e1cf8288d72af5372"
  },
  {
    "url": "tag/website/index.html",
    "revision": "dc344c271a9df25bb643f2e91f7e9b2a"
  },
  {
    "url": "timeline/index.html",
    "revision": "475557af6738ca9b23ff586bc7522e53"
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
