//@flow
import axios from 'axios';
import { BASE_URL } from '../api/urls';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 120000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
instance.interceptors.request.use(
  async config => {
    console.log('config', config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    console.log('response', response);
    return response;
  },
  function (error) {
    console.log('error', error);
    return Promise.reject(error);
  },
);

export default instance;
