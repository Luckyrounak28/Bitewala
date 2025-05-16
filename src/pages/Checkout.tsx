import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, Truck, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate order processing
    setTimeout(() => {
      clearCart();
      navigate('/');
      // In a real application, you would:
      // 1. Send order to backend
      // 2. Process payment
      // 3. Show confirmation
    }, 2000);
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  const subtotal = getTotalPrice();
  const shipping = 49;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8"
        >
          Checkout
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="input"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-primary-600 mr-2" />
                  <h2 className="text-xl font-semibold">Shipping Address</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-neutral-700 mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="input"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-neutral-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="input"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-neutral-700 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="input"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="pincode" className="block text-sm font-medium text-neutral-700 mb-1">
                      PIN Code
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      required
                      className="input"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <CreditCard className="h-5 w-5 text-primary-600 mr-2" />
                  <h2 className="text-xl font-semibold">Payment Method</h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cod"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleChange}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="cod" className="ml-3 block text-sm font-medium text-neutral-700">
                      Cash on Delivery
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="online"
                      name="paymentMethod"
                      value="online"
                      checked={formData.paymentMethod === 'online'}
                      onChange={handleChange}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                    />
                    <label htmlFor="online" className="ml-3 block text-sm font-medium text-neutral-700">
                      Online Payment
                    </label>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className={`btn-primary w-full ${isProcessing ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Place Order'
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 lg:sticky lg:top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              {/* Order Items */}
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="ml-4 flex-grow">
                      <h3 className="text-sm font-medium">{item.name}</h3>
                      <p className="text-sm text-neutral-500">{item.variant}</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm">Qty: {item.quantity}</span>
                        <span className="text-sm font-medium">₹{item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Shipping Info */}
              <div className="border-t border-neutral-200 pt-4 mb-4">
                <div className="flex items-center text-sm text-neutral-600 mb-2">
                  <Truck className="h-4 w-4 mr-2" />
                  Estimated delivery: 3-5 business days
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="border-t border-neutral-200 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Shipping</span>
                  <span>₹{shipping}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Tax (18%)</span>
                  <span>₹{tax}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold pt-2 border-t">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;