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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7537cbf37692b8bf2d82743915d5cc54"
  },
  {
    "url": "articles/backEnd/test1.html",
    "revision": "c44216203b91efcddc736e21ccac759f"
  },
  {
    "url": "articles/backEnd/test2.html",
    "revision": "e4c4379af1d3640a103d9471c9cbd09f"
  },
  {
    "url": "articles/backEnd/test3.html",
    "revision": "1a727d9b26a56f58531c7587be6a0751"
  },
  {
    "url": "articles/frontEnd/test1.html",
    "revision": "b02ffffc8a50ea45f76d567323f59c2c"
  },
  {
    "url": "articles/frontEnd/test2.html",
    "revision": "b7e8f92c2cb83fbd5744d17007f7047c"
  },
  {
    "url": "articles/frontEnd/test3.html",
    "revision": "3d6e926c8b2bc5898d062f0149bd38d4"
  },
  {
    "url": "articles/frontEnd/test4.html",
    "revision": "a8fb00acb09d3da1ff476d1e3ee5d5b3"
  },
  {
    "url": "articles/index.html",
    "revision": "e823484202b635422999fc0b35ef9628"
  },
  {
    "url": "assets/css/0.styles.58941461.css",
    "revision": "1a33d4a9f118cdefeee78f5b2b4d6de1"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6e69b044.js",
    "revision": "9e7e0766c8eadf69545f781c0c0bbb37"
  },
  {
    "url": "assets/js/11.f72b6715.js",
    "revision": "b2a54a378b809843c90532dda6fd23bf"
  },
  {
    "url": "assets/js/12.01de607e.js",
    "revision": "a761a973b2355aeeb5c4be2dcc25366c"
  },
  {
    "url": "assets/js/13.3973beef.js",
    "revision": "303086ffb3643f5cfd05ee8a35bc59b3"
  },
  {
    "url": "assets/js/14.5d942a53.js",
    "revision": "3c3cf1cb979da1e316b45d63812fc383"
  },
  {
    "url": "assets/js/15.5b84e433.js",
    "revision": "1ce81b1697f0dcbb50d4d15872a79e90"
  },
  {
    "url": "assets/js/16.d8f96e5a.js",
    "revision": "5c62154fb4c16a65b83a045038cd36f9"
  },
  {
    "url": "assets/js/17.a4f45bc1.js",
    "revision": "a57e35a043bf1e8474e67780242f742e"
  },
  {
    "url": "assets/js/18.5e6aa544.js",
    "revision": "6d40074f2fe63bbffa49e93073db8dc5"
  },
  {
    "url": "assets/js/19.650ee551.js",
    "revision": "f635e6dd5eec8ca09e03652bd27ec72f"
  },
  {
    "url": "assets/js/2.7852de3a.js",
    "revision": "d1a4ff5c28a54262b87aba0c8ce7efa1"
  },
  {
    "url": "assets/js/20.763f42f9.js",
    "revision": "422079a38afbaa7d1d884e51c4db10d1"
  },
  {
    "url": "assets/js/3.f533d93e.js",
    "revision": "22a6cf7aacef2d680d1178364dbd5b61"
  },
  {
    "url": "assets/js/4.e22d678d.js",
    "revision": "9253d7b7b0fa83a95b834523729b92a8"
  },
  {
    "url": "assets/js/5.464ca4eb.js",
    "revision": "afc26595d73c1a587cef797c5dcd8416"
  },
  {
    "url": "assets/js/6.3eb84627.js",
    "revision": "55f08637dec94fc557b2e2bab04112fe"
  },
  {
    "url": "assets/js/7.0c439088.js",
    "revision": "050cb4c92af24d5bb2735d67daeb4bbf"
  },
  {
    "url": "assets/js/8.b490e3ca.js",
    "revision": "2f59d0b908951bc052de14d52980fa55"
  },
  {
    "url": "assets/js/9.2f2621ef.js",
    "revision": "4d90d65656de3bf90d4e54d8ee575301"
  },
  {
    "url": "assets/js/app.84dc4a1b.js",
    "revision": "141f30d1d96b55ce408a2aebb44fddb1"
  },
  {
    "url": "css/button.css",
    "revision": "ad02a7437cd8e794f9e3bbb1103002ea"
  },
  {
    "url": "css/index.css",
    "revision": "084a0e55f3177c811191c44bdf0ca2ca"
  },
  {
    "url": "favicon.ico.png",
    "revision": "0d2b35a89790f3c34b154fe1b4b2cc13"
  },
  {
    "url": "index.html",
    "revision": "56c24ed40deec07540b0a4914c822ce6"
  },
  {
    "url": "other/index.html",
    "revision": "55b59940630ab354fa60eb8a424d5b9d"
  },
  {
    "url": "testa/index.html",
    "revision": "448625417db8e16dc0be6d2b468052e4"
  },
  {
    "url": "testb/index.html",
    "revision": "1297bf3f33fe5886613f90985f578504"
  },
  {
    "url": "testc/index.html",
    "revision": "ffd6bd0acd9188ed16ca559c18e6d532"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
