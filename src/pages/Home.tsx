import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Award, Leaf, RefreshCw, ChevronRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import { featuredProducts } from '../data/products';

const Home = () => {
  const benefits = [
    {
      icon: <Leaf className="h-10 w-10 text-primary-600" />,
      title: 'Natural Ingredients',
      description: 'Made from 100% natural ingredients without any artificial additives.'
    },
    {
      icon: <Award className="h-10 w-10 text-primary-600" />,
      title: 'Premium Quality',
      description: 'Carefully crafted to ensure the highest quality and taste in every sip.'
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-primary-600" />,
      title: 'Refreshing Taste',
      description: 'Perfect balance of flavors that provides a refreshing experience.'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div>
      <HeroSection />

      {/* Benefits Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="inline-flex items-center justify-center rounded-full bg-primary-100 p-3 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Our Featured Products
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-neutral-600 max-w-2xl mx-auto"
            >
              Discover our range of refreshing Kaccha Cooler products, crafted with care for your enjoyment.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <Link 
              to="/products" 
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              View All Products
              <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Brand Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6">The Bitewala Story</h2>
              <p className="mb-4">
                Founded in 2020, Bitewala set out with a mission to create refreshing beverages that are both delicious and sustainable. Our signature Kaccha Cooler was born from a family recipe that has been perfected over generations.
              </p>
              <p className="mb-6">
                We believe in the philosophy of "Full taste, zero waste" and are committed to using only natural ingredients while minimizing our environmental footprint through sustainable packaging and production practices.
              </p>
              <Link to="/about" className="btn-secondary">
                About Us
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="hidden lg:flex justify-center"
            >
              <img 
                src="https://images.pexels.com/photos/6941026/pexels-photo-6941026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Bitewala manufacturing" 
                className="rounded-lg shadow-xl max-w-md w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-secondary-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6 text-neutral-900"
          >
            Ready to Experience the Refreshment?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-neutral-800 max-w-2xl mx-auto mb-8"
          >
            Order now and get a taste of our refreshing Kaccha Cooler. Shipping available across the country.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/products" className="btn-primary">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;