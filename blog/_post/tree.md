---
date: 2021-01-21
title: windows/linux 常用命令 [tree]
category: shell
---

## tree 命令生成目录树

浏览博客文章时经常会看到一些很漂亮的目录结构,就像下面所示

::: vue
.
├── docs
│   ├── .vuepress _(**可选的**)_
│   │   ├── `components` _(**可选的**)_
│   │   ├── `theme` _(**可选的**)_
│   │   │   └── Layout.vue
│   │   ├── `public` _(**可选的**)_
│   │   ├── `styles` _(**可选的**)_
│   │   │   ├── index.styl
│   │   │   └── palette.styl
│   │   ├── `templates` _(**可选的, 谨慎配置**)_
│   │   │   ├── dev.html
│   │   │   └── ssr.html
│   │   ├── `config.js` _(**可选的**)_
│   │   └── `enhanceApp.js` _(**可选的**)_
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
:::