// src/app/layout.tsx
import { Inter } from 'next/font/google';
import { CartProvider } from '../../context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import logo from './asset/logo.jpg';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'E-Commerce',
  description: 'e-commerce app',
  favIcon: './asset/logo.jpg',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.favIcon} type="image/jpeg" sizes="32x32" />
        {/* Tailwind CDN */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>

      <body className={`${inter.className} bg-red overflow-hidden`}>
        <CartProvider>
          {/* Navbar */}
          <nav className="bg-[#e4e4e48f] shadow  sticky top-0 ">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
              <div className="text-sm text-gray-400 hidden sm:inline xl:flex lg:flex md:flex flex">  <Image src={logo} alt="Product Icon" className='shadow-lg' width={200} height={100} />   </div>
              <div className="flex items-center space-x-8 text-white-700 font-medium text-base">
                <Link href="/" className="hover:text-white-600 transition flex items-center gap-1">
                  <span>Products</span>
                </Link>
                <Link href="/add-product" className="hover:text-white-600 transition flex items-center gap-1">
                  <span>Add Products</span>
                </Link>
                <Link href="/orders" className="hover:text-white-600 transition flex items-center gap-1">
                  <span>Orders</span>
                </Link>
                <Link href="/cart" className="hover:text-white-600 transition flex items-center gap-1">
                  <span>Cart</span>
                </Link>
              </div>
            </div>
          </nav>

          {/*  Page content */}
          <main className=" h-[82vh] overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:bg-gray-600
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 bg-[#f0f8ff] ">{children}</main>
          <div className='bg-[#f04d29] text-center p-4 text-white sticky  m-0'>Copyright ©2025 Click & Collect Team</div>
        </CartProvider>
      </body>
    </html>
  );
}
