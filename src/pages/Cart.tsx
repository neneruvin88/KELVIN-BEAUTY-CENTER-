import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-serif mb-6">Your Cart is Empty</h1>
        <p className="text-brand-charcoal/60 mb-8">It looks like you haven't added anything to your cart yet.</p>
        <Link to="/shop" className="bg-brand-charcoal text-white px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:bg-black transition-colors">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-serif mb-10 text-center">Your Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items */}
        <div className="flex-grow">
          <div className="border-t border-brand-charcoal/10 divide-y divide-brand-charcoal/10">
            {cart.map((item, idx) => (
              <div key={idx} className="py-6 flex gap-4 sm:gap-6">
                <Link to={`/product/${item.product.id}`} className="w-24 sm:w-32 aspect-[3/4] bg-brand-charcoal/5 flex-shrink-0">
                  <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                </Link>
                
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-serif sm:text-lg">
                        <Link to={`/product/${item.product.id}`} className="hover:underline">{item.product.name}</Link>
                      </h3>
                      <p className="font-semibold text-sm sm:text-base ml-4">KES {(item.product.price * item.quantity).toLocaleString()}</p>
                    </div>
                    <p className="text-xs sm:text-sm text-brand-charcoal/60 mb-1">Color: {item.selectedColor}</p>
                    <p className="text-xs sm:text-sm text-brand-charcoal/60">Size: {item.selectedSize}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-brand-charcoal/20">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                        className="p-2 text-brand-charcoal/60 hover:text-brand-charcoal"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                        className="p-2 text-brand-charcoal/60 hover:text-brand-charcoal"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.product.id, item.selectedSize, item.selectedColor)}
                      className="text-xs uppercase tracking-wider font-semibold text-brand-charcoal/60 hover:text-red-600 flex items-center"
                    >
                      <Trash2 className="h-4 w-4 sm:mr-1" />
                      <span className="hidden sm:inline">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-[400px] flex-shrink-0">
          <div className="bg-brand-charcoal/5 p-6 sm:p-8">
            <h2 className="font-serif text-2xl mb-6">Order Summary</h2>
            <div className="space-y-4 text-sm mb-6 border-b border-brand-charcoal/10 pb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>KES {cartTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{cartTotal > 5000 ? 'Free' : 'Calculated at checkout'}</span>
              </div>
            </div>
            <div className="flex justify-between font-serif text-xl mb-8">
              <span>Total</span>
              <span>KES {cartTotal.toLocaleString()}</span>
            </div>
            <button 
              onClick={() => navigate('/checkout')}
              className="w-full bg-brand-charcoal text-white py-4 font-semibold uppercase tracking-wider text-sm flex items-center justify-center hover:bg-black transition-colors"
            >
              Checkout <ArrowRight className="h-4 w-4 ml-2" />
            </button>
            <div className="mt-4 flex space-x-2 justify-center opacity-70">
              {/* Trust Badges placeholders */}
              <span className="text-[10px] font-semibold px-2 py-1 bg-green-200 text-green-900 rounded">M-PESA</span>
              <span className="text-[10px] font-semibold px-2 py-1 border border-brand-charcoal/30 rounded">VISA</span>
              <span className="text-[10px] font-semibold px-2 py-1 border border-brand-charcoal/30 rounded">Mastercard</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
