import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter, ShoppingBag } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  
  const filters = [
    { id: 'all', name: 'All Products' },
    { id: 'powder', name: 'Powder Packs' },
    { id: 'ready', name: 'Ready to Drink' },
    { id: 'gift', name: 'Gift Packs' }
  ];
  
  const filterProducts = (filterType: string) => {
    setActiveFilter(filterType);
    
    if (filterType === 'all') {
      setFilteredProducts(products);
      return;
    }
    
    const filtered = products.filter(product => {
      if (filterType === 'powder' && product.variant.toLowerCase().includes('powder')) {
        return true;
      }
      if (filterType === 'ready' && product.variant.toLowerCase().includes('bottle')) {
        return true;
      }
      if (filterType === 'gift' && product.variant.toLowerCase().includes('gift')) {
        return true;
      }
      return false;
    });
    
    setFilteredProducts(filtered);
  };
  
  useEffect(() => {
    // Close filter menu on window resize
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsFilterMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <div>
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-primary-700 to-primary-500 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-4"
            >
              Our Products
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/90"
            >
              Explore our range of refreshing Kaccha Cooler products, crafted with natural ingredients for the perfect taste.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Products Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar Filters for Desktop */}
            <div className="hidden md:block w-64 flex-shrink-0 pr-8">
              <h2 className="text-xl font-semibold mb-6">Filters</h2>
              <div className="space-y-3">
                {filters.map(filter => (
                  <button
                    key={filter.id}
                    onClick={() => filterProducts(filter.id)}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                      activeFilter === filter.id
                        ? 'bg-primary-500 text-white'
                        : 'hover:bg-neutral-100'
                    }`}
                  >
                    {filter.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Mobile Filters */}
            <div className="md:hidden mb-6">
              <button
                onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
                className="flex items-center justify-between w-full px-4 py-2 bg-neutral-100 rounded-md"
              >
                <span className="flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </span>
                <span>
                  {isFilterMenuOpen ? '−' : '+'}
                </span>
              </button>
              
              {isFilterMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 border rounded-md overflow-hidden"
                >
                  {filters.map(filter => (
                    <button
                      key={filter.id}
                      onClick={() => {
                        filterProducts(filter.id);
                        setIsFilterMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 border-b last:border-b-0 ${
                        activeFilter === filter.id
                          ? 'bg-primary-500 text-white'
                          : 'hover:bg-neutral-100'
                      }`}
                    >
                      {filter.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
            
            {/* Products Grid */}
            <div className="flex-grow">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="w-16 h-16 mx-auto text-neutral-300 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No products found</h3>
                  <p className="text-neutral-500">
                    Try changing your filters or check back later.
                  </p>
                </div>
              ) : (
                <motion.div 
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;