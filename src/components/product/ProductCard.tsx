"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  // Format harga dalam Rupiah
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
      <div className="relative h-48 w-full overflow-hidden group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5">
        <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
          {product.category}
        </span>
        <h3 className="text-lg font-bold mt-1 text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="font-bold text-lg text-blue-700">{formatPrice(product.price)}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
            Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;