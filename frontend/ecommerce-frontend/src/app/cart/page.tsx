'use client';

import Link from 'next/link';
import { useCart } from '../../../context/CartContext';

export default function CartPage() {
  const { cart } = useCart();

  const totalAmount = cart.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg my-8">
      <h2 className="text-2xl mb-14 font-bold mb-4 text-center text-[#ee522e] ">
        Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-center text-lg">No items in your cart.</p>
      ) : (  
        <>
          <section className=" relative">
            <div className="w-full max-w-7xl lg-6 mx-auto "> 
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border-2 border-gray-200 p-2 lg:p-4 grid grid-cols-12 mb-4 max-lg:max-w-lg max-lg:mx-auto gap-y-2 shadow-lg"
                >
                  <div className="col-span-12 lg:col-span-4 ">
                    <img
                      //src={item.image || 'https://img.freepik.com/premium-vector/modern-flat-icon-landscape_203633-11062.jpg'} 
                      src={item.image == null ? 'https://img.freepik.com/premium-vector/modern-flat-icon-landscape_203633-11062.jpg' : item.image}

                      alt={item.name}
                      className="max-lg:w-full lg:w-[150px] h-[150px] rounded-lg object-contain"
                    />
                  </div>
                  <div className="col-span-12 lg:col-span-8 detail w-full lg:pl-3">
                    <div className="flex items-center justify-between w-full mb-2">
                      <h5 className="font-manrope font-bold text-xl leading-9 text-[#ee522e]">
                        {item.name}
                      </h5>
                    </div>
                    <p className="font-normal text-md text-base leading-7 text-gray-500 mb-2">
                      {item.description}
                    </p>
                    <h6 className="text-cyan-600 font-manrope font-bold text-xl  text-right"> ₹{item.price}</h6>

                  </div>
                </div>
              ))}
 
              <div className="max-lg:max-w-lg max-lg:mx-auto mb-10"> 

                <div className="flex justify-between items-center border-t pt-4 mt-6">
                  <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">Total:</p>
                  <p className="text-xl font-bold text-green-600">
                    ₹{Number(totalAmount).toFixed(2)}
                  </p>
                </div>
                <div className="text-right mt-6">
                  <Link
                    href="/checkout"
                    className="rounded-full py-2 px-6 bg-cyan-600 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-cyan-700"
                  >
                    Proceed to Checkout
                  </Link>
                </div>

              </div>
            </div>
          </section>
        </> 
      )
      }
    </div >
  );
}
