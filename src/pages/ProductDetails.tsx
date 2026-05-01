import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products, Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, ChevronDown, ChevronUp, AlertCircle, ShoppingBag } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [activeImage, setActiveImage] = useState<number>(0);
  
  // Accordion state
  const [openAccordion, setOpenAccordion] = useState<string | null>('details');

  useEffect(() => {
    const p = products.find(p => p.id === id);
    if (p) {
      setProduct(p);
      setSelectedSize(p.sizes[0]);
      setSelectedColor(p.colors[0].name);
    }
  }, [id]);

  if (!product) return <div className="h-screen flex items-center justify-center">Loading...</div>;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color");
      return;
    }
    addToCart(product, 1, selectedSize, selectedColor);
    // Maybe show a success toast here
    navigate('/cart');
  };

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Gallery */}
        <div className="flex-1 flex flex-col md:flex-row-reverse gap-4">
          <div className="w-full md:w-4/5 bg-brand-charcoal/5 aspect-[3/4] relative">
            <img 
              src={product.images[activeImage]} 
              alt={product.name} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex md:flex-col gap-4 overflow-x-auto md:w-1/5 md:overflow-visible no-scrollbar">
            {product.images.map((img, idx) => (
              <button 
                key={idx} 
                className={`flex-shrink-0 w-20 md:w-full aspect-[3/4] relative bg-brand-charcoal/5 border-2 ${activeImage === idx ? 'border-brand-charcoal' : 'border-transparent'}`}
                onClick={() => setActiveImage(idx)}
              >
                <img src={img} alt={`${product.name} thumbnail`} className="absolute inset-0 w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Buy Box */}
        <div className="flex-1 lg:pl-8">
          <Link to={`/shop/${product.category.toLowerCase()}`} className="text-sm font-semibold tracking-wider uppercase text-brand-charcoal/60 hover:underline mb-2 block">
            {product.category}
          </Link>
          <h1 className="text-3xl sm:text-4xl font-serif mb-2">{product.name}</h1>
          
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex text-black">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
              ))}
            </div>
            <span className="text-sm text-brand-charcoal/80 underline cursor-pointer">{product.reviews} Reviews</span>
          </div>

          <p className="text-2xl font-serif mb-8">KES {product.price.toLocaleString()}</p>

          {/* Color Selector */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-semibold uppercase tracking-wider">Color: {selectedColor}</span>
            </div>
            <div className="flex space-x-3">
              {product.colors.map(color => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-10 h-10 rounded-full border-2 ${selectedColor === color.name ? 'border-brand-charcoal' : 'border-transparent shadow-sm'}`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                >
                  <span className="sr-only">{color.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="mb-8">
            <div className="flex justify-between items-end mb-2">
              <span className="text-sm font-semibold uppercase tracking-wider">Size: {selectedSize}</span>
              <button className="text-xs text-brand-charcoal/60 hover:underline">Size Guide</button>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 border text-sm font-semibold transition-colors
                    ${selectedSize === size ? 'border-brand-charcoal bg-brand-charcoal text-white' : 'border-brand-charcoal/20 bg-white hover:border-brand-charcoal'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Urgency */}
          {product.stockCount && product.stockCount < 5 && (
            <div className="flex items-center space-x-2 bg-red-50 text-red-800 px-4 py-3 mb-8 text-sm font-semibold">
              <AlertCircle className="h-5 w-5" />
              <span>Selling fast! Only {product.stockCount} left in stock.</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col space-y-4 mb-12">
            <button 
              onClick={handleAddToCart}
              className="w-full bg-brand-charcoal text-white py-4 font-semibold uppercase tracking-wider text-sm flex items-center justify-center hover:bg-black transition-colors sticky bottom-4 z-40 shadow-lg md:static md:shadow-none"
            >
              <ShoppingBag className="h-4 w-4 mr-2" /> Add to Cart
            </button>
          </div>

          {/* Accordions */}
          <div className="border-t border-brand-charcoal/10 divide-y divide-brand-charcoal/10">
            <div className="py-4">
              <button 
                className="flex justify-between items-center w-full focus:outline-none"
                onClick={() => toggleAccordion('details')}
              >
                <span className="font-semibold uppercase tracking-wider text-sm">Product Details</span>
                {openAccordion === 'details' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
              {openAccordion === 'details' && (
                <div className="mt-4 text-sm text-brand-charcoal/80 leading-relaxed space-y-2">
                  <p>{product.description}</p>
                </div>
              )}
            </div>
            <div className="py-4">
              <button 
                className="flex justify-between items-center w-full focus:outline-none"
                onClick={() => toggleAccordion('shipping')}
              >
                <span className="font-semibold uppercase tracking-wider text-sm">Shipping & Returns</span>
                {openAccordion === 'shipping' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
              {openAccordion === 'shipping' && (
                <div className="mt-4 text-sm text-brand-charcoal/80 leading-relaxed">
                  <p>Free standard delivery to Nairobi and Kisumu on orders over KES 5,000.</p>
                  <p className="mt-2">Hassle-free returns within 7 days of receiving your order inside Kenya.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
