import { productOrderAPI } from './api';


// export const placeOrder = async (orderData: {
//   name: string;
//   email: string;
//   phone: string;
//   productIds: number[];
//   totalAmount: number;
// }) => {
//   try {
//     const response = await productOrderAPI.post('/orders', orderData);
//     return response.data;
//   } catch (error) {
//     console.error('Order API failed:', error);
//     return { error: true };
//   }



  
// };

export const placeOrder = async (orderData: {
  name: string;
  email: string;
  phone: string;
  productIds: number[];
  totalAmount: number;
}) => {
  try {
    const response = await productOrderAPI.post('/orders', orderData);
    return response.data;
  } catch (error: any) {
    console.error(' Order API failed:', error?.response?.data || error.message);
    return {
      error: true,
      message: error?.response?.data?.message || 'Something went wrong while placing the order.',
      status: error?.response?.status || 500,
    };
  }
};


export const fetchOrderHistory = async () => {
  try {
    const response = await productOrderAPI.get('/orders');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch order history:', error);
    return [];
  }
}