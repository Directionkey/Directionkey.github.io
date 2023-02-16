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
    "revision": "177929df1165df775d2ff2eda0289b8c"
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
    "url": "assets/js/22.556c526c.js",
    "revision": "5b1d09f96e317b427ce1607d7b94ad2e"
  },
  {
    "url": "assets/js/23.02909d64.js",
    "revision": "865f8d8451c0743c8c0c40e0df61cac9"
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
    "url": "assets/js/32.22c22ef9.js",
    "revision": "141372a015a577324b363324a59c1d9b"
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
    "url": "assets/js/41.c5ff6a9a.js",
    "revision": "8265dfa42dc84b598051d0972341a26c"
  },
  {
    "url": "assets/js/42.9d3d00b9.js",
    "revision": "6f6df858ca4b35983d88cd24fd14abbe"
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
    "url": "assets/js/app.e41d3e69.js",
    "revision": "498ad16131fd92dd7551fb2914042390"
  },
  {
    "url": "blogs/css/2021/CssDoodle1.html",
    "revision": "cac743f081394406d4bbb8b8160816bb"
  },
  {
    "url": "blogs/css/2021/CssDoodle2.html",
    "revision": "fed42080143f2c75d0463d038c27e32f"
  },
  {
    "url": "blogs/css/2021/scope.html",
    "revision": "9175c97382a7dbaa2c8b8b283057718a"
  },
  {
    "url": "blogs/css/2022/glass.html",
    "revision": "6768c46f16dcec9d916e87db67332e73"
  },
  {
    "url": "blogs/design/2021/FilledInVsOutline.html",
    "revision": "cdab2fab590aade28cb2df47d991e626"
  },
  {
    "url": "blogs/design/2021/lottie.html",
    "revision": "b1a4dca356097abcbb7ab65a0b93d186"
  },
  {
    "url": "blogs/design/2021/ResolutionRatio.html",
    "revision": "360ad59260429d64c73093eb3c17f6e9"
  },
  {
    "url": "blogs/design/2021/SketchRenameIt.html",
    "revision": "2090ed7ab54c80ef1179ba8601d9dd86"
  },
  {
    "url": "blogs/js/2021/async.html",
    "revision": "7e5e3e30df782678bd74655ff8d22299"
  },
  {
    "url": "blogs/js/2021/axios.html",
    "revision": "b26a3a2de9a42c0c739c778334efdc5c"
  },
  {
    "url": "blogs/js/2021/eventLoop.html",
    "revision": "6f99c48d13dda7f01abc9e00bdfc34f0"
  },
  {
    "url": "blogs/js/2021/IdleDetector.html",
    "revision": "8de7643f93c6f470e9987001d30fc811"
  },
  {
    "url": "blogs/js/2021/vue-class-component.html",
    "revision": "f279a2288b13076158495a4041ffcc40"
  },
  {
    "url": "blogs/js/2021/vue-lazyload.html",
    "revision": "99c8c389b48ec252e5136225b3e76bac"
  },
  {
    "url": "blogs/js/2021/vue-router.html",
    "revision": "17f348badc1e36752d543d22274ee132"
  },
  {
    "url": "blogs/js/2021/vue3-ts-elplus.html",
    "revision": "84410eb903445053ff5ebe2a6b0bfab9"
  },
  {
    "url": "blogs/js/2023/openAI.html",
    "revision": "7d0bc739bc3377c83c2325ed5ccb3cad"
  },
  {
    "url": "blogs/music/2021/bluebird.html",
    "revision": "f6676594b986021020a441047f67a782"
  },
  {
    "url": "blogs/music/2021/chord.html",
    "revision": "0929ffe8e91100e935be4bc21c8bcc30"
  },
  {
    "url": "blogs/music/2021/MoonOnTheWater.html",
    "revision": "950cdf9123e90d8e48b06621ea98eb30"
  },
  {
    "url": "blogs/music/2021/shikinouta.html",
    "revision": "5d0bfcb876e50be0cf711b774b695b24"
  },
  {
    "url": "blogs/website/2021/git.html",
    "revision": "d96ab124f6549a346f68cf34941732be"
  },
  {
    "url": "blogs/website/2021/imgur.html",
    "revision": "781457ea3edb5cac8f93fb3107bbc448"
  },
  {
    "url": "blogs/website/2021/nginx.html",
    "revision": "3c6094207881bf6067ec0f955a1a5dcc"
  },
  {
    "url": "blogs/website/2021/vextab.html",
    "revision": "001b53d154ecc871bdc9397c8a10f753"
  },
  {
    "url": "blogs/website/2021/vue-cli3.html",
    "revision": "36b3950a7137089a7903f688e98bc960"
  },
  {
    "url": "blogs/website/2021/vuepress.html",
    "revision": "2b4eba6b5737027e3ef913f71695230b"
  },
  {
    "url": "categories/Chatgpt/index.html",
    "revision": "a9b5b3efa599ce9da6a6f34eb33fcae1"
  },
  {
    "url": "categories/Code/index.html",
    "revision": "0a4125dc0767a7f0ce89c0636d71f668"
  },
  {
    "url": "categories/css-doodle/index.html",
    "revision": "2f280e2a2b2c61a6fa663ba04bf8af73"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "b63acd4a7c43dadb86b0356530977fa8"
  },
  {
    "url": "categories/Design/index.html",
    "revision": "8e62e9ef9bc75dcf701136b329d0d27e"
  },
  {
    "url": "categories/doc/index.html",
    "revision": "30f8a58a71c9948d5034c9232a7dd737"
  },
  {
    "url": "categories/index.html",
    "revision": "28efd91f9ff1bf9b0c1b59b87dcb0797"
  },
  {
    "url": "categories/Music/index.html",
    "revision": "27c8e2166a221173cd245f71094ee07a"
  },
  {
    "url": "categories/Website/index.html",
    "revision": "8de0e4489b6f4095b9913f1601ea9be8"
  },
  {
    "url": "docs/theme-reco/markdown.html",
    "revision": "2cfa9be0fa4646fd3e9dcc60aa792826"
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
    "revision": "849ef30dead5fc703be9ad4c2825ebe4"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "0d4b526f7daebfacdd89442d0d7d0e0a"
  },
  {
    "url": "tag/Chatgpt/index.html",
    "revision": "42c4cd1e071b6423e8512949424e8f3d"
  },
  {
    "url": "tag/css-doodle/index.html",
    "revision": "d53b8efd0daeae18fd60cf6ca9d15794"
  },
  {
    "url": "tag/css/index.html",
    "revision": "5e55c5a7eac81959c02dad3ad38b0c5b"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "7f80b865a1dd500b09fa6c892cb0aaa2"
  },
  {
    "url": "tag/git/index.html",
    "revision": "424222ed770e9f1c981ecc7edffd74be"
  },
  {
    "url": "tag/Guitar/index.html",
    "revision": "153afb438ab226c37774bf94c8a475f0"
  },
  {
    "url": "tag/Harmonica/index.html",
    "revision": "8354b586a8abeda4285df97dcf8d59d5"
  },
  {
    "url": "tag/Icon/index.html",
    "revision": "57abb69db9236e2f45c4485e3172a7ee"
  },
  {
    "url": "tag/ImagesWeserv/index.html",
    "revision": "c89b45a78e1faf2dfdd47688c1de7c6f"
  },
  {
    "url": "tag/Imgur/index.html",
    "revision": "92858a20054a6a3570417cf75ef804c5"
  },
  {
    "url": "tag/index.html",
    "revision": "83e95d398405ef3e0ff18c71f2d56875"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "e9161bd337453562d2f1015f63b6a52d"
  },
  {
    "url": "tag/Lottie/index.html",
    "revision": "d88c07c4305d252ae6b602d7ffdafa86"
  },
  {
    "url": "tag/Nginx/index.html",
    "revision": "379f9969277a959d339759b2b03c3071"
  },
  {
    "url": "tag/scoped/index.html",
    "revision": "1bc8bbb38adec8c969623215dd1527e1"
  },
  {
    "url": "tag/sketch/index.html",
    "revision": "f0c93f57aa9f9895d32a6f24a4a40df1"
  },
  {
    "url": "tag/test/index.html",
    "revision": "8ea793ebb94cab362440374822a5cdb6"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "d0f3eae9b99b64539db34a346f31f947"
  },
  {
    "url": "tag/VexTab/index.html",
    "revision": "8ddb34cf8053c52fb8f74b6c130c8aec"
  },
  {
    "url": "tag/vue-cli3/index.html",
    "revision": "2b06d8a9311851d4302f2f7ed2993149"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "0ceda77d8c19838ab3e7787f5e6e6596"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "fa01afbea25ccc133df2ac617542ed40"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "2ba7d84f4f2cea9f926d0809b90e6913"
  },
  {
    "url": "tag/单位/index.html",
    "revision": "c4444d38ad47328548b681c6179360d0"
  },
  {
    "url": "timeline/index.html",
    "revision": "cc5da39a88e164bd547a457012515dd0"
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
