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
    "revision": "9edeec74e92d32c593f4d413e9d14ef3"
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
    "url": "assets/js/15.65e6a4ef.js",
    "revision": "b0f61784cab03e4ff86f9badf47c5cb7"
  },
  {
    "url": "assets/js/16.af418df0.js",
    "revision": "bf83302e9594227d86ac9aff44bc71af"
  },
  {
    "url": "assets/js/17.39568c5b.js",
    "revision": "a3d6283f22797bc3ac133a9218d6e57d"
  },
  {
    "url": "assets/js/18.bdd9c2a8.js",
    "revision": "d2d69a08c33905a14e48bbee14386f88"
  },
  {
    "url": "assets/js/19.742bc011.js",
    "revision": "a948ee35d028ef731a59d463c1507ab3"
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
    "url": "assets/js/22.fe7e8b87.js",
    "revision": "094099ab41e0a052c7e92c9283aa89d7"
  },
  {
    "url": "assets/js/23.02909d64.js",
    "revision": "865f8d8451c0743c8c0c40e0df61cac9"
  },
  {
    "url": "assets/js/24.922a5f71.js",
    "revision": "f69d246bbe7b07878280c6e65f0e441d"
  },
  {
    "url": "assets/js/25.0f3b068b.js",
    "revision": "e8cc88431665843a9df36183a42956b5"
  },
  {
    "url": "assets/js/26.20c00955.js",
    "revision": "bc555db6f26578c101ac61466b1a11f3"
  },
  {
    "url": "assets/js/27.44fc89b6.js",
    "revision": "e2fa831d72dcec88c65aeb051c0297e4"
  },
  {
    "url": "assets/js/28.f0ca8057.js",
    "revision": "2e669acef48ed5fc776d2416da014125"
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
    "url": "assets/js/31.e9b10cff.js",
    "revision": "e95f09766f94972e509cd17c467dbdf1"
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
    "url": "assets/js/app.d3c022fc.js",
    "revision": "09410b871e2c86fa395443d7d693b40e"
  },
  {
    "url": "blogs/css/2021/CssDoodle1.html",
    "revision": "4d7be075c3b5400cac77dc96927818be"
  },
  {
    "url": "blogs/css/2021/CssDoodle2.html",
    "revision": "840f709c228b1ff91d72c1de7f5e4781"
  },
  {
    "url": "blogs/css/2021/scope.html",
    "revision": "632668e424c52c0967abd2bae85210f5"
  },
  {
    "url": "blogs/css/2022/glass.html",
    "revision": "a31ea7773a120c8e29fcd818a0654ab6"
  },
  {
    "url": "blogs/design/2021/FilledInVsOutline.html",
    "revision": "2ee1eccee30c249df4d2db10e45183c6"
  },
  {
    "url": "blogs/design/2021/lottie.html",
    "revision": "dc7e6dcc91f8f0998bc55de5b1754ca3"
  },
  {
    "url": "blogs/design/2021/ResolutionRatio.html",
    "revision": "356cd2c2630b14e57c5e61d2478dd15f"
  },
  {
    "url": "blogs/design/2021/SketchRenameIt.html",
    "revision": "1da142317b42bf8f536533e83db8f6c6"
  },
  {
    "url": "blogs/js/2021/async.html",
    "revision": "1b41da395af97978f7fbf74a06653b6f"
  },
  {
    "url": "blogs/js/2021/axios.html",
    "revision": "5c8d2b751d86e8627f017525e80aa993"
  },
  {
    "url": "blogs/js/2021/eventLoop.html",
    "revision": "a463276a9521dd60f169d441dd4aa5ec"
  },
  {
    "url": "blogs/js/2021/IdleDetector.html",
    "revision": "0bc4a44d9066827779cd2478dc78d0bc"
  },
  {
    "url": "blogs/js/2021/vue-class-component.html",
    "revision": "56838f121a1bea8094a1608babbc7d71"
  },
  {
    "url": "blogs/js/2021/vue-lazyload.html",
    "revision": "f1c61520da07b880fc3a7115beaf68e6"
  },
  {
    "url": "blogs/js/2021/vue-router.html",
    "revision": "c91f00b732cd9255f503259ac8bb794c"
  },
  {
    "url": "blogs/js/2021/vue3-ts-elplus.html",
    "revision": "b95ea722dc5a40c542707e6ea7d58aee"
  },
  {
    "url": "blogs/js/2023/openAI.html",
    "revision": "5fac0fb3f6ee53fd707742fb40d50cd7"
  },
  {
    "url": "blogs/music/2021/bluebird.html",
    "revision": "6c06a7d47123961e79e4712e65ae788e"
  },
  {
    "url": "blogs/music/2021/chord.html",
    "revision": "1d8b04f2e567fd00dda3be3094a41356"
  },
  {
    "url": "blogs/music/2021/MoonOnTheWater.html",
    "revision": "8411349520f1c51d51295dc47b04ede6"
  },
  {
    "url": "blogs/music/2021/shikinouta.html",
    "revision": "e4ae29b9170b54004e243e6f818d6192"
  },
  {
    "url": "blogs/website/2021/git.html",
    "revision": "d511685c7168cf75e6b35d8a024fcc22"
  },
  {
    "url": "blogs/website/2021/imgur.html",
    "revision": "16530d65c5556bd10cf605cfa481623d"
  },
  {
    "url": "blogs/website/2021/nginx.html",
    "revision": "c29eb8099c925fb76d78d3f165364609"
  },
  {
    "url": "blogs/website/2021/vextab.html",
    "revision": "27afc1a68f44059af4e3d16a23f42248"
  },
  {
    "url": "blogs/website/2021/vue-cli3.html",
    "revision": "290e68784c677a2a9ea543f1c903242f"
  },
  {
    "url": "blogs/website/2021/vuepress.html",
    "revision": "196bedc6f441cbc39a8b757417a28f95"
  },
  {
    "url": "categories/Chatgpt/index.html",
    "revision": "07fec0f8ef6cf1dd1d8b1cbba356c35f"
  },
  {
    "url": "categories/Code/index.html",
    "revision": "4aaced35c98c02d5c1877d1d229975c3"
  },
  {
    "url": "categories/css-doodle/index.html",
    "revision": "ee6274244e4820cda1be2f04cf9a3540"
  },
  {
    "url": "categories/Css/index.html",
    "revision": "be27e94cbdb1f741478db9b2775cb2b9"
  },
  {
    "url": "categories/Design/index.html",
    "revision": "eb39ef8544f31d031f0c57dbc1d0146d"
  },
  {
    "url": "categories/doc/index.html",
    "revision": "8ab50a1b51d0578e538be7e059bf27fd"
  },
  {
    "url": "categories/index.html",
    "revision": "b28dfe718d89d4b6061fb22df743f631"
  },
  {
    "url": "categories/Music/index.html",
    "revision": "34a6a3c4bb7ef76c53391d0842f446fb"
  },
  {
    "url": "categories/Website/index.html",
    "revision": "45c8439460a8233e24968da12181a246"
  },
  {
    "url": "docs/theme-reco/markdown.html",
    "revision": "32f245f1099c87352345d28bb3b19a67"
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
    "revision": "33d04af88e49d9c19f6d0b518597907e"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "0d4b526f7daebfacdd89442d0d7d0e0a"
  },
  {
    "url": "tag/Chatgpt/index.html",
    "revision": "5c5a7984f716efa8e328c27b9d0b496f"
  },
  {
    "url": "tag/css-doodle/index.html",
    "revision": "c7ebf264217503d19ea146da136a9738"
  },
  {
    "url": "tag/css/index.html",
    "revision": "1f787b2eb9f0b5bbdb69ed6c14428d32"
  },
  {
    "url": "tag/element-plus/index.html",
    "revision": "5bd7ec6a7e16b0789b1049faef6fd9e9"
  },
  {
    "url": "tag/git/index.html",
    "revision": "8b3da6afee160178c223afa320aac654"
  },
  {
    "url": "tag/Guitar/index.html",
    "revision": "5af406345974baf8f26f4a8f3395c45b"
  },
  {
    "url": "tag/Harmonica/index.html",
    "revision": "65e361aea64b7b16debc4f04d5770f55"
  },
  {
    "url": "tag/Icon/index.html",
    "revision": "5917f1d344d3da2055952b21aedb2b91"
  },
  {
    "url": "tag/ImagesWeserv/index.html",
    "revision": "11c37119202c53604f88312a52913263"
  },
  {
    "url": "tag/Imgur/index.html",
    "revision": "16326bda80f27f83e3955bb79dd620fd"
  },
  {
    "url": "tag/index.html",
    "revision": "07727415326ad84686f5876678182f5c"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "3443e8819c978bfc9bde90bd519196cd"
  },
  {
    "url": "tag/Lottie/index.html",
    "revision": "f073561ff8dea21309df466156369c79"
  },
  {
    "url": "tag/Nginx/index.html",
    "revision": "82ff4aed159416abbb39e93565485c85"
  },
  {
    "url": "tag/scoped/index.html",
    "revision": "c48752e514e17aab72ec9fbd38fd06f2"
  },
  {
    "url": "tag/sketch/index.html",
    "revision": "f25f2e09b78b3c04fd33fb256b78713c"
  },
  {
    "url": "tag/test/index.html",
    "revision": "348bf3f60ee30cdf9af2c5e69227d5fe"
  },
  {
    "url": "tag/typescript/index.html",
    "revision": "8ed879fe3f4c2f7ee44977309cb896a1"
  },
  {
    "url": "tag/unit/index.html",
    "revision": "9535201d2a38c3afe54dddfc770a6ae1"
  },
  {
    "url": "tag/VexTab/index.html",
    "revision": "810ec858ab0ae700dcddf53f225d127d"
  },
  {
    "url": "tag/vue-cli3/index.html",
    "revision": "2f63a51a804742d0b6ec16ace8285a45"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "afcba18ca553eabde394ccb1b2607163"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "3f7f9e2f7532657d8a84eb7ffd6a92ee"
  },
  {
    "url": "tag/Vuepress/index.html",
    "revision": "07cbc3940acb286b70ed8adec6823735"
  },
  {
    "url": "timeline/index.html",
    "revision": "61fe483b21d0a04ce14578f029683da9"
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
