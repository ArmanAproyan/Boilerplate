import axios from 'axios'
import headers from './api.const'

const baseURL = import.meta.env.VITE_BASE_URL

const axiosClient = axios.create({
  baseURL,
  headers
})

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosClient
