import axios from 'axios'
const axiosClient = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosClient.interceptors.request.use(function (request) {
  // Custom config --> TODO
  return request
})
//response interceptor handler
axiosClient.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response?.status) {
      if (error.response?.status === 500) {
        const errorResponse = error.response?.data as { error: string }
        return Promise.reject(new Error(String(errorResponse.error)))
      } else if (error.response?.status === 404) {
        return Promise.reject(new Error(String(error.message)))
      } else if (error.response?.status === 400) {
        return error.response
      } else {
        return Promise.reject(new Error(String(error.message)))
      }
    }
    return Promise.reject(error)
  }
)

export default axiosClient
