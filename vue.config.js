const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: 8080,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
  },
  configureWebpack: {
    name: 'codepen',
    resolve: {
      alias: {
        main: resolve('src'),
        packages: resolve('packages'),
        examples: resolve('examples'),
      }
    },
    entry: './examples/play.js'
  },
};