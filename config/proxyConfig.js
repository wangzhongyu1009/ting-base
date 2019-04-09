/**
 *  @author @wangzhongyu
 *  配置代理
 *
 */

module.exports = {
  proxy: {
    '/SCM': {
      target: 'http://47.95.113.208:8080',  // 接口域名
      changeOrigin: true,  //是否跨域
      pathRewrite: {
        '^/SCM': '/SCM'
      }
    }
  }
}
