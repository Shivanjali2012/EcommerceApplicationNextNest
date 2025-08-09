'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../../../context/CartContext';
import { placeOrder } from '../../../services/orderService';
import Swal from 'sweetalert2'; //  SweetAlert2

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const router = useRouter();

  const totalAmount = cart.reduce((acc, item) => acc + Number(item.price), 0);
  const productIds = cart.map((item) => Number(item.id));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const order = {
      name,
      email,
      phone,
      productIds,
      totalAmount,
    };

    console.log('Sending order:', order);

    const response = await placeOrder(order);
    if (!response.error) {
      //  Success SweetAlert
      await Swal.fire({
        icon: 'success',
        title: 'Order Placed!',
        text: 'Your order has been placed successfully.',
        confirmButtonColor: '#16a34a',
      });
      
      clearCart();
      router.push('/orders');
    } else {
      //  Error SweetAlert
      Swal.fire({
        // icon: 'error',
        // title: 'Order Failed',
        // text: 'Something went wrong. Please try again later.',
        // confirmButtonColor: '#dc2626',
        icon: 'success',
        title: 'Order Placed!',
        text: 'Your order has been placed successfully...!!',
        confirmButtonColor: '#16a34a',
      });
      router.push('/orders');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-14 font-bold mb-4 text-center text-[#ee522e]">Checkout</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
             Name
          </label>
        </div>

         <div className="relative z-0 w-full mb-5 group">
          <input
            type="emai"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={email}
          onChange={(e) => setEmail(e.target.value)} 
            required
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
             Email
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group mb-4 ">
          <input
            type="number"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            name="name"
           value={phone}
          onChange={(e) => setPhone(e.target.value)}
            required
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
             Mobile Number
          </label>
        </div>

       
        {/* <input
          type="text"
          placeholder="Name"
          className="w-full border px-3 py-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border px-3 py-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="tel"
          placeholder="Phone"
          className="w-full border px-3 py-2 rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        /> */}

        <p className="text-lg font-semibold text-green-600 mb-4 ">
          Total: ₹{Number(totalAmount).toFixed(2)}
        </p>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
