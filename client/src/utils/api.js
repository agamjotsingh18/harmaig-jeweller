import axios from 'axios';
import useAuthStore from '../store/authStore';
// || 'https://hermaig-referral-api-iz8c.onrender.com/api'
    
const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL ,
  headers: {  
    'Content-Type': 'application/json',
  },
});

// Interceptor to add token to headers
api.interceptors.request.use((config) => {
  const { token } = useAuthStore.getState();
  // console.log(token)
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
