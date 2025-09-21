"use client";

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          TokoOnline
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
            Beranda
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-blue-600 transition-colors">
            Produk
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
            Tentang Kami
          </Link>
          <Link href="/cart" className="text-gray-700 hover:text-blue-600 transition-colors">
            Keranjang
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link 
              href="/products" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Produk
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang Kami
            </Link>
            <Link 
              href="/cart" 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Keranjang
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;