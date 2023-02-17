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
    "revision": "0a275f3d6b11f2f4d74ce48cfed00869"
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
    "url": "assets/js/13.f8918dce.js",
    "revision": "f1ac21b6e16f89fb78879c2f5c20d973"
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
    "url": "assets/js/16.fa94043a.js",
    "revision": "b78f7f86c0baf7dded674258eba88bbb"
  },
  {
    "url": "assets/js/17.39568c5b.js",
    "revision": "a3d6283f22797bc3ac133a9218d6e57d"
  },
  {
    "url": "assets/js/18.f203cc46.js",
    "revision": "dc6981937eb1a4975c232e11e32acb5a"
  },
  {
    "url": "assets/js/19.66a6d354.js",
    "revision": "aac2b8f2a908cf679b1406a7fdb7a175"
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
    "url": "assets/js/24.3f55b7e6.js",
    "revision": "e40e722d891c1442d8e61a961803fc1a"
  },
  {
    "url": "assets/js/25.0f3b068b.js",
    "revision": "e8cc88431665843a9df36183a42956b5"
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
    "url": "assets/js/31.8c3f5897.js",
    "revision": "ee26de543a4129996950c25d6aec503c"
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
    "url": "assets/js/app.5fb51f91.js",
    "revision": "f61dd5f13d8524663442aae9c4051eba"
  },
  {
    "url": "blogs/css/2021/CssDoodle1.html",
    "revision": "0b7f4fa2dc5ee7f385bb1274c5013664"
  },
  {
    "url": "blogs/css/2021/CssDoodle2.html",
    "revision": "de98df9abb7333df7c4123d459173a22"
  },
  {
    "url": "blogs/css/2021/scope.html",
    "revision": "fdb28231b08c16f44d22634574182f85"
  },
  {
    "url": "blogs/css/2022/glass.html",
    "revision": "d3ab5add075a91ff4627f98de991cebd"
  },
  {
    "url": "blogs/design/2021/FilledInVsOutline.html",
    "revision": "bf3397db47c5baa85c271dc945dd524c"
  },
  {
    "url": "blogs/design/2021/lottie.html",
    "revision": "5d67966aa74d9f8405f84f51ee23045b"
  },
  {
    "url": "blogs/design/2021/ResolutionRatio.html",
    "revision": "2fd1e85df293f6f5c9d6dc8cda35c280"
  },
  {
    "url": "blogs/design/2021/SketchRenameIt.html",
    "revision": "d3eeba56ecb886a4bc680ba51b5af460"
  },
  {
    "url": "blogs/js/2021/async.html",
    "revision": "6898bef08adcb773eafd6ad4a08ed620"
  },
  {
    "url": "blogs/js/2021/axios.html",
    "revision": "8cc250f14e8486e9c903df081b6144fd"
  },
  {
    "url": "blogs/js/2021/eventLoop.html",
    "revision": "7760240fb5f2eb1a4bdd83529283bc26"
  },
  {
    "url": "blogs/js/2021/IdleDetector.html",
    "revision": "66f1996388f8645b88eacd41fbe7313f"
  },
  {
    "url": "blogs/js/2021/vue-class-component.html",
    "revision": "a543923010dd7e5555080840a3446527"
  },
  {
    "url": "blogs/js/2021/vue-lazyload.html",
    "revision": "4ab1a230c545608167b3b82ce576eb32"
  },
  {
    "url": "blogs/js/2021/vue-router.html",
    "revision": "1602e6855e6101c6a8756c81bcb0fe7a"
  },
  {
    "url": "blogs/js/2021/vue3-ts-elplus.html",
    "revision": "839decda386b3332ec8d2e16165c246e"
  },
  {
    "url": "blogs/js/2023/openAI.html",
    "revision": "5819d1d57420d78f2559a713fabe8aa9"
  },
  {
    "url": "blogs/music/2021/bluebird.html",
    "revision": "084cc9931212fc8e9a506b2649394361"
  },
  {
    "url": "blogs/music/2021/chord.html",
    "revision": "948617c51a4420bea9d9553cfe4807f7"
  },
  {
    "url": "blogs/music/2021/MoonOnTheWater.html",
    "revision": "02bcef36c1a98f2db7aada2e61baa0c3"
  },
  {
    "url": "blogs/music/2021/shikinouta.html",
    "revision": "a756cf89a3704a0b3a95518105afc23b"
  },
  {
    "url": "blogs/website/2021/git.html",
    "revision": "ca02cf9066b2b9d059266f2dfbe1d9a4"
  },
  {
    "url": "blogs/website/2021/imgur.html",
    "revision": "b483df1145cac8e6fe98c9fb6bd5058f"
  },
  {
    "url": "blogs/website/2021/nginx.html",
    "revision": "ea68a0c32a01f2eaecacebcaf0e4e467"
  },
  {
    "url": "blogs/website/2021/vextab.html",
    "revision": "de92ce5277a17180c11204082eaf4e2f"
  },
  {
    "url": "blogs/website/2021/vue-cli3.html",
    "revision": "46b2a6df9851aea8606a391b761ac300"
  },
  {
    "url": "blogs/website/2021/vuepress.html",
    "revision": "eb61522875d743a035333961313da3fb"
  },
  {
    "url": "categories/Chatgpt/index.html",
    "revision": "92aad14b4837a7899de69f3e54f5fbfe"
  },
  {
    "url": "categories/Code/index.html",
    "revision": "7d663363491e6a1071cdd319055d56fb"
  },
  {
    "url": "categories/css-doodle/index.html",
    "revision": "77f1434ac5118b68ea46f2953865de6e"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "47a624bfd8eef7a87d6442ff2199b0b1"
  },
  {
    "url": "categories/Design/index.html",
    "revision": "d59b94d6476a7ad0d916286b4488ad24"
  },
  {
    "url": "categories/doc/index.html",
    "revision": "efec13f6e87e75b991bffbcf1199b85a"
  },
  {
    "url": "categories/index.html",
    "revision": "70867e776f55c5d379e14dcd37393019"
  },
  {
    "url": "categories/Music/index.html",
    "revision": "0082c9c801b354bb2124ab20a10eddf5"
  },
  {
    "url": "categories/Website/index.html",
    "revision": "5d0049fbca11246dd22e3c889528d0ec"
  },
  {
    "url": "docs/theme-reco/markdown.html",
    "revision": "09a248ddf6b149307a67828d09cb68d6"
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
    "revision": "5763fe94c8f6a19d34db9324eb9a13b7"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "0d4b526f7daebfacdd89442d0d7d0e0a"
  },
  {
    "url": "tag/Chatgpt/index.html",
    "revision": "244835567bcd70c183f811b8e92f51fa"
  },
  {
    "url": "tag/css-doodle/index.html",
    "revision": "d1dfb0b88fb8485f741efcf1c18a04da"
  },
  {
    "url": "tag/css/index.html",
    "revision": "63080e2083459b594783f05a403c1331"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "1ec6f684004ec986927b47c82627e8b6"
  },
  {
    "url": "tag/git/index.html",
    "revision": "4126080c7638c1a7f1ac459d16c1aa90"
  },
  {
    "url": "tag/Guitar/index.html",
    "revision": "870e483223196cc7512849bfb5d5c703"
  },
  {
    "url": "tag/Harmonica/index.html",
    "revision": "f7a5ca7607ff140651dd853dc153355b"
  },
  {
    "url": "tag/Icon/index.html",
    "revision": "ac215d0583ac1e1300c4a77d25566eb5"
  },
  {
    "url": "tag/ImagesWeserv/index.html",
    "revision": "b7622042638a124dbb1b5b0c65959b8c"
  },
  {
    "url": "tag/Imgur/index.html",
    "revision": "97f4807eddb53e4068bf1303f0771f08"
  },
  {
    "url": "tag/index.html",
    "revision": "8c97023d43c7d3691f4f3bd97c0d111e"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "145a1d3c8cf319a7d562b17bd7694e58"
  },
  {
    "url": "tag/Lottie/index.html",
    "revision": "b26a20234bd22f8fa5aae628a441f442"
  },
  {
    "url": "tag/Nginx/index.html",
    "revision": "864998eef45382452003f925e2c0c8b1"
  },
  {
    "url": "tag/scoped/index.html",
    "revision": "85be7fcb264c6cf9e861ecf064a5389e"
  },
  {
    "url": "tag/sketch/index.html",
    "revision": "de74347869652e89f69d645d9d781b77"
  },
  {
    "url": "tag/test/index.html",
    "revision": "01f0d80625f03d6fdd7d3f28c644db76"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "55bb62a0063dd8e4d64bf867a54f78cb"
  },
  {
    "url": "tag/unit/index.html",
    "revision": "6c9ab398ddf9c8017783433fb65a6a18"
  },
  {
    "url": "tag/VexTab/index.html",
    "revision": "8f1ed7dd076c164b604413d3a94424c8"
  },
  {
    "url": "tag/vue-cli3/index.html",
    "revision": "a385fd6234a70fa299f2d6bfe5705d2a"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "16f761497abf5f557854e374c431c0f5"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "e4f05112021d0af49facc97035ff44a8"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "1b0d507d148251c5225d2d502649c4f1"
  },
  {
    "url": "timeline/index.html",
    "revision": "4ee82c9cfa66d3e691562f9c80c44351"
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
