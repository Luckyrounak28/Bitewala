import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCart();
  const navigate = useNavigate();
  const [isRemoving, setIsRemoving] = useState<string | null>(null);

  const handleRemoveItem = (productId: string) => {
    setIsRemoving(productId);
    
    // Add a small delay to allow for animation
    setTimeout(() => {
      removeItem(productId);
      setIsRemoving(null);
    }, 300);
  };

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6"
        >
          Your Shopping Cart
        </motion.h1>

        {items.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <ShoppingBag className="w-16 h-16 mx-auto text-neutral-300 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-neutral-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Link to="/products" className="btn-primary">
              Browse Products
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4 border-b">
                  <h2 className="text-lg font-semibold">Items ({items.length})</h2>
                </div>
                
                {/* Items List */}
                <ul className="divide-y divide-neutral-200">
                  {items.map((item) => (
                    <motion.li 
                      key={item.id}
                      initial={{ opacity: 1 }}
                      animate={{ 
                        opacity: isRemoving === item.id ? 0 : 1,
                        height: isRemoving === item.id ? 0 : 'auto'
                      }}
                      transition={{ duration: 0.3 }}
                      className="p-4 sm:p-6"
                    >
                      <div className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-20 h-20 sm:h-20 flex-shrink-0 mb-4 sm:mb-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>
                        
                        <div className="sm:ml-6 flex flex-col sm:flex-row sm:justify-between w-full">
                          <div>
                            <h3 className="text-lg font-semibold text-neutral-800">{item.name}</h3>
                            <p className="text-sm text-neutral-500 mb-2">{item.variant}</p>
                            <p className="text-primary-600 font-medium">₹{item.price}</p>
                          </div>
                          
                          <div className="flex items-center justify-between sm:justify-end mt-4 sm:mt-0">
                            <div className="flex items-center border border-neutral-300 rounded-md overflow-hidden mr-4">
                              <button 
                                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                                className="p-1 bg-neutral-100 hover:bg-neutral-200 transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="px-3 py-1 text-sm">{item.quantity}</span>
                              <button 
                                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                                className="p-1 bg-neutral-100 hover:bg-neutral-200 transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                            
                            <button 
                              onClick={() => handleRemoveItem(item.id)}
                              className="text-neutral-500 hover:text-error-500 transition-colors"
                              aria-label="Remove item"
                            >
                              <Trash2 size={20} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Subtotal:</span>
                    <span className="font-medium">₹{getTotalPrice()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Shipping:</span>
                    <span className="font-medium">₹49</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Tax (18%):</span>
                    <span className="font-medium">₹{Math.round(getTotalPrice() * 0.18)}</span>
                  </div>
                </div>
                
                <div className="border-t border-neutral-200 pt-4 mb-6">
                  <div className="flex justify-between">
                    <span className="font-semibold">Total:</span>
                    <span className="font-bold text-xl">₹{getTotalPrice() + 49 + Math.round(getTotalPrice() * 0.18)}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => navigate('/checkout')}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                
                <div className="mt-4">
                  <Link 
                    to="/products" 
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;