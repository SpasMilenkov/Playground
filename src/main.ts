import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios, { AxiosInstance } from 'axios';

const axiosInstance:AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/v1/', // Replace with your API base URL
  withCredentials: true
});
// Axios response interceptor
axiosInstance.interceptors.response.use(response => response, async error => {
  const originalRequest = error.config;

  // Check if the error is due to token expiration
  if (error.response.status === 403 && !originalRequest._retry) {
    originalRequest._retry = true;

    try {
      // Attempt to get a new access token using the refresh token
      await axiosInstance.post('auth/refresh');
      
      // Retry the original request
      return axiosInstance(originalRequest);
    } catch (refreshError) {
      // Handle failed refresh (e.g., log out user)
      return Promise.reject(refreshError);
    }
  }

  return Promise.reject(error);
});


// Provide the Axios instance to the entire app

const app = createApp(App);
app.provide('axios', axiosInstance);
app.mount('#app');
