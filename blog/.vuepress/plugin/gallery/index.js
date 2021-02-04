const { path } = require('@vuepress/shared-utils')
const crypto = require('crypto');
const md5 = (val) => {
  const md5 = crypto.createHash('md5');
  return md5.update(val);
}
module.exports = (options = {}, context) => ({
  name: 'gallery',
  extendPageData($page) {
    options.directories.map(item => {
      if ($page.regularPath && $page.regularPath.startsWith(`/${item.dirname}`)) {
        // $page.frontmatter.permalink = `${item.path}:slug.html`;
        $page.frontmatter.layout = item.itemLayout;
        $page.frontmatter.from = $page.frontmatter.from || 'Community';
        const email = $page.frontmatter.email;
        if (email) {
          $page.avatar = `https://www.gravatar.com/avatar/${md5(email).digest('hex')}?s=100`;
        }
        $page.pid = item.id;
        return $page.pageType = `${item.id}Item`;
      }
      if ($page.path === item.path) {
        $page.pageType = item.id;
      }
    })
  },
  additionalPages() {
    const pages = options.directories.map(item => {
      return {
        path: item.path,
        frontmatter: {
          layout: item.layout
        }
      };
    }); 
    return pages;
  }
})