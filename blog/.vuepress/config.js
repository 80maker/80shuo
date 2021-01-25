module.exports = {
  title: '1980\'s Maker',
  description: '一个出生于80年代的程序员 -- 喜爱创[客]、美[食]、动[画]、怀[旧]的新手艺人',
  port: 8080,
  theme: 'vuepress-theme-maker',
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
        link: '//qm.qq.com/cgi-bin/qm/qr?k=fknyQ434nkzVUWUmJ6rpIPctkS9eyQaZ&jump_from=webapi'
      },
      {
        type: 'feed',
        link: '/rss.xml'
      }
    ],
    copyright: '© 2020 ❤️ <a target="_blank" href="https://17ria.com/">Neil Chen</a>',
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
    plugins: [
      ['@vuepress/search', {
        searchMaxSuggestions: 10
      }],
      ['@vuepress/blog', {
        globalPagination: {
          prevText: '',
          nextText: ''
        },
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
          clientId: 'Iv1.57b5c522319529f6',
          clientSecret: '38e7180524fd3102c9eeefbd8f1c25a06f62b956',
        }
      }]
    ]
  },
  plugins: [
    require('./plugin')
  ]
}