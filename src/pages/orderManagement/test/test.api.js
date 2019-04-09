/**
 *  @Introduce 测试文件api
 *  @Author    wangzhongyu
 *  @E-mail    zy.wang@muheda.com
 *  @Create    2018-12-27
 */

/**
 * [get方法示例]
 * @return {[Response]} [Obj]
 */
export const testLogin = (that, params) => {
  return that.$axios({
    url: '/SCM/scmLogin',
    method: 'post',
    params: params,
    showLoading: true
  })
}

/**
 * [get方法示例]
 * @return {[Response]} [Obj]
 */
export const testGET = (that, params) => {
  return that.$axios({
    url: '/SCM/queryAllUser',
    method: 'get',
    params: params,
    showLoading: true
  })
}

/**
 * [post方法示例]
 * @return {[Response]} [Obj]
 */
export const testPOST = (that, params) => {
  return that.$axios({
    url: '/service/waterpurifier/getTdsData',
    method: 'post',
    params: params,
    showLoading: true
  })
}
