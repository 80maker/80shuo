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
    "revision": "4d7f86cbf1c0b52eeb4dfd2b18588e90"
  },
  {
    "url": "archives/index.html",
    "revision": "b1b4a304ee5a0be78809260cdd04da3f"
  },
  {
    "url": "assets/css/0.styles.a1fa0b1a.css",
    "revision": "13a9f01c719f5fd4e751e98a1b4a4139"
  },
  {
    "url": "assets/fonts/bbr.f32a0cd1.woff2",
    "revision": "f32a0cd13ac49e36df74467ecd2dceff"
  },
  {
    "url": "assets/fonts/Icon.4187678c.woff",
    "revision": "4187678c70c491cc0fbd880bfd24782a"
  },
  {
    "url": "assets/fonts/ir.1ac22b3a.woff2",
    "revision": "1ac22b3a85c6d7164927d192654ab170"
  },
  {
    "url": "assets/fonts/jsr.8ffec542.woff2",
    "revision": "8ffec5420781e499563421c2fbb4f84a"
  },
  {
    "url": "assets/fonts/lobster.fe012fb7.woff2",
    "revision": "fe012fb7b22e5776c4a2e91889068974"
  },
  {
    "url": "assets/fonts/ml.0a7c6df0.woff2",
    "revision": "0a7c6df06e85d978d096d4d18fd8d43d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.1044390d.js",
    "revision": "ece576c7679f823e9fe2deea724df06b"
  },
  {
    "url": "assets/js/10.43a01484.js",
    "revision": "f77fec5fa2883edfd5fcea70899bc178"
  },
  {
    "url": "assets/js/11.3e60987f.js",
    "revision": "5753ca72324eb872bc2e1639ab35b935"
  },
  {
    "url": "assets/js/12.2ce7d285.js",
    "revision": "7944734b61e78a7f502746120f7f7739"
  },
  {
    "url": "assets/js/13.597855a9.js",
    "revision": "9a7c7c7f2c23bbbd9abf0d1761f2a856"
  },
  {
    "url": "assets/js/14.83c96ee3.js",
    "revision": "f3e1e4ce2aba883a2c32d24e6f7ede92"
  },
  {
    "url": "assets/js/15.4da7ffe9.js",
    "revision": "9b4ac6131b1785708fb71b3d12429379"
  },
  {
    "url": "assets/js/16.d65f5961.js",
    "revision": "f0559fa6b48bcb08d880e5a97a36bd06"
  },
  {
    "url": "assets/js/17.426c90fe.js",
    "revision": "df79332f3ee97a3847ef8012e9523c8c"
  },
  {
    "url": "assets/js/18.9dc3bbf8.js",
    "revision": "d4ce5f171a5b7e0b628b5b72d4a9e23c"
  },
  {
    "url": "assets/js/19.49950bb4.js",
    "revision": "3ff4f42737b4c01f88f9f6ea1eb9f07a"
  },
  {
    "url": "assets/js/20.2bf28248.js",
    "revision": "140735ea4262a07dcc00c6568c7d5d63"
  },
  {
    "url": "assets/js/21.e418f76f.js",
    "revision": "b689f5e6b20b0bc8fc8adc89098fa20f"
  },
  {
    "url": "assets/js/22.840b8a6f.js",
    "revision": "e38ef0acca85c75f5c4eb88737b5c133"
  },
  {
    "url": "assets/js/23.978b470c.js",
    "revision": "8f4832e4c96ead9814bbd78f2b40b7e1"
  },
  {
    "url": "assets/js/24.4e348db2.js",
    "revision": "521844160f1e1ec393d5ba236a24a285"
  },
  {
    "url": "assets/js/25.45dabb04.js",
    "revision": "28071d6c24d1961bb943b05c42176e2e"
  },
  {
    "url": "assets/js/26.1d36c4f4.js",
    "revision": "304c32471b6774468033b244015cb49e"
  },
  {
    "url": "assets/js/27.dce1f73e.js",
    "revision": "918e2169d46fb2ce33a2e8536e3e6ff2"
  },
  {
    "url": "assets/js/28.d5dc9f38.js",
    "revision": "e7ac0d9fc5baf4ded98ee1ad4c1f236a"
  },
  {
    "url": "assets/js/29.c59267a9.js",
    "revision": "53e11efcc3085f7f3fbf938afcbdf28b"
  },
  {
    "url": "assets/js/30.202667eb.js",
    "revision": "4e5298f6788d63df7ae5f7b0c866299a"
  },
  {
    "url": "assets/js/31.ea9617f5.js",
    "revision": "ce22eaea88cf9e010a30bbf0d5b47421"
  },
  {
    "url": "assets/js/32.5e48a8bf.js",
    "revision": "118caddffa219226626d994a51ddf8f5"
  },
  {
    "url": "assets/js/33.f8fc6c82.js",
    "revision": "e0ba9c8eb2c26cb391750d470a9b0427"
  },
  {
    "url": "assets/js/34.a7b6f252.js",
    "revision": "6a586d6d033c2f3df6bf7579b4d52b9a"
  },
  {
    "url": "assets/js/35.1ba0de2e.js",
    "revision": "c0325bb6bf3143700ddcf19f53c14785"
  },
  {
    "url": "assets/js/36.459f657a.js",
    "revision": "c11255ce033168f8d0c11ae80bd9ccb8"
  },
  {
    "url": "assets/js/37.e61528d3.js",
    "revision": "f581e27da12fad74310692dc49f12ab4"
  },
  {
    "url": "assets/js/38.fb52834e.js",
    "revision": "ddaf9ec71931bf70dd40a983186cc7cf"
  },
  {
    "url": "assets/js/39.7177c65f.js",
    "revision": "1ac40e014e3df429edbe2c5b3483a98a"
  },
  {
    "url": "assets/js/40.24013266.js",
    "revision": "1d9cc91522dc70c7f30017a3896974f9"
  },
  {
    "url": "assets/js/41.a7fb572f.js",
    "revision": "9f3479a44202f7c0ff2b3b6388e28ef8"
  },
  {
    "url": "assets/js/42.70426922.js",
    "revision": "ccc7bbb79acc67fd524c5c4ec0352289"
  },
  {
    "url": "assets/js/43.fd17ce93.js",
    "revision": "841da39eeb7acbf4de7e118bdbabac1f"
  },
  {
    "url": "assets/js/44.5eb0083f.js",
    "revision": "4c0fd95ab4b63e82fa651fb1812dc42c"
  },
  {
    "url": "assets/js/45.75c923f9.js",
    "revision": "83cd0a8254c2cef9e741ed7fde1a232a"
  },
  {
    "url": "assets/js/46.5a90eec0.js",
    "revision": "db6cb4a5d62904799507e12d89482a55"
  },
  {
    "url": "assets/js/47.2817d675.js",
    "revision": "1a0543d1b3078f53bb8323a767e41fc7"
  },
  {
    "url": "assets/js/48.4c24d35f.js",
    "revision": "123f31aa2fc36666e3937e38ee443323"
  },
  {
    "url": "assets/js/49.82698823.js",
    "revision": "8a21957edfe45a35753c6502a2d5f987"
  },
  {
    "url": "assets/js/5.ad579665.js",
    "revision": "61873b4c8aa4d4d1eb5b9be2d13c14a1"
  },
  {
    "url": "assets/js/50.35a32563.js",
    "revision": "5f393abb9b97fa995dcc006a51bb382a"
  },
  {
    "url": "assets/js/51.c31a904b.js",
    "revision": "111fa333105638a3228b5c19b0ebe8cb"
  },
  {
    "url": "assets/js/52.d6d80de3.js",
    "revision": "a9b00291f469304b50a129fa57aad0a4"
  },
  {
    "url": "assets/js/53.de22e912.js",
    "revision": "fd64b8a82f5872a51fed017813c3d7b7"
  },
  {
    "url": "assets/js/54.9fcc884e.js",
    "revision": "e1ecaa5a07270df9af03fe357fb799e7"
  },
  {
    "url": "assets/js/55.c876f042.js",
    "revision": "b492c191e2b282d4d63712ca2782e82f"
  },
  {
    "url": "assets/js/56.88c5965c.js",
    "revision": "3649efdbe445fa24ccdd3d2b270210e6"
  },
  {
    "url": "assets/js/57.cec2928a.js",
    "revision": "ccd5ac5af5233ee6924994f443cf77c0"
  },
  {
    "url": "assets/js/58.8cef52d0.js",
    "revision": "f62908908381836d5835f7ef451b3870"
  },
  {
    "url": "assets/js/59.c21a6e7e.js",
    "revision": "c79587d1aad27ede28f6482e73900c24"
  },
  {
    "url": "assets/js/6.2877e7c8.js",
    "revision": "38b8d9d07bcbf0be688fc7ae7d7477af"
  },
  {
    "url": "assets/js/60.927a13f6.js",
    "revision": "d621102bef6de9933b8a27ee00d04432"
  },
  {
    "url": "assets/js/61.29ce68dc.js",
    "revision": "2cd6c4a310011e63985e0aa227096b89"
  },
  {
    "url": "assets/js/62.917a6929.js",
    "revision": "4f1f7a184ea24f93967b6b61cef00619"
  },
  {
    "url": "assets/js/7.900c1040.js",
    "revision": "7fe06983c31476c2553ebd909391d028"
  },
  {
    "url": "assets/js/8.ea92c575.js",
    "revision": "321b0b5664cd4b4a1c6267b0a2bb51aa"
  },
  {
    "url": "assets/js/9.75633077.js",
    "revision": "7823f3a8d5df128361becd5dc048c725"
  },
  {
    "url": "assets/js/app.8b5e5618.js",
    "revision": "2d48d1bbd90bcceff7e8bb903f79ee8e"
  },
  {
    "url": "assets/js/vendors~flowchart.d0e00c1a.js",
    "revision": "73fefa29555fdc2753d1f68bdf04b8be"
  },
  {
    "url": "assets/js/vuejs-paginate.07ce0065.js",
    "revision": "0b4feb9fe8ded1355d35ecb5945490b2"
  },
  {
    "url": "categories/frontend/index.html",
    "revision": "df49f4f3b76a48ecac51850edff8b376"
  },
  {
    "url": "categories/index.html",
    "revision": "3982a81e9a0017d8c7d19a4cc35a6f07"
  },
  {
    "url": "categories/maker/index.html",
    "revision": "7b95900cf4fc11e519eaee264b1b618b"
  },
  {
    "url": "categories/shell/index.html",
    "revision": "d1d3bc3e916b372a2337451f2f98cd3d"
  },
  {
    "url": "categories/theme/index.html",
    "revision": "93febd44a8e4444b56ff90ef62d90036"
  },
  {
    "url": "categories/theme/page/2/index.html",
    "revision": "6e66ad969439c6fc980e28b7d8ed7ecd"
  },
  {
    "url": "friend-links/index.html",
    "revision": "c3d6ad383d0f88a5646f486aa51cafd0"
  },
  {
    "url": "images/alipay.png",
    "revision": "41dda7864b2819e2ca0e606e879af4ba"
  },
  {
    "url": "images/android-chrome-192x192.png",
    "revision": "92fa96539abd30751ab44a9fc3ae4481"
  },
  {
    "url": "images/android-chrome-512x512.png",
    "revision": "5b11bed1bd21347b0cfc73d039ffe723"
  },
  {
    "url": "images/default-picture.svg",
    "revision": "e92b7a7ccd3b8dd96dc7c8bd89062a69"
  },
  {
    "url": "images/friend.jpg",
    "revision": "a6033973dfa0b9908d0c8e7aba15f90a"
  },
  {
    "url": "images/learning/archive.png",
    "revision": "20f497c20c55c8a23d0eaa6a5bf579b5"
  },
  {
    "url": "images/learning/category-item.png",
    "revision": "05081a0bc0a35014e9dfb95e672f2426"
  },
  {
    "url": "images/learning/category.png",
    "revision": "7bb95b3f28461c016444ea4307448024"
  },
  {
    "url": "images/learning/dev-tools.png",
    "revision": "9d4518ddfa4916c453e8526f499ae7c9"
  },
  {
    "url": "images/learning/footerbar.png",
    "revision": "1bd7ed5098df1810e9e0f5630d60ff0d"
  },
  {
    "url": "images/learning/home-article-list.png",
    "revision": "234050cc3f041e4813f53b12365dcc7a"
  },
  {
    "url": "images/learning/home-pagination.png",
    "revision": "99310cd47be787c88ac6aa7f4a4b450c"
  },
  {
    "url": "images/learning/home.png",
    "revision": "f7221e68504f8c3a559de0cba40ffc1d"
  },
  {
    "url": "images/learning/layout.svg",
    "revision": "fe137b263a285e9d8f6e39a1d5d72c52"
  },
  {
    "url": "images/learning/navbar.png",
    "revision": "7cbfa3e989560bdd898535efc5c72506"
  },
  {
    "url": "images/learning/post.png",
    "revision": "c09a4b7bc49fc8273938ec01e26632ff"
  },
  {
    "url": "images/learning/subnav.png",
    "revision": "767713e64422b2e2a4a396141f97d9fe"
  },
  {
    "url": "images/learning/tag-item.png",
    "revision": "79c30ce52040a134e4da346cba0b29bb"
  },
  {
    "url": "images/learning/tag.png",
    "revision": "4d7bf9dc28656f470af69f5aced24183"
  },
  {
    "url": "images/maker-logo.svg",
    "revision": "75a59ad23ebbca666c5cc6b381d43e35"
  },
  {
    "url": "images/screenshot-1.jpg",
    "revision": "ec6c9fed87a9be38066088f3ac462367"
  },
  {
    "url": "images/screenshot-2.jpg",
    "revision": "12f20034a67e1d4c81e37fa7f2c5366d"
  },
  {
    "url": "images/screenshot-3.jpg",
    "revision": "16781ad6095579e95a05dd4d2e61115d"
  },
  {
    "url": "images/theme-gallery/2zh.jpg",
    "revision": "0cec464ff07d437dce7732903be162ff"
  },
  {
    "url": "images/theme-gallery/blog.png",
    "revision": "230028dcd97b40aa8c844ba8fea12d81"
  },
  {
    "url": "images/theme-gallery/book.jpg",
    "revision": "f115354d08ca88416933f9275d70b69b"
  },
  {
    "url": "images/theme-gallery/casper.jpg",
    "revision": "556d488f5f6981d11d918292aafc4103"
  },
  {
    "url": "images/theme-gallery/gungnir.jpg",
    "revision": "a836ae61ae5178f679b5db2f373d6fad"
  },
  {
    "url": "images/theme-gallery/indigo-material.jpg",
    "revision": "00232bed062176df46af154373b87fe7"
  },
  {
    "url": "images/theme-gallery/meteorlxy.png",
    "revision": "82093cbcd0c13c485b674b08f410d5dd"
  },
  {
    "url": "images/theme-gallery/mini.png",
    "revision": "70ab0609553d3a817c90e1690a61d19b"
  },
  {
    "url": "images/theme-gallery/succinct.jpg",
    "revision": "1bf82f107315bbcddded5fbee9a5fd26"
  },
  {
    "url": "images/theme-gallery/vpx.png",
    "revision": "e505f386e87aae67976974a43a49d4f2"
  },
  {
    "url": "images/theme-gallery/yur.jpg",
    "revision": "6060546f56a1bb2230b363fff203112b"
  },
  {
    "url": "images/theme-gallery/yuu.png",
    "revision": "b498dbcc2d25f00e40167dda51bc29b9"
  },
  {
    "url": "images/wechat.png",
    "revision": "85e5786ba2b419624dd1115cacb1c2c8"
  },
  {
    "url": "index.html",
    "revision": "011e393c43eb8d9e946dffafb078b551"
  },
  {
    "url": "logo.jpg",
    "revision": "70de14ec2051812fe81872c5bd7ca1a0"
  },
  {
    "url": "page/2/index.html",
    "revision": "45c064f2d9ad66f7f4d7cfc1b4dd3e76"
  },
  {
    "url": "page/3/index.html",
    "revision": "c8a3cddc774ced76eedad0f18b593996"
  },
  {
    "url": "post/2020/11/26/md5.html",
    "revision": "d4e4786b9e35e5face8bcbef7f86f8f8"
  },
  {
    "url": "post/2020/12/23/maker.html",
    "revision": "447170636ef94452e4dc623c3fdea37d"
  },
  {
    "url": "post/2020/12/26/theme-learning-0.html",
    "revision": "8d9d189c40cba174f2acab6240c504f8"
  },
  {
    "url": "post/2021/01/01/theme-learning-concept.html",
    "revision": "3f67f9d3e4677e449266f2c2482cd280"
  },
  {
    "url": "post/2021/01/12/theme-showcase.html",
    "revision": "7df6e87bae8690b2bb60337e0e882c66"
  },
  {
    "url": "post/2021/01/22/maker-icon.html",
    "revision": "f40a5a9af1911e003d25675e8331af66"
  },
  {
    "url": "post/2021/01/22/shell-tree.html",
    "revision": "52e6bdd78bd570d247377e8a3f07e654"
  },
  {
    "url": "post/2021/01/23/maker-basic.html",
    "revision": "fda2f31e4bf6e929a3ae989a62554858"
  },
  {
    "url": "post/2021/01/25/maker-page.html",
    "revision": "649e7dc174479fa93d51461088cda491"
  },
  {
    "url": "post/2021/02/06/theme-submit.html",
    "revision": "ace5810abcfd65b36e531255390798a2"
  },
  {
    "url": "post/2021/02/23/theme-learning-guide.html",
    "revision": "4985524d6fc01b309a110d225feef9c1"
  },
  {
    "url": "post/2021/02/24/theme-learning-directory.html",
    "revision": "d37fc81942992b9d6c795c7aa995dfdb"
  },
  {
    "url": "post/2021/02/25/theme-learning-template.html",
    "revision": "e3860c2702956936047a630db213ae32"
  },
  {
    "url": "post/2021/02/26/theme-learning-home.html",
    "revision": "e6fce84f13dccbab4703abee5464edc5"
  },
  {
    "url": "post/2021/03/02/theme-learning-post.html",
    "revision": "6541a1a2f68716d01eb775c11f65b7a1"
  },
  {
    "url": "post/2021/03/03/theme-learning-nav.html",
    "revision": "15d5b8e8bfe5d381b2fd7d12ff6ab959"
  },
  {
    "url": "post/2021/03/11/theme-learning-subnav.html",
    "revision": "e9bcafbe3ac57919b7cf0b3add7f8758"
  },
  {
    "url": "post/2021/03/17/theme-learning-footerbar.html",
    "revision": "7ecee24da69e37d2c2c9f1f793209f52"
  },
  {
    "url": "post/2021/03/30/theme-learning-archive.html",
    "revision": "4124aaadae5f469445ad3850f3c2210f"
  },
  {
    "url": "post/2021/03/31/theme-learning-category.html",
    "revision": "4c04b36fd665b277ea0a3ced43b441d8"
  },
  {
    "url": "post/2021/04/06/theme-learning-tag.html",
    "revision": "e58d8721a78447df4d0a9fd51e44167b"
  },
  {
    "url": "scripts/hljs.js",
    "revision": "e91d01e086ddb1a6b051306f896201fb"
  },
  {
    "url": "styles/hljs.css",
    "revision": "9e770fd949a81db93d75dc05b31a3fec"
  },
  {
    "url": "tags/index.html",
    "revision": "8d488affcf4490696f280066ed308048"
  },
  {
    "url": "tags/maker/index.html",
    "revision": "d475c64dad3c8e1318f0a8157b32f294"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "2a4f2a5824c2ddd7c01972eef31a3775"
  },
  {
    "url": "tags/VuePress/page/2/index.html",
    "revision": "59e2ba664a55c2979f0d82d0126555e3"
  },
  {
    "url": "vuepress-theme/antdocs.html",
    "revision": "e4c9d310d8eebde0a2429a8d0bea8ee9"
  },
  {
    "url": "vuepress-theme/api.html",
    "revision": "640c8bec822b0d08b16ccbb58cc33536"
  },
  {
    "url": "vuepress-theme/blog.html",
    "revision": "891268e8a8045e5e102ff05d228e1d94"
  },
  {
    "url": "vuepress-theme/book.html",
    "revision": "2ba954250ef2b50f2bf2817770fe1818"
  },
  {
    "url": "vuepress-theme/casper.html",
    "revision": "e751e056c1febfe617b49f1a269b1814"
  },
  {
    "url": "vuepress-theme/gungnir.html",
    "revision": "894b13bf816b96d3f1a284a7163b6523"
  },
  {
    "url": "vuepress-theme/hope.html",
    "revision": "25c195ff777158dfcb9a7032eaa7c7d6"
  },
  {
    "url": "vuepress-theme/index.html",
    "revision": "96905214d2286a4011c70d8405a6ad6b"
  },
  {
    "url": "vuepress-theme/indigo-material.html",
    "revision": "f4ec732ba89c350c3ddb8a849725f8f6"
  },
  {
    "url": "vuepress-theme/maker.html",
    "revision": "f705a0ac7fc87208e1748801abda2343"
  },
  {
    "url": "vuepress-theme/mediumish.html",
    "revision": "f2ad287a57ae8d534b8cebcfdf0e6460"
  },
  {
    "url": "vuepress-theme/meteorlxy.html",
    "revision": "18bedeaec650bbb9abfb0a50b847a769"
  },
  {
    "url": "vuepress-theme/mini.html",
    "revision": "c7e613fecbaad5058c3999a2d34de7a5"
  },
  {
    "url": "vuepress-theme/modern-blog.html",
    "revision": "b8fcb36085eab14eae1bda57830e2a05"
  },
  {
    "url": "vuepress-theme/onen.html",
    "revision": "0327e59bf5cac712c58e771230cb6b9c"
  },
  {
    "url": "vuepress-theme/reco.html",
    "revision": "10675ad053402de4a8dbcd48b04e3759"
  },
  {
    "url": "vuepress-theme/resume.html",
    "revision": "1c3a8b7486ba82d43706c00f0f20f08c"
  },
  {
    "url": "vuepress-theme/simple.html",
    "revision": "deba17ae445db8bbf2012a01c511bb9d"
  },
  {
    "url": "vuepress-theme/succinct.html",
    "revision": "59b00aac2f3416df92b513ee480da265"
  },
  {
    "url": "vuepress-theme/theme-2zh.html",
    "revision": "0d6fbe380949824eb60fb387d870c4a7"
  },
  {
    "url": "vuepress-theme/vdoing.html",
    "revision": "1c3321f9292369fe65d0286928f2bacc"
  },
  {
    "url": "vuepress-theme/vpx.html",
    "revision": "21052004043c98d19bef96595711551e"
  },
  {
    "url": "vuepress-theme/yubisaki.html",
    "revision": "6bd54550f05100ff4b9d35f22aeb6172"
  },
  {
    "url": "vuepress-theme/yur.html",
    "revision": "ec37c9eb7d6ece64ec94466230937e15"
  },
  {
    "url": "vuepress-theme/yuu.html",
    "revision": "cb38b1d43c1e40f512a16bb825482b5c"
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
