import axios from 'axios';

export const API_URL = 'https://api.notihub.otmetka-x.ru/api/lukoil';

const $api = axios.create({
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem('token')
    ? `Bearer ${localStorage.getItem('token')}`
    : '';
  return config;
});

export default $api;
