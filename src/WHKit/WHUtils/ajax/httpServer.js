import httpConfig from './ajaxConfig'
export const getNetworkData = (params) => {
  return httpConfig({
    method: 'get',
    url: params.url,
    params: params.params
  })
}

export const postNetworkData = (params) => {
  return httpConfig({
    method: 'post',
    url: params.url,
    params: params.params
  })
}
