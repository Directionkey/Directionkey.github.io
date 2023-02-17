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
    "revision": "8852d3599cc3203d21699d488c702d8c"
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
    "url": "assets/js/13.7306408f.js",
    "revision": "4279087e914976d141e3bd4847745972"
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
    "url": "assets/js/20.10eb3af0.js",
    "revision": "87735d2f256058b4766530eb98168ac7"
  },
  {
    "url": "assets/js/21.bb736b8f.js",
    "revision": "988c36cf7465ad8f26ffbf60938048dc"
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
    "url": "assets/js/31.52ebaa53.js",
    "revision": "5a95c9fc94aa8b0d4515f122be765baa"
  },
  {
    "url": "assets/js/32.c7d83815.js",
    "revision": "5ae14bd617153e2811922dda37912f61"
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
    "url": "assets/js/36.e203e6d1.js",
    "revision": "7f421fdc0558efbea25f2aea3f925a94"
  },
  {
    "url": "assets/js/37.f626ab5f.js",
    "revision": "7bad8e5ccfc422dbc40d09b0db15f5a8"
  },
  {
    "url": "assets/js/38.5094adac.js",
    "revision": "69354cf8e396cb20748b99e1b73d3772"
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
    "url": "assets/js/40.2e5869b3.js",
    "revision": "0da9dfd71ca7f7b888d82e7d53b9d5e5"
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
    "url": "assets/js/app.46a04ead.js",
    "revision": "be27a33b82e8de7073b6e9515c75839b"
  },
  {
    "url": "blogs/css/2021/CssDoodle1.html",
    "revision": "4f7f1a661d8d3f6a8b9e66e98b1e50fc"
  },
  {
    "url": "blogs/css/2021/CssDoodle2.html",
    "revision": "c6c7177d2c4bf54454282202c37c6bab"
  },
  {
    "url": "blogs/css/2021/scope.html",
    "revision": "7ae56e786c0b5c345f248fb42db85261"
  },
  {
    "url": "blogs/css/2022/glass.html",
    "revision": "353aee284ddb937ab10335d1f7153d02"
  },
  {
    "url": "blogs/design/2021/FilledInVsOutline.html",
    "revision": "6a63d7d6a9a7de79c91300c32525f5d0"
  },
  {
    "url": "blogs/design/2021/lottie.html",
    "revision": "2d7f20fa6bc5bb6a2c17c97237e48fa8"
  },
  {
    "url": "blogs/design/2021/ResolutionRatio.html",
    "revision": "b6a64a07f6be04cd8d282dcd00c2c634"
  },
  {
    "url": "blogs/design/2021/SketchRenameIt.html",
    "revision": "f91c76a72f315315fd2c3c966e26e727"
  },
  {
    "url": "blogs/js/2021/async.html",
    "revision": "cc1dfb118d47a4186254f7ba458571a7"
  },
  {
    "url": "blogs/js/2021/axios.html",
    "revision": "71b93d6f8b7c546f4d5bbdc339aab247"
  },
  {
    "url": "blogs/js/2021/eventLoop.html",
    "revision": "f4c0e4a7e643a811e96fe21b8197bf64"
  },
  {
    "url": "blogs/js/2021/IdleDetector.html",
    "revision": "1496ac9bfd4bb1670e553cc8f436c4a4"
  },
  {
    "url": "blogs/js/2021/vue-class-component.html",
    "revision": "fff5f6254b57c6a8ef5f82c9e55a1a4d"
  },
  {
    "url": "blogs/js/2021/vue-lazyload.html",
    "revision": "065ffb0602b1c2b2cd89a9867926f034"
  },
  {
    "url": "blogs/js/2021/vue-router.html",
    "revision": "91d301664653da2315d630f1e783bfee"
  },
  {
    "url": "blogs/js/2021/vue3-ts-elplus.html",
    "revision": "5b2cc266746dc1d4a1a8b7cea9678f0f"
  },
  {
    "url": "blogs/js/2023/openAI.html",
    "revision": "62cd2ea9db0efd300ddf65c699f1686b"
  },
  {
    "url": "blogs/music/2021/bluebird.html",
    "revision": "46708a0e8fd35fb1295923403f7e4b66"
  },
  {
    "url": "blogs/music/2021/chord.html",
    "revision": "53fa53ecfc9fbf93332c05f52e9f5819"
  },
  {
    "url": "blogs/music/2021/MoonOnTheWater.html",
    "revision": "13970165a880904d239e32100c50658e"
  },
  {
    "url": "blogs/music/2021/shikinouta.html",
    "revision": "fbb15078d9544f4f753df6d6fd69c247"
  },
  {
    "url": "blogs/website/2021/git.html",
    "revision": "a88956d0c95e3a38e430b30d9eb42a17"
  },
  {
    "url": "blogs/website/2021/imgur.html",
    "revision": "ef8a8cfee0843b398ff2bb58b4dff9c3"
  },
  {
    "url": "blogs/website/2021/nginx.html",
    "revision": "096d5f5e5d88d84e91004040efce69e1"
  },
  {
    "url": "blogs/website/2021/vextab.html",
    "revision": "2c28ad255bf3d95c757a4e5965c21a33"
  },
  {
    "url": "blogs/website/2021/vue-cli3.html",
    "revision": "6dae3053a4ca4082817af0fdcf2885e1"
  },
  {
    "url": "blogs/website/2021/vuepress.html",
    "revision": "733dc2533ae2d278d3597446fc00c9ef"
  },
  {
    "url": "categories/Chatgpt/index.html",
    "revision": "f7763d8ad5157fd6c5dce92757ca1265"
  },
  {
    "url": "categories/Code/index.html",
    "revision": "c75fadbc0ad7a6e729ec3b0ffcdccb12"
  },
  {
    "url": "categories/css-doodle/index.html",
    "revision": "b8ea1b13b3598c7a84d93597b7f2180a"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "1c279cf9975c0b85ee5c7447a6229803"
  },
  {
    "url": "categories/Design/index.html",
    "revision": "9f0558a940c824333f26c72fcc29d9ea"
  },
  {
    "url": "categories/doc/index.html",
    "revision": "995e6d4d951378464d09482a1dd83556"
  },
  {
    "url": "categories/index.html",
    "revision": "6ee5e75329f200c4b3516791ec064b02"
  },
  {
    "url": "categories/Music/index.html",
    "revision": "cbae13b2394013815cd7aa0cb2558b73"
  },
  {
    "url": "categories/Website/index.html",
    "revision": "af1fb442c2871a9d1f6f0bb156bbc3b8"
  },
  {
    "url": "docs/theme-reco/markdown.html",
    "revision": "12cbfb553e681755a753cc478f8d5d8b"
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
    "revision": "cf19b16b7c1a66e66afaf87b658869e5"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "0d4b526f7daebfacdd89442d0d7d0e0a"
  },
  {
    "url": "tag/Chatgpt/index.html",
    "revision": "cee92a02eed03d52958293d3540ac35b"
  },
  {
    "url": "tag/css-doodle/index.html",
    "revision": "8384387c2fa31917f33deded5ab47d10"
  },
  {
    "url": "tag/css/index.html",
    "revision": "4812a68a848b1a1fd3e58438bf9bb730"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "e8c5831873cd9537ea0e8326446b87e1"
  },
  {
    "url": "tag/git/index.html",
    "revision": "1a89f8ca869e8b7067d4f3507fa30ac5"
  },
  {
    "url": "tag/Guitar/index.html",
    "revision": "929f96ceeb25549c2cca6872766084bb"
  },
  {
    "url": "tag/Harmonica/index.html",
    "revision": "7dade86fae95ace1781800012c2409b3"
  },
  {
    "url": "tag/Icon/index.html",
    "revision": "cbeb122badaa1c87fb4d41d680a9f7c4"
  },
  {
    "url": "tag/ImagesWeserv/index.html",
    "revision": "90bb03f0d220e5fc3c8b3fdc5763bd3b"
  },
  {
    "url": "tag/Imgur/index.html",
    "revision": "dd2ff56a9250f489e1ee9bf73a3843cc"
  },
  {
    "url": "tag/index.html",
    "revision": "ba3ecf89913b583cc8817418a23acf35"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "ab03cd1718753e63b197a0af9a8fb586"
  },
  {
    "url": "tag/Lottie/index.html",
    "revision": "e78fd00ee2b2075366c33ef293fb503d"
  },
  {
    "url": "tag/Nginx/index.html",
    "revision": "099bf8dff4b3776bdfe60180a8ebb211"
  },
  {
    "url": "tag/scoped/index.html",
    "revision": "66fe9f14bd3faaa06fffd1bfdbd0b721"
  },
  {
    "url": "tag/sketch/index.html",
    "revision": "2701781d16cdfd6bd361f2906a16cb2b"
  },
  {
    "url": "tag/test/index.html",
    "revision": "838dcf4c79613372b937d6c57cf822fb"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "5132ce2f58aa4a6ddadda79e220d62dc"
  },
  {
    "url": "tag/unit/index.html",
    "revision": "7ddba129e2ae93348103e637fcc21e32"
  },
  {
    "url": "tag/VexTab/index.html",
    "revision": "1995e7b1c378aae152d8f56d4ef787e3"
  },
  {
    "url": "tag/vue-cli3/index.html",
    "revision": "4e6d5903a1bfe126d7f8c5ff2f6224c1"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "6dd28187f03dda4a90a8986c363ddeaa"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "2b01fcf72abd0153977ac354d75bdda5"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "fa8ed0dff25088f3b5e27857fd7a0a6d"
  },
  {
    "url": "timeline/index.html",
    "revision": "6d9bfa8706f68ce762b825ebc9a10ae3"
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
