module.exports = {
  configureWebpack: {
    resolve: {
      // 给目录起别名
      alias: {
        'assets': './src/assets',
        'common': './src/common',
        'components': './src/components',
        'network': './src/network',
        'views': './src/views',
      }
    }
  }
}