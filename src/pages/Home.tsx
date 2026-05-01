import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Truck, RotateCcw, ShieldCheck, ArrowRight } from 'lucide-react';
import { products } from '../data/products';

const categories = [
  { name: 'Dresses', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80', link: '/shop/women' },
  { name: 'Sneakers', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80', link: '/shop/shoes' },
  { name: 'Outerwear', image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80', link: '/shop/men' },
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80', link: '/shop/accessories' },
];

export default function Home() {
  const trendingProducts = products.filter(p => p.isBestseller).slice(0, 4);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden mb-12">
        <div className="absolute inset-0 bg-brand-charcoal/20 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80" 
          alt="Fashion models" 
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-4 text-white drop-shadow-lg"
          >
            Redefine Your Style.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-light mb-8 max-w-2xl drop-shadow-md"
          >
            Uncompromising Fashion & Footwear for every occasion.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/shop/women" className="bg-white text-brand-charcoal px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:bg-brand-charcoal hover:text-white transition-colors duration-300">
              Shop Women 
            </Link>
            <Link to="/shop/men" className="bg-transparent border border-white text-white px-8 py-4 font-semibold uppercase tracking-wider text-sm hover:bg-white hover:text-brand-charcoal transition-colors duration-300">
              Shop Men
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-brand-charcoal/10 bg-white py-6 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-brand-charcoal/10">
            <div className="flex flex-col items-center justify-center p-4">
              <Truck className="h-6 w-6 mb-3 text-brand-charcoal/80" />
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-1">Nationwide Delivery</h3>
              <p className="text-xs text-brand-charcoal/60">Fast & reliable across Kenya</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <RotateCcw className="h-6 w-6 mb-3 text-brand-charcoal/80" />
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-1">Easy Returns</h3>
              <p className="text-xs text-brand-charcoal/60">7-day hassle-free returns</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <ShieldCheck className="h-6 w-6 mb-3 text-brand-charcoal/80" />
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-1">Secure Payments</h3>
              <p className="text-xs text-brand-charcoal/60">Lipa na M-Pesa & Cards inside</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-serif">Curated Collections</h2>
          <Link to="/shop" className="text-sm font-semibold uppercase tracking-wider hover:underline flex items-center">
            Shop All <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 shrink-0 flex-wrap">
          {categories.map((category) => (
            <Link key={category.name} to={category.link} className="group block relative aspect-square overflow-hidden bg-brand-charcoal/5">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-serif text-2xl tracking-wide">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending / Best Sellers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-serif mb-3">Selling Fast</h2>
          <p className="text-brand-charcoal/60">Our most wanted pieces. Grab them before they're gone.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {trendingProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group block">
              <div className="relative aspect-[3/4] mb-4 bg-brand-charcoal/5 overflow-hidden">
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                />
                {product.images[1] && (
                  <img 
                    src={product.images[1]} 
                    alt={`${product.name} alternate`} 
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                )}
                {product.stockCount && product.stockCount < 5 && (
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 z-10">
                    Only {product.stockCount} left
                  </div>
                )}
              </div>
              <h3 className="text-sm font-semibold mb-1">{product.name}</h3>
              <p className="text-sm text-brand-charcoal border-t border-brand-charcoal/10 pt-2 w-max pr-4">KES {product.price.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Social Proof / UGC */}
      <section className="bg-brand-charcoal text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-white mb-3">Spotted in Kelvin Beauty Center</h2>
            <p className="text-white/60">Tag @kelvinbeautycenter to be featured.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="aspect-square bg-gray-800">
               <img src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="UGC 1"/>
            </div>
            <div className="aspect-square bg-gray-800">
               <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="UGC 2"/>
            </div>
            <div className="aspect-square bg-gray-800 hidden md:block">
               <img src="https://images.unsplash.com/photo-1539008835657-9e8e9680c156?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="UGC 3"/>
            </div>
            <div className="aspect-square bg-gray-800 hidden md:block">
               <img src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="UGC 4"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
