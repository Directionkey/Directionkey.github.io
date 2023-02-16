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
    "revision": "9e5505935b76545af2ad47790a4fefdc"
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
    "url": "assets/js/19.03ac82f4.js",
    "revision": "c7968e8087dcb358ca554d7ccdbf954e"
  },
  {
    "url": "assets/js/20.f949f742.js",
    "revision": "6f8c7bc6b643dd6d9221e65e474f9c5d"
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
    "url": "assets/js/27.3ebd49ea.js",
    "revision": "9625f4ff554b5ab6149a521a24e3c5f5"
  },
  {
    "url": "assets/js/28.ff22dfc4.js",
    "revision": "b9c0f1ef91a0b82f59e1b73bb9afd05b"
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
    "url": "assets/js/31.8c15e341.js",
    "revision": "184cfc469de9f187d3ad6fc37a21bd99"
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
    "url": "assets/js/35.43c3b7f7.js",
    "revision": "09a558a07218a2bd345356f189c7763b"
  },
  {
    "url": "assets/js/36.88e604a0.js",
    "revision": "2704c9a99c1164df6ee8bee5252c4d54"
  },
  {
    "url": "assets/js/37.b554ba5d.js",
    "revision": "f27ee185cc914c93faaa75b2e99c6164"
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
    "url": "assets/js/app.03b70763.js",
    "revision": "a1c98d037023a3e3d4c7d7415e9b37e7"
  },
  {
    "url": "blogs/css/2021/CssDoodle1.html",
    "revision": "e522fc3916d72bc5d15215f1b416818d"
  },
  {
    "url": "blogs/css/2021/CssDoodle2.html",
    "revision": "0713b53e864ed578ddd680ba85c4a766"
  },
  {
    "url": "blogs/css/2021/scope.html",
    "revision": "c296c0354da2269d929d969134071489"
  },
  {
    "url": "blogs/css/2022/glass.html",
    "revision": "ce56290e88768fef916c3d63de72fdb9"
  },
  {
    "url": "blogs/design/2021/FilledInVsOutline.html",
    "revision": "66e325fc9465e3cbc404eb26cd785d3e"
  },
  {
    "url": "blogs/design/2021/lottie.html",
    "revision": "68e9c7b1ddb118b3290e3ac1b3db28e0"
  },
  {
    "url": "blogs/design/2021/ResolutionRatio.html",
    "revision": "fedceb8edb454202d4b280f0ce79ee93"
  },
  {
    "url": "blogs/design/2021/SketchRenameIt.html",
    "revision": "86a836b3bb511a6853206f2c71e32903"
  },
  {
    "url": "blogs/js/2021/async.html",
    "revision": "e784bece6c3cede0b30cfc4cf0db747e"
  },
  {
    "url": "blogs/js/2021/axios.html",
    "revision": "f39b06f74f3333bbb15b6b58f98478cc"
  },
  {
    "url": "blogs/js/2021/eventLoop.html",
    "revision": "f079ef8116e27bc79c31c60b894b98d4"
  },
  {
    "url": "blogs/js/2021/IdleDetector.html",
    "revision": "c1432860370bcb3331bc3914cde03aeb"
  },
  {
    "url": "blogs/js/2021/vue-class-component.html",
    "revision": "1419a9faa021d5ac355561a4b935b37b"
  },
  {
    "url": "blogs/js/2021/vue-lazyload.html",
    "revision": "75ee9a72da9865fd3a5c1d20f9fd3067"
  },
  {
    "url": "blogs/js/2021/vue-router.html",
    "revision": "1e394913c49361d6a97e349c069f8cca"
  },
  {
    "url": "blogs/js/2021/vue3-ts-elplus.html",
    "revision": "8a2eaae0b9207501222e509157ff720e"
  },
  {
    "url": "blogs/js/2023/openAI.html",
    "revision": "de5d376a27e42c24a0b22d02a749fc9a"
  },
  {
    "url": "blogs/music/2021/bluebird.html",
    "revision": "7264ae101dc15c8ebad7e9e875b6d1b0"
  },
  {
    "url": "blogs/music/2021/chord.html",
    "revision": "4f23a59b068134da7067f303f605a416"
  },
  {
    "url": "blogs/music/2021/MoonOnTheWater.html",
    "revision": "2e13f116b7270e5a18988d32f7e0ab19"
  },
  {
    "url": "blogs/music/2021/shikinouta.html",
    "revision": "0891a15b57982d0fb0598085de9d935b"
  },
  {
    "url": "blogs/website/2021/git.html",
    "revision": "13948d85feffdec916f8655f339b4a1b"
  },
  {
    "url": "blogs/website/2021/imgur.html",
    "revision": "aa4d7dca55bb72f818b4f63cbf3768de"
  },
  {
    "url": "blogs/website/2021/nginx.html",
    "revision": "39633356ebafbc16eb8d43de4d154b7c"
  },
  {
    "url": "blogs/website/2021/vextab.html",
    "revision": "c48566ea51bbf921bbd78897b49f7947"
  },
  {
    "url": "blogs/website/2021/vue-cli3.html",
    "revision": "237213df83c33fecd521e3ff16d104a0"
  },
  {
    "url": "blogs/website/2021/vuepress.html",
    "revision": "e0c564bc0994ef077edfa96671a8e287"
  },
  {
    "url": "categories/Chatgpt/index.html",
    "revision": "38f18d70c01859d4c6d1116168fb614b"
  },
  {
    "url": "categories/Code/index.html",
    "revision": "49fbd94403fadf12b3e20376f175c580"
  },
  {
    "url": "categories/css-doodle/index.html",
    "revision": "c7e420f0aae12cd536501d067a0a38bc"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "4cb9fed2f451cfe9b67983ba7124d4b5"
  },
  {
    "url": "categories/Design/index.html",
    "revision": "1b75e1a40d7b9459b64634339685c840"
  },
  {
    "url": "categories/doc/index.html",
    "revision": "f220bc12105050e4f8183353e4ad2dff"
  },
  {
    "url": "categories/index.html",
    "revision": "912c00ab8e99d15b7b12a548ed09c3f1"
  },
  {
    "url": "categories/Music/index.html",
    "revision": "5c63d21749d750e8a600383869f003b1"
  },
  {
    "url": "categories/Website/index.html",
    "revision": "245f2f03c8d2c49cd078bc0dccbb998e"
  },
  {
    "url": "docs/theme-reco/markdown.html",
    "revision": "2ba16cf65cd715737b79da39af484ffd"
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
    "revision": "83eabb9e6f71e998e6db1739acb75ea3"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "0d4b526f7daebfacdd89442d0d7d0e0a"
  },
  {
    "url": "tag/Chatgpt/index.html",
    "revision": "d3ee4fdd23921bedd81c3baba4e16c92"
  },
  {
    "url": "tag/css-doodle/index.html",
    "revision": "9160bff25f8b587bc4a0f1fbcb20e2f2"
  },
  {
    "url": "tag/css/index.html",
    "revision": "08ed3df7453eb5824fe2a9e3f58ae0de"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "c8c20e4b9f91fca87b3f0acb0930ef55"
  },
  {
    "url": "tag/git/index.html",
    "revision": "6e8747aefa7acd0fa0a7816793d0af68"
  },
  {
    "url": "tag/Guitar/index.html",
    "revision": "177069a3737200d1002eec875f1cbf21"
  },
  {
    "url": "tag/Harmonica/index.html",
    "revision": "c9998f603e3ce95e9aa4021712e5fa59"
  },
  {
    "url": "tag/Icon/index.html",
    "revision": "e775e2d04f82a9d30f13168dcd72b5cf"
  },
  {
    "url": "tag/ImagesWeserv/index.html",
    "revision": "f35a6d8ec3d93602397efdbb94a3c6b7"
  },
  {
    "url": "tag/Imgur/index.html",
    "revision": "d3d3b050db9dd0d72d4e4efa2b95fe08"
  },
  {
    "url": "tag/index.html",
    "revision": "756b335026b3fe6ee57396eb54f5e755"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "f9222ae8e0696277fe0d1a250d8c3891"
  },
  {
    "url": "tag/Lottie/index.html",
    "revision": "0f21bef73af22a95d5790be8c4673b1b"
  },
  {
    "url": "tag/Nginx/index.html",
    "revision": "cedff0a2a1e50791a6544b1324e89056"
  },
  {
    "url": "tag/scoped/index.html",
    "revision": "fc18ebd80ce4d0ac9b41d39c4685c0c9"
  },
  {
    "url": "tag/sketch/index.html",
    "revision": "ca95ff5ef63f949f2bfb1530dd83d807"
  },
  {
    "url": "tag/test/index.html",
    "revision": "049612fcc79496e95c038bdd543652e7"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "02de8827abe1bb7ab001f85753d08a37"
  },
  {
    "url": "tag/unit/index.html",
    "revision": "76d3aba757396c9525edcdb3154dd697"
  },
  {
    "url": "tag/VexTab/index.html",
    "revision": "2c4c902d239008638134594cef0e0396"
  },
  {
    "url": "tag/vue-cli3/index.html",
    "revision": "89a8f33d6c624e444cfc54f02ed32bac"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "a7714d7c247be1b4361f94b80f04d490"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "0c4c8e17222ebb85725bd6f2df1f0160"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "1b4016058be96fc957f9fbd888905ce8"
  },
  {
    "url": "timeline/index.html",
    "revision": "6fd8aa4f7faca3c2ad2af48bef6e047d"
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
