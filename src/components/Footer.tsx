import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-charcoal/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <span className="font-serif text-2xl font-bold tracking-tight block mb-6">KELVIN BEAUTY CENTER</span>
            <p className="text-brand-charcoal/60 text-sm leading-relaxed mb-6">
              Redefining your style with uncompromising fashion and footwear. Discover the latest trends in Kenya.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 border border-brand-charcoal/20 rounded-full hover:bg-brand-charcoal hover:text-white transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 border border-brand-charcoal/20 rounded-full hover:bg-brand-charcoal hover:text-white transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 border border-brand-charcoal/20 rounded-full hover:bg-brand-charcoal hover:text-white transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-brand-charcoal/80">
              <li><Link to="/shop/women" className="hover:underline">Women</Link></li>
              <li><Link to="/shop/men" className="hover:underline">Men</Link></li>
              <li><Link to="/shop/shoes" className="hover:underline">Shoes</Link></li>
              <li><Link to="/shop" className="hover:underline">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-brand-charcoal/80">
              <li><Link to="#" className="hover:underline">FAQ</Link></li>
              <li><Link to="#" className="hover:underline">Shipping & Returns</Link></li>
              <li><Link to="#" className="hover:underline">Track Your Order</Link></li>
              <li><Link to="#" className="hover:underline">Size Guide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6">Join The Club</h4>
            <p className="text-sm text-brand-charcoal/80 mb-4">Subscribe to get 10% off your first order and exclusive access to new drops.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border-b border-brand-charcoal/30 bg-transparent py-2 pl-0 focus:outline-none focus:border-brand-charcoal text-sm"
              />
              <button type="submit" className="border-b border-brand-charcoal/30 py-2 px-2 hover:border-brand-charcoal">
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-brand-charcoal/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-brand-charcoal/60 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Kelvin Beauty Center. All rights reserved.
          </p>
          <div className="flex space-x-6 items-center">
            {/* Trust Badges placeholder text since we don't have SVG logos */}
            <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-800 rounded">M-PESA</span>
            <span className="text-xs font-semibold px-2 py-1 border rounded">VISA</span>
            <span className="text-xs font-semibold px-2 py-1 border rounded">Mastercard</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
