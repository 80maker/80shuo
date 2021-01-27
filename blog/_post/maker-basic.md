---
title: Maker主题配置--基本配置
date: 2021-01-23
description: 涵盖基乎所有和主题相关配置项,帮助你快速开始搭建和配置Maker主题.
author: Neil.Chen
category: maker
---

> 涵盖基乎所有和主题相关配置项,帮助你快速开始搭建和配置Maker主题.

<!-- more -->
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

- type 对应[Icon](./maker-icon.md)名称
- type github会自动补全链接, 无须填写全路径
- type email自动生成mailto链接

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
## Reward

设置文章底部的打赏功能。

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    reward: {
      text: 'Buy me a cup of coffee ☕.',
      // 是否启用
      enable: true,
      ways: [
        {
          name: 'wechat',
          icon: 'wechat',
          qrcode: '/images/wechat.png',
          text: 'This is a Wechat Pay qrcode',
          color: 'rgb(9, 187, 7)'
        },
        {
          name: 'alipay',
          symbol: 'alipay',
          qrcode: '/images/alipay.png',
          text: 'This is a Alipay Pay qrcode',
          color: '#1296db'
        }
      ]
    },
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

## Blog

对应 `@vuepress/blog` 插件的options

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    blog: {
      directories: [
        {
          id: 'post',
          dirname: '_post',
          path: '/post/',
          itemPermalink: '/post/:year/:month/:day/:slug.html',
          pagination: {
            perPagePosts: 10,
          },
        }
      ],
      frontmatters: [
        {
          id: "tag",
          keys: ['tag', 'tags'],
          path: '/tags/',
          frontmatter: { title: 'Tag' },
          pagination: {
            lengthPerPage: 10
          }
        },
        {
          id: "category",
          keys: ['category', 'categories'],
          path: '/categories/',
          frontmatter: { title: 'Category' },
          pagination: {
            lengthPerPage: 10
          }
        }
      ],
      sitemap: {
        hostname: 'hostname'
      },
      feed: {
        canonical_base: 'canonical_base',
      },
      comment: {
        service: 'vssue',
        owner: 'owner',
        repo: 'repo',
        clientId: 'your clientId',
        clientSecret: 'your clientSecret',
      }
    }
  }
}
```

## Seo

对应 `vuepress-plugin-seo` 插件的options

``` js
// .vuepress/config.js
module.exports = {
  themeConfig: {
    // 默认配置
    seo: {
      siteTitle: (_, $site) => $site.title,
      title: $page => $page.title,
      description: $page => $page.frontmatter.description,
      author: (_, $site) => $site.themeConfig.author,
      tags: $page => $page.frontmatter.tags,
      twitterCard: _ => 'summary_large_image',
      type: $page => ['articles', '_post', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
      url: (_, $site, path) => ($site.themeConfig.hostname || '') + path,
      image: ($page, $site) => $page.frontmatter.cover && (($site.themeConfig.hostname && !$page.frontmatter.cover.startsWith('http') || '') + $page.frontmatter.cover),
      publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
      modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
    }
}
```



## See also

<RelatedPosts/>