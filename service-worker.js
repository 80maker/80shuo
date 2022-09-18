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
    "revision": "5cb035e0a7ca1ac0bc0460f65cf1bf6c"
  },
  {
    "url": "archives/index.html",
    "revision": "2542eb19f528b49c28d758f39f1a219f"
  },
  {
    "url": "assets/css/0.styles.0486242a.css",
    "revision": "b1c2fa7d531555603185931ab2ac7984"
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
    "url": "assets/js/1.085223e8.js",
    "revision": "6fae412dc2a33722cf4b2398f4ce39ca"
  },
  {
    "url": "assets/js/10.fbbe6bc7.js",
    "revision": "d4ff7f03953f0c0efcc89e59f576fa8a"
  },
  {
    "url": "assets/js/11.882f5ac3.js",
    "revision": "3ed2cb2970fb1d7cf17fc0ebf8edc64f"
  },
  {
    "url": "assets/js/12.fc607eec.js",
    "revision": "32cb47fbda5687a3fd2c8a33c66ad804"
  },
  {
    "url": "assets/js/13.25ecb4a0.js",
    "revision": "740137254d34d7d9a7bc8ed6aa225312"
  },
  {
    "url": "assets/js/14.987f5e36.js",
    "revision": "aed68dbc145f458d2230e48c72167f3b"
  },
  {
    "url": "assets/js/15.e1ed751a.js",
    "revision": "343a034c0dc95011cc4494a78c9656db"
  },
  {
    "url": "assets/js/16.a340739e.js",
    "revision": "37720fafe496d218c78bba9751916ab3"
  },
  {
    "url": "assets/js/17.0e5bab28.js",
    "revision": "b9549744ff95ee5e8edff5592987524a"
  },
  {
    "url": "assets/js/18.91c838a6.js",
    "revision": "5d967d608ecc0737221858b57e03c03b"
  },
  {
    "url": "assets/js/19.a0cd152b.js",
    "revision": "d39a585ceee0d240f4c031a8b61c0baa"
  },
  {
    "url": "assets/js/20.d13e703d.js",
    "revision": "aa63010672b80e33face9501d85ac5ca"
  },
  {
    "url": "assets/js/21.2dac5222.js",
    "revision": "b1a2e25bcb93021b67af7eb33553a60e"
  },
  {
    "url": "assets/js/22.75412634.js",
    "revision": "6d6d4f3e6553fe6869d638acc4119307"
  },
  {
    "url": "assets/js/23.2a8f1b30.js",
    "revision": "15c21026f5335e58040e91a0dfe3f25f"
  },
  {
    "url": "assets/js/24.0a1be7df.js",
    "revision": "2ac9a9620f5f222e73544614b76793c0"
  },
  {
    "url": "assets/js/25.4ea4f7b1.js",
    "revision": "58bf6692dc74593143181192e8f6b013"
  },
  {
    "url": "assets/js/26.3a7ad119.js",
    "revision": "12a5d589ac031d89bf6eb7ebd0fb813e"
  },
  {
    "url": "assets/js/27.3ff2846d.js",
    "revision": "b74d412245b3db79d61cb780680bf123"
  },
  {
    "url": "assets/js/28.8f552d1e.js",
    "revision": "50bd4eba09476523d483beb37a060b41"
  },
  {
    "url": "assets/js/29.8d0ba6eb.js",
    "revision": "9c0937f790219a412be3e6f2393455b9"
  },
  {
    "url": "assets/js/30.36069433.js",
    "revision": "2ac78887706e2dc014479df89cdc2f7f"
  },
  {
    "url": "assets/js/31.ba636b08.js",
    "revision": "935a0a30a6c7b29d88e8732aac373c1a"
  },
  {
    "url": "assets/js/32.10cc82bb.js",
    "revision": "5d01a354bad3812a8565f5138c494b5b"
  },
  {
    "url": "assets/js/33.65c0994a.js",
    "revision": "be23f126914ea1ed960add9411251b18"
  },
  {
    "url": "assets/js/34.13107087.js",
    "revision": "24f68b49c0e269ae6d22020acbb3f0eb"
  },
  {
    "url": "assets/js/35.233929b9.js",
    "revision": "0f61e3b969b39f46ae91885808fa7fae"
  },
  {
    "url": "assets/js/36.7e6eab5e.js",
    "revision": "6387f369815ff51138b914b9c0548565"
  },
  {
    "url": "assets/js/37.1aa24d47.js",
    "revision": "bdfa888bb3f29c605d1c1227a1209061"
  },
  {
    "url": "assets/js/38.8f622cbf.js",
    "revision": "d93b73887580f5f3c6a9ea10334b76c8"
  },
  {
    "url": "assets/js/39.d4c2c5f2.js",
    "revision": "3e505e9cc97a22fc8d635dd4947adb09"
  },
  {
    "url": "assets/js/40.a4525ba5.js",
    "revision": "16361f67b010866b5351f7faea215975"
  },
  {
    "url": "assets/js/41.68f8df16.js",
    "revision": "453e3b6b2dc95797c2b27f9fa31300eb"
  },
  {
    "url": "assets/js/42.bd9b676d.js",
    "revision": "f695d111d3c68763dfa05e00482e1e6e"
  },
  {
    "url": "assets/js/43.64bb3565.js",
    "revision": "b1411ac37429eee136a0abdfd88249e3"
  },
  {
    "url": "assets/js/44.31277f1e.js",
    "revision": "4a15dd6e59bbf78087e15e021b9083e7"
  },
  {
    "url": "assets/js/45.71ff4272.js",
    "revision": "96ee760859ea6d8a6221f66de8b6b84e"
  },
  {
    "url": "assets/js/46.5dcf4366.js",
    "revision": "0b2420066bd5d96c5d6a74f9878f6d54"
  },
  {
    "url": "assets/js/47.e2658159.js",
    "revision": "2ba239a4ca7946cd6a4587e4a30b08f2"
  },
  {
    "url": "assets/js/48.ad87670e.js",
    "revision": "d615b5ed053d4843b6a2cb0835a0a3f6"
  },
  {
    "url": "assets/js/49.54117ad5.js",
    "revision": "97ee6c5ab7be1acf11c76b2426f467a3"
  },
  {
    "url": "assets/js/5.4bf5489b.js",
    "revision": "63a4ed4f296c8faaca7ac17a678341bf"
  },
  {
    "url": "assets/js/50.11d15c79.js",
    "revision": "ffe158d4d74db6213a516b10fb5e2336"
  },
  {
    "url": "assets/js/51.f16a6aa0.js",
    "revision": "0728ba733d36762bee8f1c8d9b4cb50a"
  },
  {
    "url": "assets/js/52.06f5ac44.js",
    "revision": "811a734de7e2b0c1241316f1ae7a69f1"
  },
  {
    "url": "assets/js/53.031ca928.js",
    "revision": "95d02073ec427b995808046e641e4091"
  },
  {
    "url": "assets/js/54.c81cf16a.js",
    "revision": "c0209c5edd22ee25626da2a39bb57fb3"
  },
  {
    "url": "assets/js/55.b9ca6c56.js",
    "revision": "85c64ba72982a0ad207fddfae24409db"
  },
  {
    "url": "assets/js/56.64481c03.js",
    "revision": "c23a1582054f4d88b1ddcee8d5afacf2"
  },
  {
    "url": "assets/js/57.b3fd94a1.js",
    "revision": "88c3887033bfa5720661cdd58855901f"
  },
  {
    "url": "assets/js/58.dc565e73.js",
    "revision": "bf35c945c3b6a3e3dbf4058b9742812d"
  },
  {
    "url": "assets/js/59.90951023.js",
    "revision": "114190a559b97c4c5c77bc84a5d40c4d"
  },
  {
    "url": "assets/js/6.ac050fa3.js",
    "revision": "769d879a58a770be0f2557f595b8874a"
  },
  {
    "url": "assets/js/60.2940414c.js",
    "revision": "ebe912eb6932c2577ed5929e26146e1e"
  },
  {
    "url": "assets/js/61.96056578.js",
    "revision": "47b8125d01f5bbc5fa6436e611e11712"
  },
  {
    "url": "assets/js/7.9346cc49.js",
    "revision": "e9920bef709e43af0e403a4476025751"
  },
  {
    "url": "assets/js/8.a03046fb.js",
    "revision": "148f721e182b169a2a8d88864567ca18"
  },
  {
    "url": "assets/js/9.f2d8c3cc.js",
    "revision": "a8ca327bbd2b19e4af305a09cf666703"
  },
  {
    "url": "assets/js/app.1386d486.js",
    "revision": "4662a068474afc65c6c7b9e247f365df"
  },
  {
    "url": "assets/js/vendors~flowchart.48be7bff.js",
    "revision": "19c2be041aaa7b83db2c2f422428a810"
  },
  {
    "url": "assets/js/vuejs-paginate.1d7bdd9d.js",
    "revision": "458fb41bfb34683e3f708eb7e873eb37"
  },
  {
    "url": "categories/frontend/index.html",
    "revision": "fb6557f16b5cb117daa37f158ecaf36f"
  },
  {
    "url": "categories/index.html",
    "revision": "077a36842887f4166004240ed58fdf72"
  },
  {
    "url": "categories/maker/index.html",
    "revision": "fb1d88a42cfdffb932b797db5221820e"
  },
  {
    "url": "categories/shell/index.html",
    "revision": "3518d375278eb833c09c4997e6a95de3"
  },
  {
    "url": "categories/theme/index.html",
    "revision": "3fc82c5d2ce85c3799a35571532d16ab"
  },
  {
    "url": "categories/theme/page/2/index.html",
    "revision": "dc585b631e9427c1764209a14e2cc8b2"
  },
  {
    "url": "friend-links/index.html",
    "revision": "88dcf24b59bb50f4ac5978dd4973efc0"
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
    "revision": "ca52c94987b54d21d7045e22570b8481"
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
    "revision": "46982cc1e4482a860d86602af999b887"
  },
  {
    "url": "logo.jpg",
    "revision": "70de14ec2051812fe81872c5bd7ca1a0"
  },
  {
    "url": "page/2/index.html",
    "revision": "c00583418e2e9b9732e7bc7433efbce4"
  },
  {
    "url": "page/3/index.html",
    "revision": "88f360d12aeb44a539798c2e187dc702"
  },
  {
    "url": "post/2020/11/26/md5.html",
    "revision": "571b63c0cc4a639ab060ccc8f3c156f7"
  },
  {
    "url": "post/2020/12/23/maker.html",
    "revision": "25303187bf06f1d0e7484dc981f2732c"
  },
  {
    "url": "post/2020/12/26/theme-learning-0.html",
    "revision": "578978579aafd272074ca387f03d6e27"
  },
  {
    "url": "post/2021/01/01/theme-learning-concept.html",
    "revision": "fbb2cb8793e0f24831b28979ba442d5d"
  },
  {
    "url": "post/2021/01/12/theme-showcase.html",
    "revision": "b832159b8e83959c1ef3705caa7c1194"
  },
  {
    "url": "post/2021/01/22/maker-icon.html",
    "revision": "8898b3e964ea41b4dca7887196276381"
  },
  {
    "url": "post/2021/01/22/shell-tree.html",
    "revision": "d98d8ac267922526eae612d06af2a367"
  },
  {
    "url": "post/2021/01/23/maker-basic.html",
    "revision": "a9d53ab8d2c1725f6d86b73627ba83e1"
  },
  {
    "url": "post/2021/01/25/maker-page.html",
    "revision": "4d896b9f61f147be1695e95519f1fbd1"
  },
  {
    "url": "post/2021/02/06/theme-submit.html",
    "revision": "eaa5362354bac877bf08075e2726571c"
  },
  {
    "url": "post/2021/02/23/theme-learning-guide.html",
    "revision": "e5e5b2887712a03d9d747f91d808ab5e"
  },
  {
    "url": "post/2021/02/24/theme-learning-directory.html",
    "revision": "96ae471f69a17f27fc81cf411f318770"
  },
  {
    "url": "post/2021/02/25/theme-learning-template.html",
    "revision": "efb153b4f30d961df7d53709ad3e0f31"
  },
  {
    "url": "post/2021/02/26/theme-learning-home.html",
    "revision": "40bbe5d5076ba8b51dd56987cdd5ff12"
  },
  {
    "url": "post/2021/03/02/theme-learning-post.html",
    "revision": "f4b4f499e59aaaa3beb04835b0136b4c"
  },
  {
    "url": "post/2021/03/03/theme-learning-nav.html",
    "revision": "5e14c0f0a639686ab23a5210133e8dcd"
  },
  {
    "url": "post/2021/03/11/theme-learning-subnav.html",
    "revision": "a051fa13e30c14f03ded8d8346ced0f2"
  },
  {
    "url": "post/2021/03/17/theme-learning-footerbar.html",
    "revision": "05402ce2876273f389b7649384de9575"
  },
  {
    "url": "post/2021/03/30/theme-learning-archive.html",
    "revision": "77e4f438e798db2874669b149578771c"
  },
  {
    "url": "post/2021/03/31/theme-learning-category.html",
    "revision": "d91fc9048f7384efda9e61d388063451"
  },
  {
    "url": "post/2021/04/06/theme-learning-tag.html",
    "revision": "c9d65f55a76be7bee2e270254003a515"
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
    "revision": "41c6ddbedc443da246cd660a924d849a"
  },
  {
    "url": "tags/maker/index.html",
    "revision": "6551f33a5ec31a81511418c6a395931f"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "bea05a0161c32bdeb1d5cd4aae512790"
  },
  {
    "url": "tags/VuePress/page/2/index.html",
    "revision": "3a331a06fe52085bb20cc8239dfdd10a"
  },
  {
    "url": "vuepress-theme/antdocs.html",
    "revision": "ac04eeb33c272a6c45f04abfdd1516e1"
  },
  {
    "url": "vuepress-theme/api.html",
    "revision": "236daa4171be4af1f8414e82971c11f9"
  },
  {
    "url": "vuepress-theme/blog.html",
    "revision": "afc84a9870758aa0c8c16b37c4bdf8b7"
  },
  {
    "url": "vuepress-theme/book.html",
    "revision": "3fbe7dcaf8f3d18eca4e5c81f1817cb6"
  },
  {
    "url": "vuepress-theme/casper.html",
    "revision": "16a029159fedea065c7bb258efba6362"
  },
  {
    "url": "vuepress-theme/gungnir.html",
    "revision": "f0ca1c58e729903adae21912bd3b42c8"
  },
  {
    "url": "vuepress-theme/hope.html",
    "revision": "03c8ae23cc7696dd1a8c875785789fb8"
  },
  {
    "url": "vuepress-theme/index.html",
    "revision": "ea4af5cfac7f71c4bb495d22ff97f89e"
  },
  {
    "url": "vuepress-theme/indigo-material.html",
    "revision": "bef01545373e619ac21075da88d5f9a9"
  },
  {
    "url": "vuepress-theme/maker.html",
    "revision": "9a32d6ae06bb564f03f51d9508ce628d"
  },
  {
    "url": "vuepress-theme/mediumish.html",
    "revision": "21fb46ffdf3e83af107f01db904ca491"
  },
  {
    "url": "vuepress-theme/meteorlxy.html",
    "revision": "e2b796c9825e6746a28a45142063a49d"
  },
  {
    "url": "vuepress-theme/mini.html",
    "revision": "fe5d7281a29707dc70dbf76a34eed7ac"
  },
  {
    "url": "vuepress-theme/modern-blog.html",
    "revision": "a60749f7bc0379e7200a60b2f40de258"
  },
  {
    "url": "vuepress-theme/onen.html",
    "revision": "f3a3efc7891b0b7c24af0bec0039ec72"
  },
  {
    "url": "vuepress-theme/reco.html",
    "revision": "7771c694ff0407d02b97cd2df2a9c586"
  },
  {
    "url": "vuepress-theme/resume.html",
    "revision": "e9e1c8712b3f45ef1878bd902182a720"
  },
  {
    "url": "vuepress-theme/simple.html",
    "revision": "c303b304c2eb1e5ab8dbc836146f0707"
  },
  {
    "url": "vuepress-theme/succinct.html",
    "revision": "6d08cd59dedf9dd25c1e582268fd593d"
  },
  {
    "url": "vuepress-theme/theme-2zh.html",
    "revision": "3834fd51df06093543f098cf28f8ebba"
  },
  {
    "url": "vuepress-theme/vdoing.html",
    "revision": "083f5527a0dc6195f9b3703b57fe5887"
  },
  {
    "url": "vuepress-theme/vpx.html",
    "revision": "c3c11d8cf0933378b30f23cad59577dc"
  },
  {
    "url": "vuepress-theme/yubisaki.html",
    "revision": "a93dd6acc15fda33631c0bbe78c0b9a4"
  },
  {
    "url": "vuepress-theme/yur.html",
    "revision": "c2eb6ed1eaf7670ee368dcebba5994be"
  },
  {
    "url": "vuepress-theme/yuu.html",
    "revision": "34e02a3692094e04146ad7180d22e862"
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
