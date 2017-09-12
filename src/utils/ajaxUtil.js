import axios from 'axios'
export const ajaxAPI = (method, url, data) => {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      data: data
    }).then((response) => {
      resolve(response)
    }).catch((error) => {
      reject(error)
    })
  })
}
