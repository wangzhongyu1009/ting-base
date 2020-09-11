import axios from 'axios'

const uploadFile = (file, uploadUrl, extryParams) => {
  let params = new FormData()
  params.append('file', file)
  for (let item in extryParams) {
    params.append(item, extryParams[item])
  }
  let config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'accessToken': window.sessionStorage.getItem('access_token')
    }
  }
  return new Promise((resolve, reject) => {
    axios.post(uploadUrl, params, config).then(res => {
      if (res && res.data.code === '1') {
        resolve(res.businessData)
      } else {
        reject(res.businessData)
      }
      }).catch(err => {
        reject(err)
    });
  })
}
export default uploadFile