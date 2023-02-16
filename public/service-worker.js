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
    "revision": "4209694dc56d06a2ddd614b531683e0a"
  },
  {
    "url": "assets/css/0.styles.49c76720.css",
    "revision": "8a690eb96f7e9f826d5bd5e88afb8ab0"
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
    "url": "assets/js/app.85532505.js",
    "revision": "6bf6fff9cafd8848e0bef862ed33bf02"
  },
  {
    "url": "blogs/css/2021/CssDoodle1.html",
    "revision": "8a49d5f46fdbb1f10507dd573c91d033"
  },
  {
    "url": "blogs/css/2021/CssDoodle2.html",
    "revision": "d6c0c227235057a118ab357d12ac1602"
  },
  {
    "url": "blogs/css/2021/scope.html",
    "revision": "0cd2904d10412fa60b4be8315e7971a8"
  },
  {
    "url": "blogs/css/2022/glass.html",
    "revision": "e89ce97b9017eef005b7acfcbfe562e7"
  },
  {
    "url": "blogs/design/2021/FilledInVsOutline.html",
    "revision": "1eeb0735aeb507655eb7d30af795bd2e"
  },
  {
    "url": "blogs/design/2021/lottie.html",
    "revision": "ec1b53394a24baa0798fa410fee8cf38"
  },
  {
    "url": "blogs/design/2021/ResolutionRatio.html",
    "revision": "c7a3ab0745bf64928f2a6d2bcd475a22"
  },
  {
    "url": "blogs/design/2021/SketchRenameIt.html",
    "revision": "01d774c583ec98e5b66efb0f777067a2"
  },
  {
    "url": "blogs/js/2021/async.html",
    "revision": "4f4baa3280e5116d22e0c2216fcb8a52"
  },
  {
    "url": "blogs/js/2021/axios.html",
    "revision": "b9f9e67200f81b81f6b6852500a2029b"
  },
  {
    "url": "blogs/js/2021/eventLoop.html",
    "revision": "9434f468e426000d81ca44c7de4154d6"
  },
  {
    "url": "blogs/js/2021/IdleDetector.html",
    "revision": "c52f250016998b57841bdd788b4ccf76"
  },
  {
    "url": "blogs/js/2021/vue-class-component.html",
    "revision": "b35bb1728357625ad5dbe8062d3da736"
  },
  {
    "url": "blogs/js/2021/vue-lazyload.html",
    "revision": "1a5c65d0b68333d88d00cad4bbe3aaef"
  },
  {
    "url": "blogs/js/2021/vue-router.html",
    "revision": "961564ea3a7679cbeb83fd56adb33394"
  },
  {
    "url": "blogs/js/2021/vue3-ts-elplus.html",
    "revision": "453dd0b471371ae289950a17664a6476"
  },
  {
    "url": "blogs/js/2023/openAI.html",
    "revision": "979099f741fbd624ab83d2c2e02daa2b"
  },
  {
    "url": "blogs/music/2021/bluebird.html",
    "revision": "b23a5dc520d96e61e9208e6a87859470"
  },
  {
    "url": "blogs/music/2021/chord.html",
    "revision": "629c42eebeca7dcae178f3ba75e8700c"
  },
  {
    "url": "blogs/music/2021/MoonOnTheWater.html",
    "revision": "46e116ea4f3a078a62a83495fd9ead5a"
  },
  {
    "url": "blogs/music/2021/shikinouta.html",
    "revision": "997ebb7b7ec4b7707eb97eda79de673c"
  },
  {
    "url": "blogs/website/2021/git.html",
    "revision": "a1dd751298a91fe1394d7317e80110b0"
  },
  {
    "url": "blogs/website/2021/imgur.html",
    "revision": "6e41ab081220e28796764d294935e9ce"
  },
  {
    "url": "blogs/website/2021/nginx.html",
    "revision": "0f2060ddd404d7367ae7e47d5e087ac1"
  },
  {
    "url": "blogs/website/2021/vextab.html",
    "revision": "20c059d6a08bfe819378578dc8e5cb55"
  },
  {
    "url": "blogs/website/2021/vue-cli3.html",
    "revision": "ab278c180446795517ecb1b43339233c"
  },
  {
    "url": "blogs/website/2021/vuepress.html",
    "revision": "5978ca487c9c9cdc38ea55a341ef499c"
  },
  {
    "url": "categories/Chatgpt/index.html",
    "revision": "cdfb559536346b756b6c70649acc0355"
  },
  {
    "url": "categories/Code/index.html",
    "revision": "be3485e58aca7a41be3e2481372fd70a"
  },
  {
    "url": "categories/css-doodle/index.html",
    "revision": "86b71fa202154fb0a1f3ec311d03fde1"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "e57ff0db669d05f5ee4ab244ec07bf5d"
  },
  {
    "url": "categories/Design/index.html",
    "revision": "74686cbc00690a4fe788ff9060518f61"
  },
  {
    "url": "categories/doc/index.html",
    "revision": "44541423565b14bfa2f883cc602d425f"
  },
  {
    "url": "categories/index.html",
    "revision": "c91a29f9c4a2673cd44f9f2a781c5a3e"
  },
  {
    "url": "categories/Music/index.html",
    "revision": "849d16bfdd3bd4da5ad79ae63ddeb1d8"
  },
  {
    "url": "categories/Website/index.html",
    "revision": "b501b2b6cd5c41b8a256ca947a32ecd2"
  },
  {
    "url": "docs/theme-reco/markdown.html",
    "revision": "5639b8f6a220afc3723f8f39565a2712"
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
    "revision": "06f36bf6a87b15ba57a8e8b27649016d"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "0d4b526f7daebfacdd89442d0d7d0e0a"
  },
  {
    "url": "tag/Chatgpt/index.html",
    "revision": "8f362c2fcfdaba2d22b7573f094ea208"
  },
  {
    "url": "tag/css-doodle/index.html",
    "revision": "ffe0abc3b48c14e33ab4700219aef504"
  },
  {
    "url": "tag/css/index.html",
    "revision": "d122db1bf4990be39a82c2aed4dfad70"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "14dcaf6d980ee5b3aca96bb22f5a9294"
  },
  {
    "url": "tag/git/index.html",
    "revision": "ca1012953d619476f7046bc917e55fef"
  },
  {
    "url": "tag/Guitar/index.html",
    "revision": "da93ee8ad965ad235b42920d3e819c37"
  },
  {
    "url": "tag/Harmonica/index.html",
    "revision": "d1fa8e334b2d92845c19e5c3f5c9994c"
  },
  {
    "url": "tag/Icon/index.html",
    "revision": "d701b27d55e792086132f0ffb8f43145"
  },
  {
    "url": "tag/ImagesWeserv/index.html",
    "revision": "d120fe2c4cdace18f6cf0022ddbe71be"
  },
  {
    "url": "tag/Imgur/index.html",
    "revision": "bef748a335b68ce16e271f100ec4536d"
  },
  {
    "url": "tag/index.html",
    "revision": "ef74bfc62397346918b4a356e49e6e74"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "fb2c4ef6c254a345d16a44e5b3a00db2"
  },
  {
    "url": "tag/Lottie/index.html",
    "revision": "bfa2978e8f2b00ae7e7a079112ecf9de"
  },
  {
    "url": "tag/Nginx/index.html",
    "revision": "beaed5bdc337f824b69ce47ace7b9a5f"
  },
  {
    "url": "tag/scoped/index.html",
    "revision": "85c4128eb593fc37555fc6ddadf30231"
  },
  {
    "url": "tag/sketch/index.html",
    "revision": "8fc50696975ef88e0772f9725a104840"
  },
  {
    "url": "tag/test/index.html",
    "revision": "b21b3cf7e9455fe8d5d0dbc0d4d1aeb5"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "46505da98f19873ef763ca0e1e02b04d"
  },
  {
    "url": "tag/unit/index.html",
    "revision": "1d8924e854e44bcc8de6dbb5d8fa4955"
  },
  {
    "url": "tag/VexTab/index.html",
    "revision": "1763a7098be84ef7809485d26e1d54c0"
  },
  {
    "url": "tag/vue-cli3/index.html",
    "revision": "f0d65225dcf36b35a6a529041536a384"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "dfcef52fa886c4795f882455687a6bc4"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "d9bc5ea656bb31a459fd29caefe0baf7"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "0cd080d7c659f9348ede370df9a901fa"
  },
  {
    "url": "timeline/index.html",
    "revision": "ccc7ea0998cd65411300adb134597604"
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
