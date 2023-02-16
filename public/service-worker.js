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
    "revision": "a3ead4e362d297b13488c8df6b5df2f2"
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
    "url": "assets/js/20.10eb3af0.js",
    "revision": "87735d2f256058b4766530eb98168ac7"
  },
  {
    "url": "assets/js/21.dad27917.js",
    "revision": "80347e08001ebb589ee4865d70912f0b"
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
    "url": "assets/js/25.fb42eb1b.js",
    "revision": "c61b6c3d800cb37c67caa5b51097f5c9"
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
    "url": "assets/js/28.1a4dedd2.js",
    "revision": "88e46866a547d3e13f2e5c9db3f3c2f7"
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
    "url": "assets/js/app.d8e02f4e.js",
    "revision": "00b961ed2bdda663f1b6bc72675183ce"
  },
  {
    "url": "blogs/css/2021/CssDoodle1.html",
    "revision": "f1dcabd6119c472206f2d56c6c02b4d7"
  },
  {
    "url": "blogs/css/2021/CssDoodle2.html",
    "revision": "aa35b38d1af96c7c9812285c2c3c1427"
  },
  {
    "url": "blogs/css/2021/scope.html",
    "revision": "b53514ac6b3db3396d62353e70106f91"
  },
  {
    "url": "blogs/css/2022/glass.html",
    "revision": "58e5c0f18501f2c09e8c8d0cc639af4b"
  },
  {
    "url": "blogs/design/2021/FilledInVsOutline.html",
    "revision": "4dc3b88119820b5c348878cfa347db0b"
  },
  {
    "url": "blogs/design/2021/lottie.html",
    "revision": "3945de635cd6aab7d6e1c07f2831dd55"
  },
  {
    "url": "blogs/design/2021/ResolutionRatio.html",
    "revision": "6bb48846aa05ce3515d11b14b995bbf6"
  },
  {
    "url": "blogs/design/2021/SketchRenameIt.html",
    "revision": "9b3cab44198dec98babc92a9fc59e578"
  },
  {
    "url": "blogs/js/2021/async.html",
    "revision": "b9c4e03564ebf7d5c66db2ccd5b56135"
  },
  {
    "url": "blogs/js/2021/axios.html",
    "revision": "7c13cbb8781e982653601fcb6ee71d71"
  },
  {
    "url": "blogs/js/2021/eventLoop.html",
    "revision": "750b91c212c2742cf5e4bf0d75bc8187"
  },
  {
    "url": "blogs/js/2021/IdleDetector.html",
    "revision": "473b763c59921180be1667f9dd70cc63"
  },
  {
    "url": "blogs/js/2021/vue-class-component.html",
    "revision": "4b6a47439ee748ae62fbc7aaa2c02f91"
  },
  {
    "url": "blogs/js/2021/vue-lazyload.html",
    "revision": "734eefc0985dea9aa8cea6c88a9f50b9"
  },
  {
    "url": "blogs/js/2021/vue-router.html",
    "revision": "ab9795a98e14389034c0c1d9df110ddd"
  },
  {
    "url": "blogs/js/2021/vue3-ts-elplus.html",
    "revision": "e3575999817e14201c282f76238ec57b"
  },
  {
    "url": "blogs/js/2023/openAI.html",
    "revision": "83fdcc074e65da73476f2b7738bbc147"
  },
  {
    "url": "blogs/music/2021/bluebird.html",
    "revision": "c80fa4236ea3481cf00f9d7a3a374be0"
  },
  {
    "url": "blogs/music/2021/chord.html",
    "revision": "514ac2d141e756146f219994540c9b9f"
  },
  {
    "url": "blogs/music/2021/MoonOnTheWater.html",
    "revision": "c394d5c81febf07214f54d3f52af222e"
  },
  {
    "url": "blogs/music/2021/shikinouta.html",
    "revision": "d70f3c0a89826169aa8de0dd2b6b0f21"
  },
  {
    "url": "blogs/website/2021/git.html",
    "revision": "51802f59218c54581041ade41b9051b2"
  },
  {
    "url": "blogs/website/2021/imgur.html",
    "revision": "1c46da17806b51618a3c54dfc4f9d0d2"
  },
  {
    "url": "blogs/website/2021/nginx.html",
    "revision": "9f61084e4ff862b7f91e88c2a2aa342f"
  },
  {
    "url": "blogs/website/2021/vextab.html",
    "revision": "8ad6379b639096ebe3b2eb055cbe98f9"
  },
  {
    "url": "blogs/website/2021/vue-cli3.html",
    "revision": "0b71b71b74790c18ba91c0c46bb44ec7"
  },
  {
    "url": "blogs/website/2021/vuepress.html",
    "revision": "c5c6a434f50d1c812c59887dedad6905"
  },
  {
    "url": "categories/Chatgpt/index.html",
    "revision": "359825cc07955c377ce07663ad7ff4d9"
  },
  {
    "url": "categories/Code/index.html",
    "revision": "c64dcd14a1b4acd529f4a7662fa16619"
  },
  {
    "url": "categories/css-doodle/index.html",
    "revision": "dbe8cf6765794a8e2607cb5ab8d16d9b"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "b78a6225294475f4857cc5970c57864d"
  },
  {
    "url": "categories/Design/index.html",
    "revision": "49e05a413c8497a5cd58adc9260c8003"
  },
  {
    "url": "categories/doc/index.html",
    "revision": "d555b64641ce95b72edf0fc25a339592"
  },
  {
    "url": "categories/index.html",
    "revision": "ee563a7dd4a20d12d2c14db9dd648c8d"
  },
  {
    "url": "categories/Music/index.html",
    "revision": "212ef1cf445d3a9f108830feffa874cb"
  },
  {
    "url": "categories/Website/index.html",
    "revision": "e5085950441a8c7c12535ef6dbe75757"
  },
  {
    "url": "docs/theme-reco/markdown.html",
    "revision": "cd94212bf7dcc09d7bcb8667ccc205c3"
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
    "revision": "ce77971a023795f00d48970d99a94638"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "0d4b526f7daebfacdd89442d0d7d0e0a"
  },
  {
    "url": "tag/Chatgpt/index.html",
    "revision": "ec6c201434049c2aa9cc842b3394e25f"
  },
  {
    "url": "tag/css-doodle/index.html",
    "revision": "60a5cadbb527d11ad3cc66424b4c406c"
  },
  {
    "url": "tag/css/index.html",
    "revision": "255a705d33ef71d778cb1ef20cc5c371"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "15e4625f7aafc04ce2c37d6410d07d12"
  },
  {
    "url": "tag/git/index.html",
    "revision": "59ad95912c59c8c38a23b4d0fdaf9bb2"
  },
  {
    "url": "tag/Guitar/index.html",
    "revision": "86103a5a4a7fcc5e1534055f2eb7660b"
  },
  {
    "url": "tag/Harmonica/index.html",
    "revision": "185775ed12f18b934aa395b4237a2395"
  },
  {
    "url": "tag/Icon/index.html",
    "revision": "6ee895ec8889493f5c02e03dab51c679"
  },
  {
    "url": "tag/ImagesWeserv/index.html",
    "revision": "3779f02b820db9ad6a5f95b96e58248f"
  },
  {
    "url": "tag/Imgur/index.html",
    "revision": "42e460cb6289bba312f7e350a277baa6"
  },
  {
    "url": "tag/index.html",
    "revision": "67bdacd0c2a3073613954ef7594a9b73"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "86ba59576126203d7c863c8c3cb0a666"
  },
  {
    "url": "tag/Lottie/index.html",
    "revision": "c9782831ffbcb8f4fccd0374b8908cbb"
  },
  {
    "url": "tag/Nginx/index.html",
    "revision": "b0214614663e804a2d03b7b1b85cc6bf"
  },
  {
    "url": "tag/scoped/index.html",
    "revision": "3b3c4973dd55bed638a6f5688d23f66a"
  },
  {
    "url": "tag/sketch/index.html",
    "revision": "fcd3b4f7f5e9d6acd839b93d19ea4c07"
  },
  {
    "url": "tag/test/index.html",
    "revision": "c9dd9507eb51b1b8a46630e0e6f0e496"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "16da6a2e74dcc4ea2cac3b013864a417"
  },
  {
    "url": "tag/unit/index.html",
    "revision": "e05abb5c3e67bd6793fa73b46d1f1d1f"
  },
  {
    "url": "tag/VexTab/index.html",
    "revision": "08eb569fe91f79e5aee1726529419422"
  },
  {
    "url": "tag/vue-cli3/index.html",
    "revision": "7cdc67ea673c7063bdd3dcae21c19a89"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "7097e606a4d08e623736c5cb60bfd5a8"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "d202e97af55885e9060c054231cc3c31"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "eaafef52bda141bac57d75658393cad7"
  },
  {
    "url": "timeline/index.html",
    "revision": "a28c405063262d8dd457a1e0fb31914d"
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
