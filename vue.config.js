module.exports = {
  // publicPath: 'ting-base',
  // outputDir: 'ting-base',
  // assetsDir: 'ting-base',
  runtimeCompiler: undefined,
  productionSourceMap: undefined,

  devServer: {
    // 设置主机地址
    // host: '0.0.0.0',
    // 设置默认端口
    // port: 8089,
    // 设置代理
    proxy: {
      '/api': {
        target: 'http://172.17.3.142:8977/',
        ws: true, // 如果要代理 websockets
        secure: true, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置,将主机标头的原点更改为目标URL
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  parallel: undefined,

  css: {
    extract: false
  },

  lintOnSave: undefined
}
