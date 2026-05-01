import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'mpesa' | 'card'>('mpesa');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (cart.length === 0 && !isSuccess) {
    navigate('/cart');
    return null;
  }

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate process
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-serif mb-4">Order Confirmed</h1>
        <p className="text-brand-charcoal/80 mb-8 max-w-lg mx-auto">
          Thank you for shopping with Kelvin Beauty Center. Your order has been placed successfully. We have sent a confirmation email to you.
        </p>
        <Link to="/" className="inline-block bg-brand-charcoal text-white px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:bg-black transition-colors">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-center mb-8">
        <span className="font-serif text-2xl font-bold tracking-tight">KELVIN BEAUTY CENTER</span>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Checkout Form */}
        <div className="flex-grow max-w-2xl">
          <form onSubmit={handleCheckout}>
            {/* Contact Info */}
            <div className="mb-10">
              <h2 className="text-xl font-serif mb-4">Contact Information</h2>
              <div className="space-y-4">
                <input required type="email" placeholder="Email" className="w-full border border-brand-charcoal/20 px-4 py-3 text-sm focus:outline-none focus:border-brand-charcoal bg-white" />
                <div className="flex items-center">
                  <input type="checkbox" id="newsletter" className="mr-2" />
                  <label htmlFor="newsletter" className="text-sm">Email me with news and offers</label>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="mb-10">
              <h2 className="text-xl font-serif mb-4">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <input required type="text" placeholder="First Name" className="w-full border border-brand-charcoal/20 px-4 py-3 text-sm focus:outline-none focus:border-brand-charcoal bg-white" />
                <input required type="text" placeholder="Last Name" className="w-full border border-brand-charcoal/20 px-4 py-3 text-sm focus:outline-none focus:border-brand-charcoal bg-white" />
                <input required type="text" placeholder="Address" className="col-span-2 w-full border border-brand-charcoal/20 px-4 py-3 text-sm focus:outline-none focus:border-brand-charcoal bg-white" />
                <input required type="text" placeholder="City / Town" className="col-span-2 w-full border border-brand-charcoal/20 px-4 py-3 text-sm focus:outline-none focus:border-brand-charcoal bg-white" />
                <input required type="tel" placeholder="Phone Number" className="col-span-2 w-full border border-brand-charcoal/20 px-4 py-3 text-sm focus:outline-none focus:border-brand-charcoal bg-white" />
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-10">
              <h2 className="text-xl font-serif mb-4">Payment</h2>
              <p className="text-sm text-brand-charcoal/60 mb-4">All transactions are secure and encrypted.</p>
              
              <div className="border border-brand-charcoal/20 bg-white shadow-sm">
                {/* M-Pesa Option */}
                <div className="p-4 border-b border-brand-charcoal/20">
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="radio" 
                      name="payment" 
                      value="mpesa" 
                      checked={paymentMethod === 'mpesa'}
                      onChange={() => setPaymentMethod('mpesa')}
                      className="mr-3" 
                    />
                    <span className="font-semibold text-sm">Lipa na M-PESA (STK Push)</span>
                    <span className="ml-auto text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded">M-PESA</span>
                  </label>
                  {paymentMethod === 'mpesa' && (
                    <div className="mt-4 pt-4 border-t border-brand-charcoal/10 pl-6">
                      <p className="text-sm text-brand-charcoal/80 mb-2">Enter your M-Pesa phone number. We will send a prompt to your phone.</p>
                      <div className="flex bg-gray-50 border border-brand-charcoal/20 p-1">
                        <span className="px-3 py-2 text-sm text-brand-charcoal/60 bg-gray-100 border-r border-brand-charcoal/10">+254</span>
                        <input type="tel" placeholder="712 345 678" className="flex-grow px-2 py-2 text-sm bg-transparent focus:outline-none" required={paymentMethod === 'mpesa'} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Credit Card Option */}
                <div className="p-4">
                  <label className="flex items-center cursor-pointer">
                    <input 
                      type="radio" 
                      name="payment" 
                      value="card" 
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                      className="mr-3" 
                    />
                    <span className="font-semibold text-sm">Credit / Debit Card</span>
                    <div className="ml-auto flex space-x-1">
                      <span className="text-[10px] font-bold border border-brand-charcoal/20 px-1 py-0.5 rounded text-brand-charcoal/60">VISA</span>
                      <span className="text-[10px] font-bold border border-brand-charcoal/20 px-1 py-0.5 rounded text-brand-charcoal/60">MC</span>
                    </div>
                  </label>
                  {paymentMethod === 'card' && (
                    <div className="mt-4 pt-4 border-t border-brand-charcoal/10 pl-6 space-y-3">
                      <input type="text" placeholder="Card number" className="w-full border border-brand-charcoal/20 px-4 py-2 text-sm focus:outline-none focus:border-brand-charcoal bg-gray-50" required={paymentMethod === 'card'} />
                      <div className="grid grid-cols-2 gap-3">
                        <input type="text" placeholder="Expiration date (MM / YY)" className="border border-brand-charcoal/20 px-4 py-2 text-sm focus:outline-none focus:border-brand-charcoal bg-gray-50" required={paymentMethod === 'card'} />
                        <input type="text" placeholder="Security code" className="border border-brand-charcoal/20 px-4 py-2 text-sm focus:outline-none focus:border-brand-charcoal bg-gray-50" required={paymentMethod === 'card'} />
                      </div>
                      <input type="text" placeholder="Name on card" className="w-full border border-brand-charcoal/20 px-4 py-2 text-sm focus:outline-none focus:border-brand-charcoal bg-gray-50" required={paymentMethod === 'card'} />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <button 
              disabled={isProcessing}
              type="submit" 
              className={`w-full py-4 text-white font-semibold uppercase tracking-wider text-sm transition-colors ${isProcessing ? 'bg-brand-charcoal/70' : 'bg-brand-charcoal hover:bg-black'}`}
            >
              {isProcessing ? 'Processing...' : `Pay KES ${(cartTotal > 5000 ? cartTotal : cartTotal + 500).toLocaleString()}`}
            </button>
          </form>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:w-[450px] flex-shrink-0 bg-brand-charcoal/5 p-6 h-fit sticky top-24">
          <h2 className="font-serif text-xl mb-6">Order Summary</h2>
          <div className="space-y-4 mb-6 max-h-80 overflow-y-auto no-scrollbar">
            {cart.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-16 h-20 bg-brand-charcoal/10 relative">
                  <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                  <span className="absolute -top-2 -right-2 bg-brand-charcoal text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-grow flex flex-col justify-center">
                  <h4 className="text-sm font-semibold">{item.product.name}</h4>
                  <p className="text-xs text-brand-charcoal/60">{item.selectedColor} / {item.selectedSize}</p>
                </div>
                <div className="flex items-center justify-end">
                  <span className="text-sm font-semibold">KES {(item.product.price * item.quantity).toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-brand-charcoal/10 pt-4 space-y-2 text-sm mb-4">
            <div className="flex justify-between">
              <span className="text-brand-charcoal/70">Subtotal</span>
              <span className="font-semibold">KES {cartTotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-brand-charcoal/70">Shipping</span>
              <span className="font-semibold">{cartTotal > 5000 ? 'Free' : 'KES 500'}</span>
            </div>
          </div>
          
          <div className="border-t border-brand-charcoal/10 pt-4 flex justify-between items-center text-lg">
            <span className="font-serif">Total</span>
            <span className="font-serif">KES {(cartTotal > 5000 ? cartTotal : cartTotal + 500).toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
