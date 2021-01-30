module.exports = {
  title: '1980\'s Maker',
  description: '一个出生于80年代的程序员 -- 喜爱创[客]、美[食]、动[画]、怀[旧]的新手艺人的博客',
  port: 8080,
  theme: 'vuepress-theme-maker',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#607d8b' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#607d8b' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' }]
  ],
  markdown: {
    lineNumbers: true,
    extractHeaders: [ 'h2', 'h3', 'h4' ],
    plugins: {
      'markdown-it-mark': true,
      'markdown-it-footnote': true,
      'markdown-it-abbr': true,
      'markdown-it-task-lists': true
    }
  },
  themeConfig: {
    logo: '/logo.jpg',
    hostname: 'https://80shuo.com',
    nav: [
      { text: '🏠 Home', link: '/' },
      { text: '📖 Theme', link: '/categories/theme/' },
      { text: '🐉 Maker', link: '/_post/maker.md' },
      { text: '🔥 Animation', link: '/categories/animation/' },
      { text: '📽 Old Time', link: '/categories/oldtime/' },
      { text: '🔗 friend-links', link: '/friend-links/' },  
    ],
    searchPlaceholder: 'Search ⌘+K',
    searchMaxSuggestions: 10,
    // wordPerminute: {cn: 300, en: 160},
    // dateFormat: 'MMM DD, YYYY',
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
        link: '//qm.qq.com/cgi-bin/qm/qr?k=5qf0UGmRJWavJGOgo5nemY2BezuGKa-V&jump_from=webapi'
      },
      {
        type: 'feed',
        link: '/rss.xml'
      }
    ],
    copyright: '© 2020 ❤️ <a target="_blank" rel="external nofollow noopener" href="https://17ria.com/">Neil Chen</a>',
    reward: {
      text: 'Buy me a cup of coffee ☕.',
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
        hostname: 'https://80shuo.com'
      },
      feed: {
        canonical_base: 'http://80shuo.com',
      },
      comment: {
        service: 'vssue',
        owner: '80maker',
        repo: '80shuo',
        clientId: '03ea86acc19571417df6',
        clientSecret: '0e7a609645761e48e620a3db3e8aefe61b81d53a',
      }
    },
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
      modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated)
    },
    pwa: {
      serviceWorker: true,
      popupComponent: 'ThemeSWUpdatePopup',
      updatePopup: true
    }
  },
  plugins: [
    require('./plugin')
  ]
}