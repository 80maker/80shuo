const { path } = require('@vuepress/shared-utils')
const crypto = require('crypto');
const {getFormatted} = require('./npmInfo');
const md5 = (val) => {
  const md5 = crypto.createHash('md5');
  return md5.update(val);
}
module.exports = (options = {}, context) => ({
  name: 'gallery',
  async extendPageData($page) {
    for await (const item of options.directories) {
      if ($page.regularPath && $page.regularPath.startsWith(`/${item.dirname}`)) {
        // $page.frontmatter.permalink = `${item.path}:slug.html`;
        if(!$page.frontmatter.name) {
          return;
        }
        let npmInfo = {};
        try {
          npmInfo = await getFormatted($page.frontmatter.name); // {author, desc, latest, repo}
          console.log(`loaded theme [${$page.frontmatter.name}]`);
        } catch (error) {
          console.error('fetch npmInfo failed!');
        }
        $page.frontmatter = Object.assign(npmInfo, $page.frontmatter);
        $page.frontmatter.layout = item.itemLayout;
        $page.frontmatter.from = $page.frontmatter.from || 'Community';
        const email = $page.frontmatter.email;
        if (email) {
          $page.frontmatter.avatar = `https://www.gravatar.com/avatar/${md5(email).digest('hex')}?s=100&default=retro`;
        }
        $page.pid = item.id;
        return $page.pageType = `${item.id}Item`;
      }
      if ($page.path === item.path) {
        $page.pageType = item.id;
      }
    }
  },
  additionalPages() {
    const pages = options.directories.map(item => {
      return {
        path: item.path,
        frontmatter: {
          date: '2021-02-06',
          layout: item.layout,
          author: '80maker',
          title: 'VuePress Theme Gallery',
          description: 'A curated list of awesome VuePress Themes!'
        }
      };
    }); 
    return pages;
  }
})