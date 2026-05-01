import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ChevronDown, Filter } from 'lucide-react';

export default function Shop() {
  const { category } = useParams<{ category?: string }>();
  
  // Filter logic
  let filteredProducts = products;
  if (category) {
    filteredProducts = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  // Very basic simulated filter menus (mobile)
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif">
          {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Shop All'}
        </h1>
        <p className="text-brand-charcoal/60 mt-2">Showing {filteredProducts.length} products</p>
      </div>

      {/* Toolbar */}
      <div className="flex justify-between items-center border-b border-brand-charcoal/10 pb-4 mb-8">
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center text-sm font-semibold uppercase tracking-wider md:hidden"
        >
          <Filter className="h-4 w-4 mr-2" /> Filters
        </button>
        
        <div className="hidden md:flex space-x-8">
          <div className="group relative cursor-pointer">
            <span className="flex items-center text-sm font-semibold uppercase tracking-wider">Size <ChevronDown className="h-4 w-4 ml-1" /></span>
          </div>
          <div className="group relative cursor-pointer">
            <span className="flex items-center text-sm font-semibold uppercase tracking-wider">Color <ChevronDown className="h-4 w-4 ml-1" /></span>
          </div>
          <div className="group relative cursor-pointer">
            <span className="flex items-center text-sm font-semibold uppercase tracking-wider">Price <ChevronDown className="h-4 w-4 ml-1" /></span>
          </div>
        </div>

        <div className="group relative cursor-pointer">
          <span className="flex items-center text-sm font-semibold uppercase tracking-wider">Sort by <ChevronDown className="h-4 w-4 ml-1" /></span>
        </div>
      </div>

      {/* Mobile Filters panel (mock) */}
      {showFilters && (
        <div className="bg-white p-4 mb-8 border border-brand-charcoal/10 md:hidden">
           <p className="text-sm">Filter options would appear here...</p>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group flex flex-col">
            <div className="relative aspect-[3/4] mb-4 bg-brand-charcoal/5 overflow-hidden">
              <Link to={`/product/${product.id}`} className="absolute inset-0 z-10">
                <span className="sr-only">View {product.name}</span>
              </Link>
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
              {/* Quick Add Button (Desktop only hover) */}
              <button className="absolute bottom-0 left-0 w-full bg-white/90 text-brand-charcoal py-3 text-sm font-semibold uppercase tracking-wider transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 hidden md:block">
                Quick Add
              </button>
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-sm font-semibold mb-1">
                <Link to={`/product/${product.id}`} className="hover:underline">{product.name}</Link>
              </h3>
              <p className="text-brand-charcoal/60 text-xs mb-2">{product.subCategory}</p>
              <p className="text-sm text-brand-charcoal font-medium mt-auto border-t border-brand-charcoal/10 pt-2 w-max pr-4">
                KES {product.price.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
