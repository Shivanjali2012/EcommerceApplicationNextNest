// context/CartContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Product = {
  id: string;
  name: string;
  price: number;
  // Add other fields if needed (like image, quantity, etc.)
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
