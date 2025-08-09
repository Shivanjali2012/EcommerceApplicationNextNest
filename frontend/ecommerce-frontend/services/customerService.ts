import { customerAPI } from './api';

export const getCustomerDetails = async (customerId: string) => {
  try {
    const response = await customerAPI.get(`/customers`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch customer ():`, error);
    return null;
  }
};
