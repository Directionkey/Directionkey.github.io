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
    "revision": "eec30ecbe21a203e7032f090893e8b37"
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
    "url": "assets/js/15.58b347e5.js",
    "revision": "9a607d0c9281c375f29435f9d4f4e318"
  },
  {
    "url": "assets/js/16.7d3c19f2.js",
    "revision": "7367e33c801dfb134df3931a39aa6e34"
  },
  {
    "url": "assets/js/17.39568c5b.js",
    "revision": "a3d6283f22797bc3ac133a9218d6e57d"
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
    "url": "assets/js/20.81baefeb.js",
    "revision": "408e70991a37afbd754ed39516abfff7"
  },
  {
    "url": "assets/js/21.bb736b8f.js",
    "revision": "988c36cf7465ad8f26ffbf60938048dc"
  },
  {
    "url": "assets/js/22.9c9b3a7f.js",
    "revision": "b35e4db34cffd71f9c574d2b2356100c"
  },
  {
    "url": "assets/js/23.247ee7db.js",
    "revision": "f79bf6aa8254a0d4c05a9520e5b397cb"
  },
  {
    "url": "assets/js/24.7061310b.js",
    "revision": "f337156c08cc2e6cec99465c04810690"
  },
  {
    "url": "assets/js/25.7da096bb.js",
    "revision": "6a7c7fbc70a50766961f3770a0427ecf"
  },
  {
    "url": "assets/js/26.0fa4e17d.js",
    "revision": "86ced1a49112e93747056e46f97aad44"
  },
  {
    "url": "assets/js/27.686f5434.js",
    "revision": "469303d6d863f052fee614ce9843bc72"
  },
  {
    "url": "assets/js/28.f0ca8057.js",
    "revision": "2e669acef48ed5fc776d2416da014125"
  },
  {
    "url": "assets/js/29.064aaf1c.js",
    "revision": "177edcd401b2a8e50941f415616090ae"
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
    "url": "assets/js/32.c7d83815.js",
    "revision": "5ae14bd617153e2811922dda37912f61"
  },
  {
    "url": "assets/js/33.0f56d832.js",
    "revision": "433baf95e00546ef974928d82dc354d5"
  },
  {
    "url": "assets/js/34.0b04a73b.js",
    "revision": "fa4cdbe29d1751b083848db238dad744"
  },
  {
    "url": "assets/js/35.f2ae5f6c.js",
    "revision": "1a1bca3c05c18f32327c647440d1daa2"
  },
  {
    "url": "assets/js/36.78463006.js",
    "revision": "e48f3548c8aa215381ebd3799de2c736"
  },
  {
    "url": "assets/js/37.0a36eed8.js",
    "revision": "d6ec930945a8f7e1992e7f1bf4bf0b86"
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
    "url": "assets/js/40.1d76266b.js",
    "revision": "449a7fbd371cca2812db6ea03dedbb9a"
  },
  {
    "url": "assets/js/41.ade77300.js",
    "revision": "254c6db6575c67a825053b5801e01d69"
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
    "url": "assets/js/app.39017d4e.js",
    "revision": "35209cf0f95c1f1bbd897b70f83173dd"
  },
  {
    "url": "blogs/css/2021/CssDoodle1.html",
    "revision": "79a2f52891fc6459a432f767b7913955"
  },
  {
    "url": "blogs/css/2021/CssDoodle2.html",
    "revision": "38453e22f37042e9a6e48e4cd29d2350"
  },
  {
    "url": "blogs/css/2021/scope.html",
    "revision": "ae230f8d27e7afcbc1062ecccc4fd3b4"
  },
  {
    "url": "blogs/css/2022/glass.html",
    "revision": "cdebda690d285a0530480841c42be1f6"
  },
  {
    "url": "blogs/design/2021/FilledInVsOutline.html",
    "revision": "5d247d12b4b72a0bc88c145de60a462a"
  },
  {
    "url": "blogs/design/2021/lottie.html",
    "revision": "b3dae5ed590b6c5d30eaad63499202e5"
  },
  {
    "url": "blogs/design/2021/ResolutionRatio.html",
    "revision": "c824a823305a313b413c271770bccf50"
  },
  {
    "url": "blogs/design/2021/SketchRenameIt.html",
    "revision": "25f347994c9feb55900817272a2be142"
  },
  {
    "url": "blogs/js/2021/async.html",
    "revision": "b69c6ecb8bd7df75397a94d3744ee936"
  },
  {
    "url": "blogs/js/2021/axios.html",
    "revision": "cd4312982e7ad7e98670d8ddece7d8d8"
  },
  {
    "url": "blogs/js/2021/eventLoop.html",
    "revision": "22ce9665a46281e281c9dd674950f786"
  },
  {
    "url": "blogs/js/2021/IdleDetector.html",
    "revision": "2648ac39304569c07da705017fe9d8f7"
  },
  {
    "url": "blogs/js/2021/vue-class-component.html",
    "revision": "1008f51edcbc7a14cf69fc6b93b8b9f9"
  },
  {
    "url": "blogs/js/2021/vue-lazyload.html",
    "revision": "6ad9f82dd3014c9a560d5de6bf55fb7b"
  },
  {
    "url": "blogs/js/2021/vue-router.html",
    "revision": "c46529403393ff82d81f8cbc131d72af"
  },
  {
    "url": "blogs/js/2021/vue3-ts-elplus.html",
    "revision": "3e37c978d0bed704abdb9a128a683a6f"
  },
  {
    "url": "blogs/js/2023/openAI.html",
    "revision": "83a817e1c7c03cddea19a4c0899a4ae6"
  },
  {
    "url": "blogs/music/2021/bluebird.html",
    "revision": "485617d8631228b6e806d9f621bb5683"
  },
  {
    "url": "blogs/music/2021/chord.html",
    "revision": "4d766f3335d5eb4cb930d83a23d043b9"
  },
  {
    "url": "blogs/music/2021/MoonOnTheWater.html",
    "revision": "a5553bd06f1090f569835e73854ad5f9"
  },
  {
    "url": "blogs/music/2021/shikinouta.html",
    "revision": "1ea8e07316748230db9b545ba3c25ae9"
  },
  {
    "url": "blogs/website/2021/git.html",
    "revision": "19d5df05758fc45e4356793d3ac6d580"
  },
  {
    "url": "blogs/website/2021/imgur.html",
    "revision": "0c1848ba76cd88f8fb55692563e6655a"
  },
  {
    "url": "blogs/website/2021/nginx.html",
    "revision": "c170da302b9e408d968028add6493537"
  },
  {
    "url": "blogs/website/2021/vextab.html",
    "revision": "a6bc7ad4c8a5a063bf94536c87bdfb79"
  },
  {
    "url": "blogs/website/2021/vue-cli3.html",
    "revision": "c38136a270bf810e731dd7858354a99c"
  },
  {
    "url": "blogs/website/2021/vuepress.html",
    "revision": "ebfdb51eafa983302add2b2dd0aeb546"
  },
  {
    "url": "categories/Chatgpt/index.html",
    "revision": "6bdab62164b9d60550d7672dc977dc03"
  },
  {
    "url": "categories/Code/index.html",
    "revision": "a1a9ad5775c32c8d6dab063ce986df28"
  },
  {
    "url": "categories/css-doodle/index.html",
    "revision": "25cc9a12dd952de4f4c2616a9f49c444"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "0d8f59f861b953bd16a124eb8caeaa49"
  },
  {
    "url": "categories/Design/index.html",
    "revision": "25577417bc3bfdfe6d4b9c28a785cc6b"
  },
  {
    "url": "categories/doc/index.html",
    "revision": "b505226f1b7376565b6c7cce731f96c8"
  },
  {
    "url": "categories/index.html",
    "revision": "35300ad59809b818caab385b3f06ebb2"
  },
  {
    "url": "categories/Music/index.html",
    "revision": "1d205de3df463f230a29592e092e4fe2"
  },
  {
    "url": "categories/Website/index.html",
    "revision": "8b020042912bd9c7a521cc8d291de01f"
  },
  {
    "url": "docs/theme-reco/markdown.html",
    "revision": "375c286196fe4bc983dd47eadcbb6afb"
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
    "revision": "404dabdcad37c5337d1cde81a8a47b6e"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "0d4b526f7daebfacdd89442d0d7d0e0a"
  },
  {
    "url": "tag/Chatgpt/index.html",
    "revision": "fff83282dfca795ff5b48e9289522791"
  },
  {
    "url": "tag/css-doodle/index.html",
    "revision": "d03004f84fd614a8a22100073b32d1b2"
  },
  {
    "url": "tag/css/index.html",
    "revision": "1d19262641afa163612412f43ddd82e5"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "333398cf2a1875ad5f936d4bd2fc85d9"
  },
  {
    "url": "tag/git/index.html",
    "revision": "55c55e96870ba8ba9988dba43b08895b"
  },
  {
    "url": "tag/Guitar/index.html",
    "revision": "e2188511c276674ac0634a14125f1cd1"
  },
  {
    "url": "tag/Harmonica/index.html",
    "revision": "50405dbe903292a9b5a7c263792e7800"
  },
  {
    "url": "tag/Icon/index.html",
    "revision": "5dcd9ea878f8433ee76b1033ef758547"
  },
  {
    "url": "tag/ImagesWeserv/index.html",
    "revision": "9cc10c640a22ab7186a6077ef70444cb"
  },
  {
    "url": "tag/Imgur/index.html",
    "revision": "e7d5e105d9066c3d8f64e8e139abc3f0"
  },
  {
    "url": "tag/index.html",
    "revision": "f3db9e552ea1d8a298fe54ea6ffbf1c2"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "a670bc1977cdc59b3f8446cdffddfdc1"
  },
  {
    "url": "tag/Lottie/index.html",
    "revision": "572ee2db25fcb29520fd3700c16affc8"
  },
  {
    "url": "tag/Nginx/index.html",
    "revision": "231c7cfb66900b406e3d036b6a48f293"
  },
  {
    "url": "tag/scoped/index.html",
    "revision": "5098fd1865d114561d607f3f5687ce1f"
  },
  {
    "url": "tag/sketch/index.html",
    "revision": "0bcfd145d2e858d6f782eeec34924f50"
  },
  {
    "url": "tag/test/index.html",
    "revision": "abd0207479f43912156998e620877f2b"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "91bc617f7c3dc117489306488a1d13a0"
  },
  {
    "url": "tag/VexTab/index.html",
    "revision": "f54c0d1b5fb1b9dd5acdef0f16594c63"
  },
  {
    "url": "tag/vue-cli3/index.html",
    "revision": "044ed786c1e06d8067641394f2f8cecb"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "5be1ff26fcfd54068dde59f2331bb4bb"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "3800eccf7f103c1df6980f5e9081dd35"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "0509927e84b0b396d95e90b615f04f68"
  },
  {
    "url": "tag/单位/index.html",
    "revision": "d988c903652498560fec42b3b9c75d65"
  },
  {
    "url": "timeline/index.html",
    "revision": "8062958d6ec235530d9998706a9a0f2f"
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
