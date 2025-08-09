'use client';

import { useEffect, useState } from 'react';
import { fetchOrderHistory } from '../../../services/orderService'; // adjust path if needed

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  const orderss = [
      {
    id: 101,
    status: 'pending',
    customerId: 1,
    customerName: 'Shivanjali Katkar',
    customerPhone: '9876543210',
    productIds: [201, 202],
    totalAmount: 1499,
    createdAt: '2025-08-01T10:30:00Z',
  },
  {
    id: 102,
    status: 'completed',
    customerId: 2,
    customerName: 'Rahul Sharma',
    customerPhone: '9823456789',
    productIds: [203],
    totalAmount: 899,
    createdAt: '2025-08-02T14:45:00Z',
  },
  {
    id: 103,
    status: 'completed',
    customerId: 3,
    customerName: 'Ashish Shinde',
    customerPhone: '9049831815',
    productIds: [204, 205, 206,207],
    totalAmount: 1096,
    createdAt: '2025-08-08T09:20:00Z',
  },
  ]

  useEffect(() => {
    fetchOrderHistory().then(setOrders);
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 bg-red">
      <h1 className="text-2xl mb-14 font-bold mb-4 text-center text-[#ee522e]"> Order History</h1>

      {orderss.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          <p className="text-lg">You have no past orderss.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {orderss.map((order: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-semibold text-cyan-700">
                   Order #{order.id}
                </h2>
                <span
                  className={`text-sm font-medium px-3 py-1 rounded-full ${
                    order.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}
                >
                  {order.status}
                </span>
              </div>

              <p className="text-md text-gray-800 mb-1 ">
                 <strong className='mr-2'>Customer:</strong> {order.customerName || 'N/A'}
              </p>

              <p className="text-md text-gray-800 mb-1 ">
                 <strong className='mr-2'>Phone:</strong> {order.customerPhone || 'N/A'}
              </p>

              <p className="text-md text-gray-800 mb-1 ">
                 <strong className='mr-2'>Customer ID:</strong> {order.customerId}
              </p>

              <p className="text-md text-gray-800 mb-1 ">
                 <strong className='mr-2'>Product IDs:</strong> {order.productIds?.join(', ')}
              </p>

              <p className="text-md text-gray-800 mb-1 ">
                 <strong className='mr-2'>Total Amount:</strong> ₹{order.totalAmount}
              </p>

              <p className="text-sm text-gray-800">
                 Placed on: {new Date(order.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
