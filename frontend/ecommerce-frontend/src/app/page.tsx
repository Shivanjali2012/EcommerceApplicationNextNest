'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchProducts } from '../../services/productService';
import { useCart } from '../../context/CartContext';
import Swal from 'sweetalert2'; // SweetAlert2

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  // SweetAlert on Add to Cart
  const handleAddToCart = (product: any) => {
    addToCart(product);

    Swal.fire({
      title: 'Added to Cart!',
      text: `${product.name} has been added.`,
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
    });
  };

  // Redirect to Checkout with Product
  const handlePlaceOrder = (product: any) => {
    addToCart(product);
    router.push('/checkout');
  };

  return (
    <div className="p-6 ">
      <h1 className="text-2xl mb-14 font-bold mb-4 text-center text-[#ee522e]">All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product: any) => ( 
          <div className="relative flex flex-col my-2 bg-white shadow hover:shadow-lg border border-slate-200 rounded-lg" key={product.id}>
            <div className="relative p-2.5 h-60 overflow-hidden rounded-xl bg-clip-border">
              <img
                src={product.image === null ? 'https://img.freepik.com/premium-vector/modern-flat-icon-landscape_203633-11062.jpg' : product.image}
                alt={product.name}
                className=" h-48  w-full object-contain rounded-md"
              />
            </div>
            <div className="p-4">
              <div className="mb-2  ">
                <p className=" text-[#ee522e] text-xl font-semibold">
                  {product.name}
                </p>
                <p className="text-cyan-600 text-xl my-2 font-semibold">
                  ₹{product.price}
                </p>
              </div>
              <p className="text-slate-600 leading-normal font-light">
                {product.description.length > 150
                  ? `${product.description.slice(0, 150)}... see more`
                  : product.description}
              </p>
              <div className='flex'>

                <button className="rounded-md w-full mt-6 bg-[#ee522e] py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-[#ee522e]-700 focus:shadow-none active:bg-[#ee522e]-700 hover:bg-[#ee522e]-700 mr-2 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
                <button className="rounded-md w-full mt-6 bg-cyan-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" onClick={() => handlePlaceOrder(product)}>
                  Place Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
