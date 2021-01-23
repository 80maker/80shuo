---
title: Maker主题配置--基本配置
date: 2020-01-23
category: maker
---
## Header

``` js
// .vuepress/config.js
module.exports = {
  // 网站标题
  title: '1980\'s Maker',
  // 网站描述
  description: '一个出生于80年代的程序员 -- 喜爱创[客]、美[食]、动[画]、怀[旧]的新手艺人',
  themeConfig: {
    // 网站logo
    logo: '/logo.jpg'
  }
}
```

## Search

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    // Search 提示
    searchPlaceholder: 'Search',
    // Search 建议列表条目数
    searchMaxSuggestions: 10,
  }
}
```

## Nav

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    nav: [
      // 内部链接
      { text: '🏠 Home', link: '/' },
      { text: '📖 Theme', link: '/categories/theme/' },
      { text: '🐉 Maker', link: '/_post/maker.md' },
      { text: '🔥 Animation', link: '/categories/animation/' },
      { text: '📽 Old Time', link: '/categories/oldtime/' },
      { text: '🔗 friend-links', link: '/friend-links/' },
      // 外部链接
      { text: 'External', link: 'https://google.com' },
    ],
  }
}
```

## Social

设置 sidebar 底部社交媒体 URL。

- type 对应Icon名称
- type github会自动补全链接, 无须填写全路径

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    social: [
      {
        type: 'email',
        link: 'cmgddd@163.com'
      },
      {
        type: 'github',
        link: '80maker/vuepress-theme-maker'
      },
      {
        type: 'qq',
        link: '//qm.qq.com/cgi-bin/qm/qr?k=fknyQ434nkzVUWUmJ6rpIPctkS9eyQaZ&jump_from=webapi'
      },
      {
        type: 'feed',
        link: '/rss.xml'
      }
    ],
  }
}
```

## Footer

支持自定义HTML

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    copyright: '© 2020 ❤️ <a target="_blank" href="https://17ria.com/">Neil Chen</a>',
  }
}
```


## See also

<RelatedPosts/>