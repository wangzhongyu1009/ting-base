module.exports = {
  
  // publicPath: 'Ting-Base',
  // outputDir: 'Ting-Base',
  // assetsDir: 'Ting-Base',

  runtimeCompiler: undefined,

  productionSourceMap: undefined,

  devServer: {
    // 设置主机地址
    host: '0.0.0.0',
    // 设置默认端口
    port: 8089,
    open: true,
    hot: true,
    // 设置代理
    proxy: {
      '/baic-pms': {
        target: 'http://192.168.1.92:7103',
        ws: true, // 如果要代理 websockets
        secure: true, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置,将主机标头的原点更改为目标URL
        pathRewrite: {
          '^/baic-pms': '/baic-pms'
        }
      }
    }
  },

  parallel: undefined,

  lintOnSave: false,

  css: {
    extract: false,
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
}
