import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart, ProductType } from '../context/CartContext';

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuantityChange = (value: number) => {
    setQuantity(Math.max(1, value));
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
    setQuantity(1);
  };

  return (
    <motion.div 
      className="card h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-64">
        <motion.img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <p className="text-white text-sm font-medium line-clamp-2 mb-2">{product.description.substring(0, 100)}...</p>
        </div>
      </div>
      
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-neutral-800 mb-1">{product.name}</h3>
          <p className="text-sm text-neutral-500 mb-3">{product.variant}</p>
        </div>
        
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xl font-bold text-primary-600">₹{product.price}</span>
            
            <div className="flex items-center border border-neutral-300 rounded-md overflow-hidden">
              <button 
                onClick={() => handleQuantityChange(quantity - 1)}
                className="p-1 bg-neutral-100 hover:bg-neutral-200 transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>
              <span className="px-3 py-1 text-sm">{quantity}</span>
              <button 
                onClick={() => handleQuantityChange(quantity + 1)}
                className="p-1 bg-neutral-100 hover:bg-neutral-200 transition-colors"
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
          
          <button 
            onClick={handleAddToCart}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            <ShoppingCart size={18} />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;