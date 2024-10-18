import axios from 'axios'

const service = axios.create({
  // baseURL: '/api',
  baseURL: 'https://api.imooc-web.lgdsunday.club/api',
  timeout: 5000
})

service.interceptors.request.use(config => {
  config.headers.icode = 'hellosunday'

  return config
})

service.interceptors.response.use(response => {
  const { success, message, data } = response.data
  if (success) {
    return data
  } else {
    return Promise.reject(new Error(message))
  }
})

export default service
