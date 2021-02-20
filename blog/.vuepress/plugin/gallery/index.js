const { path } = require('@vuepress/shared-utils')
const axios = require('axios').default;
const crypto = require('crypto');
const md5 = (val) => {
  const md5 = crypto.createHash('md5');
  return md5.update(val);
}
module.exports = (options = {}, context) => ({
  name: 'gallery',
  async extendPageData($page) {
    if ($page.regularPath && $page.regularPath.startsWith(`/${options.dirname}`)) {
      $page.frontmatter.permalink = `${options.path}:slug.html`;
      if(!$page.frontmatter.name) {
        return;
      }
      let npmInfo = {};
      try {
        const { data } = await axios.get('http://shuo.17ria.com/v1/theme', {
          params: {
            name: $page.frontmatter.name
          }
        }); // {author, desc, latest, repo}
        npmInfo = data.data;
        console.log(`loaded theme [${$page.frontmatter.name}]`);
      } catch (error) {
        console.error('fetch npmInfo failed!');
      }
      $page.frontmatter = Object.assign(npmInfo, $page.frontmatter);
      $page.frontmatter.title = $page.frontmatter.name;
      $page.frontmatter.layout = options.itemLayout;
      $page.frontmatter.from = $page.frontmatter.from || 'Community';
      $page.pid = options.id;
      const email = $page.frontmatter.email || $page.frontmatter.author.email;
      if (email && !$page.frontmatter.avatar) {
        $page.frontmatter.avatar = `https://www.gravatar.com/avatar/${md5(email).digest('hex')}?s=100&default=retro`;
      }
      return $page.pageType = `${options.id}Item`;
    }
    if ($page.path === options.path) {
      $page.pageType = options.id;
    }
    $page._content =  $page.frontmatter.readme;
  },
  additionalPages() {
    const pages = [{
      path: options.path,
      frontmatter: {
        date: '2021-02-06',
        layout: options.layout,
        author: '80maker',
        title: 'VuePress Theme Gallery',
        description: 'A curated list of awesome VuePress Themes!'
      }
    }];
    return pages;
  }
})