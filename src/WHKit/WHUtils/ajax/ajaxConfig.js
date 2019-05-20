import axios from './ajax'
import qs from 'qs'

const ajaxConfig = (data) => {
  if (!data['url']) return
  if (!data['method']) data['method'] = 'get'
  if (data['method'].toLocaleLowerCase() === 'get') {
    return new Promise((resolve, reject) => {
      axios.get(data['url'], {
        params: data['params'],
        showLoading: data['showLoading'] ? data['showLoading'] : false
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
  if (data['method'].toLocaleLowerCase() === 'post') {
    return new Promise((resolve, reject) => {
      axios.post(data['url'], qs.stringify(data['params'], { indices: false }), {
        showLoading: data['showLoading'] ? data['showLoading'] : false
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default ajaxConfig
