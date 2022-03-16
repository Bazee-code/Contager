import axios from 'axios';
import env from '../config/env';

let headers = {};

const instance = axios.create({
  baseURL: env.DEV_API_URL,
  headers,
});

instance.interceptors.request.use(
  config => {
    async config => {
      const token = await AsyncStorage.getItem('token');

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    };
  },
  error => {
    return Promise.reject(error);
  },
);

export default instance;
