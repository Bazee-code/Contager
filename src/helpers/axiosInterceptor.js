import axios from 'axios';
import env from '../config/env';

let headers = {};

const axiosInstance = axios.create({
  baseURL: env.DEV_API_URL,
  headers,
});
console.log('url', axiosInstance.baseURL);

axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
