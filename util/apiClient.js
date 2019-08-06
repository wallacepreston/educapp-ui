import axios from 'axios'
import config from '../config'
    
const apiClient = axios.create({
  baseURL: `${config.apiServer}`,
  withCredentials: false, 
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default apiClient