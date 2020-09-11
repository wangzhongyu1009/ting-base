import axios from './ajax'
// import qs from 'qs'

const ajaxConfig = (data) => {
  if (!data['url']) return
  if (data['method'] === 'get') {
    return new Promise((resolve, reject) => {
      axios.get(data['url'], {
        params: data['params']
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
  if (data['method'] === 'post') {
    return new Promise((resolve, reject) => {
      axios.post(data['url'], data['params']).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default ajaxConfig
