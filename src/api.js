import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

// Add a request interceptor
api.interceptors.request.use((config) => {
  // Do something before request is sent
  document.getElementById('overlay').style.display = 'block';
  console.log('req');
  return config;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
api.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  document.getElementById('overlay').style.display = 'none';
  console.log('res');
  return response;
}, (error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default api;