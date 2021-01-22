const { path } = require('@vuepress/shared-utils')

module.exports = {
  name: 'custom-svg-sprite',
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js')
  ],
  globalUIComponents: ['CustomSvgSprite']
}