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
    "revision": "44605180ab98a5baafc844baa4ac13ba"
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
    "url": "assets/js/19.fcee522a.js",
    "revision": "d99e60b830f3d120bf6e9fe5d0dd7363"
  },
  {
    "url": "assets/js/20.455fe0eb.js",
    "revision": "39657ac4120f7fd14bc7c5b79c4e911e"
  },
  {
    "url": "assets/js/21.bb736b8f.js",
    "revision": "988c36cf7465ad8f26ffbf60938048dc"
  },
  {
    "url": "assets/js/22.a5f2275b.js",
    "revision": "52b403a3b8f83a2bd81cd63521538063"
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
    "url": "assets/js/26.0fa4e17d.js",
    "revision": "86ced1a49112e93747056e46f97aad44"
  },
  {
    "url": "assets/js/27.85b6e2f5.js",
    "revision": "5ed10710c8447fb5e0b97c6ec7698936"
  },
  {
    "url": "assets/js/28.66d955fd.js",
    "revision": "cb1a66f5a250494e2728ba5804ca2653"
  },
  {
    "url": "assets/js/29.8bd45923.js",
    "revision": "96f8d0942c10771de531d703fab9c8e8"
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
    "url": "assets/js/31.206df84a.js",
    "revision": "f2af9b38df28effb9a08cba35a4f13f5"
  },
  {
    "url": "assets/js/32.c7d83815.js",
    "revision": "5ae14bd617153e2811922dda37912f61"
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
    "url": "assets/js/35.9df883ce.js",
    "revision": "8094f97bccd5952eaca29160687ceab1"
  },
  {
    "url": "assets/js/36.88e604a0.js",
    "revision": "2704c9a99c1164df6ee8bee5252c4d54"
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
    "url": "assets/js/app.e4ae765c.js",
    "revision": "0b0df2749f891fd1b0789ebac8d8699b"
  },
  {
    "url": "blogs/css/2021/CssDoodle1.html",
    "revision": "43bde1a6f0e30f16edad50aae2ccabbf"
  },
  {
    "url": "blogs/css/2021/CssDoodle2.html",
    "revision": "572d1622fda6f30fb8fba18088386e5b"
  },
  {
    "url": "blogs/css/2021/scope.html",
    "revision": "8b61ee5b6febb4471f745cec9e0ae8e0"
  },
  {
    "url": "blogs/css/2022/glass.html",
    "revision": "d3406215134bc9539f2e85a6dbfa16ae"
  },
  {
    "url": "blogs/design/2021/FilledInVsOutline.html",
    "revision": "3db5cadd033ff212e50797e69704f556"
  },
  {
    "url": "blogs/design/2021/lottie.html",
    "revision": "fcf7e2d1e1ab02fef0b7b6dac6829424"
  },
  {
    "url": "blogs/design/2021/ResolutionRatio.html",
    "revision": "2961e9dc724866b4453ed9ba9ec48e35"
  },
  {
    "url": "blogs/design/2021/SketchRenameIt.html",
    "revision": "4fd1620b293432f2281e2a318a4fdb42"
  },
  {
    "url": "blogs/js/2021/async.html",
    "revision": "7830cd6e337c857759f09aba85ad6077"
  },
  {
    "url": "blogs/js/2021/axios.html",
    "revision": "f23a8f61531426a57ecbb04a97e48b3a"
  },
  {
    "url": "blogs/js/2021/eventLoop.html",
    "revision": "6b9e21ce055d2d2bf6e5c4a571d85870"
  },
  {
    "url": "blogs/js/2021/IdleDetector.html",
    "revision": "b8b9f4c67bfd9f6e82ba8195df0c88c8"
  },
  {
    "url": "blogs/js/2021/vue-class-component.html",
    "revision": "5f724c89acff881c2991d4de42c24975"
  },
  {
    "url": "blogs/js/2021/vue-lazyload.html",
    "revision": "78f3c66805453c66f3b84056ff91b38a"
  },
  {
    "url": "blogs/js/2021/vue-router.html",
    "revision": "c37068a307249a74a2db628b5e49b731"
  },
  {
    "url": "blogs/js/2021/vue3-ts-elplus.html",
    "revision": "a52646f6164759f7d7d6383d31b09d0e"
  },
  {
    "url": "blogs/js/2023/openAI.html",
    "revision": "9d952fbf4b36b28d3eefcef6e087efe0"
  },
  {
    "url": "blogs/music/2021/bluebird.html",
    "revision": "25c90ba055cd6537217a304d861e0839"
  },
  {
    "url": "blogs/music/2021/chord.html",
    "revision": "25de7fbd44de014668f7b94caadc3a31"
  },
  {
    "url": "blogs/music/2021/MoonOnTheWater.html",
    "revision": "4a1e3ef43b8d598d704ca20e5aee4054"
  },
  {
    "url": "blogs/music/2021/shikinouta.html",
    "revision": "d4c48e84735e9fcec13a892732c7d213"
  },
  {
    "url": "blogs/website/2021/git.html",
    "revision": "5beb16548bab843e82dcb50f9fa999f8"
  },
  {
    "url": "blogs/website/2021/imgur.html",
    "revision": "96ab8f77d57644dfeaa7e0d8d1ee7cc2"
  },
  {
    "url": "blogs/website/2021/nginx.html",
    "revision": "31dc75cd299da1edb6674c6881bacd94"
  },
  {
    "url": "blogs/website/2021/vextab.html",
    "revision": "e6823b0f95f2a9a0f037c8cf26da92e4"
  },
  {
    "url": "blogs/website/2021/vue-cli3.html",
    "revision": "c9d85c502e4a6e023f18d83fcfa98f6c"
  },
  {
    "url": "blogs/website/2021/vuepress.html",
    "revision": "4f3bf90469ae9178c58fb1e44385efc6"
  },
  {
    "url": "categories/Chatgpt/index.html",
    "revision": "736d406b2cdb013e86e79643cddb2c3d"
  },
  {
    "url": "categories/Code/index.html",
    "revision": "fbf23fd2e28cf1ee143cde2d44f64c18"
  },
  {
    "url": "categories/css-doodle/index.html",
    "revision": "c2d86a6124564da308c2b69ac4e12d87"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "826a493c125cbfb0154faf2f3bfe92a5"
  },
  {
    "url": "categories/Design/index.html",
    "revision": "1899f94dc9a1ddc018d146a27f0c71e5"
  },
  {
    "url": "categories/doc/index.html",
    "revision": "f06960560d053d15ae76b9106e877936"
  },
  {
    "url": "categories/index.html",
    "revision": "84e90ebdbba1cfc1414d96be23c9b986"
  },
  {
    "url": "categories/Music/index.html",
    "revision": "b7b831e03037990a527b1904c2840bd2"
  },
  {
    "url": "categories/Website/index.html",
    "revision": "766d9700dd300bb5788739a0d6d46605"
  },
  {
    "url": "docs/theme-reco/markdown.html",
    "revision": "cfd3e86524d53163e0043bfbf7f13cc8"
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
    "revision": "ed33196633e42c8c5a66c178f2069996"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "0d4b526f7daebfacdd89442d0d7d0e0a"
  },
  {
    "url": "tag/Chatgpt/index.html",
    "revision": "6c7feac9801972c5cd519c69a9e1bba8"
  },
  {
    "url": "tag/css-doodle/index.html",
    "revision": "7a8c3c3e2066054f669a9a14275114a5"
  },
  {
    "url": "tag/css/index.html",
    "revision": "b5100b8c7bfbb76861cccc620506153e"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "ab49420bf44e6293b473b8de4ebb0d80"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d8a551559e6cb2f7c031b6b49c86e890"
  },
  {
    "url": "tag/Guitar/index.html",
    "revision": "ec2dff7587b8a70fd32ebdb1e6f5d795"
  },
  {
    "url": "tag/Harmonica/index.html",
    "revision": "a3c6313c996869b1e2aba8a93f10c1c3"
  },
  {
    "url": "tag/Icon/index.html",
    "revision": "f16096a2e07b5e0d9d6533905b570ab2"
  },
  {
    "url": "tag/ImagesWeserv/index.html",
    "revision": "ab7d96447e80ba32c98c6548c9f9fb10"
  },
  {
    "url": "tag/Imgur/index.html",
    "revision": "be0d40b67b801fe765c748055cbc358b"
  },
  {
    "url": "tag/index.html",
    "revision": "65e6f7c56587bc8cef6f56166348c868"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "43e42690b32a58ed03c29c5c70dbeea5"
  },
  {
    "url": "tag/Lottie/index.html",
    "revision": "89888055d760259b8061fec1db87f364"
  },
  {
    "url": "tag/Nginx/index.html",
    "revision": "449a91abb144a28d66987d3714a621a6"
  },
  {
    "url": "tag/scoped/index.html",
    "revision": "43dbf92b8543bcbe6b14f65e827dbef9"
  },
  {
    "url": "tag/sketch/index.html",
    "revision": "ac04bf33893caf8c93c4f744f0543dcb"
  },
  {
    "url": "tag/test/index.html",
    "revision": "06994b86cad6c28b317f458f74e8fce3"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "b103ca5cef8a9f6736bed8f002cf4b29"
  },
  {
    "url": "tag/unit/index.html",
    "revision": "80b892737efdf7e9f6e22e9fb04ae41a"
  },
  {
    "url": "tag/VexTab/index.html",
    "revision": "e366efc510b15223459028214175a42d"
  },
  {
    "url": "tag/vue-cli3/index.html",
    "revision": "527e4d81b64b30de90f9ed623bdfe69e"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "66cc47b351d46a595b7a81abf003f5e5"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "e472af3e8c8d69dc5213ef6660c04bd5"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "d3aab01999f3a0e88ed19aafaa1ce3c2"
  },
  {
    "url": "timeline/index.html",
    "revision": "2771f8edaeac4242b32d436fe6b7f93c"
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
