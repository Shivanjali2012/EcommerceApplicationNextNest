// services/api.ts
import axios from 'axios';

export const productOrderAPI = axios.create({
  baseURL: 'http://localhost:3000',
});

export const customerAPI = axios.create({
  baseURL: 'http://localhost:3001',
});
