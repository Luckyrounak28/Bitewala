import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Refreshing fruit background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/70" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Kaccha Cooler
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl font-light mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <span className="font-medium">Full taste, zero waste</span>
            </motion.p>
            
            <motion.p 
              className="text-lg text-white/90 mb-8 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Experience the refreshing taste of our signature Kaccha Cooler, made with 100% natural ingredients. No preservatives, no artificial flavors, just pure refreshment.
            </motion.p>
            
            <motion.div 
              className="space-x-4 flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <Link to="/products" className="btn-primary">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Now
              </Link>
              <Link to="/about" className="btn-outline bg-white/10">
                Learn More
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="hidden lg:block"
          >
            <motion.img 
              src="/images/product-showcase.png" 
              alt="Kaccha Cooler Product"
              className="max-w-full"
              initial={{ rotate: -5 }}
              animate={{ rotate: 5 }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 5,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
      
      {/* Scrolling indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;