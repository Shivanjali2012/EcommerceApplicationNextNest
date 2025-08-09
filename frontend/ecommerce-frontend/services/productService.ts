import { productOrderAPI } from './api';

export const fetchProducts = async () => {
  try {
    const response = await productOrderAPI.get('/products');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return []; 
  }
};
