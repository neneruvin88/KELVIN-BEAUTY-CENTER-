import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 bg-brand-offwhite border-b border-brand-charcoal/10">
      {/* Announcement Bar */}
      <div className="bg-brand-charcoal text-white text-xs font-semibold text-center py-2 px-4 uppercase tracking-wider">
        Free Delivery in Nairobi/Kisumu on orders over KES 5,000 | Lipa na M-Pesa Accepted
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Menu & Mobile icon */}
          <div className="flex items-center flex-1">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 -ml-2 mr-2 text-brand-charcoal hover:bg-brand-charcoal/5 rounded-md lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
            <nav className="hidden lg:flex space-x-8">
              <Link to="/shop/women" className="text-sm font-semibold tracking-wide uppercase hover:underline underline-offset-4">Women</Link>
              <Link to="/shop/men" className="text-sm font-semibold tracking-wide uppercase hover:underline underline-offset-4">Men</Link>
              <Link to="/shop/kids" className="text-sm font-semibold tracking-wide uppercase hover:underline underline-offset-4">Kids</Link>
              <Link to="/shop/shoes" className="text-sm font-semibold tracking-wide uppercase hover:underline underline-offset-4">Shoes</Link>
            </nav>
          </div>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 text-center flex-1 lg:flex-none">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight">KELVIN BEAUTY CENTER</span>
          </Link>

          {/* Icons */}
          <div className="flex items-center justify-end flex-1 space-x-2 sm:space-x-4">
            <button className="p-2 text-brand-charcoal hover:bg-brand-charcoal/5 rounded-full hidden sm:block">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-brand-charcoal hover:bg-brand-charcoal/5 rounded-full hidden sm:block">
              <User className="h-5 w-5" />
            </button>
            <Link to="/cart" className="p-2 text-brand-charcoal hover:bg-brand-charcoal/5 rounded-full relative">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-brand-charcoal text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-brand-offwhite border-b border-brand-charcoal/10 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <div className="flex flex-col space-y-4">
              <Link to="/shop/women" className="text-lg font-serif">Women</Link>
              <Link to="/shop/men" className="text-lg font-serif">Men</Link>
              <Link to="/shop/kids" className="text-lg font-serif">Kids</Link>
              <Link to="/shop/shoes" className="text-lg font-serif">Shoes</Link>
              <Link to="/shop" className="text-lg font-serif">Shop All</Link>
            </div>
            <div className="pt-4 border-t border-brand-charcoal/10 flex space-x-4">
              <button className="flex items-center text-sm font-semibold">
                <User className="h-4 w-4 mr-2" /> Account
              </button>
              <button className="flex items-center text-sm font-semibold">
                <Search className="h-4 w-4 mr-2" /> Search
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
