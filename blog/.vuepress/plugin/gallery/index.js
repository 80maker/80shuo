const { path } = require('@vuepress/shared-utils')
module.exports = (options = {}, context) => ({
  name: 'gallery',
  extendPageData($page) {
    options.directories.map(item => {
      if ($page.regularPath && $page.regularPath.startsWith(`/${item.dirname}`)) {
        $page.frontmatter.permalink = `${item.path}:slug.html`;
        $page.frontmatter.layout = item.itemLayout;
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