module.exports = (options = {}, context) => ({
  name: 'gallery',
  extendPageData($page) {
    const directories = options.directories.map(item => {
      if ($page._filePath === item.dirname) {
        $page.frontmatter.permalink = "${options.path}:year/:month/:day/:slug.html";
        return $page.pageType = 'theme';
      }
    })
  }
})